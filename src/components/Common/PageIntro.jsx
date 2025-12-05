import Button from "./Button";
import Link from "next/link";
import parser from "html-react-parser";

export default function PageIntro({
  imageSrc,
  mobileImageSrc,
  greeting,
  title,
  description,
  buttons = [],
  align = "center",
  linkText,
  linkHref,
  linkPrefix,
  contentWidth = "max-w-[100%]",
  descWidth = "max-w-[100%]",
  signUpOpen = false,
}) {
  const isLeft = align === "left";

  return (
    <section
      className={`relative bg-[#131319] min-h-[823px] md:h-[800px] text-white bg-center md:bg-[position:center] bg-no-repeat `}
      style={{
        backgroundImage: `url(${mobileImageSrc || imageSrc})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="hidden md:block absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-2 px-4 w-full md:px-[40px] lg:px-20 py-8 md:pt-24 items-start text-left 
          ${isLeft ? `md:items-start md:text-left ${contentWidth}` : "md:items-center md:text-center"}`}
      >
        <div
          className={`w-full flex flex-col gap-[12px]
            items-start text-left 
            ${isLeft ? "md:items-start md:text-left" : "md:items-center md:text-center"}`}
        >
          {greeting && (
            <p className="text-[#676768] w-[70%] md:w-full font-plus-jakarta font-medium md:font-semibold leading-[18px] md:leading-[24px] text-[16px] md:text-[20px] tracking-[0.8px] md:tracking-[1.2px]">
              {greeting}
            </p>
          )}
          <h1 className="font-plus-jakarta hide-br-mobile lg:w-[85%] font-[600] text-[#F2F4FB] text-[40px] md:text-[64px] lg:text-[80px] leading-[52px] md:leading-[72px] lg:leading-[88px] -tracking-[0.54px] md:-tracking-[0.96px]">
            {parser(title)}
          </h1>
          <p
            className={`hide-br-mobile font-manrope font-normal text-[#C5C6CA] text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] -tracking-[0.16px] md:-tracking-[0.32px] ${descWidth}`}
          >
            {parser(description)}
          </p>
        </div>

        <div
          className={`md:h-auto pt-[16px] md:pt-[32px] flex flex-col gap-[8px]
            items-start 
            ${isLeft ? "md:items-start" : "md:items-center md:justify-center"}`}
        >
          {/* Render multiple buttons */}
          <div className="flex gap-3">
            {buttons.map((btn, idx) => (
              <Button
                key={idx}
                text={btn.text}
                className={`${btn.className}`}
                imageSrc={btn.imageSrc}
                imageAlt={btn.imageAlt}
                imageHeight={btn.imageHeight}
                imageWidth={btn.imageWidth}
                imageStyles={btn.imageStyles}
                invert={btn.invert}
                onClick={btn.onClick}
                href={btn.href || "#"}
              />
            ))}
          </div>

          {signUpOpen && linkText && linkHref && (
            <p className="font-manrope text-[#F2F4FB] font-normal text-[12px] leading-[16px]">
              {linkPrefix && <span>{linkPrefix} </span>}
              <Link href={linkHref} className="text-[#F5FD09]">
                {linkText}
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
