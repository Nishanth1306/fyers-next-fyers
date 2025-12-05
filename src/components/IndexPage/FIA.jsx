import { detectDeviceServer } from "@/utils/browserHelper";
import { headers } from "next/headers";
import Image from "next/image";
const FIA = async () => {
  const isMobile = await detectDeviceServer(headers);

  return (
    <>
      <div className="fy-fia bg-[#131319] pt-[24px] px-[16px] pb-[24px] md:pb-[0] md:px-[40px] lg:px-[80px] lg:py-[72px]">
        <div className="">
          <div className="text-[14px] md:text-[20px] pb-4 font-semibold leading-[24px] tracking-[1.2px] uppercase text-[#676768]">
            AI
          </div>
          <h2 className=" font-plus-jakarta pb-4 font-bold text-white text-[40px] sm:text-[64px] leading-[52px] sm:leading-[72px] tracking-[-0.2px]">
            Meet FIA - FYERS Intelligent Assistant
          </h2>
          <p className="text-white pb-4 text-[20px] font-semibold leading-[32px] tracking-[-0.2px]">
            Real-time market intelligence. From India’s first AI trading analyst.
          </p>
          <div className="flex justify-between items-end flex-wrap lg:flex-nowrap md:gap-[24px] lg:gap-0 md:pb-[24px] lg:pb-0">
            <div className="text-[14px] lg:text-[18px] text-[#CACACA] max-w-[80%] md:max-w-[70%] lg:max-w-[80%]">
              <p>
                FIA is a complete AI-powered assistant. It monitors markets in real-time, spots patterns, analyses news and builds tailored screeners for stocks, F&O and commodities. FIA also analyses your portfolio with precision. Go beyond surface-level data with powerful insights built for pro-traders and investors, just like you.
              </p>
            </div>
            <div className="flex flex-1 mt-[24px] lg:mt-0 lg:justify-end">
              <a
                href="https://fyers.in/fia"
                className="text-[14px] lg:text-[16px] text-[white] font-medium bg-[#182BFF] p-[6px_10px] md:p-[8px_14px] items-center flex"
              >
                See How FIA Works{" "}
                <span className="mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      fill="#F2F4FB"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fy-fia bg-[#131319]">
        <Image
          unoptimized
          src={"https://assets.fyers.in/Marcom_Avatar/Images/home-fia-banner.webp"}
          alt="FYERS Intelligent Assistant"
          height={870}
          width={1440}
          className="bg-[#131319] w-[412px] h-[413px] md:h-auto md:w-full object-cover"
        />
      </div>
    </>
  );
};

export default FIA;
