import Image from "next/image";
import TradingViewImage from "@/assets/images/Trading-view-yellow.svg"

export default function Achievement({ text }) {
  return (
    <div className="flex flex-col items-start md:gap-[16px] text-center md:text-left w-[496px]">
      {/* Top row */}
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <div className="relative w-[14px] h-[14px] md:w-[50px] md:h-[50px]">
          <Image src={TradingViewImage} alt="trading view icon" fill className="object-contain" />
        </div>
        <h2 className="text-[#F5FD09] text-[11px] md:text-[35px] font-bold mt-1 md:mt-0">Trading View</h2>
      </div>

      {/* Text */}
      <h2 className="font-semibold font-plus-jakarta text-[#F5FD09] text-[20px] md:text-[36px] lg:text-[56px] leading-[24px] md:leading-[48px] lg:leading-[72px] tracking-[0px] md:-tracking-[0.8px] text-left">
        {text}
      </h2>
    </div>
  );
}
