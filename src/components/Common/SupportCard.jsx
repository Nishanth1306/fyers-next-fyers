import React from "react";
import { AccountIcon, TradeOnCall, PartnerSupport, CustomerSupport, ApiSupport } from "../../../public/icons/icon";

const iconMap = {
  clock: AccountIcon,
  phone: TradeOnCall,
  headphones: PartnerSupport,
  lock: CustomerSupport,
  code: ApiSupport,
  filetext: ApiSupport,
  users: ApiSupport,
  checkmark: ApiSupport,
};

export const SupportCard = ({ card, isLast }) => {
  const IconComponent = iconMap[card.icon];

  return (
    <div
      className={`px-5 py-4 md:p-6 border-b border-l border-r ${
        isLast ? "md:border-r" : "md:border-r-0"
      } border-[#C8C8CC] flex flex-row items-start gap-2 md:gap-[8px]`}
    >
      {/* Icon */}
      <div className="flex-shrink-0 flex items-center justify-center bg-white border border-gray-200 w-[32px] h-[32px] py-[2.72px] px-[2.73px]">
        {IconComponent && <IconComponent className="w-4 h-4 text-gray-700" />}
      </div>

      {/* Content */}
      <div className="flex flex-col items-start gap-[4px] self-stretch max-w-[338px]">
        {/* Title */}
        <h3 className="font-plus-jakarta text-[22px] font-semibold text-[#131319] leading-[32px] -tracking-[0.32px]">
          {card.title}
        </h3>

        <div className="text-[#131319] font-manrope text-sm md:text-base">
          {card.hours && <p>{card.hours}</p>}
          {card.subHours && <p>{card.subHours}</p>}
          {card.phone && <p>{card.phone}</p>}
          {card.email && <p>{card.email}</p>}
        </div>
      </div>
    </div>
  );
};
