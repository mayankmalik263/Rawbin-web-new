'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    { q: "What is Rawbin?", a: "Rawbin is an intelligent home composting system that transforms kitchen leftovers into nutrient-rich compost with minimal effort." },
    { q: "What do I do with the compost?", a: "You can use the compost for your indoor plants, outdoor gardens, community gardens, or even gift it to neighbors." },
    { q: "Rawbin vs Traditional Composting?", a: "Unlike traditional composting which can take months, attract pests, and produce odors, Rawbin uses smart technology to create compost in just a few days, completely odor-free and mess-free." },
    { q: "Does Rawbin smell?", a: "No, Rawbin is designed to be 100% odor-free using advanced carbon filtration and bio-transform technology." },
    { q: "Does Rawbin attract pests?", a: "No, the closed-loop system is completely sealed, preventing any pests or insects from accessing the organic matter." },
    { q: "How much electricity does Rawbin use?", a: "Rawbin is highly energy efficient, using just ~4 units of electricity per month, which is less power than a standard LED bulb over the same period." },
    { q: "How do I clean Rawbin?", a: "The inner bucket is easily removable and can be washed with mild soap and water or placed in a dishwasher." },
    { q: "What is the size and capacity of Rawbin?", a: "Rawbin handles up to 3kg of everyday kitchen leftovers per cycle and features a compact design perfect for modern apartments." },
    { q: "What is the expected life of Rawbin?", a: "Built with durable, high-quality materials, Rawbin is engineered to last for years of daily use." },
    { q: "How do I use Rawbin properly?", a: "Simply open the lid, add your organic kitchen leftovers, close it, and let Rawbin's intelligent sensors take over. That's it!" },
    { q: "What maintenance is required?", a: "Rawbin requires near-zero intervention. The only maintenance needed is occasionally replacing the carbon filter to maintain its odor-free operation." },
    { q: "What warranty does Rawbin include?", a: "Rawbin comes with a comprehensive 1-year warranty covering any manufacturing defects or operational issues." }
  ];

  return (
    <section id="faqs" className="bg-white py-24 border-b border-black/5">
      <div className="max-w-[800px] mx-auto px-5">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted"
          >
            Everything you have wondered, answered.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Disclosure>
                {({ open }) => (
                  <div className={`border ${open ? 'border-accent-lilac' : 'border-black/10'} rounded-2xl overflow-hidden transition-colors`}>
                    <Disclosure.Button className={`w-full flex justify-between items-center p-6 text-left ${open ? 'bg-accent-lilac/5' : 'bg-white hover:bg-bg-alt'} transition-colors`}>
                      <span className="font-bold text-lg text-nc-text pr-8">{faq.q}</span>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${open ? 'bg-accent-lilac text-white' : 'bg-bg-alt text-nc-text'}`}>
                        {open ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </Disclosure.Button>
                    <AnimatePresence>
                      {open && (
                        <Disclosure.Panel static as={motion.div}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-text-muted font-medium bg-accent-lilac/5 leading-relaxed">
                            {faq.a}
                          </div>
                        </Disclosure.Panel>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
