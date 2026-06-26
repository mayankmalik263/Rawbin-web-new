'use client';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import {
  AppleIcon,
  VeggiesIcon,
  PeelIcon,
  CoffeeIcon,
  TeaIcon,
  EggIcon,
  BreadIcon,
  SoupIcon,
  GrainsIcon,
  SproutIcon,
  PlasticIcon,
  MetalIcon,
  GlassIcon,
  ChemicalIcon,
  OilIcon,
  NonOrganicIcon
} from '@/components/icons';

export default function TransformSection() {
  const yesItems = [
    { icon: <AppleIcon className="w-5 h-5" />, label: "Fruits" },
    { icon: <VeggiesIcon className="w-5 h-5" />, label: "Vegetables" },
    { icon: <PeelIcon className="w-5 h-5" />, label: "Peels" },
    { icon: <CoffeeIcon className="w-5 h-5" />, label: "Coffee Grounds" },
    { icon: <TeaIcon className="w-5 h-5" />, label: "Tea Leaves" },
    { icon: <EggIcon className="w-5 h-5" />, label: "Eggshells" },
    { icon: <BreadIcon className="w-5 h-5" />, label: "Bread" },
    { icon: <SoupIcon className="w-5 h-5" />, label: "Cooked Food Leftovers" },
    { icon: <GrainsIcon className="w-5 h-5" />, label: "Grains" },
    { icon: <SproutIcon className="w-5 h-5" />, label: "Organic Kitchen Leftovers" }
  ];

  const noItems = [
    { icon: <PlasticIcon className="w-5 h-5" />, label: "Plastic" },
    { icon: <MetalIcon className="w-5 h-5" />, label: "Metal" },
    { icon: <GlassIcon className="w-5 h-5" />, label: "Glass" },
    { icon: <ChemicalIcon className="w-5 h-5" />, label: "Chemical Cleaners" },
    { icon: <OilIcon className="w-5 h-5" />, label: "Large Quantities of Oil" },
    { icon: <NonOrganicIcon className="w-5 h-5" />, label: "Non-Organic Materials" }
  ];

  return (
    <section className="bg-bg-alt py-24 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 text-nc-text"
          >
            What Can Rawbin Transform?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted"
          >
            Everything organic from your kitchen — nothing that isn't.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* YES Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Check size={24} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-nc-text">YES — Goes In Rawbin</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {yesItems.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.03, y: -1, x: 2, transition: { type: 'spring', stiffness: 450, damping: 15 } }}
                  className="flex items-center gap-3 bg-bg-alt p-3 rounded-xl border border-black/5 cursor-default"
                >
                  <div className="text-[#1F5A3F] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-bold text-sm text-nc-text">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NO Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full -z-0"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                <X size={24} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-nc-text">NO — Keep Out</h3>
            </div>
            
            <div className="flex flex-col gap-3 relative z-10">
              {noItems.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.025, y: -1, x: 2, transition: { type: 'spring', stiffness: 450, damping: 15 } }}
                  className="flex items-center gap-4 bg-bg-alt p-4 rounded-xl border border-black/5 cursor-default"
                >
                  <div className="text-red-500 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-bold text-sm text-nc-text">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
