'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  PlantPotIcon,
  TreeIcon,
  GiftIcon
} from '@/components/icons';

export default function CompostOutput() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 240, damping: 22 } }
  };
  const cards = [
    { 
      icon: <PlantPotIcon className="w-8 h-8" />, 
      title: "Balcony Plants & Herbs", 
      desc: "Perfect for nourishing potted flowers, balcony planters, and fresh kitchen herb gardens in modern apartments.",
      img: "/images/compost-balcony.png"
    },
    { 
      icon: <TreeIcon className="w-8 h-8" />, 
      title: "Home Gardens", 
      desc: "Feeds flower beds, household lawns, and backyard organic vegetable patches.",
      img: "/images/compost-garden.png"
    },
    { 
      icon: <GiftIcon className="w-8 h-8" />, 
      title: "Gift It Forward", 
      desc: "Share surplus organic compost with neighbors, family, or local community nurseries.",
      img: "/images/compost-gift.png"
    }
  ];

  return (
    <section className="bg-nc-text text-white py-24 border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-2 text-white"
          >
            Where Does The Compost Go Next?
          </motion.h2>
          <div className="w-12 h-1 rounded-full bg-accent-brown mx-auto mb-4" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70"
          >
            Every leftover has a next life. Here&apos;s what that looks like.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.025, transition: { type: 'spring', stiffness: 380, damping: 18 } }}
              className="bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group overflow-hidden flex flex-col h-full cursor-default"
            >
              {/* Image Container */}
              <div className="relative w-full h-[220px] bg-white/5 overflow-hidden">
                <Image 
                  src={card.img} 
                  alt={card.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform mb-6 border ${
                  i % 3 === 0 ? 'bg-white/10 text-white border-white/5' : 
                  i % 3 === 1 ? 'bg-accent-lilac/20 text-accent-lilac-soft border-accent-lilac/20' :
                  'bg-accent-brown/20 text-accent-brown-soft border-accent-brown/20'
                }`}>
                  {card.icon}
                </div>
                <h4 className="text-2xl font-bold mb-3">{card.title}</h4>
                <p className="text-white/60 font-medium leading-relaxed font-sans text-sm">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
