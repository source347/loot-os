import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface Props {
  isDark: boolean;
  toggle: () => void;
}

export const ThemeToggle: React.FC<Props> = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};