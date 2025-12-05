import Link from "next/link";

export default function SosFeature({ feature, index }) {
  return (
    <div className="flex justify-center items-center flex-[1_0_0] relative h-full border-x md:border-x-0 border-[#C8C8CC]">
      <div className="h-full flex w-[67px] py-[16px] px-[24px] items-center justify-end gap-[10px]">
        <h4 className="text-center lg:text-left text-[#131319] font-plus-jakarta text-[24px] lg:text-[48px] font-semibold leading-[32px] lg:leading-[56px] -tracking-[0.1px] lg:-tracking-[0.64px]">
          {index + 1}
        </h4>
      </div>
      <div className="h-full flex py-[16px] px-[24px] lg:px-[48px] items-start gap-[8px] flex-[1_0_0] border-l border-[#C8C8CC]">
        <div className="flex flex-col justify-center items-start gap-[8px] flex-[1_0_0] self-stretch">
          <Link
            href={feature.href}
            className="font-plus-jakarta text-[18px] lg:text-[24px] font-semibold leading-[24px] lg:leading-[32px] -tracking-[0.1px] text-[#131319]"
          >
            {feature.title}
          </Link>
          <p className="font-manrope text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[24px] -tracking-[0.08px] lg:-tracking-[0.18px] text-[#666666]">
            {feature.chapters}
          </p>
          <p className="font-manrope text-[14px] lg:text-[18px] font-normal leading-[22px] lg:leading-[26px] -tracking-[0.16px] lg:tracking-[0px] text-[#666666]">
            {feature.description}
          </p>
        </div>
      </div>
      <div className="absolute left-[62px] lg:left-[55px] top-1/2 -translate-y-1/2 h-[12px] lg:h-[24px] w-[12px] lg:w-[24px] aspect-square bg-[#C8C8CC]"></div>
    </div>
  );
}
