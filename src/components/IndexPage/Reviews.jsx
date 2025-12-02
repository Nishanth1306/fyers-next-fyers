import { headers } from "next/headers";
import { detectDeviceServer } from "@/utils/browserHelper";

const Reviews = async ({ reviews }) => {
  const isMobile = await detectDeviceServer(headers);
  return (
    <div className="fy-hreviews-wrapper pt-6 md:pt-18 md:px-0">
      <div className="px-4 md:text-center">
        <div className="text-[16px] md:text-[20px] font-semibold leading-[24px] tracking-[1.2px] text-[#666]">
          Trust
        </div>
        <h2 className="font-bold text-[#131319] text-[40px] leading-[52px] sm:text-[80px] sm:leading-[88px] tracking-[-0.54px] md:tracking-[-0.96px] py-3">
          Made by traders. Loved by traders.
        </h2>
        <p className="text-[16px] md:text-[22px] text-[#131319] font-[400] leading-[24px] md:leading-[32px] md:tracking-[-0.6px]">
          Our focus is always on your needs.
        </p>
      </div>
      {/* <div className="flex flex-col md:flex-row md:px-20 md:mt-[72px]">
        <div className="container px-4 md:px-0 flex mt-6 md:mt-0 md:pb-0  mx-auto justify-between items-center">
          <div className="text-[16px] font-medium text-[#676768] leading-[24px]">
            Testimonials Snippet
          </div>
        </div>
        <div className="flex flex-1 mt-[24px] mb-[24px] lg:mt-0 lg:mb-[0] px-4 md:px-0 lg:justify-end">
          <a
            href={`${
              isMobile
                ? "https://fyers.onelink.me/cj1P/9pfepauj"
                : "https://play.google.com/store/apps/details?id=com.fyers.trader&hl=en_IN"
            }`}
            className="text-[14px] lg:text-[16px] md:h-fit text-white font-medium bg-[#182BFF] p-[6px_10px] flex items-center  md:whitespace-nowrap md:mb-0 "
          >
            Read More Reviews{" "}
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M13.3365 7.84518L6.16435 15.0173L4.98584 13.8388L12.158 6.66667H5.83652V5H15.0032V14.1667H13.3365V7.84518Z"
                  fill="#F0F0FA"
                />
              </svg>
            </span>
          </a>
        </div>
      </div> */}
      <div className="w-full pt-[24px] md:pt-[72px]">
        <div
          className="grid grid-cols-1 px-[16px] md:px-[0] [&>div:last-child]:border-b-0
 md:grid-cols-2 single-row border-t border-b border-[#C8C8CC]"
        >
          {reviews.map((review, idx) => (
            <div
              className={`flex gap-4 py-2 px-3 border-b border-x md:border-0 md:p-6 border-[#C8C8CC]
			      `}
              key={`${review.name}-${idx}`}
            >
              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="42"
                  viewBox="0 0 38 42"
                  fill="none"
                  className="w-[24px] md:w-[38px]"
                >
                  <path
                    d="M0.756815 0.658501C0.225671 1.29792 -0.0429292 2.11626 0.00559285 2.94723V39.0461C-0.0401836 39.8768 0.228094 40.6941 0.756815 41.3349L0.879742 41.4582L21.0261 21.2297V20.75L0.879742 0.535156L0.756815 0.658501Z"
                    fill="url(#paint0_linear_3441_36024)"
                  />
                  <path
                    d="M27.7474 27.9712L21.0273 21.2283V20.7487L27.7474 14.0195L27.8976 14.1018L35.8606 18.6381C38.1415 19.9264 38.1415 22.0506 35.8606 23.3526L27.8976 27.889L27.7474 27.9712Z"
                    fill="url(#paint1_linear_3441_36024)"
                  />
                  <path
                    d="M27.8974 27.8916L21.0681 21.0391L0.757812 41.3361C1.22596 41.7223 1.80882 41.9413 2.41463 41.9587C3.02044 41.9761 3.6148 41.7908 4.10416 41.4321L27.8564 27.8916"
                    fill="url(#paint2_linear_3441_36024)"
                  />
                  <path
                    d="M27.8974 14.1023L4.10416 0.548105C3.62005 0.174646 3.02174 -0.0185868 2.41141 0.00140989C1.80109 0.0214066 1.21661 0.253392 0.757812 0.657744L21.0271 20.9959L27.8974 14.1023Z"
                    fill="url(#paint3_linear_3441_36024)"
                  />
                  <path
                    opacity="0.1"
                    d="M27.7471 27.7383L4.10412 41.1966C3.63251 41.5492 3.06007 41.7396 2.47192 41.7396C1.88378 41.7396 1.31134 41.5492 0.839724 41.1966L0.716797 41.3199L0.839724 41.4433C1.31134 41.7959 1.88378 41.9863 2.47192 41.9863C3.06007 41.9863 3.63251 41.7959 4.10412 41.4433L27.8564 27.9027L27.7471 27.7383Z"
                    fill="black"
                  />
                  <path
                    opacity="0.07"
                    d="M0.756408 41.1149C0.226803 40.4693 -0.0413649 39.6474 0.00518582 38.8125V39.0455C-0.0405906 39.8761 0.227687 40.6935 0.756408 41.3342L0.879335 41.2109L0.756408 41.1149Z"
                    fill="black"
                  />
                  <path
                    opacity="0.07"
                    d="M35.8603 23.1068L27.7471 27.7391L27.8973 27.8898L35.8603 23.2987C36.3273 23.0926 36.7315 22.7657 37.0315 22.3516C37.3314 21.9374 37.5164 21.4508 37.5676 20.9414C37.4744 21.4123 37.271 21.8542 36.9741 22.2307C36.6773 22.6072 36.2955 22.9075 35.8603 23.1068Z"
                    fill="black"
                  />
                  <path
                    opacity="0.3"
                    d="M4.10441 0.79251L35.8606 18.8694C36.2916 19.0638 36.6708 19.3575 36.9675 19.7266C37.2642 20.0957 37.4699 20.5298 37.5679 20.9936C37.5196 20.4834 37.3356 19.9955 37.0353 19.5809C36.735 19.1663 36.3294 18.8401 35.8606 18.6364L4.10441 0.54582C1.8644 -0.742447 0.00683594 0.326541 0.00683594 2.94419V3.17718C0.00683594 0.57323 1.8644 -0.509463 4.10441 0.79251Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3441_36024"
                      x1="19.2505"
                      y1="2.56349"
                      x2="-8.14555"
                      y2="29.8668"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#008EFF" />
                      <stop offset="0.01" stopColor="#008FFF" />
                      <stop offset="0.26" stopColor="#00ACFF" />
                      <stop offset="0.51" stopColor="#00C0FF" />
                      <stop offset="0.76" stopColor="#00CDFF" />
                      <stop offset="1" stopColor="#00D1FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_3441_36024"
                      x1="36.1337"
                      y1="20.9954"
                      x2="-3.23029"
                      y2="20.9954"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFD800" />
                      <stop offset="1" stopColor="#FF8A00" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_3441_36024"
                      x1="24.1686"
                      y1="24.7394"
                      x2="-12.9717"
                      y2="61.7539"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF3A44" />
                      <stop offset="1" stopColor="#B11162" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_3441_36024"
                      x1="-4.3505"
                      y1="-11.3615"
                      x2="12.2461"
                      y2="5.16522"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#328E71" />
                      <stop offset="0.07" stopColor="#2D9571" />
                      <stop offset="0.48" stopColor="#15BD74" />
                      <stop offset="0.8" stopColor="#06D575" />
                      <stop offset="1" stopColor="#00DE76" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-[16px] flex-1 text-[#131319] leading-[28px] mt-[4px] md:mt-2 overflow-hidden">
                  {review.comment}
                </p>
                <p className="text-[#182BFF] text-[16px] font-semibold leading-[28px] mt-[8px]">
                  {review.name}
                </p>
                <p className="text-[#676768] text-[14px]">{review.role}</p>
              </div>
              {/* <div className="mt-auto md:mt-0 ml-auto">
                <Image
                  src={`/images/IndexPage/${review.profile_pic}`}
                  width={64}
                  height={64}
                  alt={`${review.name}-image`}
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
