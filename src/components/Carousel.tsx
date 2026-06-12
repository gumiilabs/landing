"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const baseIcons = [
  "3D", "AGRI", "AV", "COMP", "CRT", "CRxTL", "EDU", "GEO", "SCI", "UTNO", "VENN"
];

export const Carousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const set1Ref = useRef<HTMLDivElement>(null);
  const set2Ref = useRef<HTMLDivElement>(null);
  const [singleSetHeight, setSingleSetHeight] = useState(0);

  useEffect(() => {
    // Measure the exact distance between the start of Set 1 and Set 2.
    // This perfectly accounts for all item heights, padding, and responsive gaps.
    const measureHeight = () => {
      if (set1Ref.current && set2Ref.current) {
        const height = set2Ref.current.offsetTop - set1Ref.current.offsetTop;
        setSingleSetHeight(height);
        
        // Start scroll in the middle set to allow scrolling up immediately
        if (scrollRef.current && scrollRef.current.scrollTop === 0) {
          scrollRef.current.scrollTop = height;
        }
      }
    };

    // Wait for images to load and paint before calculating
    const timeoutId = setTimeout(measureHeight, 200);
    window.addEventListener('resize', measureHeight);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', measureHeight);
    };
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current || singleSetHeight === 0) return;
    
    const { scrollTop } = scrollRef.current;

    // If we scroll too far up (into the first set)
    if (scrollTop < singleSetHeight * 0.2) {
      // Seamlessly jump to the identical position in the second set
      scrollRef.current.scrollTop = scrollTop + singleSetHeight;
    } 
    // If we scroll too far down (into the third set)
    else if (scrollTop > singleSetHeight * 2.2) {
      // Seamlessly jump to the identical position in the second set
      scrollRef.current.scrollTop = scrollTop - singleSetHeight;
    }
  };

  const renderIconSet = (setIndex: number, ref?: React.RefObject<HTMLDivElement | null>) => (
    <div ref={ref} className="flex flex-col gap-40 md:gap-56 items-center w-full">
      {baseIcons.map((icon, i) => {
        // Create a unique index across all sets so hover state works independently
        const globalIndex = setIndex * baseIcons.length + i;
        const isHovered = hoveredIndex === globalIndex;
        const isAnyHovered = hoveredIndex !== null;

        return (
          <div
            key={i}
            className="relative flex flex-col items-center justify-center shrink-0 group"
            onMouseEnter={() => setHoveredIndex(globalIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => setHoveredIndex(globalIndex)}
            onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 1500)}
          >
            <div
              className={`w-32 h-32 md:w-64 md:h-64 relative transition-all duration-500 ease-out ${
                isHovered ? "scale-[1.6] z-10" : isAnyHovered ? "opacity-20 scale-90" : "scale-100"
              }`}
            >
              <Image
                src={`/icons/${icon}.svg`}
                alt={icon}
                fill
                className="object-contain filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:drop-shadow-2xl pointer-events-none"
                draggable={false}
              />
            </div>
            
            <div
              className={`absolute top-1/2 left-[110%] md:left-[130%] -translate-y-1/2 whitespace-nowrap transition-all duration-500 ease-out z-20 flex flex-col gap-2 ${
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
              }`}
            >
              <span className="font-mono text-xs md:text-sm tracking-[0.6em] uppercase text-black font-bold">
                {icon}
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-black/40">
                SYS.REF_{i.toString().padStart(3, '0')}
              </span>
              <div className="w-12 h-px bg-accent mt-2" />
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="w-full h-full bg-white relative flex justify-center items-center pointer-events-auto">
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.4em] font-bold text-black/20 -rotate-90 origin-left hidden md:block z-20 pointer-events-none">
        [ SCROLL TO EXPLORE ]
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="h-full w-full max-w-3xl overflow-y-auto no-scrollbar flex justify-center relative z-10 pt-[40vh] pb-[40vh]"
      >
        <div className="flex flex-col gap-40 md:gap-56 items-center w-full">
          {renderIconSet(0, set1Ref)}
          {renderIconSet(1, set2Ref)}
          {renderIconSet(2)}
        </div>
      </div>
      
      {/* Scroll indicator overlay */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
};
