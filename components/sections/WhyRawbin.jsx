'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
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
              <div className="w-12 h-12 rounded-full bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center mb-4 shadow-sm border border-black/5">
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
          className="bg-bg-alt rounded-3xl p-8 md:p-12 border border-black/5 flex flex-col md:flex-row items-center gap-8 mb-20"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center flex-shrink-0 shadow-sm border border-black/5">
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

        {/* Community Impact Counter */}
        <CommunityImpact />
      </div>
    </section>
  );
}

function CommunityImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { target: 12400, label: "Organic Matter Processed (kg)", suffix: "+" },
    { target: 8800, label: "CO₂e Prevented (kg)", suffix: "+" },
    { target: 3200, label: "Compost Generated (kg)", suffix: "+" },
    { target: 480, label: "Active Households", suffix: "+" }
  ];

  return (
    <div ref={ref}>
      <div className="text-center mb-10">
        <h3 className="text-3xl font-black mb-2 text-nc-text">Rawbin Community Impact</h3>
        <p className="text-text-muted">Join a movement of modern homes taking real climate action.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-primary/5 p-6 rounded-2xl border border-primary/20 text-center">
            <div className="text-3xl md:text-4xl font-black text-primary mb-2">
              <Counter from={0} to={stat.target} inView={isInView} duration={2} />
              {stat.suffix}
            </div>
            <div className="text-sm font-bold text-nc-text uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Counter({ from, to, inView, duration }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return <span>{count.toLocaleString()}</span>;
}
