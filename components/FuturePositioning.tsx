import React from 'react';
import { BrainCircuit, Globe, TrendingUp } from 'lucide-react';

export const FuturePositioning: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm animate-pulse">
             <span className="text-red-500 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></div>
                URGENTNO OPOZORILO
             </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-6 leading-tight">
            AI Ne Bo Nadomestil Ljudi. <br/>
            <span className="text-brand-gold italic">Ljudje Z AI Bodo Nadomestili Tebe.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Smo na točki preloma. Hitrost razvoja je zastrašujoča. Kdor danes ignorira to tehnologijo, tvega, da postane <strong className="text-white">digitalno nepismen</strong> v manj kot 2 letih. To je tvoja priložnost, da si zagotoviš nepošteno prednost, preden se vrata za začetnike zaprejo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-brand-gold/30 transition-all group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                    <BrainCircuit className="text-gray-300 group-hover:text-black w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Arhitekt vs. Potrošnik</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    99% populacije bo le pasivno konzumiralo AI vsebine. Ti boš v tistem 1%, ki to vsebino ustvarja in <strong className="text-white">mastno služi</strong>. Razlika v življenjskem standardu med tema dvema skupinama bo brutalna.
                </p>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-brand-gold/30 transition-all group relative overflow-hidden hover:-translate-y-1 duration-300">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-transparent"></div>
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                    <TrendingUp className="text-gray-300 group-hover:text-black w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tekma s Časom</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Tradicionalne veščine postajajo ničvredne. Zakaj bi nekdo plačal tebi za 10 ur dela, če AI to naredi v 3 sekundah? Nauči se upravljati stroje danes, ali pa tekmuj z njimi jutri (namig: <strong className="text-white">izgubil boš</strong>).
                </p>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-brand-gold/30 transition-all group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                    <Globe className="text-gray-300 group-hover:text-black w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Svet Brez Meja</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Slovenija je majhna. Splet je neskončen. Z našimi AI sistemi jezikovne bariere ne obstajajo več. Jutri lahko služiš v dolarjih na ameriškem trgu, medtem ko piješ kavo v Ljubljani. <strong className="text-white">Svet je tvoje igrišče.</strong>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};