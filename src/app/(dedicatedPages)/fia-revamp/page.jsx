import Button from "@/components/Common/Button";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Banner from "@/components/dedicatedPages/fia/Banner";
import Feature from "@/components/fyers-webapp/Feature";
import { features1, features2, extraFeatures } from "@/data/dedicated-pages/fia";
import FeatureSection from "@/components/ commodity-trading/Feature";
import NavBar from "@/components/IndexPage/NavBar";
import Footer from "@/components/IndexPage/Footer";
import FiaFeature from "@/components/Common/FiaFeature";

export default function FIAPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/fia-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/fia-mobile-bk.webp"}
          title="Meet FIA <br />
Your AI-powered <br /> smarter, sharper <br /> market Co-Pilot"
          description="From screeners to stock research, news and portfolio analysis - FIA <br /> connects all the dots so you can act faster."
          buttons={[
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] p-[12px]",
              href: "https://signup.fyers.in/",
            },
          ]}
        linkPrefix={"Not a FYERS User?"}
        linkText={"Sign up"}
        linkHref={"https://signup.fyers.in/"}
        align="left"
        contentWidth="md:max-w-[70%] lg:max-w-[90%]"
        descWidth="md:max-w-[65%]"
        />

        <div className="flex flex-col gap-[24px] md:gap-[28px] pt-[40px] md:pt-[64px]">
          <h3 className="px-4 md:px-10 lg:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px] custom-container 2xl:w-full">
            Why FIA?
          </h3>
          <Feature feature={features1} isTwoCols />
        </div>

        <FeatureSection feature={extraFeatures} />

        <Banner />

        <div className="flex flex-col gap-[24px] md:gap-[28px] py-[40px] md:py-[40px]">
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-[24px] px-5 md:px-10 lg:px-20 custom-container 2xl:w-full">
            <h3 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              The all-new FYERS MCP
            </h3>
            <Button
              text="Explore Now"
              imageSrc="/images/arrow-right.svg"
              imageAlt=""
              imageWidth={17}
              imageHeight={17}
              href="https://myapi.fyers.in/fyersmcp"
              className="bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[14px] text-[16px]"
            />
          </div>

          <FiaFeature features={features2} />
        </div>

        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
