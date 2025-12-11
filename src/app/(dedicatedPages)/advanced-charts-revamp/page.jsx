import AboutHighlightSection from "@/components/Common/AboutHighlightSection";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { features1, features2 } from "@/data/dedicated-pages/advancedCharts";
import AdvanceChartsImage from "@/assets/images/advanced-charts/bar-chart-fill.svg";
import ColumnFeaturesSection from "@/components/Common/ColumnFeaturesSection";

export default function AdvancedChartsPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/adv-charts-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/adv-charts-mobile-bk.webp"}
          title="See the market with <br /> precision like never <br /> before"
          description="Clarity that helps you decode every move, <br /> with FYERS Advanced Charts."
          buttons={[
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              imageSrc: AdvanceChartsImage,
              imageAlt: "Hand shake icon",
              imageHeight: 15,
              imageWidth: 15,
              invert: true,
              href: "https://signup.fyers.in/",
            },
          ]}
          linkPrefix={"Not a FYERS User?"}
          linkText={"Sign up"}
          linkHref={"https://signup.fyers.in/"}
          align="left"
          contentWidth="md:max-w-[80%] lg:max-w-[100%]"
          descWidth="md:max-w-[35%]"
        />

        <AboutHighlightSection
          aboutTitle="Trade with clarity, <br /> not noise"
          aboutTitleClassName="hide-br-mobile font-semibold font-plus-jakarta text-[24px] leading-[32px] md:text-[48px] lg:text-[64px] md:leading-[52px] lg:leading-[72px] text-[#F0F0FA] -tracking-[-0.1px] md:-tracking-[0.8px]"
          aboutDesc="Track markets in real-time with advanced charting, seconds-level precision and seamless <br /> execution. Built for pro traders who demand depth and speed."
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/advanced-charts-advanced-charts-banner.webp"
          imageAlt="A woman using a laptop"
          imageContainerStyles="min-w-[540px] md:min-h-full"
          imageStyles="w-full h-auto md:h-[361px] md:w-[542px] object-cover"
        />

        <div className="flex flex-col gap-[24px] md:gap-[24px] lg:gap-[28px] pt-[40px] md:pt-[52px] lg:pt-[64px]">
          <h3 className="px-4 md:px-10 lg:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px] custom-container 2xl:w-full">
            Why choose FYERS?
          </h3>
          <Feature feature={features1} />
        </div>

        <ColumnFeaturesSection feature={features2} />

        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
