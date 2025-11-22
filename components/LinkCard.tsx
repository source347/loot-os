
import React, { useState, useEffect } from 'react';
import { LinkItem, DailyLog } from '../types';
import { ExternalLink, CheckCircle2, Circle } from 'lucide-react';

interface Props {
  item: LinkItem;
  log: DailyLog | undefined;
  onUpdate: (completed: boolean, earnings: number) => void;
}

export const LinkCard: React.FC<Props> = ({ item, log, onUpdate }) => {
  const [earnings, setEarnings] = useState<string>(log?.earnings?.toString() || '');
  const [isHovered, setIsHovered] = useState(false);

  // Sync local state if log changes from parent (e.g. reset)
  useEffect(() => {
    setEarnings(log?.earnings?.toString() || '');
  }, [log]);

  const getFavicon = (url: string) => {
    try {
        const hostname = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
    } catch (e) { return ''; }
  };

  const handleCheck = () => {
    const newStatus = !log?.completed;
    // Play sound effect would go here
    onUpdate(newStatus, parseFloat(earnings) || 0);
  };

  const handleEarningsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEarnings(val);
    onUpdate(log?.completed || false, parseFloat(val) || 0);
  };

  return (
    <div 
      className={`
        relative bg-[#0e1218] border border-hud-border/50 rounded-xl overflow-hidden 
        transition-all duration-300 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,243,255,0.1)]
        flex flex-col group
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Strip */}
      <div className={`h-1 w-full ${item.color.replace('bg-', 'bg-gradient-to-r from-transparent via-').replace('-500', '-500 to-transparent')}`}></div>

      <div className="p-4 flex-1 flex flex-col">
        {/* Title Row */}
        <div className="flex items-start justify-between mb-3">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-black border border-white/10 flex items-center justify-center shrink-0">
                 <img src={getFavicon(item.url)} alt="" className="w-5 h-5 object-contain" onError={(e) => (e.target as HTMLImageElement).style.display='none'} />
              </div>
              <div>
                 <h3 className="font-bold text-slate-200 text-sm leading-none">{item.title}</h3>
                 <div className="flex gap-1 mt-1.5 flex-wrap">
                    {item.tags.slice(0,2).map(t => (
                       <span key={t} className="text-[9px] px-1.5 py-0.5 bg-white/5 rounded text-slate-400 border border-white/5">{t}</span>
                    ))}
                 </div>
              </div>
           </div>
           <a href={item.url} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-neon-cyan transition-colors">
              <ExternalLink size={14} />
           </a>
        </div>

        {/* Description */}
        <p className="text-[11px] text-slate-500 mb-4 leading-relaxed flex-grow font-mono">
           {item.description}
        </p>

        {/* Mission Control Panel (Interactive) */}
        <div className="bg-black/40 -mx-4 -mb-4 p-3 border-t border-white/5 flex items-center justify-between">
           
           {/* Earnings Input */}
           <div className="flex items-center gap-2 bg-[#050505] border border-hud-border rounded px-2 py-1 w-24 focus-within:border-neon-green/50 transition-colors">
              <span className="text-green-500 text-xs">$</span>
              <input 
                type="number" 
                placeholder="0.00"
                value={earnings}
                onChange={handleEarningsChange}
                className="bg-transparent border-none text-right text-green-400 font-mono text-xs w-full focus:outline-none p-0"
              />
           </div>

           {/* Complete Toggle */}
           <button 
              onClick={handleCheck}
              className={`
                flex items-center gap-2 px-3 py-1 rounded border transition-all text-xs font-bold uppercase tracking-wider
                ${log?.completed 
                  ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.3)]' 
                  : 'bg-white/5 border-white/10 text-slate-500 hover:bg-white/10 hover:text-slate-300'
                }
              `}
           >
              {log?.completed ? <CheckCircle2 size={14} /> : <Circle size={14} />}
              {log?.completed ? 'DONE' : 'LOG'}
           </button>
        </div>
      </div>

      {/* Hot Corner Ribbon */}
      {item.isHot && (
        <div className="absolute top-0 right-0 -mt-1 -mr-1 w-16 h-16 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-full h-4 bg-neon-pink/80 shadow-[0_0_10px_#ff0099] z-10"></div>
        </div>
      )}
    </div>
  );
};
