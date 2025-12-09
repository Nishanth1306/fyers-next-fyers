import Image from "next/image";
import YoutubeIcon from "@/assets/images/learn/youtube/youtube-fill.svg";
import Link from "next/link";

export default function Video({ title, description, invert, imageSrc, imageAlt, href }) {
  return (
    <section
      className={`flex flex-col md:flex-row items-start gap-[24px] md:gap-[16px] self-stretch ${invert ? "md:flex-row-reverse" : ""
        }`}
    >

      <div
        className={`flex flex-col items-start ${invert ? "md:items-start" : "md:items-end"
          } gap-[8px] flex-1 text-[#070708] md:w-full`}
      >
        <h4 className="text-left md:text-[36px] lg:text-[36px] text-[24px] font-plus-jakarta font-semibold leading-[32px] md:leading-[34px] lg:leading-[40px]">
          {title}
        </h4>

        <p
          className={`
            w-full lg:w-[730px]
            text-left
            ${invert ? "md:text-left" : "md:text-right"}
            text-[14px] md:text-[16px] lg:text-[18px]
            font-manrope
            leading-[22px] md:leading-[24px] lg:leading-[26px]
          `}
        >
          {description}
        </p>
      </div>

      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full md:flex-1"
      >
        <div className="relative w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-fit"
            sizes="(max-width: 768px) 100vw,
             (max-width: 1024px) 50vw,
             50vw"
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image src={YoutubeIcon} alt="Play video" className="w-16 h-16 md:w-20 md:h-20" />
          </div>
        </div>
      </Link>


    </section>
  );
}
