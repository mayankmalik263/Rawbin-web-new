'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BarChart3 } from 'lucide-react';

export default function ImpactSection() {
  return (
    <section id="why-compost" className="relative bg-bg-secondary w-full py-16 md:py-24 border-t border-black/5 z-10">
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Link href="/roe-calculator" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-nc-text px-8 py-4 rounded-2xl font-bold text-center tracking-wide inline-flex items-center gap-2 cursor-pointer"
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
              <BarChart3 className="w-5 h-5 text-nc-text" /> CALCULATE YOUR IMPACT
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
