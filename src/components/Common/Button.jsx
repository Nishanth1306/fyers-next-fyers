"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Button({
  isLink = false,
  href = "#",
  target,
  className,
  btnTextClassName = "font-manrope font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] -tracking-[0.08px] md:-tracking-[0.18px]",
  text,
  imageSrc,
  imageAlt,
  imageHeight = 13,
  imageWidth = 13,
  imageStyles,
  invert = false,
  ...props
}) {
  const router = useRouter();
  const handleClick = () => {
    if (href) router.push(href);
  };
  return (
    <button
      className={`flex items-center justify-center gap-[4px] cursor-pointer ${
        invert ? "flex-row-reverse" : "flex-row"
      } ${className || ""}`}
      {...props}
      onClick={handleClick}
    >
      {text && <span className={`${btnTextClassName}`}>{text}</span>}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt || ""}
          width={imageWidth}
          height={imageHeight}
          className={`object-contain ${imageStyles}`}
        />
      )}
    </button>
  );
}
