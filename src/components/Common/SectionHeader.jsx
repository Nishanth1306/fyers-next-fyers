import Button from "./Button";

export default function SectionHeader({
  sectionHeading,
  sectionSubheading,
  sectionDescription,
  buttonText,
  buttonImagesrc,
  buttonImageAlt,
  buttonImageHeight,
  buttonImageWidth,
  buttonStyles,
  badges,
  href = "#",
  imageStyles,
}) {
  return (
    <div className="px-4 py-[24px] md:px-10 lg:px-20  md:py-[72px] gap-[16px]">
      <div className="text-left">
        <h2 className="text-[#676768] pb-[16px] font-plus-jakarta font-semibold text-[14px] md:text-[20px] leading-[20px] md:leading-[24px] tracking-[0.8px] md:tracking-[1.2px]">
          {sectionHeading}
        </h2>
        <h3 className="font-[700] md:font-[600] text-[48px] pb-[24px] md:text-[64px] font-plus-jakarta leading-[56px] md:leading-[72px] -tracking-[0.64px] md:-tracking-[0.8px] text-[#131319]">
          {sectionSubheading}
        </h3>

        <div className="h-auto gap-[20px] flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex flex-col gap-[8px]">
            <p className="font-[400] font-manrope text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] -tracking-[0.16px] md:tracking-[0px] text-[#020202]">
              {sectionDescription}
            </p>
            <div className="md:block hidden">{badges}</div>
          </div>

          <div className="flex w-full gap-[16px] md:w-auto">
            <Button
              text={buttonText}
              imageSrc={buttonImagesrc}
              imageAlt={buttonImageAlt}
              imageHeight={buttonImageHeight}
              imageWidth={buttonImageWidth}
              className={buttonStyles}
              imageStyles={imageStyles}
              href={href}
            />
            <div className="block md:hidden">{badges}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
