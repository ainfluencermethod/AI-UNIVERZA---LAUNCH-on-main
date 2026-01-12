
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Ali je ta tečaj primeren za popolne začetnike?",
    answer: "Absolutno. AI Universa je zasnovana tako, da te pelje od nule do prvega zaslužka. Ne potrebuješ predhodnega znanja o marketingu, AI orodjih ali poslu. Vse tehnične stvari so razložene 'klik-za-klikom'."
  },
  {
    question: "Koliko časa moram vložiti dnevno?",
    answer: "Večina naših najuspešnejših študentov porabi med 2 do 3 ure na dan. Ker uporabljamo AI za generiranje vsebine, je proces bistveno hitrejši kot pri tradicionalnem ustvarjanju vsebin."
  },
  {
    question: "Ali potrebujem močan računalnik?",
    answer: "Ne. Vsa AI orodja, ki jih uporabljamo, delujejo v oblaku (v brskalniku). Potrebuješ le prenosnik ali celo samo telefon in internetno povezavo."
  },
  {
    question: "Kdaj se tečaj začne?",
    answer: "Takoj po nakupu dobiš dostop do platforme. Gre za 'self-paced' program z dodatkom mentorstva v živo, tako da lahko začneš takoj in napreduješ v svojem tempu."
  },
  {
    question: "Kaj če ne bom zadovoljen/a?",
    answer: "Ponujamo 14-dnevno garancijo na zadovoljstvo. Če ugotoviš, da to ni zate, nam piši in povrnili ti bomo celotno kupnino brez vprašanj."
  },
  {
    question: "Ali so vključeni dodatni stroški za orodja?",
    answer: "Ker pri nas prakticiramo kvaliteto, uporabljamo plačljiva orodja. Dodatni stroški so med 30-100eur/mesec. To je vsa investicija, ki jo rabiš za eksponentno rast"
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24 px-4 bg-dark-bg border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-4">
            Pogosta <span className="text-brand-gold italic">Vprašanja</span>
          </h2>
          <p className="text-gray-400">
            Imaš vprašanje? Tukaj so odgovori na najpogostejše dileme.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-card-bg border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-gold/30"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-white text-lg pr-8">{faq.question}</span>
                <div className={`p-2 rounded-full ${openIndex === index ? 'bg-brand-gold text-black' : 'bg-white/10 text-white'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
