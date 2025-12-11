import Image from "next/image";
import FeatureLayout from "../ commodity-trading/Feature-layout";

const ColumnFeaturesSection = ({ feature, isHeading = true }) => {
  if (!feature) return <></>;
  return (
    <div
      className={`bg-white flex flex-col gap-[24px] md:gap-[26px] lg:gap-[32px] ${
        isHeading && "py-[40px] md:py-[52px] lg:py-[64px]"
      }`}
    >
      {isHeading && (
        <div className="px-5 md:px-10 lg:px-20 custom-container 2xl:w-full">
          <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[72px] -tracking-[0.1px] md:-tracking-[0.8px]">
            What’s more
          </h2>
        </div>
      )}

      <section className="relative">
        {/* Full-width top border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#C5C6CA]" />
        <div className="flex flex-col px-[20px] md:hidden">
          {feature.map(({ iconSrc, iconAlt, title, description }, index) => {
            return (
              <div
                className="p-[16px] border-x border-b flex flex-row items-center gap-4 w-full border-[#C8C8CC]"
                key={index}
              >
                <Image src={iconSrc} alt={iconAlt} height={32} width={32} className="object-contain flex-shrink-0" />
                <div className="flex-1 min-w-0 flex flex-col gap-[8px]">
                  <h6 className="font-plus-jakarta font-semibold text-[#131319] text-[20px] leading-[24px] tracking-[0px]">
                    {title}
                  </h6>
                  {description && (
                    <p className="font-manrope font-normal text-[16px] leading-[24px] -tracking-[0.18px]">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* Desktop: Grid layout with 2 columns */}
        <div className="hidden md:block md:px-10 lg:px-20 custom-container">
          <div className="grid grid-cols-2 divide-y divide-[#C5C6CA] ">
            {feature.map(({ iconSrc, iconAlt, title, description }, index) => {
              const isLast = index === feature.length - 1;
              const isOdd = feature.length % 2 !== 0;
              const spanFull = isLast && isOdd;
              return (
                <div key={title} className={`${spanFull ? "col-span-2 border-r border-[#C5C6CA]" : ""} flex h-full`}>
                  <FeatureLayout
                    iconSrc={iconSrc}
                    iconAlt={iconAlt}
                    title={title}
                    description={description}
                    isLastInRow={(index + 1) % 2 === 0 || index === feature.length - 1}
                    isMobile={false}
                    index={index}
                  />
                </div>
              );
            })}

            {/* Empty cell if odd number of features */}
          </div>
        </div>

        {/* Full-width bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C5C6CA]" />
      </section>
    </div>
  );
};

export default ColumnFeaturesSection;
