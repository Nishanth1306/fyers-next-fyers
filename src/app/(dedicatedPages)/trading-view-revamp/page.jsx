import ColumnFeaturesSection from "@/components/Common/ColumnFeaturesSection";
import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";
import { features } from "@/data/dedicated-pages/tradingView";

export default function TradingViewPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageIntro
          title="One Platform. Endless Possibilities"
          description="Analyse, strategise, and execute directly on TradingView"
          buttons={[
            {
              text: "Get Started",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
            },
          ]}
          linkPrefix={"Not a FYERS User?"}
          linkText={"Sign up"}
          linkHref={"#"}
          align="left"
          contentWidth="md:max-w-[80%]"
        />

        <div className="flex flex-col gap-[24px] md:gap-[28px] py-[40px] md:py-[64px]">
          <h3 className="px-4 md:px-20  font-plus-jakarta font-semibold text-[#131319] text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] -tracking-[0.1px] md:-tracking-[0.64px] custom-container 2xl:w-full">
            FYERS X Trading View - Trade like a pro
          </h3>
          <ColumnFeaturesSection feature={features} isHeading={false} />
        </div>

        <FyersCTA />
      </main>

      <Footer />
    </>
  );
}
