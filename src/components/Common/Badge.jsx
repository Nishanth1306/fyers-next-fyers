import Image from "next/image";

export default function Badge({ text, badgeImageSrc, badgeImageAlt, primaryColor, secondaryColor }) {
  return (
    <span
      className="bg-[var(--secondary-color)] border border-[var(--primary-color)] flex items-center justify-center w-fit h-[32px] p-[6px] gap-[4px]"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
      }}
    >
      <Image src={badgeImageSrc} alt={badgeImageAlt} height={18} width={18} className="object-contain" />
      <span className="uppercase text-center font-bold font-plus-jakarta text-[12px] text-[var(--primary-color)] leading-[18px] tracking-[0.8px]">
        {text}
      </span>
    </span>
  );
}
