"use client";

import { useState } from "react";
import { timelineData } from "@/data/about-us";
import SectionHeader from "../Common/SectionHeader";
import TimelineSlot from "./TimelineSlot";
import Image from "next/image";
import RightArrowSVG from "@/assets/images/arrow-right-s-line-black.svg";
import LeftArrowSVG from "@/assets/images/arrow-left-s-line-black.svg";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (activeIndex < timelineData.length - 1) setActiveIndex((prev) => prev + 1);
  };

  const sortedTimeline = [...timelineData].sort((a, b) => a.year - b.year);

  return (
    <section className="min-h-10 gap-[72px] bg-[#F2F4FB]">
      <SectionHeader
        sectionHeading="Milestones"
        sectionSubheading="Our journey so far"
        sectionDescription="We have had a journey of many highs, some lows and most importantly - lots of learning! Some of our key milestones given below..."
      />

      {/* ✅ Mobile Year Pagination */}
      <div className="block md:hidden sticky top-0 bg-[#F2F4FB] z-10">
        <div className="flex items-center justify-center gap-[4px] py-4">
          {/* ← Left Arrow */}
          <button
            onClick={handlePrev}
            className={`px-[14px] py-[8px] ${activeIndex === 0 ? "opacity-30 pointer-events-none" : ""}`}
          >
            <Image src={LeftArrowSVG} alt="Previous year" width={28} height={28} className="object-contain" />
          </button>

          {/* Years */}
          <div className="flex items-center gap-[4px]">
            {[-1, 0, 1].map((offset) => {
              const idx = activeIndex + offset;
              if (idx < 0 || idx >= timelineData.length) return null;

              const year = timelineData[idx].year;
              const isActive = offset === 0;

              return (
                <span
                  key={year}
                  className={`py-[12px] px-[8px] font-plus-jakarta text-[20px] leading-[24px] font-medium ${
                    isActive ? "text-[#182BFF]" : "text-[#6B6B6B]"
                  }`}
                >
                  {year}
                </span>
              );
            })}
          </div>

          {/* → Right Arrow */}
          <button
            onClick={handleNext}
            className={`px-[14px] py-[8px] ${
              activeIndex === timelineData.length - 1 ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            <Image src={RightArrowSVG} alt="Next year" width={28} height={28} className="object-contain" />
          </button>
        </div>
      </div>

      {/* 🖥️ Desktop Timeline (show all) */}
      <div className="hidden md:block">
        {sortedTimeline.map((timeline) => (
          <div key={timeline.year}>
            <TimelineSlot year={timeline.year} events={timeline.events} image={timeline.image} />
          </div>
        ))}
      </div>

      {/* 📱 Mobile Timeline (active year only) */}
      <div className="block md:hidden border-b border-b-[#C5C6CA]">
        <TimelineSlot year={timelineData[activeIndex].year} events={timelineData[activeIndex].events} image={timelineData[activeIndex].image} />
      </div>

      <div className="hidden md:block border-b border-b-[#C5C6CA]" />
    </section>
  );
}
