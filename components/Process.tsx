import React from 'react';
import { User, Building2, Wand2, Briefcase, Coins, LayoutTemplate } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-dark-bg">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6">
          En Sistem. <span className="text-brand-gold italic">Dve Poti do zaslužka.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Znotraj AI Univerze ničesar ne prepuščamo naključju. Dobiš dostop do materialov za <strong>obe smeri</strong>, sistem pa te vodi od točke nič do prvega evra.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-8 md:left-12 top-8 bottom-8 w-1 bg-gradient-to-b from-brand-gold/50 to-white/10 opacity-30"></div>

          {/* STEP 1: FOUNDATION */}
          <div className="relative bg-card-bg border border-white/10 p-8 rounded-3xl overflow-hidden group hover:border-brand-gold/50 transition-colors shadow-lg pl-16 md:pl-32">
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-white/5 border-r border-white/10 flex items-center justify-center flex-col gap-2">
                  <div className="text-4xl md:text-5xl font-black text-white/20">1</div>
              </div>
              
              <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                      <span className="bg-brand-gold text-black px-3 py-1 rounded text-xs font-black uppercase tracking-widest">Iniciacija</span>
                      <h3 className="text-2xl font-bold text-white">Prevzem "Super-Moči"</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      Ni važno, če o AI ne veš ničesar. V prvem koraku te opremimo z orodji, ki nadomeščajo celotne produkcijske ekipe. Dobiš dostop do <strong className="text-white">celotnega ekosistema</strong> (Agency & Influencer). Ni se ti treba omejevati – znanje za obe smeri je tvoje takoj.
                  </p>
              </div>
          </div>

          {/* STEP 2: THE VEHICLE (SPLIT) */}
          <div className="relative bg-card-bg border border-white/10 rounded-3xl overflow-hidden group hover:border-brand-gold/50 transition-colors shadow-lg flex flex-col md:flex-row min-h-[250px]">
               {/* Number Column */}
               <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-24 bg-white/5 border-r border-white/10 items-center justify-center z-20">
                  <div className="text-5xl font-black text-white/20">2</div>
               </div>

               <div className="w-full md:pl-24 flex flex-col">
                   <div className="p-8 pb-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-brand-gold text-black px-3 py-1 rounded text-xs font-black uppercase tracking-widest">Implementacija</span>
                            <h3 className="text-2xl font-bold text-white">Izberi Svoje Orožje</h3>
                        </div>
                        <p className="text-gray-500 text-sm">Sistem deluje, ne glede na to, katero pot izbereš:</p>
                   </div>

                   {/* Split Cards */}
                   <div className="flex flex-col md:flex-row border-t border-white/10 h-full">
                       {/* Left: Influencer */}
                       <div className="flex-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.02] hover:bg-brand-gold/5 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <User className="text-brand-gold w-5 h-5" />
                                <h4 className="font-bold text-white uppercase tracking-wide text-sm">Pot A: AI Influencer</h4>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Ustvariš svojega karakterja z našim <strong className="text-white">"DNA Framework-om"</strong>. Kreiraš viralne vsebine brez snemanja in brez kazanja obraza. Postaneš lastnik digitalne osebnosti.
                            </p>
                       </div>

                       {/* Right: Agency */}
                       <div className="flex-1 p-6 md:p-8 bg-white/[0.02] hover:bg-brand-gold/5 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <Building2 className="text-brand-gold w-5 h-5" />
                                <h4 className="font-bold text-white uppercase tracking-wide text-sm">Pot B: AI Agency</h4>
                            </div>
                             <p className="text-gray-400 text-sm leading-relaxed">
                                Delaš profesionalne <strong className="text-white">photoshoote in viralne UGC oglase</strong> za podjetja. Ne rabiš modelov, ne rabiš studia. Računaš kot profesionalna agencija.
                            </p>
                       </div>
                   </div>
               </div>
          </div>

          {/* STEP 3: THE PROFIT (SPLIT) */}
          <div className="relative bg-card-bg border border-white/10 rounded-3xl overflow-hidden group hover:border-brand-gold/50 transition-colors shadow-lg flex flex-col md:flex-row min-h-[250px]">
               {/* Number Column */}
               <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-24 bg-white/5 border-r border-white/10 items-center justify-center z-20">
                  <div className="text-5xl font-black text-white/20">3</div>
               </div>

               <div className="w-full md:pl-24 flex flex-col">
                   <div className="p-8 pb-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-brand-gold text-black px-3 py-1 rounded text-xs font-black uppercase tracking-widest">Monetizacija</span>
                            <h3 className="text-2xl font-bold text-white">Avtomatski Profit</h3>
                        </div>
                        <p className="text-gray-500 text-sm">Kako se to pretvori v denar na tvojem računu?</p>
                   </div>

                   {/* Split Cards */}
                   <div className="flex flex-col md:flex-row border-t border-white/10 h-full">
                       {/* Left: Influencer Income */}
                       <div className="flex-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.02] hover:bg-green-500/5 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <Coins className="text-green-500 w-5 h-5" />
                                <h4 className="font-bold text-white uppercase tracking-wide text-sm">Pasivni Prihodek</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div> Prodaja digitalnih produktov</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div> Brand Deali & Sponzorstva</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div> Affiliate marketing</li>
                            </ul>
                       </div>

                       {/* Right: Agency Income */}
                       <div className="flex-1 p-6 md:p-8 bg-white/[0.02] hover:bg-green-500/5 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <Briefcase className="text-green-500 w-5 h-5" />
                                <h4 className="font-bold text-white uppercase tracking-wide text-sm">Aktivni Cashflow</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div> Mesečni Retainerji (1000€+)</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div> Prodaja UGC paketov</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div> Projektno delo za podjetja</li>
                            </ul>
                       </div>
                   </div>
               </div>
          </div>
      </div>
    </div>
  );
};