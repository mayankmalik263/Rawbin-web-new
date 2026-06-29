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
      text: "Hi there! 🌱 I'm here to help you learn about Rawbin, composting, or assist with your order. How can I help today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Conversation history for multi-turn chat (Groq API format)
  const [chatHistory, setChatHistory] = useState([]);
  
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);
  const buttonRef = useRef(null);

  const suggestedPrompts = [
    "What can I compost?",
    "Will Rawbin smell?",
    "How much does Rawbin cost?",
    "Is Rawbin right for my home?",
    "How much electricity does it use?"
  ];

  const handleSend = async (text) => {
    if (!text.trim()) return;

    // Add user message to UI
    const userMsg = { id: Date.now() + '-user', sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Update conversation history
    const updatedHistory = [...chatHistory, { role: 'user', content: text }];

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: chatHistory,
        }),
      });

      const data = await response.json();
      const replyText = data.reply || "I'm having trouble responding right now. Please try again!";

      // Add bot response to UI
      const botMsg = { id: Date.now() + '-bot', sender: 'bot', text: replyText };
      setMessages((prev) => [...prev, botMsg]);

      // Update conversation history with assistant response
      setChatHistory([...updatedHistory, { role: 'assistant', content: replyText }]);

    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg = {
        id: Date.now() + '-bot',
        sender: 'bot',
        text: "I'm having trouble connecting right now. Please try again or email compost@rawbin.in for help! 💚"
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        chatRef.current &&
        !chatRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Custom event listener for external chatbot triggers
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };
    window.addEventListener('open-rawbin-chat', handleOpenChat);
    return () => {
      window.removeEventListener('open-rawbin-chat', handleOpenChat);
    };
  }, []);

  return (
    <>
      <button 
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-primary text-nc-text p-4 rounded-full shadow-[0_10px_20px_rgba(93,234,93,0.3)] hover:shadow-[0_15px_25px_rgba(93,234,93,0.4)] hover:-translate-y-1 transition-all z-50 flex items-center gap-2 group"
      >
        <MessageCircle size={24} />
        <span className="font-bold hidden md:block">ASK RAWBIN</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            ref={chatRef}
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
                  <p className="text-xs opacity-80 font-medium">AI-Powered Product Support</p>
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
                  className={`p-3 rounded-xl shadow-xs text-sm font-medium max-w-[85%] leading-relaxed whitespace-pre-wrap ${
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
                disabled={isTyping}
                className="flex-1 bg-bg-alt rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50 text-nc-text font-medium disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className="w-10 h-10 bg-primary text-nc-text rounded-full flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
