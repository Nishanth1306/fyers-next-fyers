import { FaBolt, FaCloud } from "react-icons/fa";
import { MdOutlineRequestPage } from "react-icons/md";

export default function MiddleSection() {
  return (
    <div className="w-full">
      <div className="pt-6 md:pt-10 pb-6 md:pb-10 flex flex-col gap-6 md:gap-8 overflow-hidden">
        <div className="px-4 md:px-20  pt-6 md:pt-10 pb-6 md:pb-10 flex flex-col gap-6 md:gap-8 overflow-hidden">
          <div>
            <h2 className="font-plus-jakarta font-semibold text-[32px] md:text-[64px] leading-[38px] md:leading-[72px] tracking-[-0.4px] md:tracking-[-0.8px] text-black">
              Why Choose FYERS API?
            </h2>
            <p className="font-plus-jakarta text-sm md:text-base mt-2 text-gray-600">
              A snapshot of some incredible features we have to offer you.
            </p>
          </div>

          <div className="hidden md:block w-full border-t border-b border-gray-400">
            <div className="px-4 md:px-20  flex justify-center gap-8 items-stretch">
              <div className="flex-1 border-l border-r border-gray-400 flex flex-col">
                <div className="h-[300px] flex items-center justify-center border-b border-gray-300">
                  <FaBolt className="text-black text-2xl" />
                </div>
                <div className="flex-1 p-4 flex flex-col">
                  <h2 className="font-plus-jakarta font-medium text-[22px] leading-[32px] tracking-[-0.32px] text-black">
                    Drag & Drop Trading From Charts
                  </h2>
                  <p className="font-manrope text-[18px] leading-[26px] text-gray-700">
                    Build to completely transform the trading ecosystem in India, for good
                  </p>
                </div>
              </div>

              <div className="flex-1 border-l border-r border-gray-400 flex flex-col">
                <div className="h-[300px] flex items-center justify-center border-b border-gray-300">
                  <MdOutlineRequestPage className="text-black text-2xl" />
                </div>
                <div className="flex-1 p-4 flex flex-col">
                  <h2 className="font-plus-jakarta font-medium text-[22px] leading-[32px] tracking-[-0.32px] text-black">
                    Algorithmic Traders
                  </h2>
                  <p className="font-manrope text-[18px] leading-[26px] text-gray-700">
                    Tech savvy, systematic traders looking for a stable and reliable platform
                  </p>
                </div>
              </div>

              <div className="flex-1 border-l border-r border-gray-400 flex flex-col">
                <div className="h-[300px] flex items-center justify-center border-b border-gray-300">
                  <FaCloud className="text-black text-2xl" />
                </div>
                <div className="flex-1 p-4 flex flex-col">
                  <h2 className="font-plus-jakarta font-medium text-[22px] leading-[32px] tracking-[-0.32px] text-black">
                    Platforms
                  </h2>
                  <p className="font-manrope text-[18px] leading-[26px] text-gray-700">
                    Widely used platforms that are looking for effortless integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="block md:hidden px-4">
            <div className="flex flex-col gap-6">
              <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
                <div className="h-[200px] flex items-center justify-center border-b border-gray-300">
                  <FaBolt className="text-black text-3xl" />
                </div>
                <div className="p-4">
                  <h2 className="font-plus-jakarta font-medium text-[18px] leading-[26px] tracking-[-0.2px] text-black mb-2">
                    Drag & Drop Trading From Charts
                  </h2>
                  <p className="font-manrope text-[14px] leading-[20px] text-gray-700">
                    Build to completely transform the trading ecosystem in India, for good
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
                <div className="h-[200px] flex items-center justify-center border-b border-gray-300">
                  <MdOutlineRequestPage className="text-black text-3xl" />
                </div>
                <div className="p-4">
                  <h2 className="font-plus-jakarta font-medium text-[18px] leading-[26px] tracking-[-0.2px] text-black mb-2">
                    Algorithmic Traders
                  </h2>
                  <p className="font-manrope text-[14px] leading-[20px] text-gray-700">
                    Tech savvy, systematic traders looking for a stable and reliable platform
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
                <div className="h-[200px] flex items-center justify-center border-b border-gray-300">
                  <FaCloud className="text-black text-3xl" />
                </div>
                <div className="p-4">
                  <h2 className="font-plus-jakarta font-medium text-[18px] leading-[26px] tracking-[-0.2px] text-black mb-2">
                    Platforms
                  </h2>
                  <p className="font-manrope text-[14px] leading-[20px] text-gray-700">
                    Widely used platforms that are looking for effortless integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
