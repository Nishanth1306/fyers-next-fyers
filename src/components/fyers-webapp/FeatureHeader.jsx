export default function FeatureHeader({ subtitle, title, description }) {
  return (
    <section className="pb-[12px] pt-[40px] md:py-[72px] px-4 md:px-10 lg:px-20  flex flex-col gap-[12px]">
      {subtitle && (
        <p className="font-manrope font-normal text-[#070708] text-[12px] leading-[16px] md:text-[16px] md:leading-[24px] tracking-[0px] md:-tracking-[0.18px]">
          {subtitle}
        </p>
      )}

      {title && (
        <h2 className="font-plus-jakarta font-bold md:font-semibold text-[40px] leading-[52px] not-italic tracking-[-0.54px] md:text-[64px] md:leading-[72px] text-[#131319] md:-tracking-[0.8px]">
          {title}
        </h2>
      )}

      {description && (
        <p className="font-manrope font-normal text-[#131319] text-[14px] leading-[22px] md:text-[20px] md:leading-[26px] -tracking-[0.16px] md:-tracking-[0.32px]">
          {description}
        </p>
      )}
    </section>
  );
}
