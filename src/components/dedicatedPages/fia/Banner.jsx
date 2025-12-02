import Button from "@/components/Common/Button";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-[#131319] p-[20px] md:p-[40px] flex flex-col gap-[16px] md:gap-[32px]">
      <div className="border border-[#666] py-[16px] flex flex-col gap-[8px]">
        <div className="relative w-full h-[236px] md:h-[678px] flex items-center justify-center">
          <Image
            src="https://assets.fyers.in/Marcom_Avatar/Images/fia-banner.webp"
            alt="banner"
            width={493}
            height={446}
            className="w-[258px] h-[236px] md:w-[493px] md:h-[446px] object-cover"
          />
        </div>
      </div>

      <div className="px-5 md:px-20 flex flex-col items-center gap-[20px] md:gap-[32px]">
        <div className="flex flex-col gap-[16px] items-center">
        <div className="flex flex-col gap-[8px] w-full">
          <h2 className="font-plus-jakarta font-bold text-[24px] md:text-[64px] lg:text-[48px] leading-[32px] md:leading-[72px] -tracking-[0.1px] md:-tracking-[0.2px] text-center text-[#F0F0FA] md:whitespace-nowrap">
            FYERS Intelligence - Now on ChatGPT
          </h2>


          <p className="w-full font-manrope font-normal text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] -tracking-[0.16px] md:tracking-[0px] text-center text-[#C8C8CC]">
            Leverage the capability of ChatGPT with your FYERS APIs, tailored for stock market context.
          </p>
        </div>

        <Button
          text="Sign Up"
          className="bg-[#182BFF] text-[#F2F4FB] p-[12px] w-fit"
          href="https://signup.fyers.in/"
        />
        </div>
      </div>

    </section>
  );
}
