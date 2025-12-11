import AboutHighlightSection from "@/components/Common/AboutHighlightSection";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { extraFeatures, feature } from "@/data/dedicated-pages/mtf";
import MutualFundImage from "@/assets/images/Group2.svg";
import ColumnFeaturesSection from "@/components/Common/ColumnFeaturesSection";

export default function MTFPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/mtf-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/mtf-mobile-bk.webp"}
          title="Boost your trading <br /> power by 4X"
          description="Get up to 4x leverage on delivery trades and <br /> maximise every opportunity."
          buttons={[
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              imageSrc: MutualFundImage,
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
          descWidth="md:max-w-[40%]"
        />

        <AboutHighlightSection
          aboutTitle="Go beyond your balance with MTF"
          aboutTitleClassName="md:max-w-[816px] font-semibold font-plus-jakarta text-[24px] leading-[32px] md:text-[48px] lg:text-[64px] md:leading-[52px] lg:leading-[72px] text-[#F0F0FA] -tracking-[-0.1px] md:-tracking-[0.8px]"
          aboutDesc="With FYERS MTF, get up to 4x leverage on 1600+ stocks, with interest as low as 12.49% p.a. Perfect for active traders seeking larger trading opportunities."
          aboutDescClassName={
            "md:max-w-[816px] font-manrope font-normal text-[14px] leading-[22px] md:text-[18px] md:leading-[26px] text-[#C8C8CC] -tracking-[0.16px] md:tracking-[0px]"
          }
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/mtf-banner.webp"
          imageAlt="A woman using a laptop"
          imageContainerStyles="min-w-[540px] md:min-h-full"
          imageStyles="w-full h-auto md:h-[361px] md:w-[542px] object-cover"
        />

        <div className="flex flex-col gap-[24px] md:gap-[26px] lg:gap-[28px] pt-[40px] md:pt-[52px] lg:pt-[64px]">
          <h3 className="px-4 md:px-10 lg:px-20 font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px] custom-container 2xl:w-full">
            Why choose FYERS MTF?
          </h3>
          <Feature feature={feature} />
        </div>

        <ColumnFeaturesSection feature={extraFeatures} />

        <FyersCTA />
        <Footer />
      </main>
    </>
  );
}
