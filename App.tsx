
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { CryptoOracle } from './components/CryptoOracle';
import { Sidebar } from './components/Sidebar';
import { UserStats, DailyLog } from './types';
import { LINKS } from './constants';

const App: React.FC = () => {
  // --- STATE MANAGEMENT ---
  // Load stats from local storage or init default
  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('lootOS_stats_v1');
    return saved ? JSON.parse(saved) : {
      totalXp: 0,
      level: 1,
      streak: 1,
      dailyLogs: {}
    };
  });

  // --- ACTIONS ---
  const updateLog = (linkId: string, completed: boolean, earnings: number) => {
    setStats(prev => {
      const newLogs = { ...prev.dailyLogs };
      newLogs[linkId] = {
        completed,
        earnings,
        lastUpdated: Date.now()
      };
      
      // Calculate XP (Simple formula: 10 XP per completion + 1 XP per $0.01 earned)
      let newXp = prev.totalXp;
      if (completed) newXp += 10; // Simple addition for interaction
      
      return {
        ...prev,
        dailyLogs: newLogs,
        totalXp: newXp,
        level: Math.floor(newXp / 500) + 1
      };
    });
  };

  // Persist
  useEffect(() => {
    localStorage.setItem('lootOS_stats_v1', JSON.stringify(stats));
  }, [stats]);

  // Calculated Daily Totals
  const dailyTotals = useMemo(() => {
    let earned = 0;
    let tasks = 0;
    const today = new Date().toDateString();
    
    // Note: In a real app, we would check timestamps to reset daily.
    // For this demo, we assume the logs ARE for today or manually reset by user in spirit.
    // To make it robust, we filter logs by checking if lastUpdated is > start of today.
    const startOfDay = new Date();
    startOfDay.setHours(0,0,0,0);
    
    Object.values(stats.dailyLogs).forEach((log: DailyLog) => {
      if (log.lastUpdated > startOfDay.getTime()) {
        earned += log.earnings;
        if(log.completed) tasks++;
      }
    });

    return { earned, tasks };
  }, [stats]);

  const resetDaily = () => {
    setStats(prev => ({
        ...prev,
        dailyLogs: {}
    }));
  };

  return (
    <HashRouter>
      <div className="flex h-screen w-screen bg-[#050505] text-slate-200 overflow-hidden font-sans relative selection:bg-neon-cyan selection:text-black">
        
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20 pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none z-0"></div>
        
        {/* Sidebar Navigation */}
        <Sidebar stats={stats} dailyTotals={dailyTotals} />

        {/* Main Scrollable Area */}
        <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
          
          {/* Top HUD Header */}
          <header className="h-16 border-b border-hud-border bg-hud-dark/80 backdrop-blur-md flex items-center justify-between px-6 shrink-0">
             <div className="flex items-center gap-4">
                <div className="hidden md:block text-xs font-mono text-slate-500">SYS.READY</div>
                <div className="h-6 w-px bg-hud-border hidden md:block"></div>
                <div className="flex items-center gap-2">
                   <div className="text-[10px] font-mono text-neon-green uppercase">Daily Revenue</div>
                   <div className="text-xl font-bold font-mono text-white tracking-widest">
                      ${dailyTotals.earned.toFixed(4)}
                   </div>
                </div>
                <div className="h-6 w-px bg-hud-border"></div>
                <div className="flex items-center gap-2">
                   <div className="text-[10px] font-mono text-neon-cyan uppercase">Tasks</div>
                   <div className="text-xl font-bold font-mono text-white">
                      {dailyTotals.tasks} <span className="text-slate-600 text-sm">/ {LINKS.length}</span>
                   </div>
                </div>
             </div>

             <div className="flex items-center gap-4">
               <button onClick={resetDaily} className="text-[10px] border border-red-900/50 hover:border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-500/10 transition-colors font-mono uppercase">
                  Reset Day
               </button>
               <div className="flex flex-col items-end">
                  <div className="text-[10px] text-slate-500 font-mono">OPERATOR LEVEL {stats.level}</div>
                  <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-neon-pink" style={{ width: `${(stats.totalXp % 500) / 5}%` }}></div>
                  </div>
               </div>
             </div>
          </header>

          {/* Router Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 crt scroll-smooth relative">
            <Routes>
              <Route path="/" element={<Home stats={stats} updateLog={updateLog} />} />
            </Routes>
            
            {/* Floating Oracle */}
            <CryptoOracle />
          </div>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
