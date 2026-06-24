'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function HeroSection() {
  const [mousePos1, setMousePos1] = useState({ x: 0, y: 0 });
  const [isHovered1, setIsHovered1] = useState(false);

  const [mousePos2, setMousePos2] = useState({ x: 0, y: 0 });
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseMove1 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos1({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove2 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos2({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <>
      <section className="relative bg-bg-secondary w-full pt-12 pb-12 md:pt-20 md:pb-20 overflow-hidden">
      {/* Background Image - optimized for both mobile and desktop */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-50 md:opacity-100">
        <Image 
          src="/images/hero-bg.png" 
          alt="Rawbin in modern kitchen" 
          fill
          priority
          className="object-cover object-right-bottom"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 relative z-10">
        <div className="max-w-[650px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#F0EAE1]/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-nc-dgreen/30 font-bold text-xs md:text-sm text-nc-text mb-8"
          >
            <span>🇮🇳</span> India&apos;s First Smart Home Composter
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-nc-text leading-[1.05] tracking-tight mb-6"
          >
            <span className="block"><span className="text-primary">YOUR</span> KITCHEN.</span>
            <span className="block"><span className="text-primary">YOUR</span> COMPOST.</span>
            <span className="block"><span className="text-primary">YOUR</span> GARDEN.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-nc-text mb-4"
          >
            No smell. No mess. Easy composting.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-text-muted font-medium mb-10 max-w-[500px]"
          >
            Rawbin transforms everyday leftovers into nutrient-rich compost automatically, helping you close the loop between what you consume and what you grow.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#order" className="bg-primary text-nc-text px-8 py-4 rounded-2xl font-bold text-center tracking-wide hover:shadow-hover hover:-translate-y-1 transition-all shadow-[0_4px_14px_rgba(69,185,0,0.3)]">
              I&apos;M READY TO COMPOST
            </a>
            <button className="flex items-center justify-center gap-3 bg-primary text-nc-text px-8 py-4 rounded-2xl font-bold tracking-wide hover:shadow-hover hover:-translate-y-1 transition-all shadow-[0_4px_14px_rgba(69,185,0,0.3)]">
              <span className="w-8 h-6 bg-[#FF0000] rounded-md flex items-center justify-center text-white">
                <Play size={12} fill="white" className="ml-[2px]" />
              </span>
              WATCH HOW IT WORKS
            </button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* What is Rawbin Section */}
    <section style={{ background: '#FBFAF6', borderTop: '1px solid rgba(0,0,0,.05)' }} className="w-full py-16 md:py-20 relative z-10">
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '28px' }}>
        
        {/* Card 1: What is Rawbin */}
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 0.8, 0.3, 1] }}
          onMouseMove={handleMouseMove1}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: '#fff',
            border: '1px solid rgba(0,0,0,.06)',
            borderRadius: '24px',
            padding: '38px',
            boxShadow: '0 14px 40px rgba(0,0,0,.04)'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(31,168,77,0.14), transparent 70%)',
              transform: 'translate(-50%, -50%)',
              left: `${mousePos1.x}px`,
              top: `${mousePos1.y}px`,
              opacity: isHovered1 ? 1 : 0,
              transition: 'opacity 0.35s ease',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />
          <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '14px', position: 'relative', zIndex: 1 }} className="text-nc-text">What is Rawbin?</h3>
          <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#5A564E', position: 'relative', zIndex: 1 }}>
            Rawbin is an intelligent home composting system that transforms kitchen leftovers into nutrient-rich compost with minimal effort. Simply add your leftovers, let Rawbin manage the process, and return valuable nutrients back to plants, soil, and nature.
          </p>
        </motion.div>

        {/* Card 2: The Circular Way */}
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 0.8, 0.3, 1], delay: 0.1 }}
          onMouseMove={handleMouseMove2}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg,#13241A,#1C3A28)',
            color: '#EAF3EC',
            borderRadius: '24px',
            padding: '38px',
            boxShadow: '0 14px 40px rgba(19,36,26,.18)'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124,232,154,0.16), transparent 70%)',
              transform: 'translate(-50%, -50%)',
              left: `${mousePos2.x}px`,
              top: `${mousePos2.y}px`,
              opacity: isHovered2 ? 1 : 0,
              transition: 'opacity 0.35s ease',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />
          <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#7CE89A', marginBottom: '14px', position: 'relative', zIndex: 1 }}>
            The circular way
          </div>
          <p style={{ fontSize: '21px', lineHeight: 1.5, fontWeight: 500, position: 'relative', zIndex: 1, fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}>
            For generations, nothing from the kitchen was truly discarded. Rawbin brings that circular way of living into modern homes — through simple, effortless composting.
          </p>
        </motion.div>

      </div>
    </section>

    {/* Impact Section */}
    <section className="relative bg-bg-secondary w-full py-16 md:py-24 border-t border-black/5 z-10">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">One Small Habit. A Lasting Impact.</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            <span className="font-bold text-nc-text">🌱 Up to 1500 kg CO₂e prevented every year.</span><br/>
            Rawbin helps keep valuable organic matter out of landfills and returns nutrients back to nature through a simple circular process.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "1500 kg", label: "CO₂e prevented annually" },
            { value: "365+", label: "Days of climate action every year" },
            { value: "100%", label: "Organic matter processed at source" },
            { value: "7 Days", label: "To nutrient-rich compost" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-black/5 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
