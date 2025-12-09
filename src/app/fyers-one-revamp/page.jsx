import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { features } from "@/data/fyers-one";
import FeatureSection from "@/components/ commodity-trading/Feature";

export default function FyersOnePage() {
  // Split features into rows of 3 (for desktop)
  const featuresPerRow = 3;
  const featureRows = [];
  for (let i = 0; i < features.length; i += featuresPerRow) {
    featureRows.push(features.slice(i, i + featuresPerRow));
  }

  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/fyers-one.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/fyers-one-mobile-bk.webp"}
          title="Robust desktop trading platform, with advanced analytical tools"
          description="Trade with confidence on a robust desktop platform designed with advanced analytical tools to elevate your market edge."
          buttons={[
            {
              text: "Access Platform",
              className:"hidden md:block bg-[#B8CEFF] text-[#182BFF] border border-[#182BFF] py-[6px] px-[10px] md:p-[12px] cursor-pointer",
              invert: true,
              imageHeight: 20,
              imageWidth: 20,
              href: "https://signup.fyers.in/",
            },
            {
              text: "Download",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              href: "https://workdrive.zohopublic.in/writer/open/j5tr61b97f18f769942779135acc672525710",
            },
            
          ]}
        align="left"
        linkPrefix="Not a FYERS User?"
        linkText="Signup"
        linkHref="/signup"
        descWidth="md:max-w-[60%]"
        />

        <div className="flex flex-col gap-[24px] py-[24px] md:py-[64px]">
          <h3 className="px-4 md:px-10 lg:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[-0.1px] md:-tracking-[0.64px]">
            Why choose FYERS One?
          </h3>
          <FeatureSection feature={features} isHeading={false} />
        </div>

        <FyersCTA />
      </main>

      <Footer />
    </>
  );
}
