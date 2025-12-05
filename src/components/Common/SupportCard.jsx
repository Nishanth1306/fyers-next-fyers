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

export const SupportCard = ({ card }) => {
  const IconComponent = iconMap[card.icon]

  return (
    <div className="px-5 py-4 md:p-6 border-r border-b border-l border-gray-200 flex flex-col md:flex-row items-start gap-2 md:gap-[8px]">
      {/* Icon */}
      <div className="flex-shrink-0 flex items-center justify-center bg-white border border-gray-200 w-[32px] h-[32px] py-[2.72px] px-[2.73px]">
        {IconComponent && <IconComponent className="w-4 h-4 text-gray-700" />}
      </div>


      {/* Content */}
      <div className="flex-1 mt-2 md:mt-0">
        {/* Title */}
        <h3 className="font-plus-jakarta text-[20px] md:text-[22px] font-semibold text-[#131319] leading-tight mb-2">
          {card.title}
        </h3>

        <div className="flex flex-col justify-between text-[#131319] font-manrope text-sm md:text-base gap-1">
          {card.hours && <p>{card.hours}</p>}
          {card.subHours && <p>{card.subHours}</p>}
          {card.phone && <p className="font-medium text-gray-900">{card.phone}</p>}
          {card.email && <p className="font-medium text-gray-900">{card.email}</p>}
        </div>
      </div>
    </div>
  );
};
