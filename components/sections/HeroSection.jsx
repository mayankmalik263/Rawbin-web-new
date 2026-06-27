'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { IndiaIcon } from '@/components/icons';

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
        <div className="max-w-[1280px] mx-auto px-5 pt-12 pb-6 md:pt-20 md:pb-10 lg:py-24 relative z-20">
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
              className="text-lg md:text-xl text-text-muted font-medium mb-10 max-w-[550px]"
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

        {/* Background Image Container - absolute full-bleed on desktop, relative card on mobile/tablet */}
        <div className="relative lg:absolute inset-0 w-full h-[320px] sm:h-[450px] lg:h-full pb-12 lg:pb-0 px-5 lg:px-0 z-0">
          <div className="relative w-full h-full rounded-3xl lg:rounded-none overflow-hidden shadow-lg lg:shadow-none border border-black/5 lg:border-none">
            <Image 
              src="/images/new_hero_bg.png" 
              alt="Rawbin in modern kitchen" 
              fill
              priority
              className="object-cover object-[75%_center] lg:object-[80%_center]"
            />
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

    {/* Impact Section / Results Panel */}
    <section className="relative bg-bg-secondary w-full py-16 md:py-24 border-t border-black/5 z-10">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-nc-text">One Small Habit. A Lasting Impact.</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Rawbin helps keep valuable organic matter out of landfills and returns nutrients back to nature through a simple circular process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { value: "1,500kg", label: "CO₂ saved a year", color: "text-primary dark:text-[#45B900]", glow: "hover:shadow-[0_0_30px_rgba(69,185,0,0.15)]", border: "border-primary/20 dark:border-[#45B900]/25" },
            { value: "90%", label: "less waste by volume", color: "text-accent-brown dark:text-accent-brown-soft", glow: "hover:shadow-[0_0_30px_rgba(92,64,51,0.15)]", border: "border-accent-brown/20 dark:border-accent-brown-soft/25" },
            { value: "7 days", label: "start to finished compost", color: "text-accent-lilac dark:text-[#C8B4D6]", glow: "hover:shadow-[0_0_30px_rgba(166,139,191,0.2)]", border: "border-accent-lilac/25 dark:border-[#C8B4D6]/25" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 350, damping: 15 } }}
              className={`bg-bg-main p-8 rounded-3xl border border-black/5 ${stat.border} text-center shadow-xs transition-all ${stat.glow} cursor-default`}
            >
              <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-3`}>{stat.value}</div>
              <div className="text-sm md:text-base font-bold text-nc-text">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
