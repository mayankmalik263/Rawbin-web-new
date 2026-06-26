'use client';
import { motion } from 'framer-motion';
import { SproutIcon, BoltIcon } from '@/components/icons';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#F0EAE1] text-nc-text py-2.5 overflow-hidden relative border-b border-black/5 text-[13px] font-semibold">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          className="flex gap-10 min-w-full items-center"
          animate={{ x: [0, -1100] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          <span className="inline-flex items-center gap-2 px-10">
            <SproutIcon className="w-4 h-4 text-[#1F5A3F]" /> 
            One Rawbin prevents up to 1500 kg CO₂e emissions/year
          </span>
          <span className="inline-flex items-center gap-2 px-10">
            <BoltIcon className="w-4 h-4 text-[#1F5A3F]" /> 
            Batch #2 launching soon • Join the waitlist for priority access
          </span>
          <span className="inline-flex items-center gap-2 px-10">
            <SproutIcon className="w-4 h-4 text-[#1F5A3F]" /> 
            One Rawbin prevents up to 1500 kg CO₂e emissions/year
          </span>
          <span className="inline-flex items-center gap-2 px-10">
            <BoltIcon className="w-4 h-4 text-[#1F5A3F]" /> 
            Batch #2 launching soon • Join the waitlist for priority access
          </span>
        </motion.div>
      </div>
    </div>
  );
}
