import AboutHighlightSection from "@/components/Common/AboutHighlightSection";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { feature1, feature2 } from "@/data/dedicated-pages/advancedScreeners";
import Group2 from "/public/images/advanced-option-chains/search-eye-line.svg";

export default function AdvancedScreenersPage() {
  return (
    <>
      <NavBar />

      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/adv-screeners-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/adv-screeners-mobile-bk.webp"}
          title="Find opportunities <br /> before others do"
          description="Screen smarter & trade faster with FYERS Advanced Screeners."
          buttons={[
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              imageSrc: Group2,
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
          contentWidth="md:max-w-[80%] lg:max-w-[100%]"
        />

        <AboutHighlightSection
          aboutTitle="Discover your next <br /> trade, instantly"
          aboutTitleClassName="hide-br-mobile font-semibold font-plus-jakarta text-[24px] leading-[32px] md:text-[48px] lg:text-[64px] md:leading-[52px] lg:leading-[72px] text-[#F0F0FA] -tracking-[-0.1px] md:-tracking-[0.8px]"
          aboutDesc="Use predefined screeners to filter stocks, F&O, commodities, ETFs and more in real-time. <br /> Build your own screeners with FYERS Intelligent Assistant (FIA), India's first AI-powered <br /> market assistant."
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/adv-screeners-woman.webp"
          imageAlt="A woman using a laptop"
          imageContainerStyles="min-w-[540px] md:min-h-full"
          imageStyles="w-full h-auto md:h-[361px] md:w-[542px] object-cover"
        />

        <div className="flex flex-col gap-[24px] md:gap-[26px] lg:gap-[28px] pt-[40px] md:pt-[52px] lg:pt-[64px]">
          <h3 className="px-4 md:px-10 lg:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
            Why choose FYERS?
          </h3>
          <Feature feature={feature1} />
        </div>

        <div className="flex flex-col gap-[24px] md:gap-[26px] lg:gap-[28px] py-[40px] md:py-[52px] lg:py-[64px]">
          <h3 className="px-4 md:px-10 lg:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
            What’s more
          </h3>
          <Feature feature={feature2} />
        </div>

        <FyersCTA />
      </main>

      <Footer />
    </>
  );
}
