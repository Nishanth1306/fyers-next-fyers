import Image from "next/image";
import Button from "../Common/Button";
import TwitterImage from "@/assets/images/twitter-x-fill.svg";
import LinkdinImage from "@/assets/images/linkedin-fill.svg";

export default function Leader({ imageSrc, name, desc, site, linkedInURL, twitterURL }) {
  return (
    <div className="w-full bg-[#C5C6CA]">
      <div className="h-full bg-[#dee3f8] flex flex-col items-center">
        {/* Image wrapper must have fixed height for each breakpoint */}
        <div className="relative  w-full overflow-hidden  flex justify-center">
          <Image
            unoptimized
            src={imageSrc}
            alt={desc}
            height={417}
            width={408}
            priority
            className="w-full h-auto min-h-[208px] md:min-h-[417px] min-w-[204px] md:min-w-[407px]"
          />
        </div>
        {/* Name + Desc */}
        <div className="w-full pt-[12px] md:pt-[16px] px-[12px] md:px-[16px] lg:px-[32px] pb-[8px] bg-[#B8CEFF]">
          <p className="w-full font-semibold text-[12px] md:text-[20px] lg:text-[24px] leading-[16px] md:leading-[28px] lg:leading-[32px] -tracking-[0.1px] truncate">
            {name}
          </p>
          <p className="w-full font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[20px] lg:leading-[22px] text-[#020202] truncate">
            {desc}
          </p>
        </div>
        {/* Site + Socials */}
        <div className="w-full h-[40px] md:h-[52px] pt-[6px] md:pt-[8px] px-[12px] md:px-[16px] lg:px-[32px] pb-[12px] md:pb-[16px] bg-[#B8CEFF]">
          <div className="h-full flex items-center justify-end gap-[6px]">
            {/* <span className="flex-1 min-w-0">
              <Link
                href={site.href}
                className="text-[#131319] font-normal text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] truncate block"
              >
                {site.siteName}
              </Link>
            </span> */}

            <div className="flex gap-[6px] flex-shrink-0">
              {twitterURL && (
                <Button
                  isLink
                  href={twitterURL}
                  target="_blank"
                  className="bg-[#182BFF] text-[#F2F4FB] w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                  imageSrc={TwitterImage}
                  imageAlt="twitter"
                />
              )}
              {linkedInURL && (
                <Button
                  isLink
                  href={linkedInURL}
                  target="_blank"
                  className="bg-[#182BFF] text-[#F2F4FB] w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                  imageSrc={LinkdinImage}
                  imageAlt="linkedin"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
