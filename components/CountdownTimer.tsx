import React, { useState, useEffect, useMemo } from 'react';
import { AlertCircle, Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetDateStr?: string;
  variant?: 'pill' | 'sticky' | 'minimal';
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateStr, variant = 'pill' }) => {
  // Default Target: January 16th, 2026 at 23:59:00
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
        <div className="fixed top-0 left-0 right-0 z-[100] bg-black/90 border-b border-white/10 backdrop-blur-xl flex items-center justify-center py-2 md:py-3 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
             <div className="flex items-center gap-4 md:gap-8 max-w-7xl mx-auto w-full justify-center md:justify-between">
                
                {/* Left: Indicator & Text - Compact on mobile */}
                <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2 md:h-3 md:w-3 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-red-600"></span>
                    </div>
                    <span className="text-[10px] md:text-base font-black text-white uppercase tracking-tight md:tracking-wider whitespace-nowrap">
                        VPIS SE ZAPRE ČEZ:
                    </span>
                </div>

                {/* Center: Digits - Reduced size on mobile */}
                <div className="flex items-center gap-2 md:gap-6">
                    <div className="flex items-center gap-2 md:gap-5">
                        <TimeUnit value={timeLeft.days} label="DNI" compact />
                        <Separator />
                        <TimeUnit value={timeLeft.hours} label="UR" compact />
                        <Separator />
                        <TimeUnit value={timeLeft.minutes} label="MIN" compact />
                        <Separator />
                        <TimeUnit value={timeLeft.seconds} label="SEK" isSeconds compact />
                    </div>
                </div>
                
                {/* Right: CTA Button - Hidden on extreme small mobile */}
                <div className="hidden lg:block">
                    <button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative overflow-hidden bg-brand-gold hover:bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest py-2 px-6 rounded-lg transition-all shadow-[0_0_15px_rgba(255,215,0,0.3)] transform hover:scale-105 active:scale-95"
                    >
                        PRIDRUŽI SE
                    </button>
                </div>
             </div>
        </div>
      );
  }

  return null;
};

const TimeUnit = ({ value, label, isSeconds = false, compact = false }: { value: number, label: string, isSeconds?: boolean, compact?: boolean }) => (
    <div className={`flex flex-col items-center transition-transform duration-300 ${compact ? 'min-w-[28px] md:min-w-[40px]' : 'w-[32px] md:w-[44px]'}`}>
        <span className={`${compact ? 'text-lg md:text-4xl' : 'text-xl md:text-3xl'} font-black tabular-nums tracking-tighter ${isSeconds ? 'text-brand-gold' : 'text-white'} leading-none`}>
            {String(value).padStart(2, '0')}
        </span>
        <span className={`${compact ? 'text-[7px] md:text-[10px]' : 'text-[8px]'} font-bold text-gray-500/60 uppercase tracking-[0.1em] md:tracking-[0.2em] mt-1`}>
            {label}
        </span>
    </div>
);

const Separator = () => (
    <span className="text-gray-700 text-base md:text-2xl -mt-3 md:-mt-6 font-black select-none opacity-50">:</span>
);