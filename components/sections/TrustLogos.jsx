'use client';
import { motion } from 'framer-motion';

export default function TrustLogos() {
  const partners = [
    "AIC Banasthali", "MeitY", "NSRCEL", 
    "Women Climate Collective", "NIDHI Prayas", 
    "PIEDS BITS Pilani", "SIDBI", "EarthON", "QWENI by Qualcomm"
  ];

  return (
    <section className="bg-white py-16 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-5 text-center">
        <h6 className="text-[10px] font-bold text-text-very-muted uppercase tracking-[2px] mb-10">
          Trusted by Leading Innovation & Sustainability Ecosystems
        </h6>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-[#999] text-sm md:text-base font-black uppercase tracking-wider opacity-60 hover:opacity-100 hover:text-nc-text hover:scale-105 transition-all duration-300 cursor-default select-none"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
