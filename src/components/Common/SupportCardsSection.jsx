import React from "react";
import { SupportCard } from "./SupportCard";
import { supportData } from "@/data/contact-us";

export const SupportCardsSection = ({ data = supportData }) => {
  return (
    <div className="w-full flex flex-col gap-[24px] lg:gap-[32px] backdrop-blur-sm pt-[24px] pb-[12px] md:pt-[52px] lg:pt-[64px] md:pb-[32px]">
      <h2 className="px-5 md:px-10 lg:px-[80px] custom-container 2xl:w-full font-plus-jakarta md:text-[48px] lg:text-[64px] text-[36px] font-semibold text-[#131319] leading-[40px] lg:leading-[72px] -tracking-[0.35px] lg:-tracking-[0.8px]">
        {data.title}
      </h2>

      <div>
        <div className="w-full border-t border-[#C8C8CC]">
          <div className="px-5 md:px-10 lg:px-[80px] custom-container border-gray-200 grid grid-cols-1 lg:grid-cols-3">
            {data.cards.map((card, idx) => idx < 3 && <SupportCard key={idx} card={card} isLast={idx === 2} />)}
          </div>
        </div>

        <div className="w-full border-b border-[#C8C8CC]">
          <div className="px-5 md:px-10 lg:px-[80px] custom-container grid grid-cols-1 lg:grid-cols-4 -mb-[1px]">
            {data.cards.map(
              (card, idx) => idx >= 3 && idx < 7 && <SupportCard key={idx} card={card} isLast={idx === 6} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
