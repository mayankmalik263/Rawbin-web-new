'use client';
import { motion } from 'framer-motion';
import { 
  WindIcon, 
  ThreeLeavesIcon, 
  IndiaIcon
} from '@/components/icons';

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-[#FBFAF6] py-20 md:py-28 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: The Narrative & Journey */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-bold tracking-widest text-[#1F5A3F] uppercase mb-4"
            >
              The Rawbin Story
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-nc-text leading-[1.25] tracking-tight mb-8"
            >
              From a Messy Chore to a <span className="font-serif italic text-primary block sm:inline">Seamless Habit</span>
            </motion.h2>

            <div className="space-y-6 text-base md:text-lg text-text-muted font-medium leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Rawbin’s journey began in 2021 in Bengaluru during the lockdowns. Surrounded by rotting kitchen scraps and dealing with bad odors and fruit flies in standard bins, founder Anu Khandelwal realized that traditional composting was too messy and demanding for modern apartment living.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                We spent two years testing prototypes, researching how to process unique Indian culinary scraps—which are uniquely oil-heavy, moisture-rich, and filled with acidic spices (like turmeric, citrus, and onion skins).
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-[#1F5A3F] font-bold"
              >
                The result is a countertop appliance that balances moisture, controls temperature cycles, and reduces a 60-day process to 7 odorless days.
              </motion.p>
            </div>
          </div>

          {/* Right Column: Engineering Milestones Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Card 1: Engineered for India */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center flex-shrink-0 border border-black/5 shadow-xs">
                <ThreeLeavesIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-lg md:text-xl text-nc-text mb-2">Engineered for Indian Cuisines</h4>
                <p className="text-text-muted text-sm md:text-base font-medium leading-relaxed">
                  Indian kitchen leftovers are heavy in oil, moisture, and spices (turmeric, citrus peels, onion skins) which break down slowly in traditional bins. Rawbin uses high-torque grinding blades and active thermal drying to handle these tough food profiles effortlessly.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Dual-Stage Filtration */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1], delay: 0.1 }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center flex-shrink-0 border border-black/5 shadow-xs">
                <WindIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-lg md:text-xl text-nc-text mb-2">Odor-Free Countertop Design</h4>
                <p className="text-text-muted text-sm md:text-base font-medium leading-relaxed">
                  To fit seamlessly on your kitchen counter, Rawbin runs whisper-quietly and completely odor-free. Our dual-stage activated carbon filters trap volatile organic compounds (VOCs) and sulfur particles at their source, keeping your air fresh.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Tested & Recognized */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1], delay: 0.2 }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3EC] text-[#1F5A3F] flex items-center justify-center flex-shrink-0 border border-black/5 shadow-xs">
                <IndiaIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-lg md:text-xl text-nc-text mb-2">From Bengaluru Pilots to Global Headlines</h4>
                <p className="text-text-muted text-sm md:text-base font-medium leading-relaxed">
                  What began as pilot deployments in Bengaluru residential communities was validated globally. In September 2024, our founder’s waste-tech work was featured in a special edition of <span className="font-bold text-nc-text">The New York Times</span> print newspaper during Climate Week NYC, representing decentralized Indian circular innovation.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
