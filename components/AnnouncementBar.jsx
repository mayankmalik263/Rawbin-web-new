'use client';
import { motion } from 'framer-motion';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#FAF4E8] text-nc-text py-2.5 overflow-hidden relative border-b border-black/5 text-[13px] font-semibold">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          className="flex gap-10 min-w-full"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          <span className="px-10">🌱 One Rawbin prevents up to 1500 kg CO₂e emissions/year</span>
          <span className="px-10">🔥 Batch #2 launching soon • Join the waitlist for priority access</span>
          <span className="px-10">🌱 One Rawbin prevents up to 1500 kg CO₂e emissions/year</span>
          <span className="px-10">🔥 Batch #2 launching soon • Join the waitlist for priority access</span>
        </motion.div>
      </div>
    </div>
  );
}
