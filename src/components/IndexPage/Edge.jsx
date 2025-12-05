"use client";
import { useEffect, useState } from "react";
import PeakingCarousel from "../Common/PeakingCarousel";
import { detectDeviceClient } from "@/utils/browserHelper";

const Edge = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [link, setLink] = useState("https://fyers.in/products/web-and-app/");
  useEffect(() => {
    const deviceType = detectDeviceClient();
    if (deviceType === "mobile") {
      setLink("https://fyers.onelink.me/cj1P/9pfepauj");
    } else {
      setLink("https://fyers.in/products/web-and-app/");
    }
  }, []);
  return (
    <div className="mt-[36px] mb-6 md:mt-0 md:py-[72px] ">
      <div className="px-[16px] pt-[48px] md:pt-[0] md:px-[40px] lg:px-[80px]">
        <div className="font-plus not-italic text-[14px] md:text-[20px] font-semibold leading-[24px] uppercase text-[#676768]">
          TRADE LIKE A PRO WITH
        </div>
        <h2 className="font-plus-jakarta mt-4 font-bold text-[#131319] text-[40px] sm:text-[64px] leading-[52px] sm:leading-[72px] tracking-[ -0.8px ]">
          FYERS Edge
        </h2>
        <div className="flex mt-4 md:mt-6 flex-wrap lg:flex-nowrap items-end justify-between">
          <div className="text-[14px] md:text-[18px] leading-[22px] tracking-[-0.16px] text-[#383839] max-w-[628px]">
            Unlock smarter, faster and more informed trading with <b>FYERS Exclusive features</b>. Built to give you a real advantage in every market move.
          </div>
          <div className="mt-[4rem] lg:m-0">
            <a
              href={link}
              className="text-[16px] text-[white] font-medium bg-[#182BFF] py-1.5 px-3.5 md:py-2 items-center flex "
            >
              Explore Tools{" "}
              <span className="mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
      <PeakingCarousel slides={products} selectedIndex={activeIndex} onSlideChange={setActiveIndex} />
    </div>
  );
};

export default Edge;
