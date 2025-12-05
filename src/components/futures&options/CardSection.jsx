import Image from "next/image";
import Feature from "@/components/fyers-webapp/Feature";
import { extraFeatures, CardData, features } from "@/data/futures&options";
import Features from "../Common/Features";

export default function CardSection() {
  return (
    <div className="w-full flex flex-col gap-[32px] py-[24px] md:py-12 lg:py-16">
      {/* Main Heading */}
      <div className="px-4 md:px-10 lg:px-20  flex flex-col gap-[12px] md:gap-[32px]">
        <h2 className="font-plus-jakarta font-semibold text-[#131319] text-4xl sm:text-5xl md:text-[64px] leading-[40px] md:leading-[72px] -tracking-[0.35px] md:tracking-[-0.8px]">
          Trade options like a pro
        </h2>
        <p className="font-manrope font-normal text-[#020202] text-[18px] leading-[26px] tracking-[0px] max-w-full">
          With a lightning-fast Scalper Terminal, Advanced Options Chain and Trade from Charts, up your options trading game.
        </p>
      </div>

      <div>
        <section className="flex flex-col gap-[20px] md:gap-[32px] pb-[40px] md:pb-[64px]">
          <div className="px-4 md:px-10 lg:px-20">
            <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Why choose FYERS?
            </h2>
          </div>

          <Features features={features} featuresPerRow={3} mobileFeaturesPerRow={1} />
        </section>

        {/* Extra Features Section */}
        <section className="flex flex-col gap-[24px] md:gap-[32px]">
          <h3 className="px-4 md:px-10 lg:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-10 md:leading-[56px] -tracking-[0.35px] md:-tracking-[0.64px]">
            Why trade options On FYERS?
          </h3>
          <Feature feature={extraFeatures} />
        </section>
      </div>
    </div>
  );
}
