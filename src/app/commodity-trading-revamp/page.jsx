import FeatureSection from "@/components/ commodity-trading/Feature";
import Features from "@/components/Common/Features";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { extraFeatures, feature, features } from "@/data/commodity-trading";

export default function CommodityTradingPage() {
  return (
    <>
      <NavBar />
      <main className="font-plus-jakarta">
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/ct-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/ct-mobile-bk.webp"}
          title="The next level of commodity trading is here"
          description="Trade commodities with an edge. FYERS is the only platform offering a dedicated Scalper Terminal for lightning-fast execution."
          buttons={[
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px] ",
              // imageSrc: "/images/exchange-dollar-fill.svg",
              // imageAlt: "Dollar icon",
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
          contentWidth="md:max-w-[80%]"
          descWidth="md:max-w-[70%]"
        />

        <section className="flex flex-col gap-[16px] md:gap-[32px]">
          <div className="px-4 md:px-20 pt-[32px] md:pt-[48px]">
            <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Our robust platform
            </h2>
          </div>
          <Features features={features} featuresPerRow={2} />
        </section>

        <section className="pt-[40px] md:pt-[64px] flex flex-col gap-[12px] md:gap-[28px]">
          <h3 className="font-plus-jakarta px-5 md:px-20  font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[40px] md:leading-[56px] -tracking-[0.35px] md:-tracking-[0.64px]">
            Why trade commodities on FYERS?
          </h3>
          <Feature feature={extraFeatures} />
        </section>

        <FeatureSection feature={feature} />

        <FyersCTA />
        <Footer />
      </main>
    </>
  );
}
