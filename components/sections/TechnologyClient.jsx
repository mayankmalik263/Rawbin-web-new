'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Cpu, ShieldCheck, ThermometerSnowflake, RefreshCw } from 'lucide-react';
import { GearIcon, BoltIcon, WindIcon } from '@/components/icons';

export default function TechnologyClient() {
  const features = [
    {
      icon: Cpu,
      title: "Intelligent Sensor Array",
      subtitle: "Microclimate Self-Regulation",
      desc: "Driven by advanced sensors and automated microclimate regulation. These sensors monitor temperature, moisture, and humidity in real-time, making micro-adjustments to keep composting microbes at peak performance. A sensor-driven LED on top blinks when your compost is ready."
    },
    {
      icon: ThermometerSnowflake,
      title: "Smart Heat-Saving System",
      subtitle: "Dynamic Thermal Adaptability",
      desc: "Rawbin features a sensor-driven internal heater. If the device detects a warm external environment (like direct sunlight on a balcony or a warm kitchen corner), the heater automatically scales down power. It doesn't waste energy if the environment is doing the job for it."
    },
    {
      icon: ShieldCheck,
      title: "Perfect Blend of Nature & Tech",
      subtitle: "Triple Biological Cycle Integration",
      desc: "Composting happens in 3 distinct biological phases: Mesophilic, Thermophilic, and Mesophilic again. Rawbin seamlessly integrates all three. It structurally retains maximum heat inside to sustain thermophilic microbes and eliminates odor by providing optimal oxygen flow via a timed internal stirrer."
    },
    {
      icon: RefreshCw,
      title: "Closed-Loop 'Curd-Milk' Model",
      subtitle: "Self-Sustaining Inoculum Starter",
      desc: "Rather than forcing you to repeatedly buy chemical inoculants or starters, Rawbin works like a sourdough starter or curd-milk. A handful of your previous compost batch is mixed with the new waste to inoculate the system. The only external resource it requires is about 4 units of electricity per month."
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FBFAF6] font-sans text-nc-text">
      <div className="max-w-[1180px] mx-auto px-5">
        
        {/* Title block */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 bg-[#F0EAE1] text-nc-text font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-black/5 mb-6"
          >
            <GearIcon className="w-3.5 h-3.5 text-[#1F5A3F]" />
            <span>Rawbin Intelligence</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4"
          >
            Composting, Engineered for Modern Homes
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted leading-relaxed"
          >
            Deep dive into the advanced sensor technologies, microclimate dynamics, and smart loop systems that make Rawbin India's premier indoor home composter.
          </motion.p>
        </div>

        {/* Hero Section Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-sm">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black leading-tight">
              The Science of Accelerated Decarbonization
            </h2>
            
            <p className="text-text-muted leading-relaxed">
              Standard composting takes months, generates foul odors, and requires constant manual aeration. Rawbin compresses this entire cycle into a clean, 7-day automated kitchen process.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-6 rounded-3xl border border-black/5 flex flex-col items-start shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center mb-3 shadow-xs border border-black/5">
                  <BoltIcon className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-1 text-nc-text">Ultra Efficient</h4>
                <p className="text-xs text-text-muted">Consumes less than 4 units of electricity per month.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-black/5 flex flex-col items-start shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center mb-3 shadow-xs border border-black/5">
                  <WindIcon className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-1 text-nc-text">Odor-Free System</h4>
                <p className="text-xs text-text-muted">Advanced carbon filtration neutralizes organic odors.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center relative w-full h-[280px]">
            <Image 
              src="/images/environment.svg" 
              alt="Rawbin ecological cycle mechanism diagram"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Tech Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feat, i) => {
            const IconComponent = feat.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-text-very-muted uppercase tracking-widest block">{feat.subtitle}</span>
                    <h3 className="text-lg font-black">{feat.title}</h3>
                  </div>
                </div>
                
                <p className="text-sm text-text-muted leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/" className="text-sm font-bold text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
