'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import WorksSection from '@/components/WorksSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-0">
          <div className="container text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm sm:text-base font-inter font-md border border-black/30 rounded-full px-3 sm:px-4 py-1 inline-flex items-center gap-2 text-black/80 mb-6 sm:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-7xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 text-[#1A1A1A]"
            >
              ADRIAN ODUMA
            </motion.h1>
            {/*
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative text-4xl text-gray-500 font-bold mb-10"
            >
              UX Designer + Fullstack Developer
            </motion.p>
            */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-4xl mx-auto px-4 sm:px-6"
            >
              I help growing startups & brands realise their vision through premium designs & results-driven solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center gap-6 sm:gap-8"
            >
              <a
                href="https://calendly.com/adrianoduma8"
                className="btn px-6 sm:px-10 py-3 sm:py-4 mb-4 text-lg sm:text-lg text-white bg-[#1A1A1A] hover:bg-black/80 transition-colors w-full sm:w-auto"
              >
                Book a Call
              </a>
              <div className="flex gap-10 sm:gap-10 text-[#424242] pt-2 flex-wrap justify-center">
                <a href="https://www.figma.com/proto/8VG79gmkk2mOnLMC4mUYqa/Oduma's-Design-Work?page-id=0%3A1&node-id=1-1514&viewport=483%2C40%2C0.04&t=mJpDmBGQtRfOQE7M-1&scaling=scale-down-width&content-scaling=fixed" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z"/>
                  </svg>
                </a>
                <a href="https://github.com/Odushhh" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/adrian-oduma-4374a4252/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a href="https://x.com/odumzeez" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg>
                </a>
                <a href="https://behance.net/adrianoduma" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"/>
                  </svg>
                </a>
                
                
              </div>
            </motion.div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="min-h-screen">
          <WorksSection />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen">
          <AboutSection />
        </section>

        {/* Testimonials Section 
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        */}

        {/* Services Section */}
        <section id="services" className="min-h-screen">
          <ServicesSection />
        </section>

        {/* Book Call Section 
        <section className="py-20 bg-[#E1E1E1]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-inter font-md border border-black/30 rounded-full px-4 py-1 inline-flex items-center gap-2 text-black/80 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for work
            </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-bold mb-6"
              >
                Let's talk about your projects
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-black/80 mb-12"
              >
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a
                  href="https://calendly.com/adrianoduma8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-8 py-4 text-white bg-[#1A1A1A] text-lg hover:bg-black/80 transition-colors inline-block"
                >
                  Book a Call
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        */}

        {/* Contact Section */}
        <section id="contact" className="min-h-screen">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
      
    </>
  );
}
