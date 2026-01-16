
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';
import { ParallaxBackground } from './components/ParallaxBackground';

// Lazy Loaded Legal/Info Views
const SweepstakesRules = lazy(() => import('./components/SweepstakesRules').then(m => ({ default: m.SweepstakesRules })));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions').then(m => ({ default: m.TermsAndConditions })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

type AppStep = 'landing' | 'success' | 'rules' | 'privacy' | 'terms' | 'contact';

const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <Loader2 className="animate-spin text-white opacity-20" size={32} />
  </div>
);

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use a custom event listener for internal navigation from other components
  useEffect(() => {
    const handleNavigate = (e: any) => {
      if (e.detail && e.detail.step) {
        setCurrentStep(e.detail.step);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('app-navigate', handleNavigate);
    return () => window.removeEventListener('app-navigate', handleNavigate);
  }, []);

  const navigateTo = (step: AppStep) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);
    // Simulate API call for waitlist
    setTimeout(() => {
      setIsSubmitting(false);
      navigateTo('success');
    }, 1200);
  };

  return (
    <Suspense fallback={<SectionLoader />}>
      {currentStep === 'rules' && <SweepstakesRules />}
      {currentStep === 'privacy' && <PrivacyPolicy />}
      {currentStep === 'terms' && <TermsAndConditions />}
      {currentStep === 'contact' && <Contact />}

      {currentStep === 'success' && (
        <div className="min-h-screen bg-[#05050a] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <ArrowRight className="text-black rotate-[-45deg]" size={24} />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Uspešno dodani!</h1>
          <p className="text-gray-400 max-w-md">Hvala za zanimanje. Obvestili vas bomo takoj, ko se sprostijo nova mesta v AI Univerzi.</p>
          <button 
            onClick={() => navigateTo('landing')}
            className="mt-8 text-white/60 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors"
          >
            Nazaj
          </button>
        </div>
      )}

      {currentStep === 'landing' && (
        <div className="min-h-screen bg-[#05050a] text-white font-sans selection:bg-white selection:text-black relative overflow-x-hidden flex flex-col">
          
          <ParallaxBackground />

          <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative z-10">
            {/* Top Badge matching screenshot */}
            <div className="mb-10">
              <span className="bg-[#1a0c0c]/80 border border-red-500/20 text-red-500 px-5 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                VPIS JE ZAPRT
              </span>
            </div>

            {/* Headline matching screenshot */}
            <h1 className="text-[2.8rem] md:text-8xl font-black text-center mb-8 tracking-tighter leading-[1.05] max-w-4xl drop-shadow-2xl">
              Vrata so <br className="md:hidden" />
              <span className="text-gray-400">trenutno zaprta.</span>
            </h1>

            {/* Subtext matching screenshot */}
            <p className="text-gray-400 text-center text-sm md:text-lg max-w-2xl mb-12 leading-relaxed opacity-80 font-medium">
              AI Univerza je trenutno polna. Zaradi ogromnega zanimanja smo vpis za javnost zaprli. Vpiši se na prioritno listo spodaj za naslednji vpis.
            </p>

            {/* Form Container with Glow matching screenshot */}
            <div className="w-full max-w-md relative">
              {/* Form Glow Effect */}
              <div className="absolute -inset-10 bg-indigo-500/10 blur-[80px] rounded-[3rem] opacity-60 pointer-events-none"></div>
              
              <div className="relative bg-[#11111a]/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Vaše ime" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-colors font-medium"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Vaš email naslov" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-colors font-medium"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white hover:bg-gray-200 text-black font-black text-sm md:text-base py-5 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? 'Obdelava...' : (
                      <>
                        Vpiši se na listo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
                <p className="mt-8 text-center text-gray-600 text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60">
                  Spoštujemo vašo zasebnost. Brez vsiljene pošte.
                </p>
              </div>
            </div>
          </main>

          {/* Footer exactly matching the screenshots */}
          <footer className="py-24 px-6 bg-black relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
              
              <div className="max-w-4xl mx-auto text-center mb-24">
                <div className="text-gray-600 text-[10px] md:text-[11px] leading-relaxed uppercase font-bold tracking-tight text-center space-y-8">
                  <p>
                    <strong>ODPOVED ODGOVORNOSTI:</strong> REZULTATI, PRIKAZANI NA TEJ STRANI, NISO TIPIČNI. VSAK POSAMEZNIK IMA DRUGAČNE IZKUŠNJE, DELOVNE NAVADE IN SPOSOBNOSTI. USPEH V DIGITALNEM SVETU ZAHTEVA ČAS, TRUD IN VZTRAJNOST. AI UNIVERSA NE ZAGOTAVLJA FINANČNEGA USPEHA, DOLOČENEGA ZNESKA ZASLUŽKA ALI ZMAG V NAGRADNI IGRI SAMO NA PODLAGI VSTOPA V PROGRAM.
                  </p>
                  <p className="mt-8">
                    Ta stran ni del spletnega mesta Facebook ali Facebook Inc. Poleg tega te strani Facebook na noben način ne podpira. FACEBOOK je blagovna znamka družbe FACEBOOK, Inc. Vsi izdelki in storitve na tej strani so namenjeni izključno izobraževanju in informiranju.
                  </p>
                </div>
              </div>

              <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
                <p className="text-gray-600 text-xs font-medium">
                  © 2026 AI UNIVERZA. Vse pravice pridržane.
                </p>
                
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                  <button onClick={() => navigateTo('rules')} className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors border-b border-gray-800 border-dotted pb-0.5">Pravila nagradne igre</button>
                  <button onClick={() => navigateTo('privacy')} className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Politika zasebnosti</button>
                  <button onClick={() => navigateTo('terms')} className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Pogoji uporabe</button>
                  <button onClick={() => navigateTo('contact')} className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Kontakt</button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </Suspense>
  );
};

export default App;
