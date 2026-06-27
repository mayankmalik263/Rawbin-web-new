'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { IndiaIcon } from '@/components/icons';

export default function HeroSection() {
  return (
    <>
      <section className="relative bg-[#F9F5F3] w-full overflow-hidden">
        {/* Frosted Glass Pane - desktop only */}
        <div 
          className="hidden lg:block absolute left-0 top-0 w-[65%] h-full bg-white/10 backdrop-blur-[10px] z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] pointer-events-none" 
          style={{
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
          }}
        />

        {/* Content Container */}
        <div className="max-w-[1280px] mx-auto px-5 py-20 md:py-32 lg:py-24 relative z-20">
          <div className="lg:w-[50%]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 bg-[#F0EAE1]/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-accent-brown/40 font-bold text-xs md:text-sm text-nc-text mb-8 shadow-xs"
            >
              <IndiaIcon className="w-4 h-4 text-[#1F5A3F]" />
              <span>India&apos;s First Smart Home Composter</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-nc-text leading-[1.3] tracking-tight mb-6"
            >
              <span className="block mb-[2px]">YOUR FRIDGE GOT SMART.</span>
              <span className="block mb-[2px]">YOUR OVEN GOT SMART.</span>
              <span className="block mb-[2px]">YOUR BIN DIDN&apos;T.</span>
              <span className="block text-primary mt-3">UNTIL NOW.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-accent-brown dark:text-[#EAF3EC] font-bold mb-10 max-w-[550px]"
            >
              Transform food scraps into compost, effortlessly using Rawbin.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#order"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-nc-text px-8 py-4 rounded-2xl font-bold text-center tracking-wide"
                style={{ boxShadow: '0 4px 14px rgba(69,185,0,0.35)' }}
                animate={{
                  boxShadow: [
                    '0 4px 14px rgba(69,185,0,0.30)',
                    '0 8px 28px rgba(69,185,0,0.55)',
                    '0 4px 14px rgba(69,185,0,0.30)',
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  },
                  type: 'spring',
                  stiffness: 400,
                  damping: 20
                }}
              >
                I&apos;M READY TO COMPOST
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex items-center justify-center gap-3 bg-primary text-nc-text px-8 py-4 rounded-2xl font-bold tracking-wide shadow-[0_4px_14px_rgba(69,185,0,0.3)]"
              >
                <span className="w-8 h-6 bg-[#FF0000] rounded-md flex items-center justify-center text-white">
                  <Play size={12} fill="white" className="ml-[2px]" />
                </span>
                WATCH HOW IT WORKS
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Background Image Container - absolute full-bleed on all viewport sizes */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/new_hero_bg.png" 
            alt="Rawbin in modern kitchen" 
            fill
            priority
            className="object-cover object-[75%_center] lg:object-[80%_center]"
          />

        </div>
      </section>

    </>
  );
}
