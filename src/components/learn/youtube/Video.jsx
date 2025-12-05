import Image from "next/image";
import YoutubeIcon from "/public/images/learn/youtube/youtube-fill.svg";
import Link from "next/link";
export default function Video({ title, description, invert, imageSrc, imageAlt, href }) {
  return (
    <section
      className={`flex flex-col md:flex-row items-start gap-[24px] md:gap-[16px] self-stretch ${
        invert ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`flex flex-col items-start ${
          invert ? "md:items-start" : "md:items-end"
        } gap-[8px] flex-1 text-[#070708]`}
      >
        <h4 className="text-left md:text-[36px] text-[24px] font-plus-jakarta font-semibold leading-[32px] md:leading-[40px]">
          {title}
        </h4>
        <p
          className={`
            w-full md:w-[730px]
            text-left
            ${invert ? "md:text-left" : "md:text-right"}
            text-[14px] md:text-[18px]
            font-manrope
            leading-[22px] md:leading-[26px]
          `}
        >
          {description}
        </p>
      </div>
      <Link href={href} target="_blank" rel="noopener noreferrer" className="relative flex-1">
        <Image src={imageSrc} alt={imageAlt} className="w-full h-full object-fit" />
        <div className="absolute inset-0 flex items-center justify-center object-cover">
          <Image src={YoutubeIcon} alt="Play video" className="w-16 h-16 md:w-20 md:h-20" />
        </div>
      </Link>
    </section>
  );
}
