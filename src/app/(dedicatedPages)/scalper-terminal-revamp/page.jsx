import AboutHighlightSection from "@/components/Common/AboutHighlightSection";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import { feature, extraFeatures } from "@/data/dedicated-pages/scalperTerminal";
import FeatureSection from "@/components/ commodity-trading/Feature";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import ScalperTerminalImage from "/public/images/Group2.svg";

export default function ScalperTerminalPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/scalp-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/scalp-mobile-bk.webp"}
          title="Scalp lightning-fast, <br /> every time."
          description="The FYERS Scalper Terminal keeps you ahead <br /> with precision and speed. Modern scalping, <br /> made simple."
          buttons={[
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              // imageSrc: ScalperTerminalImage,
              // imageAlt: "windows icon",
              // imageHeight: 18,
              // imageWidth: 18,
              // invert: true,
              href: "https://signup.fyers.in/",
            },
          ]}
          linkPrefix={"Not a FYERS User?"}
          linkText={"Sign up"}
          linkHref={"https://signup.fyers.in/"}
          align="left"
          contentWidth="md:max-w-[80%]"
          descWidth="md:max-w-[40%]"
        />

        <AboutHighlightSection
          aboutTitle="Built for speed. <br /> Designed for scalpers."
          aboutTitleClassName="hide-br-mobile font-semibold font-plus-jakarta text-[24px] leading-[32px] md:text-[48px] lg:text-[64px] md:leading-[52px] lg:leading-[72px] text-[#F0F0FA] -tracking-[-0.1px] md:-tracking-[0.8px]"
          aboutDesc="Stay ahead in fast-moving markets with precision charts and one-click execution."
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/scalp-woman.webp"
          imageAlt="A woman using a laptop"
          imageContainerStyles="min-w-[540px] md:min-h-full"
          imageStyles="w-full h-auto md:h-[361px] md:w-[542px] object-cover"
        />

        <div className="flex flex-col gap-[24px] md:gap-[26px] lg:gap-[28px] pt-[40px] md:pt-[52px] lg:pt-[64px]">
          <h3 className="px-4 md:px-10 lg:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
            Why scalp on FYERS?
          </h3>
          <Feature feature={feature} invert />
        </div>

        <FeatureSection feature={extraFeatures} />
        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
