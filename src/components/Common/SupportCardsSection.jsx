import React from 'react';
import { SupportCard } from './SupportCard';
import { supportData } from '@/data/contact-us';

export const SupportCardsSection = ({ data = supportData }) => {
  const firstRowCards = data.cards.slice(0, 3);
  const secondRowCards = data.cards.slice(3, 7);

  return (
    <div className="w-full bg-white/40 backdrop-blur-sm md:pt-[64px]  pt-[24px] bt-[32px] mb-[12px]">
  

  
      <div className="px-5 md:px-[80px] flex items-center gap-[32px] mb-6">
        <h1 className="font-plus-jakarta md:text-[64px] text-[36px] font-semi-bold text-[#131319]">{data.title}</h1>
      </div>




      <div className="w-full border-t border-gray-200">
        <div className="px-5 md:px-[80px] border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {firstRowCards.map((card, idx) => (
            <SupportCard key={idx} card={card} />
          ))}
        </div>
      </div>

  
      <div className="w-full border-b border-gray-200">



        <div className="px-5 md:px-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -mb-[1px]">
          {secondRowCards.map((card, idx) => (
            <SupportCard key={idx + 3} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
