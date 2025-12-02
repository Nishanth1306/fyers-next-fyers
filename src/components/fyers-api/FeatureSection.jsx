import { FaBolt, FaCloud, FaShieldAlt } from "react-icons/fa";
import { MdOutlineRequestPage } from "react-icons/md";

export default function FeaturesSection() {
  return (
    <section className="bg-[#F2F4FB] pt-10">
      <div className="hidden md:flex items-center border mb-12 mx-auto w-[90vw] justify-center h-16 px-[72px]">
        <div className="flex-1 flex items-center gap-4 relative pr-4">
          <img src="/images/stock-fill.svg" alt="Trading APIs" className="w-6 h-6 object-contain" />
          <span>Trading APIs</span>
          <div className="absolute right-0 h-16 border-r border-[#131319]"></div>
        </div>

        <div className="flex-1 flex items-center gap-4 relative px-4">
          <img src="/images/icon.svg" alt="Trading APIs" className="w-6 h-6 object-contain" />
          <span>Historical Data APIs</span>
          <div className="absolute right-0 h-16 border-r border-[#131319]"></div>
        </div>

        <div className="flex-1 flex items-center gap-4 pl-4">
          <img src="/images/survey-fill.svg" alt="Trading APIs" className="w-6 h-6 object-contain" />
          <span>Real-Time Data APIs</span>
        </div>
      </div>

      <div className="block md:hidden mb-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 p-4 border-b border-gray-300 bg-white">
            <FaBolt className="text-black text-lg" />
            <span className="font-medium text-gray-800 uppercase text-sm tracking-wide">Script Alerts</span>
          </div>
          <div className="flex items-center gap-3 p-4 border-b border-gray-300 bg-white">
            <MdOutlineRequestPage className="text-black text-lg" />
            <span className="font-medium text-gray-800 uppercase text-sm tracking-wide">Heatmaps</span>
          </div>
          <div className="flex items-center gap-3 p-4 border-b border-gray-300 bg-white">
            <FaCloud className="text-black text-lg" />
            <span className="font-medium text-gray-800 uppercase text-sm tracking-wide">Market Movers</span>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-20  mb-6 md:mb-10 px-4 md:px-0">
        <h2 className="font-plus-jakarta font-semibold text-[32px] md:text-[64px] leading-[38px] md:leading-[72px] tracking-[-0.4px] md:tracking-[-0.8px]">
          Why Choose FYERS?
        </h2>
        <p className="font-manrope font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-[0px] text-gray-600 mt-2">
          A snapshot of some incredible features we have to offer you.
        </p>
      </div>

      <div className="block md:hidden px-4 mb-8">
        <div className="w-full h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="hidden md:block">
          <div className="absolute top-0 left-0 w-full border-t border-gray-400"></div>

          <div className="px-4 md:px-20  flex justify-center border-l border-r border-gray-400">
            <div className="w-2/3 flex flex-col divide-y divide-gray-400">
              <div className="flex items-center gap-3 p-4">
                <img src="/images/Vector.svg" alt="Trading APIs" className="w-6 h-6 object-contain" />
                <span>Place orders in &lt;75ms</span>
              </div>
              <div className="flex items-center gap-3 p-4">
                <img src="/images/Vector-1.svg" alt="Trading APIs" className="w-6 h-6 object-contain" />
                <span>Upto 1 Lakh requests per day</span>
              </div>
              <div className="flex items-center gap-3 p-4">
                <img src="/images/Vector-2.svg" alt="Trading APIs" className="w-6 h-6 object-contain" />
                <span>Highly scalable cloud infra</span>
              </div>
              <div className="flex items-center gap-3 p-4">
                <img src="/images/Vector-3.svg" alt="Trading APIs" className="w-6 h-6 object-contain" />
                <span>Secure app-specific permissions</span>
              </div>
            </div>

            <div className="w-1/3 flex items-center justify-center border-l border-gray-400">
              <img src="/path/to/your/image.png" alt="" className="h-full object-contain" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full border-b border-gray-400"></div>
        </div>

        <div className="block md:hidden">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 p-4 border-b border-gray-300 bg-white">
              <FaBolt className="text-black text-lg" />
              <span className="font-medium text-gray-800 uppercase text-sm tracking-wide">
                Place orders in &lt;75ms
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 border-b border-gray-300 bg-white">
              <MdOutlineRequestPage className="text-black text-lg" />
              <span className="font-medium text-gray-800 uppercase text-sm tracking-wide">
                Upto 1 Lakh requests per day
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 border-b border-gray-300 bg-white">
              <FaCloud className="text-black text-lg" />
              <span className="font-medium text-gray-800 uppercase text-sm tracking-wide">
                Highly scalable cloud infra
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 border-b border-gray-300 bg-white">
              <FaShieldAlt className="text-black text-lg" />
              <span className="font-medium text-gray-800 uppercase text-sm tracking-wide">
                Secure app-specific permissions
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="px-4 md:px-20  text-gray-500 mt-6 px-4 md:px-0 text-sm md:text-base">
        Built to completely transform the trading ecosystem in India, for good.
      </p>
    </section>
  );
}
