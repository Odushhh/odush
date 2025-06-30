'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'UI/UX Design',
    description: 'Craft digital experiences that speak directly to your users. I design user-centric interfaces that not only look beautiful but feel effortless to use—driving engagement, trust, and results',
    features: ['Responsive UI Design', 'Wireframing & Prototyping', 'Usability Testing'],
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Bring designs to life with clean, performant code. I build responsive, accessible, and pixel-perfect interfaces that leave a lasting impression—keeping users coming back for more.',
    features: ['React & Next.js', 'Frontend Development', 'Responsive Design', 'Performance Optimization'],
  },
  {
    id: 3,
    title: 'Web Design & Development',
    description: 'Turn bold ideas into fast, functional, and responsive websites. I build solid web foundations that perform flawlessly across devices—so your business is always one step ahead online.',
    features: ['Component Libraries', 'Design Guidelines', 'Design-to-Code', 'Documentation'],
  },
  {
    id: 4,
    title: 'Design Systems',
    description: 'Create visual harmony at scale. I develop flexible design systems that streamline collaboration, boost consistency, and empower teams to build faster without compromising on quality.',
    features: ['Component Libraries', 'Design Guidelines', 'Design-to-Code', 'Documentation'],
  },
];

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="container mx-auto px-4 py-16 sm:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-6xl font-bold mb-10 sm:mb-20 text-center"
        >
          My Expertise 
        </motion.h2>
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`bg-white p-4 sm:p-8 cursor-pointer transition-all duration-500 ease-in-out rounded-lg ${
                expandedId === service.id ? 'min-h-[140px] sm:min-h-[200px]' : 'min-h-[80px] sm:min-h-[100px]'
              }`}
              onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-4 gap-2 sm:gap-0">
                <h3 className="text-2xl sm:text-5xl text-gray-600 font-semibold">{service.title}</h3>
                <motion.span
                  animate={{ rotate: expandedId === service.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl sm:text-3xl"
                >
                  {expandedId === service.id ? '×' : '+'}
                </motion.span>
              </div>
              <motion.div
                initial={false}
                animate={{
                  height: expandedId === service.id ? 'auto' : 0,
                  opacity: expandedId === service.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-black text-base sm:text-xl font-medium leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 