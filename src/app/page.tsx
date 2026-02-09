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
    '/images/mookh1.png',
    '/images/mookh2.png',
    '/images/exness1.png',
    '/images/WRN1.png',
    '/images/WRN2.png',
    '/images/chpter02.png',
    '/images/chpterQS2.png',
    '/images/eventapp3.png',
    '/images/eventapp3b.png',
    '/images/astral1.png',
    '/images/ob1.png',
    '/images/ob2.png', 
    '/images/chpter01.png',
    '/images/footer0.png',
    '/images/wellthi0.png', 
    '/images/wellthi02.png', 
    '/images/zenlipa0.png', 
    '/images/appsasa0.png', 
    '/images/nudge01.png',
    '/images/enkang0.png',  
    '/images/vct0.png',
    '/images/minesweeper01.png',
    '/images/glass0.png', 
    '/images/mookh0.png',
    '/images/pricing0.png',  
    '/images/unhinged01.png',
    '/images/unhinged02.png',

    //'/images/wrn01.png',
    // '/images/wrn02.png',
    // '/images/ob3.png',
    // '/images/ob4.png', 
    //'/images/minesweeper0.png',
    //'/images/nudge02.png',  
    //'/images/eventapp1.png',
     
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
    
    <div className="bg-[#181818] min-h-screen w-full flex flex-col lg:flex-row  ">
      <Analytics  />

      {/* Mobile Header (hidden on desktop) */}
      <header className="lg:hidden md:hidden px-6 pt-4 sticky top-0 z-50 bg-[#181818]">
        <div className="flex justify-between items-center w-full">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
            {/* <p className="font-normal text-base text-gray-400 tracking-tight md:tracking-tight lg:tracking-tight xl:tracking-tight">Adrian Oduma</p> */}
            <Image src="/ctrlZlogo2.png" alt="ctrlZ logo" width={70} height={30} className="w-auto h-6"/>
          </a>
        </div>

      </header>


      {/* Main Content - Web version */}
      <main className="bg-[#181818] w-full flex flex-col pl-0 pt-2 lg:pt-0 lg:flex-row lg:pl-8">
        
        {/* Left Side */}
        <div className="w-full h-[620px] z-50 lg:z-0 lg:w-[30%] xl:w-[30%] pt-8 pr-6 pl-6 lg:pl-4 lg:pr-4 lg:h-screen lg:top-0 justify-start items-start lg:justify-between lg:items-start md:sticky lg:sticky xl:sticky lg:overflow-y-auto">

          <div className="flex flex-col gap-10 justify-start items-start lg:justify-between lg:items-start lg:min-h-[calc(100vh-2rem)] lg:pb-8">
            <div  className="flex flex-col gap-0 justify-start items-start">
              {/* Logo */}
              <div className="hidden md:block lg:block lg:mb-6 md:mb-8 xl:mb-6 pt-0 mb-8">
                <a href='https://ctrlzs.studio/'>
                  {/*<p className="font-normal text-base text-gray-400 tracking-tight md:tracking-tight lg:tracking-tight xl:tracking-tight">Adrian Oduma</p> */}
                  <Image src="/ctrlZlogo2.png" alt="ctrlZ logo" width={85} height={30} className="w-auto h-10" />
                </a>
                
              </div>
              {/* Headline */}
              <h1 className="text-xl md:text-xl lg:text-[1.25rem] xl:text-[1.5rem] font-semibold lg:font-semibold xl:font-semibold text-[#E5E5E5] mb-4 lg:mb-6 tracking-normal md:tracking-normal lg:tracking-normal xl:tracking-normal">Design for Web3<br />and AI startups.</h1>
              {/* Subtext */}
              <div className="text-sm md:text-sm lg:text-sm xl:text-sm space-y-4 text-gray-400 mb-1 md:mb-8 lg:mb-8 xl:mb-8">
                <p>Crafting digital experiences that look good, but work even better.</p>
                <p>Whether you're launching from 0 → 1 or scaling what's working, I handle design with intent & speed.</p>
                <p>Ran solo by Adrian Oduma.</p>
                
                {/*
                <p>Startups, founders, and brands trust us to lead their product design efforts from 0→1.</p>
                <p>Whether you're launching from scratch or scaling what's working, we design with intent & ship fast.</p>
                <p>Based in Nairobi, Kenya.</p>
                <p>Nairobi-based Product Designer.<br /> </p>
                */}
              </div>
              {/* Services List */}
              <div className="mb-0 lg:mb-20">
                <div className="text-gray-400 text-sm mb-3 md:md-4">Good for everything design-related that includes:</div>
                <ul className="space-y-1 text-sm md:text-sm lg:text-sm xl:text-sm text-[#E5E5E5] tracking-normal">
                  <li>+ Product design</li>
                  <li>+ Web & mobile design</li>
                  <li>+ Design retainer</li>
                  <li>+ Landing page redesign</li>
                  <li>+ Design systems</li>
                  <li>+ UX audit & consultation</li>
                </ul>
              </div>

            </div>
            

            <div className='relative md:gap-4 lg:mt-auto md:absolute bottom-0 md:bottom-0 left-0 md:left-0 right-0 md:right-0 px-0 md:pl-4 lg:pl-4 pb-0 md:pb-0'>
              {/* Button */}
              <div className='flex flex-row gap-2 mb-2 sm:flex-row md:gap-2 md:mb-0'>
                <button
                  onClick={openModal}
                  className="bg-[#E5E5E5] text-black rounded-full px-3 py-2 md:px-5 md:py-2 lg:px-5 lg:py-2 lg:font-base lg:text-sm md:font-base lg:text-sm font-semibold text-sm mb-2 md:mb-4 hover:bg-[#D9D9D9] transition-colors duration-100 w-full sm:w-auto text-center md:hover:bg-[#D9D9D9] md:transition-colors md:duration-100"
                >
                  Start a project
                </button>

                <a href="mailto:adrianoduma8@gmail.com" className="bg-[#353535] text-[#E5E5E5] tracking-normal rounded-full px-2 py-3 md:px-5 md:py-2 lg:px-5 lg:py-2 lg:font-base lg:text-sm md:font-base lg:text-sm font-semibold text-sm mb-2 md:mb-4 hover:bg-[#454545] transition-colors duration-100 w-full sm:w-auto text-center md:hover:bg-[#454545] md:transition-colors md:duration-100">
                  Drop an Email
                </a>
              </div>

              {/* Tagline */}
              {/*<div className="text-gray-400 text-sm mb-6 md:mb-4">Open to serious projects. Or seriously fun ones.</div> */}
              
              {/* Client Logos */}
              <div>
                <p className="text-gray-400 text-sm mb-3 md:mb-2">Previous clients I've worked with:</p>
                <div className="flex flex-wrap gap-x-4 gap-y-4 items-center opacity-80 py-2 md:mb-2 lg:mb-2 xl:mb-2">
                  <Image src="/mookhlogo.png" alt="mookh" width={85} height={110} className="w-auto h-3 lg:h-4 xl:h-5 opacity-70" />
                  <Image src="/astrallogo.png" alt="astral" width={135} height={110} className="w-auto h-3 lg:h-4 xl:h-5" />
                  <Image src="/chpterLogo.png" alt="chpter" width={135} height={110} className="w-auto h-3 lg:h-4 xl:h-5" />
                  <Image src="/wellthilogo.png" alt="wellthi" width={95} height={110} className="w-auto h-2 lg:h-4 xl:h-5" />
                  <Image src="/wrnlogo.png" alt="we run nairobi" width={135} height={110} className="w-auto h-3 lg:h-4 xl:h-5" />
                </div>
                
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
