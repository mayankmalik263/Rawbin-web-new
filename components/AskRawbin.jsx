'use client';
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SproutIcon } from '@/components/icons';

export default function AskRawbin() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'init',
      sender: 'bot',
      text: "Hi there! I'm here to help you learn about Rawbin, composting, or assist with your order. How can I help today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  const suggestedPrompts = [
    "What can I compost?",
    "Will Rawbin smell?",
    "How much compost will I get?",
    "Is Rawbin right for my home?",
    "How much electricity does it use?"
  ];

  const qaDatabase = {
    "what can i compost?": "Rawbin can process almost all organic kitchen leftovers! This includes fruits, vegetables, food peels, coffee grounds, tea leaves, eggshells, bread, cooked leftovers, and grains. Keep out plastic, metal, glass, chemicals, large quantities of oil, and non-organic materials.",
    "will rawbin smell?": "Not at all! Rawbin is designed with an advanced carbon filtration system that neutralizes organic odors completely, making it 100% odor-free and perfect for indoor use.",
    "how much compost will i get?": "Rawbin reduces the volume of food waste by up to 90%! From 3kg of leftovers, you will harvest about 300g of nutrient-rich, dry organic compost that is ready to use for your garden or balcony plants.",
    "is rawbin right for my home?": "Yes! Rawbin is compact, apartment-friendly, and runs whisper-quietly. It's designed to fit beautifully on modern Indian kitchen counters or balconies.",
    "how much electricity does it use?": "Rawbin is highly energy efficient. It consumes less than 4 units of electricity per month under normal operation — which costs less than a standard LED bulb!"
  };

  const getBotResponse = (userText) => {
    const text = userText.toLowerCase().trim();
    
    // Check direct matches first
    if (qaDatabase[text]) {
      return qaDatabase[text];
    }
    
    // Keyword match logic
    if (text.includes("citrus") || text.includes("peel") || text.includes("orange") || text.includes("lemon")) {
      return "Yes! Rawbin can easily process fruit peels, including citrus and banana peels, turning them into high-quality compost.";
    }
    if (text.includes("bone") || text.includes("meat") || text.includes("chicken") || text.includes("fish")) {
      return "Rawbin can compost cooked meat and small/soft food leftovers. However, please avoid adding large, hard bones (like beef or large mutton bones) as they can stress the stirring mechanism.";
    }
    if (text.includes("egg") || text.includes("eggshell")) {
      return "Yes! Eggshells are excellent for composting with Rawbin. They break down easily and add valuable calcium to your final compost output.";
    }
    if (text.includes("smell") || text.includes("odor") || text.includes("stink") || text.includes("scent")) {
      return "Rawbin uses an active carbon filtration system that neutralizes all composting smells. Your kitchen remains completely clean and odor-free.";
    }
    if (text.includes("electricity") || text.includes("power") || text.includes("energy") || text.includes("bill") || text.includes("watt")) {
      return "Rawbin is extremely energy-efficient, consuming less than 4 units of electricity per month. This is comparable to running a small LED bulb.";
    }
    if (text.includes("price") || text.includes("cost") || text.includes("buy") || text.includes("order") || text.includes("purchase")) {
      return "You can buy Rawbin directly from our website! Simply scroll down to the checkout section and click 'I'M READY TO COMPOST' to place your order.";
    }
    if (text.includes("how long") || text.includes("days") || text.includes("time") || text.includes("fast") || text.includes("speed")) {
      return "Rawbin accelerates the natural composting cycle. It transforms kitchen leftovers into dry, nutrient-rich compost in just 7 days!";
    }
    if (text.includes("capacity") || text.includes("how much") || text.includes("size") || text.includes("kg")) {
      return "Rawbin is designed with a 3kg capacity, which comfortably handles the daily organic kitchen waste of a standard family of 4 to 6 members.";
    }
    if (text.includes("plastic") || text.includes("metal") || text.includes("glass") || text.includes("chemical") || text.includes("oil")) {
      return "These items must be kept out of Rawbin! Plastics, metals, glass, chemical cleaners, and large quantities of liquid oil cannot be composted and may damage the unit.";
    }
    if (text.includes("hi") || text.includes("hello") || text.includes("hey")) {
      return "Hello! How can I help you today? Ask me about compostable items, power usage, or how Rawbin works!";
    }
    
    return "That's a great question! Rawbin is built to handle everyday organic kitchen leftovers. You can see the full list of YES/NO items under the 'What Can Rawbin Transform?' section, or check the 'Technology' page for engineering details.";
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = { id: Date.now() + '-user', sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing and reply
    setTimeout(() => {
      const replyText = getBotResponse(text);
      const botMsg = { id: Date.now() + '-bot', sender: 'bot', text: replyText };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

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
            className="fixed bottom-24 right-6 md:bottom-28 md:right-10 w-[350px] max-h-[500px] bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
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
            
            {/* Message History */}
            <div className="p-5 flex-1 bg-bg-alt overflow-y-auto flex flex-col gap-4 h-[300px]">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`p-3 rounded-xl shadow-xs text-sm font-medium max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-primary text-nc-text self-end rounded-tr-sm'
                      : 'bg-white border border-black/5 text-nc-text self-start rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              
              {isTyping && (
                <div className="p-3 bg-white border border-black/5 rounded-xl rounded-tl-sm shadow-xs self-start flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-[#1F5A3F]/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-[#1F5A3F]/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-[#1F5A3F]/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              )}
              
              <div ref={messagesEndRef} />
              
              {messages.length === 1 && !isTyping && (
                <div className="flex flex-col gap-2 mt-2">
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Suggested Questions</p>
                  {suggestedPrompts.map((prompt, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleSend(prompt)}
                      className="text-left bg-white border border-primary/20 text-nc-text text-sm p-2.5 rounded-lg hover:bg-primary/5 transition-colors font-medium shadow-xs"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Input Box */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="p-3 bg-white border-t border-black/5 flex gap-2"
            >
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..." 
                className="flex-1 bg-bg-alt rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50 text-nc-text font-medium"
              />
              <button 
                type="submit"
                className="w-10 h-10 bg-primary text-nc-text rounded-full flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
