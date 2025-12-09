import Image from "next/image";
import YoutubeIcon from "@/assets/images/learn/youtube/youtube-fill.svg";
import Link from "next/link";

export default function Video({ title, description, invert, imageSrc, imageAlt, href }) {
  return (
    <section
      className={`flex flex-col md:grid md:grid-cols-2 lg:grid-cols-[52%_48%] items-start gap-[24px] md:gap-[16px] self-stretch ${
        invert ? "md:[direction:rtl]" : ""
      }`}
    >
      <div
        className={`flex flex-col gap-[4px] lg:gap-[18px] items-start flex-1 text-[#070708] md:w-full ${
          invert ? "md:[direction:ltr] md:items-start" : "md:items-end"
        }`}
      >
        <h4
          className={`text-left text-[24px] lg:text-[36px] font-plus-jakarta font-semibold leading-[32px] lg:leading-[40px] -tracking-[0.1px] lg:-tracking-[-0.35px] ${
            invert ? "md:text-left" : "md:text-right"
          }`}
        >
          {title}
        </h4>

        <p
          className={`w-full text-left ${
            invert ? "md:text-left" : "md:text-right"
          } text-[14px] lg:text-[18px] font-manrope font-normal leading-[22px] lg:leading-[26px] max-w-[660px]
          `}
        >
          {description}
        </p>
      </div>

      <Link href={href} target="_blank" rel="noopener noreferrer" className="relative w-full md:w-auto">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
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
