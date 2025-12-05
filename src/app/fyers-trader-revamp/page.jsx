import Button from "@/components/Common/Button";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Stats from "@/components/fyers-trader/Stats";
import { features, features1, features2, stats } from "@/data/fyers-trader";
import Features from "@/components/Common/Features";
import NavBar from "@/components/IndexPage/NavBar";
import Footer from "@/components/IndexPage/Footer";
import TraderButton from "/public/images/Trader-white.svg";
import Feature from "@/components/fyers-webapp/Feature";
import DownloadBlueImage from "/public/images/download-blue.svg";

export default function FyersTraderPage() {
  return (
    <>
      <NavBar />
      <main className="font-plus-jakarta">
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/trader-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/trader-mobile-bk.webp"}
          title="FYERS Trader"
          description="A robust web trading platform built with world-class TradingView charts."
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
              href: "https://trade.fyers.in",
            },
            {
              text: "Sign Up",
              className: "py-[8px] px-[12px] md:p-[12px] bg-[#182BFF] text-[#F2F4FB]",
              imageSrc: TraderButton,
              imageAlt: "",
              imageHeight: 18,
              href: "https://signup.fyers.in/",
              imageWidth: 18,
              invert: true,
            },
          ]}
          linkPrefix="Not a FYERS User?"
          linkText="Sign up"
          linkHref="https://signup.fyers.in/"
          align="left"
        />

        <section className="flex flex-col gap-[20px] md:gap-[32px] py-[24px] md:py-[64px]">
          <Features features={features} featuresPerRow={3} mobileFeaturesPerRow={1} />
        </section>

        <section className="py-[40px] flex flex-col gap-[20px] md:gap-[40px] bg-[#131319]">
          <div className="px-5 md:px-[40px] lg:px-[128px] flex flex-col gap-[20px] md:gap-[32px] text-left md:text-center items-start md:items-center">
            <h3 className="lg:max-w-[630px] font-plus-jakarta font-semibold text-[#F0F0FA] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Empowering traders with cutting-edge technology
            </h3>
            {/* <p className="font-manrope font-normal text-[#676768] text-[14px] md:text-[20px] leading-[22px] md:leading-[26px] -tracking-[0.16px] md:-tracking-[0.32px] max-w-[700px]">
              Trade 1400+ MTF stocks with up to 4x leverage on your capital. No time constraints on holding. No hassle.
            </p> */}

            {/* Button aligned left on mobile, centered on desktop */}
            <div className="flex justify-start md:justify-center w-full">
              <Button
                text="Sign Up Now"
                imageAlt=""
                imageWidth={17}
                imageHeight={17}
                href="https://signup.fyers.in/"
                className="bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[14px] text-[16px] w-auto"
              />
            </div>
          </div>

          <div className="md:border-y border-[#666666] w-full">
            <div className="px-4 md:px-10 lg:px-20 flex flex-row">
              {stats.map(({ value, label }) => (
                <Stats key={label} value={value} label={label} />
              ))}
            </div>
          </div>
        </section>

        <section className="pt-[24px] md:pt-[64px] flex flex-col gap-[20px] md:gap-[24px]">
          <div className="px-4 md:px-10 lg:px-20">
            <h3 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              What's special about FYERS Trader?
            </h3>
          </div>
          <Feature feature={features1} />
        </section>

        <section className="py-[24px] md:py-[64px] flex flex-col gap-[20px] md:gap-[24px]">
          <div className="px-4 md:px-10 lg:px-20">
            <h3 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              What else do we offer?
            </h3>
          </div>
          <Feature feature={features2} />
        </section>

        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
