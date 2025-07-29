'use client';

import { motion } from 'framer-motion';
import Carousel from '@/components/Carousel';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/next"

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // Add images of selected works here (excluding .DS_Store and videos)
  const carouselImages = [
    '/images/ob3.png',
    '/images/ob4.png',
    '/images/ob1.png',
    '/images/ob2.png',    
    '/images/wrn0.png',
    '/images/footer0.png',
    '/images/wellthi0.png', 
    '/images/appsasa0.png', 
    '/images/zenlipa0.png',  
    '/images/enkang0.png',
    '/images/nudge01.png',
    '/images/vct0.png',
    '/images/minesweeper01.png',
    '/images/glass0.png',
    //'/images/minesweeper0.png',
    //'/images/nudge02.png',    
    '/images/mookh0.png',
    '/images/wellthi02.png', 
    '/images/pricing0.png',  
    '/images/unhinged01.png',
    '/images/unhinged02.png',
     
  ];

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openCalModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.Cal) {
      window.Cal('open', { url: 'https://cal.com/odumzeez/first15' });
    }
  };

  return (
    
    <div className="bg-[#181818] min-h-screen w-full flex flex-col md:flex-row  ">
      <Analytics  />

      {/* Mobile Header (hidden on desktop) */}
      <header className="md:hidden px-6 pt-4">
        <div className="flex justify-between items-center w-[700px] md:w-full">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
            <Image src="/ctrlZlogo2.png" alt="ctrlZ logo" width={70} height={30} />
          </a>
        </div>

      </header>


      {/* Main Content - Web version */}
      <main className="bg-[#181818] w-full min-h-screen flex flex-col pl-0 pt-2 md:pt-0 md:flex-row md:pl-8">
        
        {/* Left Side */}
        <div className="w-full h-[620px] z-50 md:z-0 md:w-[30%] pt-8 pr-6 pl-6 md:pl-4 md:pr-4 md:h-screen md:top-0 justify-start items-start md:justify-between md:items-start md:sticky md:overflow-y-auto">

          <div className="flex flex-col gap-10 justify-start md:justify-between items-start md:items-start">
            <div  className="flex flex-col gap-0 justify-start items-start">
              {/* Logo */}
              <div className="hidden md:block pt-0 mb-8">
                <a href='https://ctrlzs.studio/'>
                <Image src="/ctrlZlogo2.png" alt="ctrlZ logo" width={85} height={30} />
                </a>
                
              </div>
              {/* Headline */}
              <h1 className="text-xl font-semibold text-white mb-4 md:mb-8">Design that looks good, but<br />works even better.</h1>
              {/* Subtext */}
              <div className="text-sm text-gray-400 mb-2 md:mb-8">
                <p className="mb-4">Independent design studio based in Nairobi, Kenya.</p>
                <p className="mb-4">Whole team is locked up (willingly) in the basement - designing interfaces that look as good as they work.</p>
                <p className="mb-2">We've helped founders, startups, and brands discover<br />how they want their online presence to look and feel.</p>
              </div>
              {/* Services List */}
              <div className="mb-0 md:mb-12">
                <div className="text-gray-400 text-sm mb-4 md:md-4">We do everything design-related that includes:</div>
                <ul className="space-y-1 text-sm text-white">
                  <li>+ Product design</li>
                  <li>+ Web & mobile design</li>
                  <li>+ Design systems</li>
                  <li>+ Landing page roasts</li>
                  <li>+ UX audits & consultation</li>
                </ul>
              </div>

            </div>
            

            <div className='relative md:gap-4 md:absolute bottom-0 md:bottom-0 left-0 md:left-0 right-0 md:right-0 px-0 md:pl-4 pb-0 md:pb-8'>
              {/* Tagline */}
              <div className="text-gray-400 text-sm mb-6 md:mb-6">Open to serious projects. Or seriously fun ones.</div>
              {/* Button */}

              <div className='flex flex-row gap-2 mb-2 sm:flex-row md:gap-2 md:mb-4'>
                <button
                  onClick={openModal}
                  className="bg-white text-black rounded-full px-1 py-3 md:px-6 md:py-3 font-semibold text-sm mb-2 md:mb-4 hover:bg-[#D9D9D9] transition-colors duration-100 w-full sm:w-auto text-center md:hover:bg-[#D9D9D9] md:transition-colors md:duration-100"
                >
                  Schedule a Call
                </button>

                <a href="mailto:adrianoduma8@gmail.com" className="bg-[#353535] text-white rounded-full px-2 py-3 md:px-5 md:py-3 font-semibold text-sm mb-2 md:mb-4 hover:bg-[#454545] transition-colors duration-100 w-full sm:w-auto text-center md:hover:bg-[#454545] md:transition-colors md:duration-100">Drop an Email</a>
                
              </div>
              
              
              {/* Client Logos */}
              <div className="flex flex-row gap-8 items-center opacity-80 py-4 md:mb-4">
                <Image src="/wellthilogo.png" alt="wellthi" width={95} height={110} />
                <Image src="/mookhlogo.png" alt="mookh" width={85} height={110}   />
                <Image src="/wrnlogo.png" alt="we run nairobi" width={135} height={110}  />
              </div>
            </div>
          </div>

        </div>


        {/* Right Side: Vertical Carousel */}
        <div className="w-full md:w-[70%] max-h-[100%] md:max-h-[100%] md:relative flex justify-center md:justify-center items-center md:items-center">
          <Carousel images={carouselImages} direction="vertical" />
        </div>


        {/* Cal.com Calendar Modal*/}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
            <div className="relative rounded-xl w-full max-w-6xl h-[85vh]">
              <button
                className="fixed top-8 right-8 text-white text-4xl z-[1000] font-light hover:text-[#808080] transition-colors duration-200"
                onClick={closeModal}
              >
                &times;
              </button>
              <iframe
                src="https://cal.com/odumzeez/first15"
                allow="camera; microphone; fullscreen; speaker; display-capture"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        )}

      </main>

    </div>

    
  );
}
