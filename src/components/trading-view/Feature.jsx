import Image from "next/image";

export default function Feature({ iconSrc, iconAlt, title, description }) {
  return (
    <div className="p-[16px] flex flex-row items-center gap-[16px] border-r border-b border-[#C5C6CA] [&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0">
      <Image src={iconSrc} alt={iconAlt} height={35} width={35} className="object-contain" />

      <div className="">
        <h6 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] leading-[32px] -tracking-[0.1px]">
          {title}
        </h6>
        <p className="font-manrope font-normal text-[#020202] text-[16px] leading-[22px] tracking-[0px]">
          {description}
        </p>
      </div>
    </div>
  );
}
