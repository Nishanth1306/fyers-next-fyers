import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import { features, extraFeatures } from "@/data/trading-view";
import Features from "@/components/Common/Features";
import Feature from "@/components/fyers-webapp/Feature";
import NavBar from "@/components/IndexPage/NavBar";
import Footer from "@/components/IndexPage/Footer";
import TradingViewBanner from "@/components/trading-view/TradingViewBanner";
import DownloadBlueImage from "/public/images/download-blue.svg";

export default function TradingViewPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/trading-view-bk.webp"
          title="Trade directly on <br /> TradingView.com <br /> with FYERS"
          description={`Use your FYERS brokerage account to access an unparalleled <br /> trading experience with the help of supercharged charting <br /> and analytical tools.`}
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
              href: "https://www.tradingview.com/broker/FYERS/",
            },
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              href: "https://signup.fyers.in/",
            },
          ]}
          linkPrefix="Not a FYERS User?"
          linkText="Sign up"
          linkHref="https://signup.fyers.in/"
          align="left"
          contentWidth="md:max-w-[70%]"
          descWidth="md:max-w-[60%]"
        />

        <section className="bg-[#F2F4FB] hidden md:block">
          <TradingViewBanner />
        </section>

        <section className="flex flex-col gap-[20px] md:gap-[24px] pt-[24px] md:pt-[64px]">
          <div className="px-4 md:px-20">
            <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Benefits you’ll enjoy
            </h2>
          </div>

          <Features features={features} featuresPerRow={3} />
        </section>

        <div className="flex flex-col gap-[24px] md:gap-[28px] py-[40px] md:py-[64px]">
          <div className="px-4 md:px-20  flex flex-col gap-[8px] md:gap-[12px]">
            <h3 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              FYERS, TradingView & You
            </h3>
            <p className="font-manrope font-[400] md:font-semibold text-[18px] md:text-[20px] leading-[26px] tracking-[0px] md:-tracking-[0.32px] text-[#131319]">
              The best combination for your trading.
            </p>
          </div>

          <Feature feature={extraFeatures} />
        </div>
        <section className="bg-[#F2F4FB] md:hidden">
          <TradingViewBanner />
        </section>
        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
