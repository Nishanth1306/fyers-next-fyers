import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import FeatureHeader from "@/components/fyers-webapp/FeatureHeader";
import AboutHighlightSection from "@/components/Common/AboutHighlightSection";
import {
  featuresForInvestors1,
  featuresForInvestors2,
  featuresForTraders1,
  featuresForTraders2,
} from "@/data/fyers-webapp";
import NavBar from "@/components/IndexPage/NavBar";
import Footer from "@/components/IndexPage/Footer";
import DownloadBlueImage from "/public/images/download-blue.svg";

export default function FyersWebApp() {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/fyers-webapp-desktop-bg.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/fyers-webapp-mobile-bg.webp"}
          greeting="Welcome to FYERS"
          title="One platform. Every possibility."
          description="The all-new FYERS Web & App is built to be your true super app, designed for pro traders and smart investors who demand speed, intelligence and everything in one place."
          buttons={[
            {
              text: "Download the App",
              className:
                "block md:hidden bg-[#B8CEFF] text-[#182BFF] border border-[#182BFF] py-[6px] px-[10px] md:p-[12px] cursor-pointer",
              imageSrc: DownloadBlueImage,
              imageAlt: "download icon",
              href: "https://fyers.onelink.me/cj1P/9pfepauj",
            },
            {
              text: "Access Platform",
              className:
                "hidden md:block bg-[#B8CEFF] text-[#182BFF] border border-[#182BFF] py-[6px] px-[10px] md:p-[12px] cursor-pointer",
              href: "https://fyers.in/web/markets/home",
            },
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[6px] px-[10px] md:p-[12px] cursor-pointer",
              href: "https://signup.fyers.in/",
            },
          ]}
          linkPrefix="Not a FYERS User?"
          linkText="Sign Up"
          linkHref="https://signup.fyers.in/"
          align="left"
          contentWidth="max-w-[100%] md:max-w-[946px]"
          descWidth="md:max-w-[73%]"
        />

        <AboutHighlightSection
          aboutTitle="Why choose FYERS?"
          aboutShortDesc="All in one. All for you."
          // aboutDesc="No more switching platforms, no more missing tools.FYERS brings advanced trading features and seamless investing journeys together in one integrated experience."
          aboutDesc={`No more switching platforms, no more missing tools.<br/>
FYERS brings advanced trading features and seamless investing journeys together in one integrated experience.`}
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/fyers-webapp-woman.webp"
          imageAlt="A woman using mobile phone"
          imageContainerStyles="min-w-[540px] md:min-h-full "
          imageStyles="w-full h-auto md:h-[361px] md:w-[542px] object-contain"
        />

        <FeatureHeader
          featuresForInvestors1
          subtitle="Stocks - F&O - Commodities"
          title="FYERS for Traders"
          description="Tools that define the next level of trading."
        />

        <div className="flex flex-col gap-[24px] md:gap-[48px]">
          <h3 className="px-4 md:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[-0.1px] md:-tracking-[0.64px]">
            Discovery & Analysis
          </h3>
          <Feature feature={featuresForTraders1} />
        </div>

        <div className="flex flex-col gap-[24px] md:gap-[48px] pt-[72px]">
          <h3 className="px-4 md:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[-0.1px] md:-tracking-[0.64px]">
            Execute & Track
          </h3>
          <Feature feature={featuresForTraders2} invert isTwoCols />
        </div>

        <FeatureHeader
          subtitle="Stocks - Mutual Funds - ETFs - IPOs"
          title="FYERS for Investors"
          description="Tools that define the next level of investing."
        />

        <div className="flex flex-col gap-[24px] md:gap-[48px]">
          <h3 className="px-4 md:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[-0.1px] md:-tracking-[0.64px]">
            Discovery & Analysis
          </h3>
          <Feature feature={featuresForInvestors1} />
        </div>

        <div className="flex flex-col gap-[24px] md:gap-[48px] pt-[72px] pb-[64px]">
          <h3 className="px-4 md:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[-0.1px] md:-tracking-[0.64px]">
            Execute & Track
          </h3>
          <Feature feature={featuresForInvestors2} />
        </div>

        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
