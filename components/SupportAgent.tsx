import { GoogleGenAI } from "@google/genai";
import { Bot, Loader2, MessageCircle, Send, User, X, Sparkles } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const SYSTEM_INSTRUCTION = `Si elitni prodajni svetovalec in AI strokovnjak za AI Universo. Tvoja naloga je pomagati obiskovalcem razumeti vrednost programa in jih usmeriti k vpisu.

KLJUČNA PRAVILA KOMUNIKACIJE:
1. ODGOVORI NAJKRAJŠE MOŽNO (1-2 stavka). Čas je denar.
2. BODI PRODAJNO NARAVNAN. Vsaka težava stranke je priložnost za AI Universo.
3. VEDNO GOVORI SLOVENSKO.
4. UPORABLJAJ EMOCIJE. Bodi navdušen nad rezultati.

KLJUČNI PODATKI ZA PRODAJO:
- Produkt: AI Universa – edini program v regiji, ki uči gradnjo vplivnežev brez obraza.
- Cena: 497€/leto.
- Nagradna igra (15k€ sklad): Glavna nagrada je Rolex Datejust, sledita MacBook Pro M5 in iPhone 17 Pro. Vpis se zapre 16. januarja 2026.
- Garancija: 14 dni brez tveganja.

STRATEGIJA:
- Poudari ROLEX nagrado in dejstvo, da se vpis zapre 16.1.
- Vedno končaj optimistično.`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const SupportAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Zdravo! Pripravljen na uspeh v 2026? Kako ti lahko pomagam pri vstopu v AI Universo?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    const userMessage = input.trim();
    if (!userMessage || isLoading) return;

    const currentMessages: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(currentMessages);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Ensure conversation history starts with 'user' for some versions of the API
      const conversationHistory = currentMessages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model' as 'user' | 'model',
        parts: [{ text: msg.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: conversationHistory,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.8,
        },
      });

      const modelText = response.text;
      if (modelText) {
        setMessages(prev => [...prev, { role: 'model', text: String(modelText) }]);
      }
    } catch (error: any) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Trenutno sem zaseden. Piši mi na pici@aiuniverza.si!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-[90] bg-brand-gold text-black p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all border border-white/20"
      >
        {isOpen ? <X size={24} /> : (
          <div className="relative">
             <MessageCircle size={24} />
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
             </span>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-36 md:bottom-24 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-[350px] h-[500px] bg-black border border-white/10 rounded-2xl shadow-2xl z-[90] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-brand-gold p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot size={18} className="text-black" />
              <span className="text-black font-black text-xs uppercase tracking-widest">AI Svetovalec</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black/60 hover:text-black">
              <X size={18} />
            </button>
          </div>

          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${
                  msg.role === 'user' ? 'bg-brand-gold text-black font-bold' : 'bg-white/5 text-gray-200 border border-white/10'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                   <Loader2 size={14} className="text-brand-gold animate-spin" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Vprašaj me karkoli..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-4 pr-10 text-xs text-white focus:outline-none focus:border-brand-gold transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-gold disabled:text-gray-600"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};