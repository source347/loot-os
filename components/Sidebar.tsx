
import React from 'react';
import { CATEGORIES } from '../constants';
import { UserStats } from '../types';
import { Hexagon, Terminal } from 'lucide-react';

interface Props {
  stats: UserStats;
  dailyTotals: { earned: number, tasks: number };
}

export const Sidebar: React.FC<Props> = ({ stats }) => {
  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-16 md:w-64 bg-hud-dark border-r border-hud-border flex flex-col shrink-0 z-20">
      {/* Logo Area */}
      <div className="h-16 flex items-center justify-center md:justify-start md:px-6 border-b border-hud-border relative overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-neon-cyan/5 group-hover:bg-neon-cyan/10 transition-colors"></div>
        <Hexagon className="text-neon-cyan animate-pulse-neon" size={24} />
        <div className="ml-3 hidden md:block">
           <h1 className="font-bold text-lg tracking-widest text-white leading-none">LOOT<span className="text-neon-cyan">OS</span></h1>
           <span className="text-[9px] text-slate-500 font-mono tracking-[0.2em]">v9.0.2</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-2 md:px-4 space-y-1 overflow-y-auto no-scrollbar">
        <div className="hidden md:block text-[10px] font-mono text-slate-600 mb-2 px-2">SECTORS</div>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => scrollToCategory(cat.id)}
            className="w-full flex items-center justify-center md:justify-start gap-3 p-2 md:px-4 md:py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all group relative"
          >
            <cat.icon size={18} className="group-hover:text-neon-cyan transition-colors" />
            <span className="hidden md:block text-sm font-bold tracking-wide">{cat.label}</span>
            
            {/* Hover Indicator */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-neon-cyan group-hover:h-1/2 transition-all duration-300 rounded-r-full"></div>
          </button>
        ))}
      </nav>

      {/* Footer Info */}
      <div className="p-4 border-t border-hud-border hidden md:block">
        <div className="bg-black/40 rounded p-3 border border-white/5 flex items-start gap-3">
           <Terminal size={16} className="text-slate-500 mt-1" />
           <div className="text-[10px] font-mono text-slate-500 leading-relaxed">
              <span className="text-green-500">user@lootos:~$</span> init_sequence<br/>
              <span className="animate-blink">_</span>
           </div>
        </div>
      </div>
    </aside>
  );
};
