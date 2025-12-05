import Image from "next/image";

export default function Banner() {
  return (
    <section className="md:py-[64px] md:px-[40px] lg:px-[80px] p-4 flex flex-col gap-[16px] self-stretch border-b border-[#C8C8CC]">
      <div className="flex flex-col gap-[48px]">
        <div className="relative h-[407px] md:h-[537px]">
          <Image
            unoptimized
            src={"https://assets.fyers.in/Marcom_Avatar/Images/about-us-desktop-banner.webp"}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-start self-stretch gap-[24px]">
          <h2 className="font-plus-jakarta text-[#131319] text-[36px] md:text-[64px] font-semibold leading-[40px] md:leading-[72px] -tracking-[0.35px] md:-tracking-[0.8px]">
            ‌We don't just build for traders & investors. <span className="text-[#182BFF]">We build with them.</span>
          </h2>

          <p className="font-manrope text-[14px] md:text-[18px] font-normal leading-[22px] md:leading-[24px] -tracking-[0.16px] md:tracking-[0px] text-[#131319]">
            Our focus has always and will always be on the users of our platform. We are always listening, evaluating
            and taking action. 
          </p>
        </div>
      </div>
    </section>
  );
}
