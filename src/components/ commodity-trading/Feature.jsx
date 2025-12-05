// FeatureSection.jsx
import FeatureLayout from "./Feature-layout";

export default function FeatureSection({ feature, isHeading = true }) {
  if (!feature) return <></>;

  return (
    <div
      className={`bg-white flex flex-col gap-[24px] md:gap-[26px] lg:gap-[32px] ${
        isHeading && "py-[40px] md:py-[64px]"
      }`}
    >
      {isHeading && (
        <div className="px-5 md:px-10 lg:px-20">
          <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[72px] -tracking-[0.1px] md:-tracking-[0.8px]">
            What’s more
          </h2>
        </div>
      )}

      <section className="relative">
        {/* Full-width top border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#C5C6CA]" />

        {/* Mobile: Horizontal scrollable */}
        <div className="md:hidden overflow-x-auto px-5 md:px-10 lg:px-20 scrollbar-hide">
          <div className="flex w-max">
            {feature.map(({ iconSrc, iconAlt, title, description }, index) => (
              <FeatureLayout
                key={title}
                iconSrc={iconSrc}
                iconAlt={iconAlt}
                title={title}
                description={description}
                isLastInRow={index === feature.length - 1}
                isMobile={true}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout with 2 columns */}
        <div className="hidden md:block  md:px-10 lg:px-20">
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
            {/* {feature.length % 2 !== 0 && <div className="border-l border-r border-[#C5C6CA] p-4 md:p-6" />} */}
          </div>
        </div>

        {/* Full-width bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C5C6CA]" />
      </section>
    </div>
  );
}
