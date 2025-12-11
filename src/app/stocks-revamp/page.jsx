import Features from "@/components/Common/Features";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Feature from "@/components/fyers-webapp/Feature";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { features, featuresForInvestors, featuresForTraders } from "@/data/offerings/stocks";

export default function OfferingsStocksPage() {
  return (
    <>
      <NavBar />
      <main className="font-plus-jakarta">
        <PageIntro
          imageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/stocks-bk.webp"}
          title="Seamless access <br /> to stock markets"
          description="Track market movements across Indian and global indices. <br /> Analyse stocks using powerful tools like screeners, <br /> symbol details, FIA and more. "
          buttons={[
            {
              text: "Sign Up",
              className: "py-[8px] px-[12px] md:p-[12px] bg-[#182BFF] text-[#F0F0FA]",
              // imageSrc: StockButton,
              // imageAlt: "Shopping cart icon",
              // imageHeight: 18,
              // imageWidth: 18,
              // invert: true,
              href: "https://signup.fyers.in/",
            },
          ]}
          linkPrefix="Not a FYERS User?"
          linkHref="https://signup.fyers.in/"
          linkText="Sign up"
          align="left"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/stocks-mobile-bk.webp"}
          contentWidth="md:max-w-[70%] lg:max-w-[90%]"
          descWidth="max-w-[70%] md:max-w-[60%]"
        />

        <section className="flex flex-col gap-[20px] md:gap-[32px] pt-[24px] md:pt-[64px]">
          <div className="px-4 md:px-10 lg:px-20 custom-container 2xl:w-full">
            <h2 className="font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
              Why choose FYERS?
            </h2>
          </div>

          <Features features={features} featuresPerRow={3} mobileFeaturesPerRow={1} />
        </section>

        <section className="py-[40px] md:py-[64px] flex flex-col gap-[12px] md:gap-[28px]">
          <h3 className="px-5 md:px-10 lg:px-20 custom-container 2xl:w-full font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
            For the trader
          </h3>

          <Feature feature={featuresForTraders} />
        </section>

        <section className="pb-[40px] md:pb-[64px] flex flex-col gap-[12px] md:gap-[28px]">
          <h3 className="px-5 md:px-10 lg:px-20 custom-container 2xl:w-full font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px]">
            For the investor
          </h3>

          <Feature feature={featuresForInvestors} />
        </section>

        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
