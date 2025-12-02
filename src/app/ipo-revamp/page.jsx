import Feature from "@/components/fyers-webapp/Feature";
import Features from "@/components/Common/Features";
import PageIntro from "@/components/Common/PageIntro";
import { extraFeatures, features } from "@/data/offerings/ipo";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import FyersCTA from "@/components/Common/FyersCTA";
import MutualFundImage from "/public/images/Group2.svg";
import DownloadBlueImage from "/public/images/download-blue.svg";

const IPOPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/ipo-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/ipo-mobile-bk.webp"}
          title="Invest in India’s next <br /> big companies"
          description="Apply for upcoming IPOs seamlessly."
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
              href: "https://fyers.in/web/ipo/open",
            },
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              // imageSrc: MutualFundImage,
              // imageAlt: "windows icon",
              // imageHeight: 24,
              // imageWidth: 24,
              // invert: true,
              href: "https://signup.fyers.in/",
            },
          ]}
          linkPrefix={"Not a FYERS User?"}
          linkText={"Sign up"}
          linkHref={"https://signup.fyers.in/"}
          align="left"
          contentWidth="md:max-w-[80%]"
        />

        <section className="flex flex-col gap-[24px] md:gap-[32px] pt-[40px] md:pt-[64px]">
          <div className="px-4 md:px-20">
            <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Why IPOs?
            </h2>
          </div>

          <Features features={features} featuresPerRow={2} mobileFeaturesPerRow={1} alignIncompleteRow={true} />
        </section>

        <section className="py-[40px] md:py-[64px] flex flex-col gap-[12px] md:gap-[28px]">
          <div className="px-5 md:px-20">
            <h3 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Why IPO on FYERS?
            </h3>
          </div>

          <Feature feature={extraFeatures} />
        </section>
        <FyersCTA />
      </main>
      <Footer />
    </>
  );
};

export default IPOPage;
