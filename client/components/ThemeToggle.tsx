'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-10 w-20 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-green-400 ${className}`}
      style={{
        backgroundColor: theme === 'dark' ? '#1e293b' : '#e2e8f0',
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`flex items-center justify-center h-8 w-8 rounded-full bg-white dark:bg-slate-800 shadow-md transform transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-10' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-slate-600" />
        )}
      </span>
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  );
}
