// FeatureLayout.jsx
import Image from "next/image";
import Link from "next/link";

export default function FeatureLayout({
  iconSrc,
  iconAlt,
  title,
  description,
  href,
  isLastInRow = false,
  className = "p-4 flex flex-row items-center gap-4 border-[#C5C6CA] max-md:w-[239px] max-md:max-w-[239px] max-md:border-r max-md:first:border-l md:border-l",
  titleClassName = "font-manrope md:font-plus-jakarta font-medium md:font-semibold text-[16px] md:text-[18px] lg:text-[24px] leading-[22px] md:leading-[32px] -tracking-[0.18px] md:-tracking-[0.1px] break-words",
  descriptionClassName = "font-manrope text-[14px] leading-[20px] text-[#5E5E62]",
  iconClassName = "md:h-[35px] md:w-[35px] object-contain flex-shrink-0",
}) {
  return (
    <div className={`${className} ${isLastInRow ? "md:border-r" : ""}`}>
      <Image src={iconSrc} alt={iconAlt} height={24} width={24} className={`${iconClassName}`} />
      <div className="flex-1 min-w-0 md:flex-initial md:min-w-0">
        {!href && (
          <>
            <h6 className={titleClassName}>{title}</h6>
            <p className={`hidden md:block ${descriptionClassName}`}>{description}</p>
          </>
        )}

        {href && (
          <Link href={href} className="cursor-pointer" target="_blank">
            <h6 className={titleClassName}>{title}</h6>
            <p className={`hidden md:block ${descriptionClassName}`}>{description}</p>
          </Link>
        )}
      </div>
    </div>
  );
}
