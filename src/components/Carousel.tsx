import React, { useRef } from 'react';

interface CarouselProps {
  images: string[];
  direction?: 'horizontal' | 'vertical';
}

const getCaption = (img: string) => {
  // Extract filename without extension for caption
  const parts = img.split('/');
  const filename = parts[parts.length - 1];
  return filename.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
};

const Carousel: React.FC<CarouselProps> = ({ images, direction = 'horizontal' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isVertical = direction === 'vertical';

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
    <div
      className={`relative w-full flex items-center pt-4 ${isVertical ? '' : 'pt-9'}`}
      style={{ height: isVertical ? '100%' : 'auto', minHeight: 0, paddingTop: isVertical ? 0 : '36px', paddingBottom: 0 }}
    >
      {/* Carousel Images */}
      <div
        ref={scrollRef}
        className={
          isVertical
            ? 'h-full w-full overflow-y-auto flex flex-col gap-4 items-center justify-start scrollbar-none pl-0 pr-0'
            : 'w-full overflow-x-auto flex gap-5 items-center justify-start snap-x snap-mandatory scrollbar-none pt-4 pl-12 sm:pl-12'
        }
        style={
          isVertical
            ? { scrollbarWidth: 'none', msOverflowStyle: 'none', height: '100%', minHeight: 0, paddingTop: 0, paddingBottom: 0, paddingRight: 0 }
            : { paddingLeft: '28px', scrollbarWidth: 'none', msOverflowStyle: 'none', height: 'auto', minHeight: 0 }
        }
      >
        {images.map((img, idx) => (
          <div
            key={img}
            ref={el => { imgRefs.current[idx] = el; }}
            className={
              isVertical
                ? 'flex-shrink-0 w-full h-[775px] gap-8 snap-center flex flex-col items-center justify-center'
                : 'flex-shrink-0 w-auto max-h-[530px] snap-center flex flex-col items-center justify-center'
            }
          >
            <img
              src={img}
              alt={`carousel-img-${idx}`}
              className={
                isVertical
                  ? 'h-[775px] w-full object-contain rounded-xl'
                  : 'max-h-[520px] w-auto object-contain rounded-xl'
              }
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