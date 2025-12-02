"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef, useEffect, useState } from "react";
import Carousel from "../IndexPage/Carousel";

export default function PeakingCarousel({
  slides,
  selectedIndex,
  onSlideChange,
}) {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: true },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", dragFree: true, loop: true },
    [autoplay.current]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Track selected slide
  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      const current = emblaApi.selectedScrollSnap();
      setCurrentIndex(current);
      onSlideChange?.(current);
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", handleSelect);
    handleSelect();

    return () => emblaApi.off("select", handleSelect);
  }, [emblaApi, onSlideChange]);

  // Handle external selectedIndex changes
  useEffect(() => {
    if (emblaApi && typeof selectedIndex === "number") {
      emblaApi.scrollTo(selectedIndex);
    }
  }, [selectedIndex, emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <>
      <div
        className="border-t border-b border-[#C8C8CC] mt-6 md:mt-[72px] mb-6 md:mb-[72px]"
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
        onTouchStart={() => autoplay.current.stop()}
        onTouchEnd={() => autoplay.current.play()}
      >
        <div className="pl-4 md:pl-[80px]">
          {/* Carousel */}
          <div
            className={`overflow-hidden mx-auto ml-4 md:ml-0`}
            ref={emblaRef}
          >
            <div className="flex gap-8">
              {slides.map((slide, index) => (
                <Carousel
                  slide={slide}
                  key={`${slide.id}`}
                  lastSlide={slides.length - 1 === index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 mx-1 transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#182BFF]"
                : "bg-[#C8C8CC] hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
