import PageIntro from "@/components/Common/PageIntro";
import BankingCard from "@/components/Pricing/BankingCard";
import CalculatorFill from "@/assets/images/Pricing/calculator-line.svg";
import ArrowRight from "@/assets/images/arrow-right.svg";
import AboutHighlightSection from "@/components/Common/AboutHighlightSection";
import FyersCTA from "@/components/Common/FyersCTA";
import Button from "@/components/Common/Button";
import ArrowImg from "@/assets/images/arrow-right.svg";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";

export default function Pricing() {
  return (
    <>
    <NavBar />
      <PageIntro
        imageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/pricing-bk.webp"}
        mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/pricing-mobile-bk.webp"}
        title="Low cost & transparent"
        description="Invest in direct mutual funds. Zero commission. No middlemen and no hidden charges. Max ₹20 across all other segments."
        buttons={[
          {
            text: "Sign Up",
            className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
            imageStyles: "w-[18px] h-[20]",
            imageSrc: CalculatorFill,
            href: "https://signup.fyers.in/",
          },
        ]}
        linkPrefix="Already have an account?"
        linkText="Login"
        linkHref="https://login.fyers.in/?cb=https://fyers.in/web"
        align="left"
        contentWidth="max-w-[80%] md:max-w-[70%] lg:max-w-[80%]"
        descWidth="lg:max-w-[80%]"
      />

      <BankingCard />

      <section className="px-[16px] md:px-[80px] font-plus-jakarta">
        <div className="md:w-[680px] md:mx-auto flex flex-col items-start md:items-center justify-center gap-[12px] md:gap-[18px] py-[40px] md:py-[64px]">
          <p className="text-left md:text-center font-plus-jakarta text-[20px] font-semibold leading-[24px] text-[#131319]">
            Easy onboarding
          </p>
          <h3 className="text-left md:text-center text-[36px] md:text-[48px] text-[#131319] font-semibold font-plus-jakarta leading-[40px] md:leading-[56px] -tracking-[0.35px] md:-tracking-[0.64px]">
            Open your demat account in under 5 minutes
          </h3>
          <Button
            text="Sign Up Now"
            className="bg-[#182BFF] text-[#F0F0FA] py-[8px] px-[14px] flex gap-[4px] mt-[12px] md:mt-0"
            imageHeight={15}
            imageWidth={15}
            imageSrc={ArrowImg}
            imageAlt="arrow"
            href="https://signup.fyers.in/"
          />
        </div>
      </section>

      <AboutHighlightSection
        className="border-b border-b-[#666666]"
        dynamicGrid="px-4 md:px-10 lg:px-20  grid grid-cols-1 md:grid-cols-[2.3fr_1.8fr] md:gap-[16px] items-center"
        aboutShortTitle="Limited period offer"
        aboutTitle="Get free AMC for life"
        aboutDesc="No hidden charges!"
        imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/pricing-woman2.webp"
        imageAlt="Growth"
        imageContainerStyles="h-full mt-[24px] md:mt-0"
        showButton={true}
        dynamicGaps="md:gap-[10px] lg:gap-[18px]"
        buttonText="Sign up Now"
        buttonImage={{
          src: ArrowRight,
          alt: "Arrow Right",
          width: 17,
          height: 17,
          href: "https://signup.fyers.in/",
        }}
        buttonClassName="bg-[#182BFF] text-[#F2F4FB] py-[8px] md:py-[8px] px-[14px] md:px-[8px] text-[16px] w-auto"
      />

      <FyersCTA />
       {/* <SalesPitch /> */}
      <Footer />
    </>
  );
}
