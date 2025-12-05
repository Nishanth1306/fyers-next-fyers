import Image from "next/image";

export default function Feature({
  imageSrc,
  heading,
  description,
  imageHeight = "md:h-[290px]",
  textHeight = "min-h-[180px]",
  mobileImageHeight = "h-[190px]",
  mobileTextHeight = "min-h-[140px]",
  isFirstInMobileRow = false,
  alignIncompleteRow,
}) {
  return (
    <div
      className={`w-full h-full bg-[#FFFFFF] flex flex-col border-x border-[#C5C6CA] ${
        isFirstInMobileRow ? "md:border-x" : "md:border-x border-l-0 md:border-l"
      }`}
    >
      {/* Top icon block - fixed height */}
      <div
        className={`relative w-full ${mobileImageHeight} ${
          alignIncompleteRow ? "md:h-[300px]" : imageHeight
        } bg-[#F0F0FA]`}
      >
        <Image unoptimized src={imageSrc} alt="icon image" fill />
      </div>

      {/* Bottom text block - flexible height with minimum */}
      <div className={`w-full p-[16px] flex flex-col gap-[8px] flex-grow `}>
        <p className="font-semibold text-[20px] sm:text-[24px] lg:text-[36px] text-[#020202] leading-[26px] md:leading-[32px] lg:leading-[40px] -tracking-[0.32px] md:-tracking-[0.35px] font-plus-jakarta">
          {heading}
        </p>

        {description && (
          <p className="font-normal text-[14px] lg:text-[16px] text-[#020202] leading-[22px] -tracking-[0.16px] md:tracking-[0px] font-manrope">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
