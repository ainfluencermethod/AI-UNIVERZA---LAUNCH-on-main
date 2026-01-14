import React from 'react';
import { Ghost, ShieldCheck, Lock, Zap, Trophy, Star, Users } from 'lucide-react';
import { Button } from './Button';
import { VideoDemo } from './VideoDemo';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-12 pb-6 md:pt-32 md:pb-24 px-4 text-center overflow-hidden bg-black flex flex-col items-center">
      
      {/* --- Stage Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[60%] h-[400px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)] blur-[80px]"></div>
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)] blur-[100px]"></div>
          <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_70%)] blur-[100px]"></div>
      </div>

      <div className="relative w-full z-10 flex flex-col items-center max-w-[80rem]">
        
        {/* Trust/Social Proof Badge - High Conversion Element */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4 backdrop-blur-md animate-fade-in-up shadow-xl">
            <div className="flex -space-x-1.5">
                {[1, 2, 3].map((i) => (
                    <img 
                        key={i} 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}&backgroundColor=transparent`} 
                        className="w-5 h-5 rounded-full border border-black bg-gray-800" 
                        alt="Member" 
                    />
                ))}
            </div>
            <div className="w-px h-3 bg-white/20 mx-1"></div>
            <div className="flex items-center gap-1">
                <Star size={10} className="fill-brand-gold text-brand-gold" />
                <span className="text-white text-[9px] md:text-[11px] font-bold tracking-tight">
                    <span className="text-brand-gold">850+</span> aktivnih članov
                </span>
            </div>
        </div>

        {/* 1. Impact Headline */}
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white leading-[1.1] mb-3 tracking-tight max-w-4xl mx-auto animate-fade-in-up px-2">
          Nauči se Graditi <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] italic">AI Digitalne Imperije</span> 
          <br className="hidden md:block" /> 
          in Prevzemi Nadzor v 2026
        </h1>

        {/* 2. Subheadline */}
        <p className="text-[10px] sm:text-sm md:text-lg text-gray-400 font-medium mb-6 max-w-xl mx-auto leading-relaxed animate-fade-in-up px-6 opacity-90">
            Pridruži se v <span className="text-white">AI Universo</span> in spoznaj preverjene strategije za gradnjo globalne prisotnosti z uporabo najnovejših AI orodij.
        </p>

        {/* Video Player Section - Compact and High Density */}
        <div className="w-full max-w-2xl mx-auto mb-8 animate-fade-in-up px-0 sm:px-4 relative group">
            <div className="absolute -inset-1.5 bg-brand-gold/10 rounded-[1.2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-xl md:rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] bg-black z-10">
                 <VideoDemo 
                    videoId="7511jnm0ng" 
                    thumbnailUrl="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6963c0c9c7683b678fa18494.webp" 
                 />
            </div>
        </div>

        {/* 3. CTA Cluster - Designed for maximum clickability */}
        <div className="animate-fade-in-up w-full flex flex-col items-center relative z-20 px-4">
             
             <div className="flex flex-col items-center w-full max-w-[320px] md:max-w-none md:w-auto relative">
                 
                 {/* Premium Prize Badge */}
                 <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-brand-gold/40 text-brand-gold px-3.5 py-2 rounded-full text-[8px] md:text-[11px] font-black uppercase tracking-[0.15em] flex items-center gap-2 mb-3.5 shadow-2xl backdrop-blur-sm z-30 hover:border-brand-gold transition-all cursor-pointer">
                    <Trophy size={14} className="fill-brand-gold animate-bounce-slow" />
                    POTEGUJ SE ZA 15.000€ NAGRAD
                 </div>

                 {/* Main Action Button - The focal point */}
                 <div className="relative group w-full flex justify-center cursor-pointer mb-5">
                    {/* Pulsing Outer Glow */}
                    <div className="absolute inset-0 bg-brand-gold/20 rounded-xl blur-xl animate-pulse group-hover:bg-brand-gold/30 transition-all"></div>
                    
                    <Button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="py-3.5 px-10 md:py-5 md:px-24 text-sm md:text-2xl font-black tracking-tighter relative z-10 shadow-2xl border-t border-white/30 rounded-xl w-full sm:w-auto transform hover:scale-[1.02] transition-transform active:scale-95"
                        autoShimmer
                        variant="primary"
                    >
                        PRIDRUŽI SE ZDAJ
                    </Button>
                 </div>

                 {/* Urgency/Scarcity Text */}
                 <div className="flex items-center gap-2 mb-6 text-red-500 font-bold text-[9px] uppercase tracking-widest animate-pulse">
                    <Users size={12} />
                    Samo še nekaj prostih mest za ta krog vpisov!
                 </div>

                 {/* Benefit Grid - Micro UI */}
                 <div className="grid grid-cols-2 gap-2 w-full max-w-sm mx-auto mb-6">
                    <div className="bg-white/[0.03] border border-white/10 rounded-lg p-2 flex items-center gap-2">
                        <Ghost className="text-brand-gold shrink-0" size={12} />
                        <span className="text-white font-black text-[7px] md:text-[8px] uppercase tracking-wider text-left">Faceless<br/>Modeli</span>
                    </div>
                    <div className="bg-white/[0.03] border border-white/10 rounded-lg p-2 flex items-center gap-2">
                        <Zap className="text-brand-gold shrink-0" size={12} />
                        <span className="text-white font-black text-[7px] md:text-[8px] uppercase tracking-wider text-left">Zero-Cost<br/>Orodja</span>
                    </div>
                 </div>

                 {/* Final Trust Seals */}
                 <div className="flex items-center justify-center gap-4 opacity-40 text-[7px] font-black uppercase tracking-[0.2em] text-gray-500 pb-4">
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck size={10} className="text-green-500" />
                        <span>14-dni Garancija</span>
                    </div>
                    <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                    <div className="flex items-center gap-1.5">
                        <Lock size={10} />
                        <span>Varno Plačilo</span>
                    </div>
                 </div>
             </div>
        </div>
        
      </div>
    </div>
  );
};