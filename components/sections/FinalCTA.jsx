'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="order" className="bg-white py-24">
      <div className="max-w-[800px] mx-auto px-5 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-accent-lilac/15 text-accent-lilac px-4 py-2 rounded-full font-bold text-sm mb-8"
        >
          <span>🌿</span> Every Leftover Has a Next Life
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black mb-6"
        >
          Every Leftover<br/>Has a Next Life.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Join a growing community choosing a cleaner kitchen, healthier soil, and a more circular future.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
        >
          <button className="bg-primary text-nc-text px-10 py-5 rounded-full font-black text-lg tracking-wide shadow-[0_15px_30px_rgba(93,234,93,0.3)] hover:shadow-[0_20px_40px_rgba(93,234,93,0.4)] hover:-translate-y-1 transition-all">
            ORDER NOW
          </button>
          <Link href="#contact" className="bg-bg-alt text-nc-text border border-accent-brown/30 px-10 py-5 rounded-full font-bold text-lg tracking-wide hover:bg-black/5 hover:border-accent-brown/60 transition-all">
            CONTACT US
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-sm font-bold text-text-muted"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Check size={12} strokeWidth={4} /></div>
            Warranty Included
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Check size={12} strokeWidth={4} /></div>
            Dedicated Support
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Check size={12} strokeWidth={4} /></div>
            Secure Checkout
          </div>
        </motion.div>
      </div>
    </section>
  );
}
