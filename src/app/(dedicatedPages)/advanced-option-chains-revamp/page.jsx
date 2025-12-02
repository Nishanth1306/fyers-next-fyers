import AboutHighlightSection from "@/components/Common/AboutHighlightSection";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { feature1, feature2 } from "@/data/dedicated-pages/advancedOptionChains";
import Group2Image from "/public/images/Group2.svg";

export default function AdvancedOptionChains() {
  return (
    <>
      <NavBar />

      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/adv-opt-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/adv-opt-mobile-bk.webp"}
          title="See every strike. <br /> Spot every <br /> opportunity."
          description="Trade with unmatched clarity using FYERS Advanced Options Chain."
          buttons={[
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              imageSrc: Group2Image,
              imageAlt: "windows icon",
              imageHeight: 18,
              imageWidth: 18,
              invert: true,
              href: "https://signup.fyers.in/",
            },
          ]}
          linkPrefix={"Not a FYERS User?"}
          linkText={"Sign up"}
          linkHref={"https://signup.fyers.in/"}
          align="left"
          contentWidth="md:max-w-[80%] lg:max-w-[90%]"
        />

        <AboutHighlightSection 
          aboutTitle="Decode options <br /> strategies like a pro"
          aboutTitleClassName="font-semibold font-plus-jakarta text-[24px] leading-[32px] md:text-[64px] md:leading-[72px] text-[#F0F0FA] -tracking-[-0.1px] md:-tracking-[0.8px]"
          aboutDesc="Get strike-wise data, implied volatility, OI build-ups and <br /> strategy analysis. Designed for serious F&O traders."
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/adv-option-chain-banner.webp"
          imageAlt="A woman using a laptop"
          imageContainerStyles="min-w-[540px] md:min-h-full"
          imageStyles="w-full h-auto md:h-[361px] md:w-[542px] object-cover"
        />

        <div className="flex flex-col gap-[24px] md:gap-[28px] pt-[40px] md:pt-[64px]">
          <h3 className="px-4 md:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
            Why Choose FYERS?
          </h3>
          <Feature feature={feature1} />
        </div>

        <div className="flex flex-col gap-[24px] md:gap-[28px] py-[40px] md:py-[64px]">
          <h3 className="px-4 md:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
            What’s More
          </h3>
          <Feature feature={feature2} isThreeCols />
        </div>

        <FyersCTA />
      </main>

      <Footer />
    </>
  );
}
