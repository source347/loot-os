
import React, { useState, useMemo } from 'react';
import { CATEGORIES, LINKS } from '../constants';
import { LinkCard } from './LinkCard';
import { Search, Filter } from 'lucide-react';
import { UserStats } from '../types';

interface Props {
  stats: UserStats;
  updateLog: (linkId: string, completed: boolean, earnings: number) => void;
}

export const Home: React.FC<Props> = ({ stats, updateLog }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLinks = useMemo(() => {
     if(!searchQuery) return LINKS;
     const lower = searchQuery.toLowerCase();
     return LINKS.filter(l => 
        l.title.toLowerCase().includes(lower) || 
        l.tags.some(t => t.toLowerCase().includes(lower))
     );
  }, [searchQuery]);

  return (
    <div className="max-w-[1600px] mx-auto pb-20">
       
       {/* Search Bar */}
       <div className="mb-8 sticky top-0 z-20 pt-2 pb-4 bg-[#050505]/80 backdrop-blur-sm">
          <div className="relative max-w-2xl mx-auto">
             <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-neon-cyan">
                <Search size={18} />
             </div>
             <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH DATABASE PROTOCOLS..."
                className="w-full bg-[#0a0f14] border border-hud-border text-white pl-12 pr-4 py-3 rounded-full focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all font-mono tracking-wider text-sm"
             />
             <div className="absolute inset-y-0 right-4 flex items-center text-slate-600">
                <Filter size={16} />
             </div>
          </div>
       </div>

       {/* Categories */}
       <div className="space-y-12">
          {CATEGORIES.map(cat => {
             const catLinks = filteredLinks.filter(l => l.category === cat.id);
             if (catLinks.length === 0) return null;

             // Calculate Category Progress
             const totalInCat = catLinks.length;
             const doneInCat = catLinks.filter(l => stats.dailyLogs[l.id]?.completed).length;
             const percent = Math.round((doneInCat / totalInCat) * 100);

             return (
                <section key={cat.id} id={cat.id} className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                   {/* Futuristic Section Header */}
                   <div className="flex items-end gap-4 mb-6 border-b border-hud-border/50 pb-2">
                      <h2 className="text-2xl font-black text-white tracking-tighter flex items-center gap-3">
                         <cat.icon className="text-slate-400" size={24} />
                         {cat.label}
                      </h2>
                      <div className="font-mono text-xs text-slate-500 mb-1.5">
                         // {cat.description}
                      </div>
                      <div className="ml-auto flex items-center gap-3 mb-1">
                         <div className="text-[10px] font-mono text-neon-cyan">SECTOR PROGRESS</div>
                         <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div 
                               className="h-full bg-neon-cyan transition-all duration-500"
                               style={{ width: `${percent}%` }}
                            ></div>
                         </div>
                         <div className="text-xs font-mono text-white w-8 text-right">{percent}%</div>
                      </div>
                   </div>

                   {/* Grid */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                      {catLinks.map(link => (
                         <LinkCard 
                            key={link.id} 
                            item={link} 
                            log={stats.dailyLogs[link.id]}
                            onUpdate={(c, e) => updateLog(link.id, c, e)}
                         />
                      ))}
                   </div>
                </section>
             )
          })}
       </div>
    </div>
  );
};
