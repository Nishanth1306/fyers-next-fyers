import Image from "next/image";
import Women from "/public/images/learn/community/women.png";

export default function CommunityFeatures({ features }) {
  return (
    <section className="flex flex-col items-start self-stretch border-y border-[#C8C8CC] px-[20px] lg:px-[80px]">
      {/* Mobile: Image first */}
      <div className="flex lg:hidden w-full relative h-[400px]">
        <Image src={Women} alt="" fill className="object-cover" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start content-start self-stretch flex-wrap">
        <div className="flex flex-col items-start w-full lg:flex-grow lg:flex-shrink-0 lg:basis-0 border-l border-r lg:border-r-0 border-[#C8C8CC]">
          {features.map((feature, index) => (
            <div key={index} className={`p-[24px] w-full ${index === 0 ? "" : "border-t border-[#C8C8CC]"}`}>
              <p className="font-manrope text-[20px] font-semibold leading-[26px] -tracking-[0.32px] text-[#131319]">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: Image on the right */}
        <div className="hidden lg:flex items-center justify-center relative w-[640px] self-stretch">
          <Image src={Women} alt="" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
