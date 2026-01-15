import React from 'react';
import { Zap, ShieldCheck, Lock, Star, Quote, LayoutDashboard, MonitorPlay, Users, BookOpen, AlertCircle } from 'lucide-react';
import { CheckoutForm } from './CheckoutForm';

export const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-24 px-4 bg-gradient-to-br from-[#AA771C] via-[#FCF6BA] to-[#B38728] relative overflow-hidden">
       {/* Background noise/pattern */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 pointer-events-none"></div>
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.6),transparent_80%)] pointer-events-none"></div>

       <div className="max-w-[90rem] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center">
              <div className="inline-flex items-center gap-3 bg-black border border-white/20 rounded-full px-6 py-2.5 mb-8 shadow-2xl animate-bounce">
                  <AlertCircle className="w-4 h-4 text-brand-red" fill="currentColor" />
                  <span className="text-white text-[11px] font-black uppercase tracking-[0.35em]">ZADNJA PRILOŽNOST ZA VPIS</span>
              </div>
              <h2 className="font-serif text-5xl md:text-8xl text-black font-black italic mb-6 leading-none tracking-tighter drop-shadow-sm">
                  Pridruži se AI Universo
              </h2>
              <p className="text-black/70 font-black uppercase tracking-[0.4em] text-sm md:text-lg bg-white/30 backdrop-blur-sm px-8 py-2 rounded-full border border-black/10">
                 CELOTEN SISTEM ZA LETO 2026
              </p>
          </div>

          <div className="bg-[#050505] rounded-[2.5rem] md:rounded-[4rem] shadow-[0_80px_150px_-30px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row overflow-hidden border-2 border-white/20 relative group">
              
              {/* Value Stack Left Side */}
              <div className="lg:w-3/5 p-8 md:p-16 bg-[#0a0a0a] relative flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold via-white to-brand-gold animate-shimmer"></div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                        <h2 className="text-3xl md:text-5xl font-black text-white flex items-center gap-4 uppercase tracking-tighter italic">
                            <Zap className="fill-brand-gold text-brand-gold w-10 h-10" />
                            VSEBINA PAKETA:
                        </h2>
                        <div className="bg-brand-red/10 border border-brand-red/30 px-4 py-2 rounded-xl text-brand-red font-black text-xs uppercase tracking-widest animate-pulse">
                            ZADNJIH 24 UR
                        </div>
                    </div>

                    <div className="space-y-6 mb-12">
                        {/* Stack Item 1 */}
                        <div className="flex gap-6 p-6 rounded-3xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-brand-gold/40 transition-all group/item shadow-2xl">
                            <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.4)] border-2 border-white/30">
                                <BookOpen className="text-black w-8 h-8" strokeWidth={3} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-black text-xl md:text-2xl text-white leading-tight uppercase tracking-tight">AI Influencer Accelerator</h3>
                                    <span className="font-mono font-bold text-gray-600 text-sm hidden sm:block">1.997€</span>
                                </div>
                                <p className="text-sm md:text-base text-gray-400 mt-2 font-medium leading-relaxed">Sistem od 0 do viralnosti. Kako zgraditi brand brez uporabe obraza z uporabo najnaprednejših AI orodij.</p>
                            </div>
                        </div>

                        {/* Stack Item 2 */}
                        <div className="flex gap-6 p-6 rounded-3xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-brand-gold/40 transition-all group/item shadow-2xl">
                             <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.4)] border-2 border-white/30">
                                <LayoutDashboard className="text-black w-8 h-8" strokeWidth={3} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-black text-xl md:text-2xl text-white leading-tight uppercase tracking-tight">AI Agencija B2B</h3>
                                    <span className="font-mono font-bold text-gray-600 text-sm hidden sm:block">1.497€</span>
                                </div>
                                <p className="text-sm md:text-base text-gray-400 mt-2 font-medium leading-relaxed">Nauči se prodajati AI storitve podjetjem. Od generiranja vsebin do avtomatizacije procesov.</p>
                            </div>
                        </div>

                        {/* Stack Item 3 */}
                        <div className="flex gap-6 p-6 rounded-3xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-brand-gold/40 transition-all group/item shadow-2xl">
                             <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.4)] border-2 border-white/30">
                                <Users className="text-black w-8 h-8" strokeWidth={3} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-black text-xl md:text-2xl text-white leading-tight uppercase tracking-tight">Elite Skool Skupnost</h3>
                                    <span className="font-mono font-bold text-gray-600 text-sm hidden sm:block">997€</span>
                                </div>
                                <p className="text-sm md:text-base text-gray-400 mt-2 font-medium leading-relaxed">Dostop do VIP mreže slovenskih AI ustvarjalcev. Tedenski klici v živo in podpora 24/7.</p>
                            </div>
                        </div>
                        
                        {/* Bonus Item */}
                        <div className="flex gap-6 p-8 rounded-[2rem] border-2 border-brand-gold bg-brand-gold/10 shadow-[0_0_60px_rgba(212,175,55,0.2)] transform hover:scale-[1.02] transition-transform relative overflow-hidden group/bonus">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-gold/30 to-transparent rounded-bl-full -mr-6 -mt-6 opacity-60"></div>
                             <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center shrink-0 shadow-[0_15px_40px_rgba(212,175,55,0.5)] group-hover/bonus:scale-110 transition-transform border-2 border-white/40">
                                <Star className="text-black w-8 h-8 fill-black" />
                            </div>
                             <div className="flex-1 relative z-10">
                                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                                     <h3 className="font-black text-3xl md:text-4xl text-white leading-tight uppercase tracking-tighter">
                                         15.000€ Nagradni Sklad
                                     </h3>
                                     <span className="bg-brand-red text-white text-[10px] px-4 py-1.5 rounded-full font-black uppercase shadow-2xl tracking-widest mt-2 sm:mt-0 animate-pulse">EKSKLUZIVNO</span>
                                 </div>
                                 <p className="text-sm md:text-lg text-brand-gold mt-3 font-black uppercase tracking-[0.2em]">AVTOMATSKA UDELEŽBA V ŽREBU ZA ROLEX, MACBOOK IN IPHONE</p>
                             </div>
                        </div>
                    </div>
                  </div>

                  {/* High Trust Testimonial */}
                  <div className="mb-12 p-10 bg-white/[0.04] rounded-[2.5rem] border border-white/10 relative group/testimonial shadow-2xl">
                        <Quote className="absolute top-8 left-8 text-white/5 fill-white/5 w-24 h-24 -z-10 group-hover/testimonial:scale-110 transition-transform" />
                        <div className="flex items-start gap-6">
                            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Rok&backgroundColor=c0aede" className="w-16 h-16 rounded-full border-2 border-brand-gold/50 bg-gray-900 shadow-2xl" alt="Student" />
                            <div>
                                <div className="flex text-brand-gold mb-3 gap-1">
                                    <Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" />
                                </div>
                                <p className="text-white text-xl md:text-2xl font-medium italic leading-relaxed tracking-tight">
                                    "AI Universa je edino mesto v Sloveniji, kjer dobiš prave sisteme. Danes delam vsebino 10x hitreje in rezultati so fenomenalni."
                                </p>
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mt-6 block">— ROK B., MARIBOR</span>
                            </div>
                        </div>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-10 opacity-30 px-4 grayscale">
                       <div className="flex items-center gap-3 text-white text-[11px] font-black uppercase tracking-[0.3em]">
                           <ShieldCheck size={20} className="text-green-500" /> 14-DNI GARANCIJA
                       </div>
                       <div className="flex items-center gap-3 text-white text-[11px] font-black uppercase tracking-[0.3em]">
                           <Lock size={20} /> VARNO PLAČILO
                       </div>
                  </div>
              </div>

              {/* Pricing & Form Side */}
              <div className="lg:w-2/5 bg-black border-l-2 border-white/10 flex flex-col items-center justify-center py-20 relative px-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none"></div>
                  <CheckoutForm />
                  <div className="mt-12 text-center max-w-sm">
                      <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                          *Vsa mesta so omejena zaradi mentorske podpore. Vpis se zapre takoj, ko dosežemo kvoto ali ob izteku časa.
                      </p>
                  </div>
              </div>

          </div>

       </div>
    </section>
  );
};