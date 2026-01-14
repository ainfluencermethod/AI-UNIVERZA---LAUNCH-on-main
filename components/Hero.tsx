import React from 'react';
import { Briefcase, Ghost, Users, ShieldCheck, Lock, Zap, Trophy } from 'lucide-react';
import { Button } from './Button';
import { VideoDemo } from './VideoDemo';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 text-center overflow-hidden bg-black flex flex-col items-center">
      
      {/* --- Stage Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[50%] h-[300px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] blur-[60px]"></div>
          <div className="absolute top-[0%] left-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] blur-[80px]"></div>
          <div className="absolute top-[0%] right-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent_70%)] blur-[80px]"></div>
      </div>

      <div className="relative w-full z-10 flex flex-col items-center max-w-[80rem]">
        
        {/* Top Badge: Compact */}
        <div className="inline-flex items-center gap-2 bg-[#111] border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md animate-fade-in-up shadow-lg">
            <span className="text-brand-gold text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap">
                VPIS SE ZAPIRA 16. JANUARJA
            </span>
        </div>

        {/* 1. Headline - Smaller & Compact */}
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-sans font-black text-white leading-tight mb-4 tracking-tight max-w-4xl mx-auto animate-fade-in-up px-4">
          Nauči se Graditi <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] italic">AI Digitalne Blagovne Znamke</span> 
          <br className="hidden md:block" /> 
          in Ustvari Svojo Pot do Uspeha v 2026
        </h1>

        {/* 2. Subheadline - More compact */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up px-4">
          Pridruži se v AI Universo, kjer spoznaš preizkušene strategije za gradnjo digitalne prisotnosti in učinkovito uporabo AI orodij.
        </p>

        {/* Video Player - Central Focus */}
        <div className="w-full max-w-4xl mx-auto mb-12 animate-fade-in-up px-0 sm:px-4 relative group">
            <div className="absolute -inset-1 bg-brand-gold/10 rounded-[1.5rem] blur-2xl"></div>
            <div className="relative rounded-xl md:rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black z-10">
                 <VideoDemo 
                    videoId="7511jnm0ng" 
                    thumbnailUrl="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6963c0c9c7683b678fa18494.webp" 
                 />
            </div>
        </div>

        {/* 3. CTA Section - Smaller UI */}
        <div className="animate-fade-in-up w-full flex flex-col items-center relative z-20 px-4 mb-8">
             
             <div className="flex flex-col items-center w-full max-w-sm md:max-w-none md:w-auto relative">
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#111] border border-brand-gold/20 text-brand-gold px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 mb-2 shadow-lg backdrop-blur-sm z-30">
                    <Trophy size={12} className="fill-brand-gold" />
                    POTEGUJ SE ZA 15.000€ NAGRAD
                 </div>

                 <div className="relative group w-full flex justify-center cursor-pointer mb-6">
                    <Button 
                        onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                        className="py-4 px-12 md:px-20 text-lg md:text-xl font-black tracking-tighter relative z-10 shadow-xl border-t border-white/20"
                        autoShimmer
                        variant="primary"
                    >
                        PRIDRUŽI SE ZDAJ
                    </Button>
                 </div>

                 {/* Feature Badges - Small & Subtle */}
                 <div className="flex flex-col sm:flex-row gap-2 w-full max-w-lg mx-auto">
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-3">
                        <Ghost className="text-brand-gold" size={14} />
                        <span className="text-white font-black text-[9px] uppercase tracking-wider">BREZ KAZANJA OBRAZA</span>
                    </div>
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-3">
                        <Briefcase className="text-brand-gold" size={14} />
                        <span className="text-white font-black text-[9px] uppercase tracking-wider">ZAČNI IZ NIČLE</span>
                    </div>
                 </div>

                 {/* Trust Badges - Tiny */}
                 <div className="flex items-center justify-center gap-4 mt-8 opacity-40 text-[8px] font-black uppercase tracking-[0.2em] text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck size={10} className="text-green-500" />
                        <span>14-Dnevna Garancija</span>
                    </div>
                    <div className="w-0.5 h-0.5 bg-white/20 rounded-full"></div>
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