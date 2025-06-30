'use client';

import { motion } from 'framer-motion';
// import Navbar from '@/components/Navbar';
import WorksSection from '@/components/WorksSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';

export default function Home() {
  // List of images in public/images (excluding .DS_Store and videos)
  const carouselImages = [
    '/images/wrn1.jpg',
    '/images/wrn2.jpg',
    '/images/wrn3.jpg',
    '/images/wrn4.jpg',
    '/images/enkang1.png',
    '/images/wellthi1.jpg',
    '/images/wellthi2.jpg',
    '/images/mr1.jpg',
    '/images/appsasa1.jpg',
    '/images/ms1.png',
    '/images/nudge1.jpg',
    '/images/nudge2.jpg',
    '/images/nudge3.jpg',
    '/images/nudge4.jpg',
    '/images/ud1.png',
    '/images/vct1.jpg',
    '/images/wellthi3.jpg',
    //'/images/wellthi4.jpg',   
    //'/images/wellthi 5.jpg',
    //'/images/enkang1.png',
    
    
  ];
  return (
    <>
      {/*<Navbar /> */}
      <main className='bg-[#FAFAFA]'>
        <section id="home" className="min-h-screen flex flex-col bg-white px-4">
          <Carousel images={carouselImages} />
          
          {/* Hero Section */}
          <div className='pt-36 pb-36 flex flex-col justify-center items-center px-0 sm:px-36'>
            <div className='flex flex-col gap-4 sm:px-64'> 
              <h2 className='text-xl text-gray-700 font-bold'>Nothing Extra. Just Great Design.</h2>
              <div className='text-black/70'>
                <ul className='space-y-3 text-base'>
                  <li>An independent design studio based in Nairobi, Kenya.</li>
                  <li>The whole team's locked up in the basement creating beautiful interfaces that look as good as they work.</li>
                  <li>Previously have worked with founders & businesses to help them create digital experiences that converts and boost growth of their business.</li>                  
                </ul>
              </div>


              <h2 className='text-xl text-gray-700 font-bold pt-32'>Services</h2>
              <div className='text-black/70'>
                <ul className='space-y-2 text-base'>
                  <li>Product design</li>
                  <li>Web & mobile design</li>
                  <li>Hero section roast </li>
                  <li>UX audits +design consultation</li>
                  <li>Design systems</li>                 
                </ul>
              </div>


              <h2 className='text-xl text-gray-700 font-bold pt-28'>Contact</h2>
              <div className='text-black/70'>
                <ul className='space-y-2 text-base'>
                  <li><a href='https://x.com/odumzeez'>Twitter</a></li>
                  <li><a href='mailto:adrianoduma8@gmail.com'>Email</a></li>                 
                </ul>
              </div>
            </div>       
          </div>  

          

          

          {/* Services
            <div className="pt-36 flex flex-col justify-center items-center">
                  <h2 className="text-xl font-bold text-gray-700">Services</h2>
                  <ul className="space-y-2 text-black/70 text-base">
                    <li>Product Design</li>
                    <li>Web & Mobile Design</li>
                    <li>Hero Section Roast</li>
                    <li>UX Audits + Design consultation</li>
                    <li>Design Systems</li>
                  </ul>
              </div>

              Contact 
              <div className="flex flex-col justify-center items-start gap-4 pt-24">
                  <h2 className="text-xl font-bold text-gray-700">Get in touch</h2>
                  <ul className="space-y-2 text-black/70 text-base">
                    
                  </ul>
              </div>   
              */}      
        </section>

        {/*
         Works Section 
        <section id="works" className="min-h-screen bg-[#F7F7F7]">
          <WorksSection />
        </section>

        {/* About Section 
        <section id="about" className="min-h-screen bg-[#F7F7F7]">
          <AboutSection />
        </section>

         Testimonials Section 
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        

        {/* Services Section 
        <section id="services" className="min-h-screen bg-[#F7F7F7] flex flex-col sm:flex-row items-start gap-6 sm:gap-0 px-2 sm:px-0">
          <ServicesSection />
        </section>
        */}

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

        {/* Contact Section 
        <section id="contact" className="min-h-screen bg-[#F7F7F7] flex flex-col sm:flex-row items-start gap-6 sm:gap-0 px-2 sm:px-0">
          <ContactSection />
        </section>
        */}
      </main>
      
      <Footer />
      
    </>
  );
}
