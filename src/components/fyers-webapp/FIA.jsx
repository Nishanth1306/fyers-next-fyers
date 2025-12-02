import Image from "next/image";
import Button from "../Common/Button";

export default function FIA() {
  return (
    <section className="bg-[#000000] py-[48px] md:py-[72px] flex flex-col gap-[32px]">
      <div className="px-6 md:px-[80px] flex flex-col gap-[16px]">
        <p className="font-manrope font-medium text-[#C5C6CA] text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] -tracking-[0.18px]">
          MEET FIA
        </p>

        <h2 className="font-plus-jakarta font-bold text-[#F2F4FB] text-[32px] leading-[40px] md:text-[64px] md:leading-[72px] -tracking-[0.2px]">
          India’s First AI-Powered Market Assistant for Traders and Investors.
        </h2>

        <p className="font-manrope font-semibold text-[#FFFFFF] text-[16px] leading-[24px] md:text-[20px] md:leading-[26px] -tracking-[0.32px]">
          The world is moving towards AI. So is your trading and investing. Meet FIA, your always-on, always-ready
          market co-pilot.
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <ul className="text-[#FFFFFF] font-manrope font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[26px] tracking-[0px] list-disc ml-[20px] md:ml-[25px]">
            <li>Deep market analysis at your command</li>
            <li>Smart symbol insights you can act on</li>
            <li>180+ pre-defined screeners — or create your own</li>
            <li>Portfolio-level intelligence that sees the big picture</li>
          </ul>

          <Button
            text="See How FIA Works"
            imageSrc="/images/arrow-right.svg"
            imageAlt="right arrow"
            className="bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[14px] gap-[4px] self-start md:self-auto"
          />
        </div>
      </div>

      <div className="relative w-full h-[400px] md:h-[826.26px] flex flex-col gap-[8px] bg-[#000000] py-[16px]">
        <div className="relative w-full h-full">
          <Image src="/images/image 53.png" alt="FIA" fill className="object-contain" />
        </div>
        <p className="font-manrope font-normal text-[#F5FD09] text-[16px] leading-[24px] md:text-[20px] md:leading-[26px] -tracking-[0.32px] text-center">
          Ask. Analyse. Act. With FIA.
        </p>
      </div>
    </section>
  );
}
