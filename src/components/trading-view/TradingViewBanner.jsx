import Image from "next/image";
import Achievement from "./Achievement";
import Button from "../Common/Button";

const TradingViewBanner = () => {
  return (
    <div className="border-y border-[#C8C8CC]">
      <div className="relative h-[170px] md:h-[674.38px] flex items-center justify-center">
        <Image
          unoptimized
          src="https://assets.fyers.in/Marcom_Avatar/Images/trading-view-banner.webp"
          alt="image"
          fill
          className="object-cover object-[center_40%]"
        />
      </div>

      <div className="bg-[#131319] border-[#C8C8CC] py-[24px] md:py-[40px] px-[16px] md:px-[72px] flex flex-col gap-[24px] md:gap-[40px]">
        {/* Achievements */}
        <div className="flex flex-row md:items-center md:justify-between custom-container 2xl:w-full 2xl:px-[72px] gap-[24px]">
          <Achievement text="Newcomer of the Year 2023" />
          <Achievement text="Best Broker in South Asia 2024" />
        </div>

        {/* Button */}
        {/* <div className="w-full flex justify-center md:justify-start">
          <Button
            text={
              <span>
                Download the <span className="text-[#F5FD09]">TradingView</span> desktop app
              </span>
            }
            href="https://fyers.onelink.me/cj1P/9pfepauj"
            className="w-full md:w-fit bg-[#182BFF] text-[#F2F4FB] px-[20px] py-[10px] md:px-[24px] md:py-[12px]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default TradingViewBanner;
