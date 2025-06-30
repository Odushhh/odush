import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#FFFFFF] from-[2%] to-[#BCC8CF] to-[50%] text-white font-inter px-4 sm:px-24 md:px-32">
      <div className="container py-8 sm:py-12 px-0 sm:px-80">
        <div className="mt-4 pt-8">

          {/* CTA */}
          <div className="pb-20 sm:pb-40 flex flex-col gap-4 justify-center items-center text-black/80 text-center">
            <ul className='space-y-3 text-base sm:text-lg font-base pb-8 sm:pb-12 font-inter text-gray-700'>
              <li>We'll help you turn all that chaos into a <i>frictionless</i>, <i>purpose-driven</i>, and <i>intuitive</i> experience.</li>
              <li className='text-black'>Available for all kinds of work.</li>
            </ul>

            <div className="flex flex-row gap-52 justify-center text-black/60 text-base py-8">    
              <a href="https://x.com/odumzeez" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                Twitter → 
              </a> 
              <a href="mailto:adrianoduma8@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                Email → 
              </a> 
              {/* Social links commented out for brevity */}
            </div>

            <a href='https://cal.com/odumzeez/first15'>
              <button className='bg-gradient-to-b from-[#1A1A1A] to-[#0F3904] text-white px-6 sm:px-10 py-3 rounded-md hover:bg-black transition duration-2 text-sm sm:text-base'>
                Book a Call for your next project
              </button>
            </a>                        
          </div>

          <div className="flex flex-col gap-12 justify-center text-center border-t border-black/20 py-6 gap-4">
            <p className="text-black/60 text-sm sm:text-base text-center sm:text-left">© 2025</p>

            
          </div>
        </div>
      </div>
    </footer>
  );
} 