import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#FFFFFF] from-[2%] to-[#BCC8CF] to-[50%] text-white font-inter px-4 sm:px-8">
      <div className="container py-0 sm:py-0 px-0 sm:px-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
          <div className="flex-1">
            <ul className='space-y-3 text-base sm:text-xl font-semibold pb-4 sm:pb-8 font-inter text-gray-700 text-left'>
              <li>We'll help you turn all that chaos into a <i>frictionless</i>, <i>purpose-driven</i>, and <i>intuitive</i> experience.</li>
              <li>Available for all kinds of work.</li>
            </ul>
            <a href='https://cal.com/odumzeez/first15'>
              <button className='bg-gradient-to-b from-[#1A1A1A] to-[#0F3904] text-white px-6 sm:px-8 py-3 rounded-md hover:bg-black transition duration-2 text-base sm:text-lg mt-2 text-left'>
                Book a Call for your next project
              </button>
            </a>
            <p className="text-black/60 text-sm sm:text-base text-left mt-6">© 2025</p>
          </div>
          <div className="flex flex-row items-center sm:justify-end gap-6 sm:gap-8 text-black/60 text-sm sm:text-base mt-6 sm:mt-0">
            <a href="https://x.com/odumzeez" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
            </a>
            <a href="mailto:adrianoduma8@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 