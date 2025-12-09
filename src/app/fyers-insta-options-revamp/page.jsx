import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { features1, features2 } from "@/data/fyers-insta-options";
import DownloadBlueImage from "@/assets/images/download-blue.svg";

export default function FyersInstaOptions() {
  return (
    <>
      <NavBar />
      <PageIntro
        imageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/fyers-insta-options-bk.webp"}
        mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/fyers-insta-options-mobile-bk.webp"}
        title="Revolutionise trading with FYERS Insta Options"
        description="Tools specifically tailored for futures & options analysis and execution."
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
            href: "https://instaoptions.fyers.in/",
          },
          {
            // imageSrc: InstaOptionsImage,
            text: "Sign Up",
            className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
            // invert: true,
            // imageHeight: 20,
            // imageWidth: 20,
            href: "https://signup.fyers.in/",
          },
        ]}
        linkPrefix="Not a FYERS User?"
        linkText="Sign up"
        linkHref="https://signup.fyers.in/"
        align="left"
        contentWidth="md:max-w-[80%]"
        descWidth="md:max-w-[35%]"
      />
      {/* <CardsSection /> */}

      <div className="flex flex-col gap-[24px] md:gap-[64px] py-[24px] md:py-[64px]">
        <div className="flex flex-col gap-[24px] md:gap-[32px]">
          <h3 className="px-4 md:px-[40px] lg:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
            Why choose FYERS Insta Options?
          </h3>
          <Feature feature={features1} invert />
        </div>

        <div className="flex flex-col gap-[24px] md:gap-[32px]">
          <h3 className="px-4 md:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
            Features for Strategy Analysis
          </h3>
          <Feature feature={features2} invert />
        </div>
      </div>

      <FyersCTA />
      <Footer />
    </>
  );
}
