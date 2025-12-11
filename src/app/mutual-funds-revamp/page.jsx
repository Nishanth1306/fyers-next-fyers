import Feature from "@/components/fyers-webapp/Feature";
import Features from "@/components/Common/Features";
import PageIntro from "@/components/Common/PageIntro";
import { extraFeatures, features } from "@/data/offerings/mutual-funds";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import FyersCTA from "@/components/Common/FyersCTA";
import MutualFunds from "@/assets/images/shake-hands-fill.svg";
import DownloadBlueImage from "@/assets/images/download-blue.svg";

const MutualFundsPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/mf-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/mf-mobile-bk.webp"}
          title="Invest smart and <br /> build timeless <br /> wealth"
          description="Zero commission direct mutual funds."
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
              href: "https://fyers.in/web/mutual-funds/home",
            },
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              imageSrc: MutualFunds,
              imageAlt: "Hand shake icon",
              imageHeight: 24,
              imageWidth: 24,
              invert: true,
              href: "https://signup.fyers.in/",
            },
          ]}
          linkPrefix={"Not a FYERS User?"}
          linkText={"Sign up"}
          linkHref={"https://signup.fyers.in/"}
          align="left"
          contentWidth="md:max-w-[70%]"
        />

        <section className="flex flex-col gap-[16px] md:gap-[24px] lg:gap-[32px] pt-[24px] md:pt-[48px] lg:pt-[64px]">
          <div className="px-4 md:px-10 lg:px-20 custom-container 2xl:w-full">
            <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Why mutual funds?
            </h2>
          </div>

          <Features features={features} featuresPerRow={2} />
        </section>

        <section className="py-[40px] md:py-[52px] lg:py-[64px] flex flex-col gap-[12px] md:gap-[20px] lg:gap-[28px]">
          <div className="px-5 md:px-10 lg:px-20 custom-container 2xl:w-full">
            <h3 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Why mutual funds on FYERS?
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

export default MutualFundsPage;
