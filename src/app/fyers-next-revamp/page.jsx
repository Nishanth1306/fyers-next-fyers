import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";

import InfoSection from "@/components/fyers-next/InformationSection";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { extraFeatures, features } from "@/data/fyers-next";
import NextButton from "@/assets/images/fyers-next.svg";
import FeatureSection from "@/components/ commodity-trading/Feature";

export default function FyersNextPage() {
  return (
    <>
      <NavBar />
      <PageIntro
        imageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/fyers-next-desktop-bg.webp"}
        mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/fyers-next-mobile-bg.webp"}
        title="Reliability that powers <br /> every trade"
        description="Stable & robust trading platform for faster execution."
        buttons={[
          {
            // imageSrc: NextButton,
            text: "Access Platform",
            className:"hidden md:block bg-[#B8CEFF] text-[#182BFF] border border-[#182BFF] py-[6px] px-[10px] md:p-[12px] cursor-pointer",
            invert: true,
            imageHeight: 20,
            imageWidth: 20,
            href: "https://workdrive.zohopublic.in/writer/open/j5tr6d4f6ac2b433a4031a8543f883d28030b",
          },
          {
            imageSrc: NextButton,
            text: "Sign Up",
            className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
            invert: true,
            imageHeight: 20,
            imageWidth: 20,
            href: "https://signup.fyers.in/",
          }
        ]}
        linkPrefix="Not a FYERS User?"
        linkText="Sign up"
        linkHref="https://signup.fyers.in/"
        align="left"
      />

      <InfoSection />

      <div className="flex flex-col gap-[32px] md:gap-[32px] py-[40px] md:py-[64px]">
        <h3 className="px-4 md:px-10 lg:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[-0.1px] md:-tracking-[0.64px]">
          Why choose FYERS Next?
        </h3>
        <FeatureSection feature={extraFeatures} isHeading={false} />
      </div>

      <FyersCTA />
      <Footer />
    </>
  );
}
