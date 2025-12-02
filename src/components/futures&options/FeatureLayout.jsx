// FeatureLayout.jsx
import Image from "next/image";

export default function FeatureLayout({ iconSrc, iconAlt, title, isLastInRow, isMobile }) {
  if (isMobile) {
    return (
      <div className="p-[16px] flex flex-row items-center gap-4 w-[239px] max-w-[239px] border-r border-[#C5C6CA] first:border-l">
        <Image src={iconSrc} alt={iconAlt} height={24} width={24} className="object-contain flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <h6 className="font-manrope md:font-plus-jakarta font-medium md:font-semibold text-[#131319] text-[16px] md:text-[24px] leading-[22px] md:leading-[32px] -tracking-[0.18px] md:-tracking-[0.1px] break-words">
            {title}
          </h6>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-4 flex flex-row items-center gap-4 h-[96px] border-l ${
        isLastInRow ? "border-r" : ""
      } border-[#C5C6CA]`}
    >
      <Image src={iconSrc} alt={iconAlt} height={35} width={35} className="object-contain" />
      <div>
        <h6 className="font-plus-jakarta font-semibold text-[#131319] text-[16px] sm:text-[18px] lg:text-[24px] leading-[32px] -tracking-[0.1px]">
          {title}
        </h6>
      </div>
    </div>
  );
}
