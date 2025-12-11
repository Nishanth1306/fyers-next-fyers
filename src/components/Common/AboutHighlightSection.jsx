import Image from "next/image";
import Button from "../Common/Button";
import parser from "html-react-parser";

export default function AboutHighlightSection({
  className,
  dynamicGrid = "px-4 md:px-10 lg:px-20  grid grid-cols-1 md:grid-cols-[2.6fr_1.4fr] items-center",
  aboutShortTitle,
  aboutTitle,
  aboutTitleClassName,
  aboutShortDesc,
  dynamicGaps = "gap-[12px]",
  aboutDesc,
  aboutDescClassName,
  imageSrc,
  imageAlt,
  imageContainerStyles = "w-full h-[290px]",
  imageStyles,
  showButton = false,
  buttonText = "View Detailed Charges",
  buttonImage = null,
  buttonClassName = "bg-[#182BFF] text-[#F2F4FB] py-[8px] md:py-[12px] px-[14px] md:px-[24px] text-[16px] w-auto",
}) {
  return (
    <section className={`bg-[#131319] border-t-[0.5px] border-[#C8C8CC] ${className}`}>
      <div className={`${dynamicGrid} custom-container mx-auto`}>
        <div className={`flex flex-col ${dynamicGaps} pt-[40px] md:py-[36px] lg:py-[64px]`}>
          {aboutShortTitle && (
            <h2 className="text-[#F0F0FA] font-plus-jakarta font-semibold text-[20px] leading-[24px] tracking-[0px]">
              {aboutShortTitle}
            </h2>
          )}
          <h2
            className={`${
              aboutTitleClassName ??
              "font-semibold font-plus-jakarta text-[36px] leading-[40px] md:text-[42px] lg:text-[64px] md:leading-[72px] text-[#F0F0FA] -tracking-[-0.35px] md:-tracking-[0.8px]"
            }`}
          >
            {parser(aboutTitle)}
          </h2>

          {aboutShortDesc && (
            <h3 className=" font-plus-jakarta font-medium text-[16px] leading-[22px] md:text-[22px] md:leading-[32px] text-[#F0F0FA] -tracking-[0.18px] md:-tracking-[0.32px]">
              {aboutShortDesc}
            </h3>
          )}

          {aboutDesc && (
            <p
              className={
                aboutDescClassName ??
                "font-manrope font-normal text-[14px] leading-[22px] md:text-[18px] md:leading-[26px] text-[#C8C8CC] -tracking-[0.16px] md:tracking-[0px]"
              }
            >
              {parser(aboutDesc)}
            </p>
          )}

          {/* ✅ Optional Button */}
          {showButton && (
            <div className="mt-[12px] md:mt-0">
              <Button
                text={buttonText}
                imageAlt={buttonImage?.alt || ""}
                imageWidth={buttonImage?.width || 17}
                imageHeight={buttonImage?.height || 17}
                imageSrc={buttonImage?.src || ""}
                className={buttonClassName}
                href={buttonImage.href || "#"}
              />
            </div>
          )}
        </div>

        <div className={`relative w-full h-[290px] md:h-[190px] md:${imageContainerStyles}`}>
          <Image
            unoptimized
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`${imageStyles ? imageStyles : "object-cover object-center"}`}
          />
        </div>
      </div>
    </section>
  );
}
