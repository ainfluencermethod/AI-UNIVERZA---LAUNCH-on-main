import React from 'react';
import { Ghost, ShieldCheck, Lock, Zap, Trophy, Star, Users, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from './Button';
import { VideoDemo } from './VideoDemo';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-12 md:pt-48 md:pb-28 px-4 text-center overflow-hidden bg-black flex flex-col items-center">
      
      {/* --- Stage Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)] blur-[120px]"></div>
          <div className="absolute top-[10%] left-[-20%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,49,49,0.08),transparent_70%)] blur-[120px]"></div>
          <div className="absolute top-[10%] right-[-20%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] blur-[120px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-25"></div>
      </div>

      <div className="relative w-full z-10 flex flex-col items-center max-w-[85rem]">
        
        {/* FINAL PUSH URGENCY BANNER */}
        <div className="inline-flex items-center gap-3 bg-brand-red border border-brand-red/50 rounded-full px-5 py-2 mb-8 animate-pulse-red shadow-[0_0_30px_rgba(255,49,49,0.4)] transform hover:scale-105 transition-transform cursor-default">
            <AlertTriangle size={18} className="text-white fill-white/20" />
            <span className="text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
                ZADNJA PRILOŽNOST: VPIS SE ZAPRE ČEZ 24 UR
            </span>
        </div>

        {/* 1. Impact Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-black text-white leading-[1] mb-6 tracking-tighter max-w-5xl mx-auto animate-fade-in-up px-2 drop-shadow-2xl">
          Nauči se Graditi <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FFFBD5] via-[#FCF6BA] to-[#B38728] italic pr-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">AI Digitalne Imperije</span> 
          <br className="hidden md:block" /> 
          in Prevzemi Nadzor v 2026
        </h1>

        {/* 2. Subheadline */}
        <p className="text-[12px] sm:text-sm md:text-2xl text-gray-400 font-medium mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-8 opacity-90">
            Pridruži se v <span className="text-white font-bold border-b-2 border-brand-gold">AI Universo</span> danes ali pa opazuj z roba, kako drugi osvajajo trg. Ekskluzivne strategije za viralno rast, ki delujejo v letu 2026.
        </p>

        {/* Video Player Section */}
        <div className="w-full max-w-4xl mx-auto mb-14 animate-fade-in-up px-0 sm:px-4 relative group min-h-[250px]">
            <div className="absolute -inset-6 bg-brand-gold/10 rounded-[3rem] blur-[80px] opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.95)] bg-black z-10">
                 <VideoDemo 
                    videoId="7511jnm0ng" 
                    thumbnailUrl="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6963c0c9c7683b678fa18494.webp" 
                 />
            </div>
        </div>

        {/* 3. CTA Cluster */}
        <div className="animate-fade-in-up w-full flex flex-col items-center relative z-20 px-4">
             
             <div className="flex flex-col items-center w-full max-w-[360px] md:max-w-none md:w-auto relative">
                 
                 {/* Premium Prize Badge */}
                 <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-brand-gold/50 text-brand-gold px-6 py-3 rounded-full text-[10px] md:text-sm font-black uppercase tracking-[0.25em] flex items-center gap-3 mb-6 shadow-2xl backdrop-blur-xl z-30 hover:border-brand-gold hover:scale-110 transition-all cursor-pointer group/trophy">
                    <Trophy size={20} className="fill-brand-gold animate-bounce" />
                    POTEGUJ SE ZA 15.000€ NAGRAD
                 </div>

                 {/* Main Action Button */}
                 <div className="relative group w-full flex justify-center cursor-pointer mb-8 animate-shake">
                    <div className="absolute inset-0 bg-brand-gold/40 rounded-xl blur-3xl animate-pulse group-hover:bg-brand-gold/60 transition-all"></div>
                    
                    <Button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="py-5 px-14 md:py-8 md:px-32 text-base md:text-4xl font-black tracking-tighter relative z-10 shadow-2xl border-t-2 border-white/50 rounded-xl w-full sm:w-auto transform hover:scale-[1.05] active:scale-95"
                        autoShimmer
                        variant="primary"
                    >
                        PRIDRUŽI SE ZDAJ
                    </Button>
                 </div>

                 {/* Urgent Ticker */}
                 <div className="flex items-center gap-3 mb-10 text-brand-red font-black text-xs md:text-sm uppercase tracking-[0.3em] animate-pulse drop-shadow-[0_0_10px_rgba(255,49,49,0.6)]">
                    <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_10px_rgba(255,49,49,1)]"></div>
                    ZADNJA MESTA ZA VPIS V 2026
                 </div>

                 {/* Benefit Grid */}
                 <div className="grid grid-cols-2 gap-5 w-full max-w-lg mx-auto mb-10">
                    <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 flex items-center gap-4 group/card hover:border-brand-gold/60 hover:bg-white/[0.08] transition-all cursor-default shadow-2xl">
                        <div className="bg-brand-gold/20 p-3 rounded-xl group-hover/card:scale-110 transition-transform shrink-0">
                            <Ghost className="text-brand-gold" size={22} />
                        </div>
                        <span className="text-white font-black text-[11px] md:text-sm uppercase tracking-widest text-left leading-tight">100% BREZ<br/>OBRAZA</span>
                    </div>
                    <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-5 flex items-center gap-4 group/card hover:border-brand-gold/60 hover:bg-white/[0.08] transition-all cursor-default shadow-2xl">
                        <div className="bg-brand-gold/20 p-3 rounded-xl group-hover/card:scale-110 transition-transform shrink-0">
                            <TrendingUp className="text-brand-gold" size={22} />
                        </div>
                        <span className="text-white font-black text-[11px] md:text-sm uppercase tracking-widest text-left leading-tight">VIRALNA<br/>RAST</span>
                    </div>
                 </div>

                 {/* Trust Seals */}
                 <div className="flex items-center justify-center gap-8 opacity-50 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 pb-6">
                    <div className="flex items-center gap-2.5">
                        <ShieldCheck size={14} className="text-green-500" />
                        <span>14-dni Garancija</span>
                    </div>
                    <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                    <div className="flex items-center gap-2.5">
                        <Lock size={14} />
                        <span>Varno Plačilo</span>
                    </div>
                 </div>
             </div>
        </div>
        
      </div>
    </div>
  );
};