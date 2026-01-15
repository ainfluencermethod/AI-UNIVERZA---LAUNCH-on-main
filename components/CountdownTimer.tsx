import React, { useState, useEffect, useMemo } from 'react';
import { AlertTriangle, Clock, Zap } from 'lucide-react';

interface CountdownTimerProps {
  targetDateStr?: string;
  variant?: 'pill' | 'sticky' | 'minimal';
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateStr, variant = 'pill' }) => {
  const targetDate = useMemo(() => new Date(targetDateStr || '2026-01-16T23:59:00').getTime(), [targetDateStr]);
  
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
      total: distance
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
        <div className="fixed top-0 left-0 right-0 z-[100] bg-black/95 border-b-2 border-brand-red/30 backdrop-blur-3xl flex items-center justify-center py-3 md:py-4 px-4 shadow-[0_20px_50px_rgba(255,49,49,0.3)] animate-fade-in-up">
             <div className="flex items-center gap-4 md:gap-16 max-w-[90rem] mx-auto w-full justify-between">
                
                {/* Status Indicator */}
                <div className="flex items-center gap-4 group cursor-default">
                    <div className="relative flex h-4 w-4 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-red shadow-[0_0_15px_rgba(255,49,49,1)]"></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs md:text-base font-black text-white uppercase tracking-tighter leading-none flex items-center gap-2">
                           ZAPIRA SE ČEZ:
                        </span>
                        <span className="text-[8px] md:text-[11px] text-brand-red font-black uppercase tracking-[0.3em] mt-1.5 animate-pulse">
                            ZADNJA PRILOŽNOST VPISA
                        </span>
                    </div>
                </div>

                {/* Main Countdown Display */}
                <div className="flex items-center gap-4 md:gap-10">
                    <div className="flex items-center gap-3 md:gap-8">
                        <TimeUnit value={timeLeft.days} label="DNI" />
                        <Separator />
                        <TimeUnit value={timeLeft.hours} label="UR" />
                        <Separator />
                        <TimeUnit value={timeLeft.minutes} label="MIN" />
                        <Separator />
                        <TimeUnit value={timeLeft.seconds} label="SEK" isSeconds />
                    </div>
                </div>
                
                {/* High Contrast CTA */}
                <div className="hidden lg:block">
                    <button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative overflow-hidden bg-brand-red text-white text-[11px] font-black uppercase tracking-[0.3em] py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(255,49,49,0.5)] transform hover:scale-105 active:scale-95 border-t border-white/30 animate-shake"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                           <Zap size={14} className="fill-white" /> VPIS ZDAJ
                        </span>
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                </div>
             </div>
        </div>
      );
  }

  return null;
};

const TimeUnit = ({ value, label, isSeconds = false }: { value: number, label: string, isSeconds?: boolean }) => (
    <div className={`flex flex-col items-center min-w-[35px] md:min-w-[55px] transition-all duration-300`}>
        <span className={`text-2xl md:text-5xl font-black tabular-nums tracking-tighter ${isSeconds ? 'text-brand-red' : 'text-brand-gold'} leading-none drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]`}>
            {String(value).padStart(2, '0')}
        </span>
        <span className={`text-[7px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2`}>
            {label}
        </span>
    </div>
);

const Separator = () => (
    <span className="text-gray-800 text-xl md:text-4xl -mt-5 md:-mt-8 font-black select-none animate-pulse">:</span>
);