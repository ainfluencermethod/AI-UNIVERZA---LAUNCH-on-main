import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Reviews } from './components/Reviews';
import { ResultsShowcase } from './components/ResultsShowcase';
import { CommunityResults } from './components/CommunityResults';
import { Objections } from './components/Objections';
import { Process } from './components/Process';
import { Sweepstakes } from './components/Sweepstakes';
import { SweepstakesRules } from './components/SweepstakesRules';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { Contact } from './components/Contact';
import { Founders } from './components/Founders';
import { Paths } from './components/Paths';
import { Challenge } from './components/Challenge';
import { FAQ } from './components/FAQ';
import { Guarantee } from './components/Guarantee';
import { ScrollReveal } from './components/ScrollReveal';
import { ParallaxBackground } from './components/ParallaxBackground';
import { Offer } from './components/Offer';
import { UpsellModal } from './components/UpsellModal';
import { ThankYou } from './components/ThankYou';
import { CountdownTimer } from './components/CountdownTimer';
import { Button } from './components/Button';
import { CheckoutForm } from './components/CheckoutForm';
import { CookieConsent } from './components/CookieConsent';

type AppStep = 'landing' | 'upsell' | 'success' | 'rules' | 'privacy' | 'terms' | 'contact';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');
  const [isMobileCheckoutOpen, setIsMobileCheckoutOpen] = useState(false);

  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      const query = new URLSearchParams(window.location.search);
      const step = query.get('step') as AppStep;

      if (path === '/pravila' || step === 'rules') {
        setCurrentStep('rules');
      } else if (path === '/zasebnost' || step === 'privacy') {
        setCurrentStep('privacy');
      } else if (path === '/pogoji' || step === 'terms') {
        setCurrentStep('terms');
      } else if (path === '/kontakt' || step === 'contact') {
        setCurrentStep('contact');
      } else if (step === 'upsell') {
        setCurrentStep('upsell');
      } else if (step === 'success') {
        setCurrentStep('success');
      } else {
        setCurrentStep('landing');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const navigateTo = (step: AppStep) => {
    setCurrentStep(step);
    const url = step === 'landing' ? '/' : `/?step=${step}`;
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpsellAccept = () => {
    console.log("Upsell accepted");
  };

  const handleUpsellDecline = () => {
    navigateTo('success');
  };

  return (
    <>
      <CookieConsent />
      
      {currentStep === 'rules' && <SweepstakesRules />}
      {currentStep === 'privacy' && <PrivacyPolicy />}
      {currentStep === 'terms' && <TermsAndConditions />}
      {currentStep === 'contact' && <Contact />}
      {currentStep === 'success' && <ThankYou />}

      {currentStep === 'upsell' && (
        <UpsellModal 
          onAccept={handleUpsellAccept} 
          onDecline={handleUpsellDecline} 
        />
      )}

      {currentStep === 'landing' && (
        <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-gold selection:text-black pb-24 md:pb-0 relative overflow-x-hidden">
          
          <ParallaxBackground />

          <div className="relative z-10 w-full overflow-hidden">
              <CountdownTimer variant="sticky" />
              
              <Hero />
              
              <ScrollReveal delay={0} duration={600} yOffset={20}>
                  <SocialProof />
              </ScrollReveal>
              
              <ScrollReveal delay={0} duration={1000} yOffset={40} threshold={0.2}>
                  <div className="py-8 md:py-12 text-center max-w-4xl mx-auto px-6">
                      <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light font-serif italic">
                          To so strategije, ki jih uporabljajo <span className="text-white font-bold">digitalni ustvarjalci</span> za gradnjo vplivnih AI blagovnih znamk in
                          <span className="text-white font-bold border-b border-brand-gold not-italic font-sans"> doseganje izjemnih rezultatov.</span>
                      </p>
                      <p className="text-gray-600 mt-4 text-[10px] md:text-sm font-bold uppercase tracking-widest font-sans">
                          Izobraževalni program prilagojen ambicioznim začetnikom.
                      </p>
                  </div>
              </ScrollReveal>

              <ScrollReveal delay={0} duration={700}>
                  <Reviews />
              </ScrollReveal>

              <ScrollReveal duration={800} yOffset={30}>
                  <ResultsShowcase />
              </ScrollReveal>
              
              <ScrollReveal>
                  <CommunityResults />
              </ScrollReveal>

              <ScrollReveal>
                  <Objections />
              </ScrollReveal>
              
              <ScrollReveal>
                  <Process />
              </ScrollReveal>

              <ScrollReveal>
                  <Paths />
              </ScrollReveal>
              
              <ScrollReveal>
                  <Challenge />
              </ScrollReveal>

              <ScrollReveal>
                  <Founders />
              </ScrollReveal>

              <ScrollReveal duration={900} yOffset={40}>
                  <Sweepstakes />
              </ScrollReveal>

              <ScrollReveal duration={1000} yOffset={50} threshold={0.1}>
                  <Offer />
              </ScrollReveal>
              
              <ScrollReveal>
                  <Guarantee />
              </ScrollReveal>

              <ScrollReveal>
                  <FAQ />
              </ScrollReveal>

              <footer className="text-center py-12 text-gray-600 text-[9px] md:text-xs bg-black border-t border-gray-900 relative z-10 px-4">
                  <div className="max-w-4xl mx-auto mb-8 leading-relaxed opacity-60">
                      <p className="font-bold text-gray-500 uppercase tracking-widest mb-2">Omejitev odgovornosti</p>
                      <p className="mb-2">
                          Rezultati so primeri izjemnih dosežkov. Ti rezultati <strong className="text-gray-400">niso tipični</strong> in ne zagotavljajo finančnih izidov. Uspeh je odvisen od vašega truda in izvajanja strategij.
                      </p>
                  </div>

                  <p className="mb-4">© 2026 AI Universa.</p>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 underline mb-4 opacity-50">
                      <button onClick={() => navigateTo('terms')} className="hover:text-brand-gold transition-colors">Pogoji</button>
                      <button onClick={() => navigateTo('rules')} className="hover:text-brand-gold transition-colors">Pravila</button>
                      <button onClick={() => navigateTo('privacy')} className="hover:text-brand-gold transition-colors">Zasebnost</button>
                      <button onClick={() => navigateTo('contact')} className="hover:text-brand-gold transition-colors">Kontakt</button>
                  </div>
              </footer>

              {/* Sticky Bottom CTA for Mobile - Matches reference image style */}
              <div className="fixed bottom-0 left-0 right-0 z-[80] px-4 py-3 bg-black/95 backdrop-blur-xl border-t border-white/10 md:hidden animate-in slide-in-from-bottom duration-500 pb-10 safe-area-pb shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between gap-4 max-w-sm mx-auto">
                      <div className="flex flex-col">
                          <p className="text-red-500 text-[8px] font-black uppercase tracking-widest mb-0.5 flex items-center gap-1 animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> 
                              OMEJENA MESTA!
                          </p>
                          <div className="flex items-center gap-2">
                              <span className="text-brand-gold font-black text-lg leading-none">497€<span className="text-[10px] font-normal text-white/50 ml-1">/ leto</span></span>
                              <span className="text-gray-600 text-[10px] line-through decoration-red-500 decoration-1">6.182€</span>
                          </div>
                      </div>
                      <Button 
                          onClick={() => setIsMobileCheckoutOpen(true)} 
                          className="!py-2.5 !px-6 !text-xs !rounded-xl w-auto shrink-0 shadow-lg border-t border-white/20"
                          autoShimmer
                      >
                          PRIDRUŽI SE
                      </Button>
                  </div>
              </div>

              {/* Mobile Checkout Modal Overlay */}
              {isMobileCheckoutOpen && (
                  <div className="fixed inset-0 z-[100] flex items-end justify-center md:hidden">
                      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileCheckoutOpen(false)}></div>
                      <div className="bg-[#0a0a0a] border-t border-white/10 rounded-t-3xl w-full p-6 animate-in slide-in-from-bottom duration-300 relative max-h-[90vh] overflow-y-auto">
                          <button 
                              onClick={() => setIsMobileCheckoutOpen(false)}
                              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white z-50"
                          >
                              <X size={20} />
                          </button>
                          <div className="pt-4">
                              <CheckoutForm />
                          </div>
                      </div>
                  </div>
              )}
          </div>
        </div>
      )}
    </>
  );
};

export default App;