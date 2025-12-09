import FyersCTA from "@/components/Common/FyersCTA";
import LayoutSection from "@/components/fyers-api/LayoutSection";
import PageIntro from "@/components/Common/PageIntro";
import { features, features2 } from "@/data/fyers-api";
import Features from "@/components/Common/Features";
import NavBar from "@/components/IndexPage/NavBar";
import Footer from "@/components/IndexPage/Footer";
import DownloadBlueImage from "@/assets/images/download-blue.svg";

export default function FyersApiPage() {
  return (
    <>
      <NavBar />
      <main className="font-plus-jakarta">
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/fyers-api-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/fyers-api-mobile-bk.webp"}
          title="Integrate. Automate. <br /> Trade smarter <br/> with FYERS API."
          description="Start algo-trading or integrate with third-party platforms using FYERS API, for absolutely free."
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
              href: "https://myapi.fyers.in",
            },
            {
              // imageSrc: OneButton,
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              // invert: true,
              // imageHeight: 20,
              // imageWidth: 20,
              href: "https://myapi.fyers.in/",
            },
          ]}
          linkPrefix="Not a FYERS User?"
          linkText="Sign up"
          linkHref="https://signup.fyers.in/"
          align="left"
          descWidth="md:max-w-[70%] lg:max-w-full"
          // contentWidth="md:max-w-[1400px]"
        />

        {/* Section 1 - Get access to all */}
        <section className="flex flex-col gap-[20px] md:gap-[32px] py-[24px] md:py-[64px]">
          <div className="px-4 md:px-10 lg:px-20">
            <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Get access to all
            </h2>
          </div>

          <Features features={features} featuresPerRow={3} mobileFeaturesPerRow={1} />
        </section>

        {/* Section 2 - Layout Section */}
        <LayoutSection />

        {/* Section 3 - Loved by */}
        <section className="flex flex-col gap-[20px] md:gap-[32px] py-[24px] md:py-[64px]">
          <div className="px-4 md:px-10 lg:px-20">
            <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              FYERS API is loved by
            </h2>
          </div>

          <Features features={features2} featuresPerRow={3} mobileFeaturesPerRow={1} />
        </section>

        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
