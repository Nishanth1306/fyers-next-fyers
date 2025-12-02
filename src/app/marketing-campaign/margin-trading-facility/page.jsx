import FaqComponent from "@/components/Common/FaqComponent";
import InterestSlabs from "@/components/MTFPages/InterestSlabs";
import Banner from "@/components/MTFPages/Banner";
import FeatureGrid from "@/components/MTFPages/FeatureGrid";
import MtfHwTable from "@/components/MTFPages/MtfHwTable";
import MtfTabs from "@/components/MTFPages/MtfTabs";
import {
  faqs,
  interestRates,
  whyMtfData,
} from "@/data/margin-trading-facility";

export default function MarginTradingFacilityPage() {
  return (
    <>
      <Banner />
      <MtfTabs activeWindow={"mtf-overview"} />
      <h2 className="text-[#2a394e] mt-8 md:mt-20 text-center text-[24px] font-bold leading-[24px] m-0 md:text-[48px] md:leading-[48px]">
        What is MTF?
      </h2>
      <p className="text-[#6A7582] text-center text-base font-normal leading-[24px] max-w-10/12 md:max-w-[760px] mx-auto mt-6">
        Margin Trading Facility (MTF) allows you to buy stocks without paying
        the full amount upfront. For example, you can buy stocks up to ₹4 lakhs
        by just paying ₹1 lakh. We fund the rest, helping you invest more with
        less funds.
      </p>
      <div className="flex justify-center mt-13 md:mt-14 flex-wrap">
        <div className="text-center bg-gradient-to-b from-[#eceff7] to-white w-11/12 md:w-[400px] h-auto md:h-[290px] flex flex-col items-center p-4 md:p-10 transition-transform duration-500 ease-in-out hover:scale-110 relative z-[2] m-0 md:mt-10 md:mr-[-40px]">
          <h3 className="text-[24px] leading-[24px] text-[#2a394e] font-semibold">
            Increase capital
          </h3>
          <p className="mt-2">
            Up to{" "}
            <span className="text-[#299e47] font-semibold text-[52px] leading-[40px] block">
              4X
            </span>
          </p>
        </div>

        <div className="text-center m-0 bg-gradient-to-b from-[#eceff7] to-white w-11/12 md:w-[400px] h-auto md:h-[290px]  flex flex-col items-center p-4 md:p-10 transition-transform duration-500 ease-in-out hover:scale-110 relative z-[1]">
          <h3 className="text-[24px] leading-[24px] text-[#2a394e] font-semibold">
            Trade in
          </h3>
          <p className="mt-2">
            Over{" "}
            <span className="text-[#cc7000] font-semibold text-[52px] leading-[40px] block">
              1600 <br />
              <label className="text-[24px] font-normal">stocks</label>
            </span>
          </p>
        </div>

        <div className="text-center bg-gradient-to-b from-[#eceff7] to-white w-11/12 md:w-[400px] h-auto md:h-[290px] flex flex-col items-center p-4 md:p-10 transition-transform duration-500 ease-in-out hover:scale-110 relative z-[2] m-0 md:mt-[80px] md:ml-[-40px]">
          <h3 className="text-[24px] leading-[24px] text-[#2a394e] font-semibold">
            Interest rates
          </h3>
          <p className="mt-2">
            at just{" "}
            <span className="text-[#7160cc] font-semibold text-[52px] leading-[40px] block">
              12.49% * <label className="text-[24px] font-normal">p.a.</label>
            </span>
          </p>
        </div>
      </div>
      <div className="md:max-w-[780px] px-3 w-full mt-8 md:mt-14 mx-auto relative">
        <img src="/images/video.png" alt="video-example" />
        <span className="absolute top-[43%] left-[46%]">
          <img src="/images/play-button.svg" alt="play button" />
        </span>
      </div>
      <div className="mt-14 md:mt-[7.5rem]">
        <FeatureGrid data={whyMtfData} heading={"Why Trade with FYERS MTF"} />
      </div>
      <MtfHwTable />
      <InterestSlabs interestRates={interestRates} />
      <FaqComponent faqs={faqs} />
    </>
  );
}
