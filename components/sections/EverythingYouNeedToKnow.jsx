'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EverythingYouNeedToKnow() {
  const featuresLeft = [
    { title: "Capacity", desc: "Up to 3kg of everyday kitchen leftovers per cycle." },
    { title: "Cycle Time", desc: "Complete compost in as fast as 7 days." },
    { title: "Noise", desc: "Whisper-quiet operation (less than 35 dB)." }
  ];

  const featuresRight = [
    { title: "Power", desc: "Low energy consumption - just ~4 units per month." },
    { title: "Odour", desc: "100% odour-free with advanced filtration." },
    { title: "Technology", desc: "Patented smart composting technology." }
  ];

  const highlights = [
    { icon: "🌱", title: "Perfect Blend of Technology & Nature", desc: "Combines natural biological processes with intelligent engineering." },
    { icon: "📡", title: "Fitted with Intelligent Sensors", desc: "Continuously monitors internal conditions for optimal composting performance." },
    { icon: "🔥", title: "Smart Heat Saving System", desc: "Designed to maximize efficiency while minimizing energy usage." },
    { icon: "♻️", title: "A Closed-Loop System", desc: "Transforms leftovers into nutrients and returns them back to nature." }
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
            className="text-4xl md:text-5xl font-black mb-4"
          >
            Everything You Need To Know
          </motion.h2>
        </div>

        {/* Product Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 mb-24">
          
          {/* Left Features */}
          <div className="flex flex-col gap-8 w-full lg:w-[350px] order-2 lg:order-1 text-center lg:text-right">
            {featuresLeft.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white p-6 rounded-2xl border border-black/5 shadow-sm ${i === 1 ? 'lg:-translate-x-8' : ''}`}
              >
                <h4 className="font-black text-lg mb-2">{feature.title}</h4>
                <p className="text-text-muted text-sm font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] bg-white rounded-[3rem] border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-center relative order-1 lg:order-2 z-10"
          >
            <div className="absolute inset-0 border-[20px] border-bg-alt/50 rounded-[3rem]"></div>
            <div className="text-text-muted font-bold text-lg uppercase tracking-wider">Product View</div>
          </motion.div>

          {/* Right Features */}
          <div className="flex flex-col gap-8 w-full lg:w-[350px] order-3 lg:order-3 text-center lg:text-left">
            {featuresRight.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white p-6 rounded-2xl border border-black/5 shadow-sm ${i === 1 ? 'lg:translate-x-8' : ''}`}
              >
                <h4 className="font-black text-lg mb-2">{feature.title}</h4>
                <p className="text-text-muted text-sm font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Innovation Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-black/5 hover:-translate-y-1 transition-transform"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="font-black text-lg leading-tight mb-3">{item.title}</h4>
              <p className="text-text-muted text-sm font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/technology" className="group flex items-center gap-2 bg-nc-text text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-black transition-colors">
            EXPLORE TECHNOLOGY 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
