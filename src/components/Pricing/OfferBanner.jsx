"use client";

import SectionHeader from "../Common/SectionHeader";
import ArrowRightTopImage from "/public/images/Pricing/arrow-right-up-line.svg"

export default function OfferBanner() {
  return (
    <div className="w-full bg-[#F2F4FB] relative">
      <div className="w-full flex justify-center overflow-hidden">
        <div className="bg-[#F2F4FB] w-full relative overflow-hidden">
          {/* Bottom Border */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />
          <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-[150px] bg-gradient-to-r from-[#F0F0FA] via-[#F0F0FA]/80 to-transparent z-10"></div>
          <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-[150px] bg-gradient-to-l from-[#F0F0FA] via-[#F0F0FA]/80 to-transparent z-10"></div>

          <div className="animate-ticker  whitespace-nowrap">
            {[...Array(5)].map((_, idx) => (
              <span
                key={idx}
                className="inline-flex gap-[8px] p-[16px] md:py-[8px] md:pl-[8px] md:pr-[16px] items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.9032 2.09961L20.8027 3.51382L22.2169 13.4133L13.0245 22.6057C12.634 22.9962 12.0009 22.9962 11.6103 22.6057L1.71087 12.7062C1.32034 12.3157 1.32034 11.6825 1.71087 11.292L10.9032 2.09961ZM11.6103 4.22093L3.83219 11.9991L12.3174 20.4844L20.0956 12.7062L19.035 5.28159L11.6103 4.22093ZM13.7317 10.5849C12.9506 9.80384 12.9506 8.53751 13.7317 7.75646C14.5127 6.97541 15.779 6.97541 16.5601 7.75646C17.3411 8.53751 17.3411 9.80384 16.5601 10.5849C15.779 11.3659 14.5127 11.3659 13.7317 10.5849Z"
                    fill="#131319"
                  />
                </svg>
                <span className="text-[16px] text-center font-manrope font-[600] leading-[22px] text-[#131319] tracking-[0.18px]">
                  LIMITED OFFER - CHECK BELOW
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Section Header */}
      <SectionHeader
        sectionHeading="LIMITED PERIOD OFFER"
        sectionSubheading="Low Cost & Transparent"
        sectionDescription="Zero brokerage on Mutual funds & IPO & max ₹20 across all other segments."
        buttonText="Check Detailed Pricing"
        buttonImagesrc={ArrowRightTopImage}
        buttonImageHeight={14}
        buttonImageWidth={14}
        imageStyles={`md:w-[24px] md:h-[24px]`}
        buttonStyles="bg-[#182BFF] text-[#F2F4FB] py-1.5 px-2.5 md:py-2 md:px-3.5"
      />
    </div>
  );
}
