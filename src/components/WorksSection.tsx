'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { projects } from '@/data/projects';

export default function WorksSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="container mx-auto py-12 sm:py-24">
        <h2 className="section-title text-center text-4xl sm:text-6xl py-4">Selected Works</h2>
        <div className="space-y-24 sm:space-y-48 pt-12 pb-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col lg:flex-row items-stretch min-h-[80vh] lg:min-h-screen relative"
            >
              {/* Project Number - Left Side */}
              <div className="w-full lg:w-1/2 flex items-center justify-start p-6 sm:p-12">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-6xl sm:text-[8rem] font-bold leading-none text-gray-600">
                    {String(index + 1).padStart(2, '0')}
                  </h3>
                  <div className="space-y-4">
                    <h4 className="text-3xl sm:text-4xl font-bold text-black">{project.title}</h4>
                    <p className="text-lg sm:text-xl text-gray-600">{project.category}</p>
                    {/*<p className="text-gray-700 max-w-xl">{project.description}</p> */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-sm font-medium text-gray-600 border-2 border-gray-500 rounded-full px-3 sm:px-4 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Media - Right Side */}
              <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-full"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-md opacity-100 hover:rounded-lg hover:opacity-60 transition-opacity duration-250"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Cursor Button */}
      <motion.div
        className={`fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          transition: { type: "spring", mass: 0.2, stiffness: 100 }
        }}
      >
        <div className="bg-[#E5E5E5] text-black px-3 py-1.5 rounded text-sm font-normal flex items-center gap-1.5">
          <span>View</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </div>
  );
} 