
import React, { useState, useEffect, useMemo } from 'react';
import { AlertCircle, Zap } from 'lucide-react';

interface CountdownTimerProps {
  targetDateStr?: string;
  variant?: 'pill' | 'sticky';
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

  const isCritical = timeLeft.days === 0 && timeLeft.hours < 2;

  if (variant === 'sticky') {
      return (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-white/10 backdrop-blur-xl flex items-center justify-center py-3 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
             <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 max-w-7xl mx-auto w-full justify-between">
                
                {/* Left: Indicator & Text */}
                <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                    </div>
                    <span className="text-sm md:text-lg font-black text-white uppercase tracking-wider">
                        VPIS V AI UNIVERSO SE ZAPRE ČEZ:
                    </span>
                </div>

                {/* Center: Digits (Styled as per screenshot) */}
                <div className="flex items-center gap-2 md:gap-6">
                    <div className="flex items-center gap-3 md:gap-5">
                        <TimeUnit value={timeLeft.days} label="DNI" compact />
                        <Separator />
                        <TimeUnit value={timeLeft.hours} label="UR" compact />
                        <Separator />
                        <TimeUnit value={timeLeft.minutes} label="MIN" compact />
                        <Separator />
                        <TimeUnit value={timeLeft.seconds} label="SEK" isSeconds compact />
                    </div>
                </div>
                
                {/* Right: CTA Button */}
                <div className="hidden md:block">
                    <button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative overflow-hidden bg-brand-gold hover:bg-yellow-400 text-black text-xs font-black uppercase tracking-widest py-3 px-10 rounded-lg transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] transform hover:scale-105 active:scale-95"
                    >
                        PRIDRUŽI SE ZDAJ
                    </button>
                </div>
             </div>
        </div>
      );
  }

  return (
    <div className={`flex flex-col md:flex-row items-center gap-4 bg-black/80 border ${isCritical ? 'border-red-500/30' : 'border-white/15'} rounded-3xl md:rounded-full p-4 md:pl-2 md:pr-6 md:py-2 backdrop-blur-xl shadow-2xl transition-all duration-300 group select-none relative overflow-hidden`}>
      {/* Fallback for non-sticky usage remains mostly same but respects the new labeling */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative flex items-center justify-center w-10 h-10 bg-red-500/10 rounded-full border border-red-500/20 shrink-0">
             <AlertCircle size={18} className="text-red-500 relative z-10" />
        </div>
        <div className="flex flex-col text-left">
            <span className="text-[12px] font-black text-white uppercase tracking-widest leading-tight">
                Vpis se zapre čez:
            </span>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto justify-center">
        <div className="flex items-center gap-1.5 md:gap-3 text-white font-mono leading-none">
            <TimeUnit value={timeLeft.days} label="DNI" />
            <Separator />
            <TimeUnit value={timeLeft.hours} label="UR" />
            <Separator />
            <TimeUnit value={timeLeft.minutes} label="MIN" />
            <Separator />
            <TimeUnit value={timeLeft.seconds} label="SEK" isSeconds />
        </div>
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label, isSeconds = false, compact = false }: { value: number, label: string, isSeconds?: boolean, compact?: boolean }) => (
    <div className={`flex flex-col items-center transition-transform duration-300 ${compact ? 'min-w-[40px] md:min-w-[48px]' : 'w-[36px] md:w-[44px]'}`}>
        <span className={`${compact ? 'text-2xl md:text-4xl' : 'text-2xl md:text-3xl'} font-black tabular-nums tracking-tighter ${isSeconds ? 'text-brand-gold' : 'text-white'}`}>
            {String(value).padStart(2, '0')}
        </span>
        <span className={`${compact ? 'text-[8px] md:text-[10px]' : 'text-[8px]'} font-bold text-gray-500 uppercase tracking-widest mt-1`}>
            {label}
        </span>
    </div>
);

const Separator = () => (
    <span className="text-gray-700 font-black text-xl md:text-2xl -mt-4 md:-mt-6 select-none opacity-50">:</span>
);
