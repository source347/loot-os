import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Define process.env for TypeScript since Vite replaces it at build time
declare const process: {
  env: {
    API_KEY?: string;
  }
};

// Simple Markdown renderer component (Text only for safety/simplicity in this context)
const MarkdownText = ({ text }: { text: string }) => {
    return <div className="whitespace-pre-wrap text-sm">{text}</div>
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const CryptoOracle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Greetings, Loot Hunter! I am the Crypto Oracle. Ask me how to maximize your earnings from these sites." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Check for API key securely
      const apiKey = process.env.API_KEY;
      
      if (!apiKey) {
         // Fallback if no key is present (common in static GitHub Pages demos without secrets)
         setTimeout(() => {
             setMessages(prev => [...prev, { 
                 role: 'model', 
                 text: "I'm currently in 'Static Mode' because the API Key is missing from the environment. In a live build with an API_KEY, I would use Gemini 2.5 Flash to analyze your request! Try asking about: 'Which faucet pays the most?'" 
             }]);
             setIsLoading(false);
         }, 1000);
         return;
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Contextual prompt
      const systemInstruction = "You are the 'Crypto Oracle', a helpful assistant for a website called LootLoop. " +
        "The website lists crypto faucets, mining nodes, and task sites. " +
        "Be brief, fun, and use gamer slang (loot, grind, xp). " +
        "Do not recommend investment advice. Focus on how to use the sites listed on the page.";

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })), // History
            { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
            systemInstruction: systemInstruction
        }
      });

      const text = response.text || "I ran out of mana! Try again later.";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Oracle Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection severed. The blockchain spirits are quiet." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-neon-pink to-purple-600 text-white shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white dark:bg-card-dark rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-neon-pink to-purple-600 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white font-bold">
              <Bot size={20} />
              <span>Crypto Oracle</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-void-dark/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none'
                }`}>
                  <MarkdownText text={msg.text} />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-xl rounded-bl-none border border-slate-200 dark:border-slate-700">
                  <Loader2 className="animate-spin text-purple-500" size={16} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-card-dark border-t border-slate-200 dark:border-slate-700">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about crypto..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};