'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
            className="inline-block border border-black/20 text-nc-text font-bold px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6"
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
                <div className="w-14 h-14 rounded-full bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center flex-shrink-0 shadow-sm border border-black/5">
                  {feature.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Product Image Wrapper */}
          <div className="relative w-[320px] h-[400px] lg:w-[420px] lg:h-[520px] flex items-center justify-center order-1 lg:order-2">
            {/* Circular Green Ring */}
            <div className="absolute w-[340px] h-[340px] lg:w-[440px] lg:h-[440px] border border-primary/20 rounded-full z-0 pointer-events-none"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-[280px] h-[360px] lg:w-[320px] lg:h-[420px] bg-gradient-to-b from-[#dbe0d8] to-[#bdc4b8] rounded-[2rem] border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex items-center justify-center relative z-10"
            >
              <div className="absolute inset-0 border-[16px] border-white/20 rounded-[2rem]"></div>
              <div className="text-text-muted font-bold text-sm uppercase tracking-wider relative z-20">Product View</div>
            </motion.div>
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
                <div className="w-14 h-14 rounded-full bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center flex-shrink-0 shadow-sm border border-black/5">
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
              className="bg-white p-8 rounded-3xl border border-black/5 hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center mb-6 border border-black/5 shadow-sm">
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
          <Link href="/technology" className="group flex items-center gap-2 bg-[#1a4226] text-white px-7 py-3.5 rounded-2xl font-bold tracking-wide hover:bg-black transition-all shadow-sm">
            Explore Technology
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
