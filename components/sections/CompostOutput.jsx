'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, Heart, Eye, Instagram } from 'lucide-react';
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

  const reels = [
    {
      link: "https://www.instagram.com/reel/DX60vemoTSt/",
      title: "Clean Kitchen Setup",
      caption: "See how Rawbin fits beautifully into modern Indian kitchens.",
      views: "14.2K",
      likes: "1,120",
      gradient: "from-purple-900/40 via-indigo-950/30 to-slate-900/40"
    },
    {
      link: "https://www.instagram.com/reel/DYZua7shjNJ/",
      title: "Balcony Herb Harvesting",
      caption: "Real-world utility: Feeding organic balcony tomato & mint plants.",
      views: "22.8K",
      likes: "1,840",
      gradient: "from-emerald-950/40 via-teal-900/30 to-zinc-900/40"
    },
    {
      link: "https://www.instagram.com/reel/DZFYb2AM6gK/",
      title: "Unboxing & First Scrap",
      caption: "Unboxing the premium appliance and starting the first 7-day batch.",
      views: "18.5K",
      likes: "1,452",
      gradient: "from-amber-950/40 via-stone-900/30 to-neutral-900/40"
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

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-20 max-w-5xl mx-auto" />

        {/* Sub-section Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-black mb-2 text-white">
            What&apos;s Going On in the Rawbin Community
          </h3>
          <p className="text-lg text-white/60">
            Real setups, unboxing stories, and direct garden utility shared by Rawbin owners.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reels.map((reel, idx) => (
            <motion.a
              key={idx}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b ${reel.gradient} backdrop-blur-md p-6 flex flex-col justify-between group shadow-lg`}
            >
              {/* Glassmorphic card design background lines */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none z-0" />
              
              {/* Top Header Mockup */}
              <div className="flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/80">
                    R
                  </div>
                  <span className="text-xs font-semibold text-white/80">@rawbin.in</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 group-hover:bg-accent-brown group-hover:border-transparent transition-all duration-300 shadow-md">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Details Overlay */}
              <div className="z-10 bg-black/35 backdrop-blur-md p-4 rounded-2xl border border-white/5 mt-auto">
                <h5 className="text-sm font-bold text-white mb-1.5">{reel.title}</h5>
                <p className="text-white/70 text-xs font-medium leading-relaxed font-sans mb-3">
                  {reel.caption}
                </p>
                <div className="flex items-center gap-4 text-[11px] font-semibold text-white/80 border-t border-white/10 pt-2.5">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-accent-brown-soft fill-accent-brown-soft/20" />
                    {reel.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-white/60" />
                    {reel.views}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Profile Redirection Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/rawbin.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-accent-brown/30 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm group hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4 text-accent-brown-soft group-hover:scale-110 transition-transform" />
            Follow @rawbin.in on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
