import { detectDeviceServer } from "@/utils/browserHelper";
import { headers } from "next/headers";

const Charts = async () => {
  const isMobile = await detectDeviceServer(headers);
  return (
    <div className="fy-charts pb-[64px]">
      <div className="container mx-auto p-[24px_16px] lg:p-[64px_0]">
        <div className="font-plus text-[14px] lg:text-[20px] font-semibold leading-[24px] tracking-[1.2px] uppercase text-[#676768]">
          Growth & Learning
        </div>
        <h2 className="font-plus font-bold text-[#131319] text-[40px] lg:text-[64px] leading-[52px] sm:leading-[72px] tracking-[ -0.8px ]">
          Chart Your Collective Ascent. <br />
          Learn with Precision
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap items-end justify-between">
          <div className="text-[14px] lg:text-[18px] text-[#383839] max-w-[680px] pt-6">
            Join the Thriving Community of Traders and Investors! Connect with
            thousands of active traders and investors on our dynamic forum to
            exchange knowledge and insights. Sign up now and enhance your
            trading experience!
          </div>
          <div className="flex flex-1 justify-end mt-[24px] lg:mt-0">
            <a
              href={`${
                isMobile
                  ? "https://fyers.onelink.me/cj1P/9pfepauj"
                  : "https://fyers.in/web"
              }`}
              className="text-[16px] text-[white] font-medium bg-[#182BFF] p-[8px_14px] items-center flex "
            >
              FYERS Web & App{" "}
              <span className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    fill="#F2F4FB"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="fy-ccard-wrapper border-t border-b border-[#979798] px-[16px] lg:px-0">
        <div className="container flex mx-auto justify-between lg:gap-[128px] flex-wrap lg:flex-nowrap">
          <div className="border-l border-r border-b lg:border-b-0 border-[#979798]">
            <div className="flex justify-center">
              <img src="images/chart1.png" alt="chart-image" />
            </div>
            <div className=" p-4 lg:p-8 border-t border-[#979798]">
              <h3 className=" text-[16px] font-semibold uppercase leading-[24px] text-[#101010]">
                Learn the Stock Market
              </h3>
              <p className="text-[14px]leading-[22px] text-[#131319] py-4">
                Learn financial concepts like the top 1%. School of Stocks is a
                free app with engaging videos, quizzes, and a community for
                traders to improve stock market skills.
              </p>
              <div className="flex flex-1 justify-end lg:justify-start mt-[16px] lg:mt-0">
                <a
                  href="https://fyers.in/school-of-stocks"
                  className="inline-flex items-center bg-[#B8CEFF] p-2 text-[#182BFF] max-w-auto"
                >
                  Download Today
                  <span className="mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        fill="#182BFF"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-l border-r border-[#979798]">
            <div className="flex justify-center">
              <img src="images/chart1.png" alt="chart-image" />
            </div>
            <div className="p-8 border-t border-[#979798]">
              <h3 className=" text-[16px] font-semibold uppercase leading-[24px] text-[#101010]">
                Learn the Stock Market
              </h3>
              <p className="text-[14px]leading-[22px] text-[#131319] py-4">
                Learn financial concepts like the top 1%. School of Stocks is a
                free app with engaging videos, quizzes, and a community for
                traders to improve stock market skills.
              </p>
              <div className="flex flex-1 justify-end lg:justify-start mt-[16px] lg:mt-0">
                <a
                  href="https://fyers.in/community/"
                  className="inline-flex items-center bg-[#B8CEFF] p-2 text-[#182BFF] max-w-auto"
                >
                  Download Today
                  <span className="mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        fill="#182BFF"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
