'use client';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

export default function SocialProof() {
  const reviews = [
    {
      name: "Priya S.",
      location: "Bengaluru",
      rating: 5,
      text: "This completely changed how I deal with kitchen waste. I live in a 2BHK apartment, and there is absolutely zero smell. The compost goes straight to my balcony plants!"
    },
    {
      name: "Rahul M.",
      location: "Mumbai",
      rating: 5,
      text: "Was skeptical about the 'no odor' claim, but it's true. It sits right next to our fridge. So easy to use, just drop in the leftovers and forget about it."
    },
    {
      name: "Anjali K.",
      location: "Delhi",
      rating: 5,
      text: "Finally, a composting solution that doesn't feel like a science experiment! It's clean, quiet, and fits perfectly in our modern kitchen."
    }
  ];

  return (
    <section className="bg-bg-alt py-24 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            Wall of 💚
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted"
          >
            Don&apos;t just take our word for it. Hear from the community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm"
            >
              <div className="flex gap-1 text-[#FFB800] mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-nc-text font-medium leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-nc-text flex items-center gap-1">
                    {review.name}
                    <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded ml-1">Verified</span>
                  </div>
                  <div className="text-xs text-text-muted">{review.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Mentions */}
        <div className="bg-white rounded-3xl p-10 border border-black/5 text-center mb-16">
          <h6 className="text-xs font-bold text-text-very-muted uppercase tracking-[2px] mb-8">As Seen In</h6>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            <span className="text-[#999] text-xl font-black uppercase tracking-wider">THE HINDU</span>
            <span className="text-[#999] text-xl font-black uppercase tracking-wider">YOURSTORY</span>
            <span className="text-[#999] text-xl font-black uppercase tracking-wider">INC42</span>
            <span className="text-[#999] text-xl font-black uppercase tracking-wider">ECONOMIC TIMES</span>
            <span className="text-[#999] text-xl font-black uppercase tracking-wider">BUSINESS STANDARD</span>
          </div>
        </div>

        {/* Blogs Placeholder */}
        <div className="text-center">
          <button className="flex items-center gap-2 mx-auto text-nc-text font-bold text-sm hover:text-primary transition-colors">
            Read our Composting Guides & Blogs <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
