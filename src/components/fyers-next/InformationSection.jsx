export default function InfoSection() {
  const features = [
    { icon: "/images/next-1.svg", text: "Script Alerts" },
    { icon: "/images/next-2.svg", text: "Heatmaps" },
    { icon: "/images/next-3.svg", text: "Market Movers" },
  ];

  return (
    <div className="w-full bg-[#131319] pb-[40px]">
      {/* Total Layout Container */}
      <div className="flex flex-col gap-[40px] py-[40px] pb-[20px] md:pb-[40px] h-auto">
        {/* Text Layout (Heading + Description) */}
        <div className="flex flex-col items-center gap-[24px] px-[20px] md:px-[128px] h-auto">
          {/* Heading */}
          <h2 className="font-plus-jakarta text-[36px] md:text-[48px] font-semibold leading-[40px] md:leading-[56px] tracking-[-0.35px] md:tracking-[-0.64px] text-[#F0F0FA] text-start md:text-center">
            Trade faster with FYERS Next.
          </h2>

          {/* Description */}
          <p className="font-manrope text-[18px] md:text-[20px] font-normal leading-[26px] tracking-[-0.32px] text-[#C8C8CC] text-start md:text-center">
            Lightning-fast execution for accelerated trading and investing.
          </p>
        </div>
      </div>

      {/* Border Box Section (full 90vw with top, bottom, left, right) */}
      <div className="md:border-y border-[#666666]">
        <div className="px-[20px] md:px-[80px]">
          <div className="flex flex-row h-full border-x border-y md:border-y-0 border-[#666666]">
            {features.map((item, i) => (
              <div
                key={i}
                className={`flex-1 flex justify-center items-center text-center 
                p-[12px] md:p-[32px] 
                ${i !== 0 ? "border-l border-[#666666]" : ""}`}
              >
                <span className="font-plus-jakarta text-[14px] md:text-[36px] font-[600] leading-[16px] md:leading-[26px] tracking-[-0.08px] md:tracking-[-0.35px] text-[#F5FF0A]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
