// Feature-layout.jsx
import Image from "next/image";

export default function FeatureLayout({ iconSrc, iconAlt, title, description, isMobile, index, isLastAndOdd }) {
  if (isMobile) {
    return (
      <div className="p-[16px] flex flex-row items-center gap-4 w-full border-r border-[#C8C8CC] first:border-l">
        <Image src={iconSrc} alt={iconAlt} height={32} width={32} className="object-contain flex-shrink-0" />
        <div className="flex-1 min-w-0 flex flex-col gap-[8px]">
          <h6 className="font-plus-jakarta font-semibold text-[#131319] text-[20px] leading-[24px] tracking-[0px]">
            {title}
          </h6>
          {description && (
            <p className="font-manrope font-normal text-[16px] leading-[24px] -tracking-[0.18px]">{description}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-4 md:p-6 flex flex-row items-center gap-4 w-full ${
        isLastAndOdd ? "border-l border-r" : `border-l ${index % 2 !== 0 ? "border-r" : ""}`
      } border-[#C5C6CA]`}
    >
      <Image src={iconSrc} alt={iconAlt} height={35} width={35} className="object-contain" />
      <div>
        <h6 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] leading-[32px] -tracking-[0.1px]">
          {title}
        </h6>
        {description && (
          <p className="font-manrope font-normal text-[16px] leading-[24px] -tracking-[0.18px]">{description}</p>
        )}
      </div>
    </div>
  );
}
