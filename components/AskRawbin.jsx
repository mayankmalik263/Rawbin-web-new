'use client';
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SproutIcon } from '@/components/icons';

export default function AskRawbin() {
  const [isOpen, setIsOpen] = useState(false);

  const suggestedPrompts = [
    "What can I compost?",
    "Will Rawbin smell?",
    "How much compost will I get?",
    "Is Rawbin right for my home?",
    "How much electricity does it use?"
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-primary text-nc-text p-4 rounded-full shadow-[0_10px_20px_rgba(93,234,93,0.3)] hover:shadow-[0_15px_25px_rgba(93,234,93,0.4)] hover:-translate-y-1 transition-all z-50 flex items-center gap-2 group"
      >
        <MessageCircle size={24} />
        <span className="font-bold hidden md:block">ASK RAWBIN</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 md:bottom-28 md:right-10 w-[350px] bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden z-50 flex flex-col"
          >
            <div className="bg-primary p-4 flex justify-between items-center text-nc-text">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-nc-text">
                  <SproutIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold leading-tight">Ask Rawbin</h3>
                  <p className="text-xs opacity-80 font-medium">Product Information & Support</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-black/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-5 flex-1 bg-bg-alt h-[300px] overflow-y-auto">
              <div className="bg-white p-3 rounded-xl rounded-tl-sm shadow-sm inline-block max-w-[85%] text-sm font-medium mb-4">
                Hi there! I&apos;m here to help you learn about Rawbin, composting, or assist with your order. How can I help today?
              </div>
              
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Suggested Questions</p>
                {suggestedPrompts.map((prompt, i) => (
                  <button key={i} className="text-left bg-white border border-primary/20 text-nc-text text-sm p-2.5 rounded-lg hover:bg-primary/5 transition-colors font-medium">
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-3 bg-white border-t border-black/5 flex gap-2">
              <input 
                type="text" 
                placeholder="Type your question..." 
                className="flex-1 bg-bg-alt rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="w-10 h-10 bg-primary text-nc-text rounded-full flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
