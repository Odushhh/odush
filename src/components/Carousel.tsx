import React, { useRef, useState } from 'react';

interface CarouselProps {
  images: string[];
  direction?: 'vertical' | 'horizontal';
}

const getCaption = (img: string) => {
  // Extract filename without extension for caption
  const parts = img.split('/');
  const filename = parts[parts.length - 1];
  return filename.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
};

const Carousel: React.FC<CarouselProps> = ({ images, direction = 'vertical' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isVertical = direction === 'vertical';

  const scrollBy = (direction: 'up' | 'down') => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const currentScroll = container.scrollTop;
    const scrollAmount = window.innerHeight * 0.9;

    container.scrollTo({
      top: direction === 'down'
        ? currentScroll + scrollAmount
        : currentScroll - scrollAmount,
      behavior: 'smooth'
    });
  }

  const scrollByImage = (dir: 'up' | 'down') => {
    if (!scrollRef.current || imgRefs.current.length === 0) return;

    const container = scrollRef.current;
    const containerRect = container.getBoundingClientRect();
    const currentPosition = container.scrollTop;
    const viewportHeight = container.clientHeight;
    const scrollAmount = viewportHeight * 0.9; // 80% of viewport height
    
    const targetPosition = dir === 'down' 
      ? Math.min(currentPosition + scrollAmount, container.scrollHeight - viewportHeight)
      : Math.max(currentPosition - scrollAmount, 0);

    container.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    
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

    let scrollToIdx = dir === 'up' || 'down' ? Math.max(0, targetIdx - 1) : Math.min(images.length - 1, targetIdx + 1);
    const targetDiv = imgRefs.current[scrollToIdx];
    if (targetDiv) {
      container.scrollTo({ left: targetDiv.offsetLeft - 48, behavior: 'smooth' }); // 48px left padding
    }
    

  };

  return (
    <div
      className='relative bg-[#181818] overflow-y-auto w-full md:max-w-[100%] h-screen md:h-screen flex md:flex-nowrap items-center pt-8 md:pt-0 gap-0 md:gap-0 md:overflow-y-auto md:snap-y md:snap-mandatory'
      style={{ 
        height: isVertical ? '100%' : 'auto', 
        minHeight: 0, 
        paddingTop: '0px', 
        paddingBottom: '0px', 
        background: '#181818',        
        // overflow: 'none',
      }}
    >
      {/* Carousel Images */}
      <div
        ref={scrollRef}
        className={
          isVertical
            ? 'bg-[#181818] w-full md:max-w-[98%] border-box md:h-screen overflow-visible md:overflow-y-auto md:snap-y md:snap-mandatory flex flex-col md:flex-col gap-0 md:gap-2 md:h-[100%] justify-start items-center scrollbar-none pl-0 pr-0'
            : 'w-full overflow-none md:overflow-y-auto md:snap-y md:snap-mandatory flex flex-col md:flex-row gap-0 md:gap-24 items-center justify-start scrollbar-none pt-4 md:pt-0 pl-12 sm:pl-12 md:pr-4' 
        }
            
        style={{
              scrollbarWidth: 'none', 
              scrollBehavior: 'smooth',
              scrollSnapType: 'y mandatory',
              overscrollBehavior: 'contain',
              msOverflowStyle: 'none', 
              height: '100%', 
              minHeight: 0, 
              paddingTop: 0, 
              paddingBottom: 0, 
              paddingRight: 0,    
              background: '#181818' ,    
            }   
        }
      >
        {images.map((img, idx) => (
          <div
            key={img}
            ref={el => { imgRefs.current[idx] = el; }}
            className={
              isVertical
                ? 'py-2 md:py-0 flex-shrink-0 w-full max-h-[100vh] md:max-h-[100vh] snap-center flex flex-col gap-0 md:gap-2 items-center justify-start md:justify-center md:items-center'
                : 'flex-shrink-0 w-auto h-[250px] snap-center flex flex-col items-center justify-center mr-8 gap-0'
            }
            
          >
            <img
              src={img}
              draggable={false}
              alt={`carousel-img-${idx}`}
              className={
                isVertical
                  ? 'h-full md:max-h-[105vh] w-full object-contain bg-[#181818]'
                  : 'max-h-[100vh] w-auto object-contain bg-[#181818]'
              }
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