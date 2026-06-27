'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  BoltIcon,
  SproutIcon,
  HomeIcon,
  FourArrowRecycleIcon
} from '@/components/icons';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      img: "/images/image1.png",
      title: "Add Your Leftovers",
      desc: "Drop in fruit peels, vegetable scraps, coffee grounds, tea leaves, and everyday kitchen leftovers."
    },
    {
      number: "02",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      img: "/images/image2.png",
      title: "Rawbin Does The Work",
      desc: "Rawbin intelligently manages the composting process to create ideal conditions for transformation."
    },
    {
      number: "03",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22S7 15 7 10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10C17 15 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      img: "/images/image3.png",
      title: "Harvest Living Compost",
      desc: "Collect nutrient-rich compost ready to nourish plants, gardens, balconies, community green spaces, and urban greenery."
    }
  ];

  return (
    <section id="how-it-works" className="bg-bg-main py-24 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-accent-lilac/15 text-accent-lilac font-bold px-4 py-1.5 rounded-full text-sm mb-6"
          >
            How It Works
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4 text-nc-text"
          >
            Composting Shouldn&apos;t Feel Like Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted"
          >
            Three simple steps. One powerful transformation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.015, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
              className="bg-bg-main rounded-3xl border border-black/5 shadow-sm hover:shadow-hover transition-shadow group overflow-hidden flex flex-col h-full cursor-default"
            >
              {/* Image Container */}
              <div className="relative w-full h-[260px] bg-bg-alt overflow-hidden">
                <Image 
                  src={step.img} 
                  alt={step.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`text-4xl font-black text-black/20 transition-colors ${
                      i === 0 ? 'group-hover:text-primary/20' :
                      i === 1 ? 'group-hover:text-accent-lilac/20' :
                      'group-hover:text-accent-brown/25 dark:group-hover:text-accent-brown-soft/25'
                    }`}>
                      {step.number}
                    </div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all border border-black/5 ${
                      i === 0 ? 'bg-[#EAF3EC] text-[#1F5A3F]' :
                      i === 1 ? 'bg-accent-lilac-soft/25 text-accent-lilac' :
                      'bg-accent-brown-soft/20 text-accent-brown dark:text-accent-brown-soft border-accent-brown/10'
                    }`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-nc-text">{step.title}</h3>
                  <p className="text-text-muted font-medium leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 bg-bg-alt p-6 rounded-2xl border border-black/5"
        >
          {[
            { icon: <BoltIcon className="w-5 h-5" />, text: "Minimal Effort" },
            { icon: <SproutIcon className="w-5 h-5" />, text: "Nutrient-Rich Compost" },
            { icon: <HomeIcon className="w-5 h-5" />, text: "Designed for Modern Homes" },
            { icon: <FourArrowRecycleIcon className="w-5 h-5" />, text: "Circular Living" }
          ].map((benefit, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.04, y: -2, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
              className="flex items-center gap-3 font-bold text-nc-text px-4 py-2.5 bg-bg-main rounded-xl shadow-sm border border-black/5 border-l-2 border-l-accent-brown/40 cursor-default"
            >
              <div className="text-[#1F5A3F] flex items-center justify-center">
                {benefit.icon}
              </div>
              <span>{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
