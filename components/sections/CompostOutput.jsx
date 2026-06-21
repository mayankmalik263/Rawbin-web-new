'use client';
import { motion } from 'framer-motion';

export default function CompostOutput() {
  const cards = [
    { icon: "🌿", title: "Balcony Plants", desc: "Show urban apartments using compost." },
    { icon: "🌱", title: "Kitchen Herbs", desc: "Mint. Basil. Coriander. Indoor gardening." },
    { icon: "🌳", title: "Home Gardens", desc: "Flower beds. Vegetable patches. Trees." },
    { icon: "🏘️", title: "Community Gardens", desc: "Shared green spaces. Neighborhood initiatives." },
    { icon: "🎁", title: "Gift It Forward", desc: "Share compost with friends, family, and local communities." },
    { icon: "🚜", title: "Urban Farming", desc: "Support larger-scale local growing initiatives." }
  ];

  return (
    <section className="bg-nc-text text-white py-24 border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 text-white"
          >
            Where Does The Compost Go Next?
          </motion.h2>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group"
            >
              <div className="text-4xl mb-6 bg-white/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3">{card.title}</h4>
              <p className="text-white/60 font-medium leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
