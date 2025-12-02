"use client";
// import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const FadeCarousel = ({ children, delay = 5000, itemsPerSlide = 2 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 20, // Fade transition duration
    },
    [Fade(), Autoplay({ delay })] // Using Fade plugin
  );

  // Group children into chunks of itemsPerSlide
  const groupedChildren = [];
  for (let i = 0; i < children.length; i += itemsPerSlide) {
    groupedChildren.push(children.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="overflow-hidden border-b border-t border-[#C8C8CC] relative w-full md:mt-4" ref={emblaRef}>
      <div className="flex">
        {groupedChildren.map((group, groupIdx) => (
          <div key={groupIdx} className="flex-[0_0_100%] min-w-0">
            <div className="flex flex-col px-4 lg:flex-row md:px-[72px] ">
              {group.map((child, childIdx) => (
                <div key={childIdx} className="flex-1">
                  {child}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FadeCarousel;
