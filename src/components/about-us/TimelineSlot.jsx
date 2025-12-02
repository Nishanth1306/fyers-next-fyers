"use client";

import Image from "next/image";
import { useState } from "react";

export default function TimelineSlot({ year, events, image }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <>
      <div
        className="relative px-20 border-t border-t-[#C5C6CA] hidden md:grid grid-cols-[1fr_3fr] items-center group"
        // onMouseMove={handleMouseMove}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover Image - Follows mouse cursor */}
        {image && isHovered && (
          <div
            className="fixed pointer-events-none z-50 transition-opacity duration-300"
            style={{
              left: `${mousePos.x + 20}px`,
              top: `${mousePos.y}px`,
              transform: "translate(0, -50%)",
            }}
          >
            <div className="relative min-w-[300px] min-h-[225px] rounded-lg overflow-hidden">
              <Image unoptimized src={image} alt={`${year} milestone`} fill className="object-fit" />
            </div>
          </div>
        )}

        {/* Year */}
        <div className="px-[48px] py-[16px] relative z-20">
          <p className="font-semibold font-plus-jakarta text-[48px] leading-[58px] -tracking-[0.64px] text-center text-[#131319] group-hover:text-[#182BFF]">
            {year}
          </p>
        </div>

        {/* Events container */}
        <div className="relative space-y-8 border-l border-l-[#C5C6CA] py-[16px] px-[48px] gap-[8px] z-20">
          {/* Timeline marker */}
          <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#C5C6CA] group-hover:bg-[#182BFF]" />

          {events.map((event, idx) => (
            <div key={idx} className="p-[40px]">
              <h3 className="font-medium font-manrope text-[20px] leading-[26px] -tracking-[0.32px] text-[#666666]">
                {event}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="block md:hidden px-4 md:px-20">
        <div className="space-y-2">
          <p className="font-plus-jakarta font-semibold text-[12px] leading-[16px] tracking-[0.8px] uppercase">
            {year}
          </p>

          <div className="relative w-full md:min-w-[380px] min-h-[206px]">
            <Image unoptimized src={image} alt="timeline" width={380} height={206} className="object-fit" />
          </div>
        </div>

        {events.map((event, idx) => (
          <div key={idx} className="py-[16px] gap-[8px]">
            <h3 className="font-semibold font-plus-jakarta text-[14px] leading-[20px] tracking-[0.8px] text-[#666666]">
              {event}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
