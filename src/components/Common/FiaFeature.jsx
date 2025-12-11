import Image from "next/image";

const FiaFeature = ({ features }) => {
  return (
    <div className="w-full border-y border-[#C8C8CC]">
      <div className="px-[20px] md:px-10 lg:px-[80px] custom-container 2xl:w-full flex flex-col md:flex-row justify-center">
        {/* Left Image */}
        <div className="relative w-full h-[209px] md:h-[310px] md:flex-1 lg:h-[509px] flex-shrink-0 border-b md:border-b-0 md:border-r border-[#C8C8CC]">
          <Image
            src="https://assets.fyers.in/Marcom_Avatar/Images/fia-f2.webp"
            fill
            alt="Mixed Device"
            className="object-cover"
          />
        </div>

        {/* Right Text */}
        <div
          className="w-full md:w-[418px] flex-shrink-0
          border-l border-r border-b last:border-b-0 border-[#C8C8CC]
          grid md:grid-rows-3"
        >
          {features.features.map((feature, index) => (
            <div
              key={feature.featureTitle}
              className={`px-[16px] py-[20px] md:p-[10px] lg:p-[24px] border-b border-[#C8C8CC]
                flex flex-col justify-center
                ${index === features.features.length - 1 ? "border-b-0" : ""}
              `}
            >
              {/* Desktop */}
              <div className="hidden md:block">
                <div className="font-plus-jakarta text-[#131319] text-[18px] font-[600] leading-[24px]">
                  {feature.featureTitle}
                </div>
                <div className="font-manrope pt-[8px] text-[16px] font-[400] leading-[24px] tracking-[-0.18px] text-[#131319]">
                  {feature.featureDescription}
                </div>
              </div>

              {/* Mobile */}
              <div className="md:hidden">
                <div className="text-[#131319] text-[14px] font-[400] leading-[22px] tracking-[-0.16px]">
                  {feature.featureTitle}: {feature.featureDescription}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiaFeature;
