
import React from 'react';
import { Zap, ShieldCheck, Lock, Star, Quote, LayoutDashboard, MonitorPlay, Users, BookOpen } from 'lucide-react';
import { CheckoutForm } from './CheckoutForm';

export const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-24 px-4 bg-gradient-to-br from-[#AA771C] via-[#FCF6BA] to-[#B38728] relative overflow-hidden">
       {/* Background noise/pattern */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4),transparent)] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-12 flex flex-col items-center">
              <h2 className="font-serif text-4xl md:text-6xl text-black font-black italic mb-6">
                  Pridružite se AI Universi
              </h2>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row overflow-hidden border-4 border-black relative">
              
              {/* LEFT SIDE - Value Stack */}
              <div className="lg:w-3/5 p-6 md:p-12 bg-white relative flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold to-yellow-300"></div>
                  
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-black mb-8 flex items-center gap-3 uppercase tracking-tighter">
                        < Zap className="fill-black w-6 h-6" />
                        TVOJA BLIŽNJICA DO USPEHA:
                    </h2>

                    <div className="space-y-4 mb-8">
                        {/* Stack Item 1 */}
                        <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all group/item">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                                <BookOpen className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">AI Influencer Accelerator</h3>
                                    <span className="font-mono font-bold text-gray-400 text-sm">1.997€</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Celoten sistem od nule do 100M ogledov.</p>
                            </div>
                        </div>

                        {/* Stack Item 2 */}
                        <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all group/item">
                             <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                                <LayoutDashboard className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">AI Agencija</h3>
                                    <span className="font-mono font-bold text-gray-400 text-sm">1.497€</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Celoten sistem od nule do prodajanje AI vsebine podjetjem (B2B).</p>
                            </div>
                        </div>

                        {/* Stack Item 3 */}
                        <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all group/item">
                             <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                                <Users className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">Private Skool Skupnost</h3>
                                    <span className="font-mono font-bold text-gray-400 text-sm">997€</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Dostop do skupnosti soustvarjalcev in mentorjev.</p>
                            </div>
                        </div>
                        
                         {/* Stack Item 4 */}
                        <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition-all group/item">
                             <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                                <MonitorPlay className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">Mesečni Q&A Klici</h3>
                                    <span className="font-mono font-bold text-gray-400 text-sm">497€</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Arhiv vseh preteklih klicev + dostop do novih.</p>
                            </div>
                        </div>


                        {/* Bonus Item */}
                        <div className="flex gap-4 p-4 rounded-2xl border-2 border-brand-gold bg-[#fffde7] shadow-lg transform hover:scale-[1.01] transition-transform relative overflow-hidden group/bonus">
                             <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-gold/20 to-transparent rounded-bl-full -mr-4 -mt-4"></div>
                             <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center shrink-0 shadow-sm group-hover/bonus:scale-110 transition-transform">
                                <Star className="text-black w-6 h-6 fill-black" />
                            </div>
                             <div className="flex-1 relative z-10">
                                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                                     <h3 className="font-bold text-lg text-black leading-tight flex flex-wrap items-center gap-2">
                                         Vstopnica za 15.000€ Sklad
                                         <span className="bg-brand-gold text-black text-[10px] px-2 py-0.5 rounded font-black uppercase shadow-sm whitespace-nowrap">Bonus</span>
                                     </h3>
                                     <span className="font-mono font-bold text-[#b8860b] text-xs sm:text-sm uppercase tracking-wider mt-1 sm:mt-0">Neprecenljivo</span>
                                 </div>
                                 <p className="text-xs text-[#856404] mt-1 font-medium">Avtomatska udeležba v žrebanju za Rolex in Apple nagrade.</p>
                             </div>
                        </div>
                    </div>
                  </div>

                  {/* Social Proof Sandwich */}
                  <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 relative">
                        <Quote className="absolute top-4 left-4 text-gray-200 fill-gray-200 w-10 h-10 -z-10" />
                        <div className="flex items-start gap-4">
                            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Marko&backgroundColor=c0aede" className="w-12 h-12 rounded-full bg-gray-200" alt="Student" />
                            <div>
                                <div className="flex text-yellow-500 mb-1">
                                    <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                                </div>
                                <p className="text-gray-700 text-sm font-medium italic leading-relaxed">
                                    "Najboljša investicija v letu 2026. Sistemi so jasni, skupnost pa izjemna."
                                </p>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2 block">- Marko K., Ljubljana</span>
                            </div>
                        </div>
                  </div>

                  <div className="flex items-center justify-between opacity-50 px-2">
                       <div className="flex items-center gap-2 text-gray-600 text-xs font-bold uppercase tracking-widest">
                           <ShieldCheck size={16} /> 100% Secure
                       </div>
                       <div className="flex items-center gap-2 text-gray-600 text-xs font-bold uppercase tracking-widest">
                           <Lock size={16} /> Encryption
                       </div>
                  </div>
              </div>

              {/* RIGHT SIDE - Pricing & Form */}
              <div className="lg:w-2/5 bg-gray-50 border-l border-gray-100 flex flex-col items-center justify-center py-12">
                  <CheckoutForm />
              </div>

          </div>

       </div>
    </section>
  );
};
