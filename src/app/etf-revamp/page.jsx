import Features from "@/components/Common/Features";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { extraFeatures, features } from "@/data/offerings/etf";

export default function ETFPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/etf-bk.webp"
          title="Investing made <br /> effortless with <br /> FYERS ETF"
          description="Skip the stock-picking stress while giving your portfolio <br /> diversified exposure. Invest in a group of stocks all at once."
          buttons={[
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              // imageSrc: EtfButton,
              // imageAlt: "Dollar icon",
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
          contentWidth="md:max-w-[70%] lg:max-w-[90%]"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/etf-mobile-bk.webp"}
          descWidth="md:max-w-[60%] "
        />

        <section className="flex flex-col gap-[20px] md:gap-[26px] lg:gap-[32px] pt-[24px] md:pt-[48px] lg:pt-[64px]">
          <div className="px-4 md:px-10 lg:px-20 custom-container 2xl:w-full">
            <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Why ETFs?
            </h2>
          </div>

          <Features features={features} featuresPerRow={3} />
        </section>

        <section className="py-[24px] md:py-[48px] lg:py-[64px] flex flex-col gap-[12px] md:gap-[24px] lg:gap-[28px]">
          <div className="px-4 md:px-10 lg:px-20 custom-container 2xl:w-full">
            <h3 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Why choose FYERS ETF?
            </h3>
          </div>

          <Feature feature={extraFeatures} />
        </section>

        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
