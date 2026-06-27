'use client';
import { motion } from 'framer-motion';
import {
  PlantPotIcon,
  HerbIcon,
  TreeIcon,
  CommunityIcon,
  GiftIcon,
  TractorIcon
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
    { icon: <PlantPotIcon className="w-8 h-8" />, title: "Balcony Plants", desc: "Show urban apartments using compost." },
    { icon: <HerbIcon className="w-8 h-8" />, title: "Kitchen Herbs", desc: "Mint. Basil. Coriander. Indoor gardening." },
    { icon: <TreeIcon className="w-8 h-8" />, title: "Home Gardens", desc: "Flower beds. Vegetable patches. Trees." },
    { icon: <CommunityIcon className="w-8 h-8" />, title: "Community Gardens", desc: "Shared green spaces. Neighborhood initiatives." },
    { icon: <GiftIcon className="w-8 h-8" />, title: "Gift It Forward", desc: "Share compost with friends, family, and local communities." },
    { icon: <TractorIcon className="w-8 h-8" />, title: "Urban Farming", desc: "Support larger-scale local growing initiatives." }
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.025, transition: { type: 'spring', stiffness: 380, damping: 18 } }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group cursor-default"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform mb-6 border ${
                i % 3 === 0 ? 'bg-white/10 text-white border-white/5' : 
                i % 3 === 1 ? 'bg-accent-lilac/20 text-accent-lilac-soft border-accent-lilac/20' :
                'bg-accent-brown/20 text-accent-brown-soft border-accent-brown/20'
              }`}>
                {card.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3">{card.title}</h4>
              <p className="text-white/60 font-medium leading-relaxed font-sans">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
