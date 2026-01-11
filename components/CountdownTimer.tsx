import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

interface CountdownTimerProps {
  targetDateStr?: string;
  variant?: 'pill' | 'sticky';
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateStr, variant = 'pill' }) => {
  // Default Target: January 16th, 2026 at 23:59:00 if not provided
  const targetDate = new Date(targetDateStr || '2026-01-16T23:59:00').getTime();
  
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (variant === 'sticky') {
      return (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-black/90 border-b border-white/10 backdrop-blur-md flex items-center justify-center py-3 px-4 shadow-2xl animate-fade-in-up">
             <div className="flex items-center gap-4 md:gap-8 max-w-7xl mx-auto w-full justify-between md:justify-center">
                
                {/* Left Side: Text */}
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                    <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest hidden sm:inline">
                        Vpis v AI Univerzo se zapre čez:
                    </span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest sm:hidden">
                        Vpis se zapre čez:
                    </span>
                </div>

                {/* Timer Digits */}
                <div className="flex items-center gap-1 md:gap-3 text-white font-mono leading-none">
                    <TimeUnit value={timeLeft.days} label="dni" compact />
                    <Separator compact />
                    <TimeUnit value={timeLeft.hours} label="ur" compact />
                    <Separator compact />
                    <TimeUnit value={timeLeft.minutes} label="min" compact />
                    <Separator compact />
                    <TimeUnit value={timeLeft.seconds} label="sek" isSeconds compact />
                </div>
                
                {/* CTA Button in Bar */}
                <button 
                    onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hidden md:block bg-brand-gold hover:bg-yellow-400 text-black text-[10px] font-black uppercase tracking-wider py-2 px-4 rounded transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transform hover:scale-105"
                >
                    Pridruži se zdaj
                </button>
             </div>
        </div>
      );
  }

  return (
    <div className="flex items-center gap-2 md:gap-5 bg-black/80 border border-white/15 rounded-full px-4 md:pl-2 md:pr-6 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(255,215,0,0.05)] hover:border-brand-gold/40 transition-all duration-300 group select-none relative overflow-hidden">
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>

      {/* Left Icon/Label */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-8 h-8 bg-red-500/10 rounded-full border border-red-500/20 shrink-0">
             <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
             <AlertCircle size={14} className="text-red-500 relative z-10" />
        </div>
        <div className="hidden sm:flex flex-col">
            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-0.5">Generacija Januar</span>
            <span className="text-[10px] font-black text-white uppercase tracking-widest leading-tight">Do zaprtja</span>
        </div>
      </div>

      <div className="w-px h-6 bg-white/10 hidden sm:block"></div>

      {/* Digits */}
      <div className="flex items-center gap-1 md:gap-2 text-white font-mono leading-none">
        <TimeUnit value={timeLeft.days} label="dni" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="ur" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="min" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="sek" isSeconds />
      </div>

    </div>
  );
};

const TimeUnit = ({ value, label, isSeconds = false, compact = false }: { value: number, label: string, isSeconds?: boolean, compact?: boolean }) => (
    <div className={`flex flex-col items-center ${compact ? 'w-[24px] md:w-[30px]' : 'w-[28px] md:w-[34px]'}`}>
        <span className={`${compact ? 'text-base md:text-lg' : 'text-lg md:text-xl'} font-black tabular-nums tracking-tighter ${isSeconds ? 'text-brand-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]' : 'text-white'}`}>
            {String(value).padStart(2, '0')}
        </span>
        <span className={`${compact ? 'text-[6px]' : 'text-[7px]'} font-bold text-gray-500 uppercase tracking-wider mt-0.5`}>
            {label}
        </span>
    </div>
);

const Separator = ({ compact = false }: { compact?: boolean }) => (
    <span className={`text-gray-700 font-black ${compact ? 'text-xs -mt-2' : 'text-sm -mt-3'} animate-pulse select-none`}>:</span>
);