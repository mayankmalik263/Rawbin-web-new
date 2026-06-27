'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  ContainerIcon,
  RecycleLeafIcon,
  MuteIcon,
  BoltIcon,
  WindIcon,
  CpuIcon,
  LeafIcon,
  SensorIcon,
  ThreeLeavesIcon,
  FourArrowRecycleIcon,
  SproutIcon
} from '@/components/icons';

export default function EverythingYouNeedToKnow() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const productImages = [
    {
      src: '/images/rawbin-main-white-bg.jpeg',
      alt: 'Rawbin Smart Composter - Front View',
      label: 'Front View'
    },
    {
      src: '/images/rawbin-main-normal-bg.jpeg',
      alt: 'Rawbin Smart Composter - Home Setting',
      label: 'Home Setting'
    },
    {
      src: '/images/side-view.png',
      alt: 'Rawbin Smart Composter - Side View',
      label: 'Side View'
    },
    {
      src: '/images/back-view.png',
      alt: 'Rawbin Smart Composter - Back View',
      label: 'Back View'
    },
    {
      src: '/images/Top-Down-view.png',
      alt: 'Rawbin Smart Composter - Top-Down View',
      label: 'Top-Down View'
    }
  ];

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const featuresLeft = [
    { icon: <ContainerIcon />, title: "Capacity", desc: "Up to 3kg of everyday kitchen leftovers per cycle." },
    { icon: <RecycleLeafIcon />, title: "Cycle Time", desc: "Complete compost in as fast as 7 days." },
    { icon: <MuteIcon />, title: "Noise", desc: "Whisper-quiet operation (less than 35 dB)." }
  ];

  const featuresRight = [
    { icon: <BoltIcon />, title: "Power", desc: "Low energy consumption - just ~4 units per month." },
    { icon: <WindIcon />, title: "Odour", desc: "100% odour-free with advanced filtration." },
    { icon: <CpuIcon />, title: "Technology", desc: "Patented smart composting technology." }
  ];

  const highlights = [
    { icon: <LeafIcon />, title: "Perfect Blend of Technology & Nature", desc: "Combines natural biological processes with intelligent engineering." },
    { icon: <SensorIcon />, title: "Fitted with Intelligent Sensors", desc: "Continuously monitors internal conditions for optimal composting performance." },
    { icon: <ThreeLeavesIcon />, title: "Smart Heat Saving System", desc: "Designed to maximize efficiency while minimizing energy usage." },
    { icon: <FourArrowRecycleIcon />, title: "A Closed-Loop System", desc: "Transforms leftovers into nutrients and returns them back to nature." }
  ];

  return (
    <section className="bg-bg-alt py-24 border-b border-black/5 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-accent-brown/40 text-nc-text font-bold px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6"
          >
            Smart. Simple. Sustainable.
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4 text-nc-text"
          >
            Everything You Need To Know
          </motion.h2>
        </div>

        {/* Product Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 mb-24">
          
          {/* Left Features */}
          <div className="flex flex-col gap-10 w-full lg:w-[350px] order-2 lg:order-1">
            {featuresLeft.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex items-center gap-4 text-right justify-between ${i === 1 ? 'lg:-translate-x-8' : ''}`}
              >
                <div className="flex-1">
                  <h4 className="font-extrabold text-lg mb-1.5 text-nc-text">{feature.title}</h4>
                  <p className="text-text-muted text-sm font-medium leading-relaxed">{feature.desc}</p>
                </div>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-black/5 ${
                  i === 0 ? 'bg-[#EAF3EC] text-[#1F5A3F]' :
                  i === 1 ? 'bg-accent-lilac-soft/25 text-accent-lilac' :
                  'bg-accent-brown-soft/20 text-accent-brown dark:text-accent-brown-soft border-accent-brown/10'
                }`}>
                  {feature.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Product Image Wrapper */}
          <div className="relative w-[320px] h-[450px] lg:w-[420px] lg:h-[540px] flex flex-col items-center justify-center order-1 lg:order-2">
            {/* Circular Green Ring */}
            <div className="absolute w-[340px] h-[340px] lg:w-[440px] lg:h-[440px] border border-primary/20 rounded-full z-0 pointer-events-none top-[12px] lg:top-[38px]"></div>
            
            <div className="relative w-[280px] h-[360px] lg:w-[320px] lg:h-[420px] bg-bg-main rounded-[2rem] border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden z-10 flex items-center justify-center">
              {/* Outer glassmorphic frame */}
              <div className="absolute inset-0 border-[12px] border-white/40 rounded-[2rem] pointer-events-none z-30"></div>
              
              {/* Image Transition Slider */}
              <div className="relative w-full h-full p-6 flex items-center justify-center bg-bg-main z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full flex items-center justify-center rounded-2xl overflow-hidden"
                  >
                    <Image 
                      src={productImages[activeImageIndex].src} 
                      alt={productImages[activeImageIndex].alt} 
                      fill
                      priority
                      className="object-contain rounded-2xl"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Angle Label Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest text-white uppercase z-30 pointer-events-none">
                {productImages[activeImageIndex].label}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 text-nc-text flex items-center justify-center z-30 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 text-nc-text flex items-center justify-center z-30 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnail selector like Amazon */}
            <div className="flex gap-2.5 mt-5 z-20">
              {productImages.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-12 h-14 rounded-lg overflow-hidden border-2 transition-all bg-bg-main ${
                    activeImageIndex === idx ? 'border-primary shadow-xs scale-105' : 'border-black/5 hover:border-black/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image 
                    src={image.src} 
                    alt={`Thumbnail ${idx}`} 
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-10 w-full lg:w-[350px] order-3 lg:order-3">
            {featuresRight.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex items-center gap-4 text-left justify-between ${i === 1 ? 'lg:translate-x-8' : ''}`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-black/5 ${
                  i === 0 ? 'bg-accent-lilac-soft/25 text-accent-lilac' :
                  i === 1 ? 'bg-[#EAF3EC] text-[#1F5A3F]' :
                  'bg-accent-brown-soft/20 text-accent-brown dark:text-accent-brown-soft border-accent-brown/10'
                }`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-extrabold text-lg mb-1.5 text-nc-text">{feature.title}</h4>
                  <p className="text-text-muted text-sm font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Innovation Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.025, transition: { type: 'spring', stiffness: 400, damping: 18 } }}
              className="bg-bg-main p-8 rounded-3xl border border-black/5 cursor-default"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-black/5 shadow-sm ${
                i % 3 === 0 ? 'bg-[#EAF3EC] text-[#1F5A3F]' :
                i % 3 === 1 ? 'bg-accent-lilac-soft/25 text-accent-lilac' :
                'bg-accent-brown-soft/20 text-accent-brown dark:text-accent-brown-soft border-accent-brown/10'
              }`}>
                {item.icon}
              </div>
              <h4 className="font-extrabold text-lg leading-tight mb-3 text-nc-text">{item.title}</h4>
              <p className="text-text-muted text-sm font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#EAECE6] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto shadow-sm border border-black/5"
        >
          <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
            <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-[#1F5A3F] shadow-xs border border-black/5">
              <SproutIcon className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-extrabold text-xl text-nc-text">Designed for Modern Homes.</h4>
              <p className="text-text-muted text-sm font-medium">Advanced on the inside. Effortless on the outside.</p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Link href="/technology" className="group flex items-center gap-2 bg-[#1a4226] text-white px-7 py-3.5 rounded-2xl font-bold tracking-wide hover:bg-black transition-all shadow-sm">
              Explore Technology
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
