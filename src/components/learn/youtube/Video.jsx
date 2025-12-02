import Image from "next/image";
import YoutubeIcon from "/public/images/learn/youtube/youtube-fill.svg";
import Link from "next/link";

export default function Video({ title, description, invert, imageSrc, imageAlt, href }) {
  return (
    <section
      className={`flex flex-col md:flex-row items-start gap-[24px] md:gap-[72px] self-stretch ${
        invert ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col items-start gap-[24px] flex-1 text-[#070708] ">
        <h4 className="text-[24px] md:text-[36px] font-plus-jakarta font-semibold leading-[32px] md:leading-[40px] -tracking-[0.1px] md:-tracking-[0.35px]">
          {title}
        </h4>
        <p className="text-[14px] md:text-[18px] font-manrope font-normal leading-[22px] md:leading-[26px] -tracking-[0.16px] md:tracking-[0px]">
          {description}
        </p>
      </div>

      <Link href={href} target="_blank" rel="noopener noreferrer" className="relative flex-1">
        <Image src={imageSrc} alt={imageAlt} className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={YoutubeIcon} alt="Play video" className="w-16 h-16 md:w-20 md:h-20" />
        </div>
      </Link>
    </section>
  );
}
