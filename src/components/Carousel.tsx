import React, { useRef } from 'react';

interface CarouselProps {
  images: string[];
}

const getCaption = (img: string) => {
  // Extract filename without extension for caption
  const parts = img.split('/');
  const filename = parts[parts.length - 1];
  return filename.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollByImage = (dir: 'left' | 'right') => {
    if (!scrollRef.current || imgRefs.current.length === 0) return;
    const container = scrollRef.current;
    const containerRect = container.getBoundingClientRect();
    let targetIdx = 0;
    for (let i = 0; i < imgRefs.current.length; i++) {
      const imgDiv = imgRefs.current[i];
      if (!imgDiv) continue;
      const imgRect = imgDiv.getBoundingClientRect();
      if (imgRect.left >= containerRect.left - 1) {
        targetIdx = i;
        break;
      }
    }
    let scrollToIdx = dir === 'left' ? Math.max(0, targetIdx - 1) : Math.min(images.length - 1, targetIdx + 1);
    const targetDiv = imgRefs.current[scrollToIdx];
    if (targetDiv) {
      container.scrollTo({ left: targetDiv.offsetLeft - 48, behavior: 'smooth' }); // 48px left padding
    }
  };

  return (
    <div className="relative w-full flex items-center pt-9" style={{ height: 'auto', minHeight: 0, paddingTop: '36px' }}>
      {/* Carousel Images */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto flex gap-5 items-center justify-start snap-x snap-mandatory scrollbar-none pl-12 sm:pl-12"
        style={{ paddingLeft: '48px', scrollbarWidth: 'none', msOverflowStyle: 'none', height: 'auto', minHeight: 0 }}
      >
        {images.map((img, idx) => (
          <div
            key={img}
            ref={el => { imgRefs.current[idx] = el; }}
            className="flex-shrink-0 w-auto max-h-[520px] snap-center flex flex-col items-center justify-center"
          >
            <img
              src={img}
              alt={`carousel-img-${idx}`}
              className="max-h-[520px] w-auto object-contain rounded-xl bg-white border border-[#EEEEEE]"
              draggable={false}
            />
          </div>
        ))}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Carousel; 