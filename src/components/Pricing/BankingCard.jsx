"use client";

import Image from "next/image";
import Button from "../Common/Button";
import { zeroPlanItems } from "@/data/pricing";
import ArrowIcon from "@/assets/images/arrow-top-right-corner.svg";

export default function BankingCard() {
  return (
    <div className="relative w-full py-[20px] lg:py-[72px] flex flex-col gap-[20px] overflow-x-hidden">
      {/* Header Section */}
      <div className="px-[24px] md:px-[40px] lg:px-[80px] text-left md:justify-between items-start ">
        <h2 className="font-plus-jakarta font-semibold text-[16px] md:text-[20px] leading-[24px] text-[#666666]">
          Best-in-class pricing
        </h2>

        <div className="flex flex-col md:pb-[72px] md:flex-row md:justify-between items-start md:items-end gap-[24px] mt-[8px] md:mt-[16px]">
          <h2 className="font-plus-jakarta font-semibold md:max-w-[70%] lg:max-w-full text-[40px] md:text-[52px] lg:text-[64px] leading-[52px] md:leading-[72px] tracking-[-0.54px] md:tracking-[-0.8px] text-[#070708]">
            Lowest charges. Great Service.
          </h2>

          <div className="w-fit md:w-auto">
            <Button
              text="View Detailed Charges"
              imageAlt=""
              imageWidth={15}
              imageHeight={15}
              className="bg-[#182BFF] py-[8px] px-[14px] flex gap-[8px]"
              btnTextClassName="font-medium font-manrope text-[16px] leading-[24px] tracking-[-0.18px] text-[#F0F0FA]"
              imageSrc={ArrowIcon}
              href="https://fyers.in/charges-list/"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:hidden w-full px-[24px] gap-[24px]">
        <div className="w-full border border-[#C8C8CC] overflow-hidden">
          <div className="flex items-center gap-[12px] p-[12px] border-b border-[#C8C8CC]">
            <p className="font-plus-jakarta font-semibold text-[#182BFF] text-[24px] leading-[32px] tracking-[-0.5px]">
              ₹0
            </p>
            <h2 className="font-plus-jakarta font-semibold text-[18px] leading-[24px] tracking-[-0.24px] text-[#131319]">
              Mutual Funds and IPOs
            </h2>
          </div>

          <div className="flex items-center gap-[12px] p-[12px]">
            <p className="font-plus-jakarta font-semibold text-[#182BFF] text-[24px] leading-[32px] tracking-[-0.5px]">
              ₹20
            </p>
            <h2 className="font-plus-jakarta font-semibold text-[18px] leading-[24px] tracking-[-0.24px] text-[#131319]">
              Futures and Options
            </h2>
          </div>
          <div className="flex items-center gap-[12px] p-[12px] border-t border-[#C8C8CC]">
            <p className="font-plus-jakarta font-semibold text-[#182BFF] text-[24px] leading-[32px] tracking-[-0.5px]">
              0.03%
            </p>
            <h2 className="font-plus-jakarta font-semibold text-[18px] leading-[24px] tracking-[-0.24px] text-[#131319]">
              Equity Intraday - Upto  ₹20
            </h2>
          </div>
        </div>
      </div>

      <div className="relative w-full border-t border-b border-[#C8C8CC] flex justify-center  md:mt-0">
        <div className="w-full px-[24px] md:px-[40px] lg:px-[80px]">
          <div className="w-full border-l border-r border-[#C8C8CC]">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-1/2 order-1 md:order-2 border-b md:border-0 border-[#C8C8CC] relative h-[380px] md:h-auto">
                <Image
                  unoptimized
                  src="https://assets.fyers.in/Marcom_Avatar/Images/pricing-woman.webp"
                  alt="₹0 Plan"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1 md:border-r border-[#C8C8CC]">
                <div className="hidden lg:flex md:flex-col">
                  <div className="flex items-center gap-[32px] p-[24px] border-b border-[#C8C8CC]">
                    <p className="font-plus-jakarta font-semibold text-[#182BFF] text-[80px] leading-[88px] tracking-[-0.96px]">
                      ₹0
                    </p>
                    <h2 className="font-plus-jakarta font-semibold text-[24px] leading-[32px] tracking-[-0.1px] text-[#131319]">
                      Mutual Funds and IPOs
                    </h2>
                  </div>

                  <div className="flex items-center gap-[32px] p-[24px]">
                    <p className="font-plus-jakarta font-semibold text-[#182BFF] text-[80px] leading-[88px] tracking-[-0.96px]">
                      ₹20
                    </p>
                    <h2 className="font-plus-jakarta font-semibold text-[24px] leading-[32px] tracking-[-0.1px] text-[#131319]">
                      Futures and Options
                    </h2>
                  </div>
                  <div className="flex items-center gap-[32px] p-[24px] border-t border-[#C8C8CC]">
                    <p className="font-plus-jakarta not-italic font-semibold text-[#182BFF] text-[80px] leading-[88px] tracking-[-0.96px]">
                      0.03%
                    </p>
                    <h2 className="font-plus-jakarta font-semibold text-[24px] leading-[32px] tracking-[-0.1px] text-[#131319]">
                      Equity Intraday - Upto  ₹20
                    </h2>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="w-full flex flex-col">
                  {zeroPlanItems.map((item, idx) => (
                    <div key={idx} className="w-full flex items-center gap-4 border-t border-[#C8C8CC] p-[16px]">
                      {item.icon}
                      <span className="font-plus-jakarta font-semibold text-[16px] leading-[24px] md:text-[24px] md:leading-[32px] tracking-[-0.18px] not-italic md:tracking-[-0.1px] text-[#131319]">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
