import AboutHighlightSection from "@/components/Common/AboutHighlightSection";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { features } from "@/data/dedicated-pages/pledge";

export default function PledgePage() {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/pledge-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/pledge-mobile-bk.webp"}
          title="Unlock the <br /> potential of your <br /> holdings"
          description="Pledge your stocks, ETFs and mutual funds to <br /> trade equity intraday and F&O with ease."
          buttons={[
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              href: "https://signup.fyers.in/",
            },
          ]}
          linkPrefix={"Not a FYERS User?"}
          linkText={"Sign up"}
          linkHref={"https://signup.fyers.in/"}
          align="left"
          contentWidth="md:max-w-[70%]"
          descWidth="md:max-w-[50%]"
        />

        <AboutHighlightSection
          aboutTitle="Maximise your returns <br /> with additional pledge <br /> margins."
          aboutTitleClassName="hide-br-mobile font-semibold font-plus-jakarta text-[24px] leading-[32px] md:text-[48px] lg:text-[64px] md:leading-[52px] lg:leading-[72px] text-[#F0F0FA] -tracking-[-0.1px] md:-tracking-[0.8px]"
          aboutDesc="Boost your trading power with extra pledge margins."
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/pledge-banner.webp"
          imageAlt="A woman using a laptop"
          imageContainerStyles="min-w-[540px] md:min-h-full lg:w-[440px]"
          imageStyles="w-full h-auto md:h-[361px] md:w-[542px] object-cover"
        />

        <div className="flex flex-col gap-[24px] md:gap-[26px] lg:gap-[28px] py-[40px] md:py-[40px]">
          <h3 className="px-4 md:px-10 lg:px-20 font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px] custom-container 2xl:w-full">
            Why choose FYERS?
          </h3>
          <Feature feature={features} isTwoCols />
        </div>

        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
