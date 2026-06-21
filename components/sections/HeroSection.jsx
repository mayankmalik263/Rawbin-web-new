'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <>
      <section className="relative bg-bg-secondary w-full pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
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
    <section className="relative bg-white w-full py-16 md:py-24 border-t border-black/5 z-10">
      <div className="max-w-[1280px] mx-auto px-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-black/5 max-w-[700px]"
        >
          <h3 className="text-2xl md:text-3xl font-black mb-3 text-nc-text">What is Rawbin?</h3>
          <p className="text-text-muted mb-6 text-base md:text-lg">
            Rawbin is an intelligent home composting system that transforms kitchen leftovers into nutrient-rich compost with minimal effort. Simply add your leftovers, let Rawbin manage the composting process, and return valuable nutrients back to plants, soil, and nature.
          </p>
          <div className="border-t border-black/5 pt-6 italic text-nc-text font-medium text-sm md:text-base">
            &quot;For generations, nothing from the kitchen was truly discarded. Rawbin brings that circular way of living into modern homes through simple, effortless composting.&quot;
          </div>
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
