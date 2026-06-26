'use client';
import { motion } from 'framer-motion';
import {
  WindIcon,
  HomeIcon,
  RecycleLeafIcon,
  FourArrowRecycleIcon,
  IntelligentIcon,
  GlobeIcon,
  MaintenanceIcon,
  BatteryIcon,
  IndiaIcon
} from '@/components/icons';

export default function WhyRawbin() {
  const benefits = [
    { icon: <WindIcon />, title: "Odor-Free", desc: "Advanced carbon filtration eliminates any smell." },
    { icon: <HomeIcon />, title: "Apartment Friendly", desc: "Compact design fits any modern urban home." },
    { icon: <RecycleLeafIcon />, title: "Fast Composting", desc: "From leftovers to compost in as little as 7 days." },
    { icon: <FourArrowRecycleIcon />, title: "Circular Living", desc: "Close the loop between kitchen and garden." },
    { icon: <IntelligentIcon />, title: "Intelligent Composting", desc: "Auto-regulates temperature and moisture." },
    { icon: <GlobeIcon />, title: "Real Climate Impact", desc: "1500 kg CO₂e prevented per household per year." },
    { icon: <MaintenanceIcon />, title: "Minimal Maintenance", desc: "Designed to run with near-zero intervention." },
    { icon: <BatteryIcon />, title: "Energy Efficient", desc: "Uses less power than a standard LED bulb." }
  ];

  return (
    <section id="why-rawbin" className="bg-white py-24 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 text-nc-text"
          >
            Why Thousands Are Choosing<br/>
            <span className="text-primary">Smarter Composting</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-bg-alt p-6 rounded-2xl border border-black/5 hover:-translate-y-1 transition-transform"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm border border-black/5 ${i % 2 === 1 ? 'bg-accent-lilac-soft/25 text-accent-lilac' : 'bg-[#EAF3EC] text-[#1F5A3F]'}`}>
                {benefit.icon}
              </div>
              <h4 className="font-extrabold text-lg mb-2 text-nc-text">{benefit.title}</h4>
              <p className="text-text-muted text-sm font-medium leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Made In India Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-bg-alt rounded-3xl p-8 md:p-12 border border-black/5 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center flex-shrink-0 shadow-sm border border-accent-brown/30">
            <IndiaIcon className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-black mb-2 text-nc-text">Designed & Engineered in India</h3>
            <p className="text-text-muted font-medium leading-relaxed">
              Built specifically for Indian homes, lifestyles, climate conditions, and organic waste patterns. 
              A modern composting solution created for the way India lives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
