import Image from "next/image";
import Women from "@/assets/images/learn/community/women.png";

export default function CommunityFeatures({ features }) {
  return (
    <section className="flex flex-col items-start self-stretch border-y border-[#C8C8CC]">
      {/* Mobile: Image first */}
      <div className="custom-container 2xl:w-full  px-[20px] md:px-10 lg:px-[80px]">
      <div className="flex lg:hidden w-full relative h-[400px] md:h-[737px]">
        <Image src={Women} alt="" fill className="object-cover" />
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 justify-between items-start content-start self-stretch">
        <div className="flex flex-col items-start w-full border-l border-r lg:border-r-0 border-[#C8C8CC] lg:h-[737px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-[24px] w-full flex-1 flex items-center ${index === 0 ? "" : "border-t border-[#C8C8CC]"}`}
            >
              <p className="md:max-w-[592px] font-manrope text-[20px] font-semibold leading-[26px] -tracking-[0.32px] text-[#131319]">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: Image on the right */}
        <div className="hidden lg:flex items-center justify-center lg:h-[737px] relative w-full self-stretch">
          <Image src={Women} alt="" fill className="object-cover" />
        </div>
      </div>
      </div>
    </section>
  );
}
