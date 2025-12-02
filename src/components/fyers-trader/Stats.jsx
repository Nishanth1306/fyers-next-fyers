export default function Stats({ value, label }) {
  return (
    <div className="w-[90vw] md:py-[32px] p-[12px] md:pl-[32px] border-r border-l border-y md:border-y-0 border-[#666666] last:border-l-0">
      <h2 className="font-plus-jakarta font-semibold text-[#F5FF0A] text-[24px] md:text-[64px] leading-[32px] md:leading-[72px] -tracking-[0.64px] md:-tracking-[0.8px]">
        {value}
      </h2>
      <p className="font-manrope font-normal text-[#C8C8CC] text-[16px] md:text-[24px] leading-[22px] md:leading-[160%] -tracking-[0.16px] md:-tracking-[2%]">
        {label}
      </p>
    </div>
  );
}
