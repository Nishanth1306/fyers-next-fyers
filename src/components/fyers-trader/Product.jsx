import Image from "next/image";

export default function Product({ index, title, description, imageHeight, imageWidth }) {
  const isEvenIndex = index % 2 === 0;

  return (
    <div className={`md:border-x border-[#C5C6CA] ${isEvenIndex ? "border-x" : "border-r"} w-full max-w-[400px]`}>
      <div className="bg-[#FFFFFF] p-[64px] md:p-[48px] flex items-center justify-center">
        <Image
          src="/images/mobile-phone.svg"
          alt="mobile phone"
          width={imageWidth}
          height={imageHeight}
          className="object-contain"
        />
      </div>

      <div className="p-[16px] flex flex-col border-t border-[#C5C6CA] gap-[8px]">
        <h3 className="font-plus-jakarta font-semibold md:font-medium text-[#131319] text-[18px] md:text-[22px] leading-[26px] md:leading-[32px] -tracking-[0.26px] md:-tracking-[0.32px]">
          {title}
        </h3>
        <p className="font-manrope font-normal text-[#020536] md:text-[14px] leading-[22px] -tracking-[0.16px]">
          {description}
        </p>
      </div>
    </div>
  );
}
