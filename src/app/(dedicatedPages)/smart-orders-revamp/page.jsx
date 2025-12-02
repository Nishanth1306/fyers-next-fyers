import AboutHighlightSection from "@/components/Common/AboutHighlightSection";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import { feature } from "@/data/dedicated-pages/smartOrders";
import FeatureSection from "@/components/ commodity-trading/Feature";
import SmartOrderImages from "/public/images/Group2.svg";
import { extraFeatures } from "@/data/offerings/smart-orders";
import NavBar from "@/components/IndexPage/NavBar";
import Footer from "@/components/IndexPage/Footer";

export default function SmartOrdersPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          title="Smart orders. <br /> Smoother trades."
          description="Take control of your trades with FYERS Smart Orders, a suite <br /> of advanced order types designed to give you flexibility, <br /> precision and protection in any market condition."
          buttons={[
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              imageSrc: SmartOrderImages,
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
          contentWidth="md:max-w-[80%]"
          descWidth="md:max-w-[60%]"
          imageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/smart-orders-bk.webp"}
        />

        <AboutHighlightSection
          aboutTitle="Trade smarter with Smart Orders"
          aboutTitleClassName="font-semibold font-plus-jakarta text-[24px] leading-[32px] md:text-[64px] md:leading-[72px] text-[#F0F0FA] -tracking-[-0.1px] md:-tracking-[0.8px]"
          aboutDesc="From managing volatility to letting profits run, Smart <br /> Orders help you execute strategies seamlessly across <br /> FYERS Web & App."
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/smart-woman.webp"
          imageAlt="A woman using a laptop"
          imageContainerStyles="min-w-[540px] md:min-h-full"
          imageStyles="w-full h-auto md:h-[361px] md:w-[542px] object-cover"
        />

        <div className="flex flex-col gap-[24px] md:gap-[28px] pt-[40px] md:pt-[64px]">
          <h3 className="px-4 md:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
            Why choose FYERS?
          </h3>
          <Feature feature={feature} />
        </div>

        <FeatureSection feature={extraFeatures} />

        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
