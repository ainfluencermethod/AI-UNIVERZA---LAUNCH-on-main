import React, { useState, useEffect } from 'react';
import { X, Zap, ArrowRight, Trophy, Sparkles, Clock } from 'lucide-react';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      // Detect if mouse moves out of the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        const lastShown = localStorage.getItem('exit-popup-shown');
        if (!lastShown) {
          setIsVisible(true);
          setHasShown(true);
          localStorage.setItem('exit-popup-shown', 'true');
        }
      }
    };

    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300" 
        onClick={() => setIsVisible(false)}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#f5f5f5] rounded-xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300 flex flex-col">
        
        {/* Progress Bar Header */}
        <div className="bg-[#e5e5e5] h-6 w-full relative">
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[90%] h-3 bg-[#ccc] rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-gradient-to-r from-brand-red to-[#ff6b6b] rounded-full animate-pulse"></div>
            </div>
        </div>

        {/* Close Button */}
        <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-8 right-4 p-2 text-gray-400 hover:text-black transition-colors z-20"
        >
            <X size={28} />
        </button>

        <div className="p-6 md:p-12 flex flex-col items-center text-center">
            {/* Headline */}
            <h2 className="text-4xl md:text-7xl font-black text-black leading-none tracking-tighter mb-6 uppercase">
                ČAKAJ! <span className="text-brand-red">ZAMUJAŠ...</span>
            </h2>

            {/* Sub-headline */}
            <p className="text-lg md:text-2xl text-gray-700 font-bold mb-10 max-w-2xl leading-tight">
                Vpis se zapira! Če odideš zdaj, bo tvoja vstopnica za <span className="text-black underline font-black">15.000€ NAGRADNI SKLAD</span> dodeljena nekomu drugemu.
            </p>

            {/* Visual Representation of the prizes */}
            <div className="relative w-full max-w-2xl aspect-[16/9] mb-10 pointer-events-none">
                <div className="absolute inset-0 flex items-center justify-center gap-4">
                    {/* Prizes Stack */}
                    <div className="w-1/4 h-[70%] bg-white rounded-lg shadow-xl border border-gray-200 transform -rotate-12 translate-x-8 opacity-60 flex items-center justify-center overflow-hidden">
                         <img 
                            src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6962e5c0f13bc3497e783eb5.png" 
                            alt="MacBook Pro"
                            className="w-[80%] h-auto object-contain"
                         />
                    </div>
                    
                    {/* Centerpiece: Rolex/Main Prize */}
                    <div className="w-[45%] h-full bg-black rounded-lg shadow-2xl relative overflow-hidden group border-4 border-brand-gold transform hover:scale-105 transition-transform duration-500 z-10 flex flex-col items-center justify-center">
                        <div className="absolute top-0 inset-x-0 h-1 bg-brand-gold"></div>
                        <div className="p-6 h-full flex flex-col items-center justify-between text-center">
                            <div className="flex flex-col items-center">
                                <div className="bg-brand-gold w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                                    <Trophy className="text-black w-6 h-6 fill-black" />
                                </div>
                                <h4 className="text-white font-black text-xl md:text-2xl uppercase leading-none tracking-tighter mb-2">
                                    ROLEX <br/>DATEJUST
                                </h4>
                                <div className="text-brand-gold font-black text-[10px] tracking-[0.2em] uppercase bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/30">
                                    GLAVNA NAGRADA
                                </div>
                            </div>
                            <img 
                                src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6962a16398efbdd080a8d448.png" 
                                alt="Rolex"
                                className="w-[80%] h-auto object-contain my-4 drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)]"
                            />
                            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest border-t border-white/10 pt-4 w-full">
                                ZADNJA PRILOŽNOST ZA ŽREB
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4 h-[70%] bg-white rounded-lg shadow-xl border border-gray-200 transform rotate-12 -translate-x-8 opacity-60 flex items-center justify-center overflow-hidden">
                         <img 
                            src="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6962e5c0e1863868d4af000f.png" 
                            alt="iPhone 17 Pro"
                            className="w-[70%] h-auto object-contain"
                         />
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <div className="w-full max-w-md">
                <button 
                    onClick={() => {
                        setIsVisible(false);
                        document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-brand-red hover:bg-[#e02b2b] text-white font-black text-xl md:text-3xl py-6 rounded-xl shadow-[0_15px_40px_rgba(255,49,49,0.4)] transition-all duration-300 transform active:scale-95 uppercase tracking-tighter italic flex items-center justify-center gap-4 group"
                >
                    ZAGOTOVI SI SVOJE MESTO
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                </button>
                <div className="flex items-center justify-center gap-3 mt-6">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                        VARNO PLAČILO
                    </p>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                        TAKŠOJŠEN DOSTOP
                    </p>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                        GARANCIJA
                    </p>
                </div>
            </div>
        </div>

        {/* Trust Footer */}
        <div className="bg-white p-4 border-t border-gray-100 flex items-center justify-center gap-8 opacity-60">
             <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <Sparkles size={14} className="text-brand-gold" /> VIP SKUPNOST
             </div>
             <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <Zap size={14} className="text-brand-gold" /> AI SISTEMI 2026
             </div>
             <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <Trophy size={14} className="text-brand-gold" /> 15.000€ SKLAD
             </div>
        </div>
      </div>
    </div>
  );
};