'use client';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Speed",
      rawbin: "7 days",
      traditional: "90–180 days",
      rawbinPositive: true
    },
    {
      feature: "Smell",
      rawbin: "None (Carbon Filtered)",
      traditional: "Strong, attracts flies",
      rawbinPositive: true
    },
    {
      feature: "Effort",
      rawbin: "One button, fully automatic",
      traditional: "Weekly turning by hand",
      rawbinPositive: true
    },
    {
      feature: "Indoors",
      rawbin: "Yes, sits on the counter",
      traditional: "No, outdoor only",
      rawbinPositive: true
    }
  ];

  return (
    <section id="comparison" className="bg-bg-secondary py-24 border-b border-black/5">
      <div className="max-w-[960px] mx-auto px-5">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-accent-lilac/15 text-accent-lilac font-bold px-4 py-1.5 rounded-full text-sm mb-6"
          >
            Us vs Them
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4 text-nc-text"
          >
            Rawbin vs. Traditional Composting
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            See how modern smart engineering compares to traditional composting methods.
          </motion.p>
        </div>

        {/* Table Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bg-main border border-black/5 rounded-[2rem] shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-black/5 bg-bg-alt/30">
                  <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider text-text-muted">Feature</th>
                  <th className="py-6 px-8 text-sm font-black uppercase tracking-wider text-[#1F5A3F] dark:text-[#45B900] bg-primary/5 text-center">Rawbin</th>
                  <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider text-text-muted text-center">Traditional Composting</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <motion.tr 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-b border-black/5 hover:bg-bg-alt/10 transition-colors"
                  >
                    {/* Feature Label */}
                    <td className="py-6 px-8 font-extrabold text-nc-text text-base md:text-lg">
                      {row.feature}
                    </td>

                    {/* Rawbin Spec */}
                    <td className="py-6 px-8 bg-primary/5 border-l border-r border-black/5 text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <span className="font-extrabold text-primary text-base md:text-lg">
                          {row.rawbin}
                        </span>
                        <span className="text-xs text-[#1F5A3F] dark:text-[#45B900] font-semibold flex items-center gap-1 mt-0.5">
                          <Check size={12} strokeWidth={3} /> Best in class
                        </span>
                      </div>
                    </td>

                    {/* Traditional Spec */}
                    <td className="py-6 px-8 text-center text-text-muted font-medium text-sm md:text-base">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <span>{row.traditional}</span>
                        <span className="text-xs text-red-500/80 font-semibold flex items-center gap-1 mt-0.5">
                          <X size={12} strokeWidth={3} /> Hard & Slow
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
