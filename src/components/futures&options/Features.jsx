// FeatureSection.jsx
import { feature } from "@/data/futures&options";
import FeatureLayout from "./FeatureLayout";

export default function FeatureSection() {
  return (
    <div className="bg-white flex flex-col gap-[24px] md:gap-[32px] pb-[24px] md:pb-[64px]">
      <div className="px-4 md:px-10 lg:px-20 custom-container 2xl:w-full">
        <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] lg:text-[64px] leading-[56px] md:leading-[72px] -tracking-[0.64px] md:-tracking-[0.8px]">
          What's more
        </h2>
      </div>

      <section className="relative">
        {/* Full-width top border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#C5C6CA]" />

        {/* Mobile: Horizontal scrollable */}
        <div className="md:hidden overflow-x-auto px-4 md:px-10 lg:px-20 scrollbar-hide">
          <div className="flex w-max divide-y">
            {feature.map(({ iconSrc, iconAlt, title, description }, index) => (
              <FeatureLayout
                key={title}
                iconSrc={iconSrc}
                iconAlt={iconAlt}
                title={title}
                isLastInRow={index === feature.length - 1}
                isMobile={true}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:block px-4 md:px-10 lg:px-20 custom-container">
          <div className="grid grid-cols-3 divide-y">
            {feature.map(({ iconSrc, iconAlt, title, description }, index) => (
              <FeatureLayout
                key={title}
                iconSrc={iconSrc}
                iconAlt={iconAlt}
                title={title}
                isLastInRow={(index + 1) % 3 === 0}
              />
            ))}
          </div>
        </div>

        {/* Full-width bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C5C6CA]" />
      </section>
    </div>
  );
}
