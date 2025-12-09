import Image from "next/image";
// import PricingImage from "@/assets/images/IndexPage/pricing-info.png";

const pricingDetails = [
  {
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        <path
          d="M4 7.03512C4 5.56597 5.19016 4.375 6.66012 4.375H25.3399C26.8091 4.375 28 5.56516 28 7.03512V25.7149C28 27.1841 26.8099 28.375 25.3399 28.375H6.66012C5.19097 28.375 4 27.1849 4 25.7149V7.03512ZM8.47583 24.375H23.7967C22.11 21.957 19.3079 20.375 16.1363 20.375C12.9646 20.375 10.1624 21.957 8.47583 24.375ZM16 17.7083C18.5773 17.7083 20.6667 15.619 20.6667 13.0417C20.6667 10.4643 18.5773 8.375 16 8.375C13.4227 8.375 11.3333 10.4643 11.3333 13.0417C11.3333 15.619 13.4227 17.7083 16 17.7083Z"
          fill="#040404"
        />
      </svg>
    ),
    description: (
      <div>
        Broking charges capped at <span className="text-[#182BFF]">₹20</span>
      </div>
    ),
  },
  {
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        <path
          d="M7.10542 4.48719C8.74954 3.90268 10.6559 4.2684 11.9719 5.58436C13.2882 6.90069 13.6538 8.80777 13.0686 10.4522L27.5282 24.912L24.6998 27.7404L10.2387 13.2812C8.59454 13.8657 6.68817 13.5 5.37221 12.184C4.05587 10.8677 3.69031 8.96061 4.27553 7.31617L7.25783 10.2984C8.03887 11.0795 9.30521 11.0795 10.0863 10.2984C10.8673 9.51736 10.8673 8.25103 10.0863 7.46999L7.10542 4.48719ZM20.9286 6.99857L25.1712 4.64156L27.0568 6.52717L24.6998 10.7698L22.3428 11.2412L19.5143 14.0696L17.6287 12.184L20.4571 9.3556L20.9286 6.99857ZM11.5005 17.3695L14.3288 20.1979L7.72923 26.7976C6.94818 27.5787 5.68186 27.5787 4.90081 26.7976C4.1657 26.0624 4.12246 24.8975 4.77109 24.1117L4.90081 23.9691L11.5005 17.3695Z"
          fill="#040404"
        />
      </svg>
    ),
    description: (
      <div>
        <span className="text-[#182BFF]">Zero</span> cost account opening and maintenance charges
      </div>
    ),
  },
  {
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
        <path
          d="M2.00667 0.212158H26.0067C26.7431 0.212158 27.34 0.809105 27.34 1.54549V20.2121C27.34 20.9485 26.7431 21.5455 26.0067 21.5455H2.00667C1.2703 21.5455 0.67334 20.9485 0.67334 20.2121V1.54549C0.67334 0.809105 1.2703 0.212158 2.00667 0.212158ZM6.66733 2.87492H3.33399V6.20825C5.17494 6.20825 6.66733 4.71586 6.66733 2.87492ZM21.334 2.87492C21.334 4.71586 22.8264 6.20825 24.6674 6.20825V2.87492H21.334ZM3.33399 15.5416V18.8749H6.66733C6.66733 17.034 5.17494 15.5416 3.33399 15.5416ZM21.334 18.8749H24.6674V15.5416C22.8264 15.5416 21.334 17.034 21.334 18.8749ZM14.0007 16.2083C16.9462 16.2083 19.334 13.8204 19.334 10.8749C19.334 7.9294 16.9462 5.54158 14.0007 5.54158C11.0551 5.54158 8.66733 7.9294 8.66733 10.8749C8.66733 13.8204 11.0551 16.2083 14.0007 16.2083Z"
          fill="#040404"
        />
      </svg>
    ),
    description: (
      <div>
        <span className="text-[#182BFF]">Zero</span> cost investment in direct Mutual Funds & IPO
      </div>
    ),
  },
  {
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        <path
          d="M14.673 3.29175L24.4041 6.3327C24.9606 6.50664 25.3397 7.02216 25.3397 7.60533V9.95842H28.0064C28.7428 9.95842 29.3397 10.5554 29.3397 11.2917V13.9584H12.0063V11.2917C12.0063 10.5554 12.6033 9.95842 13.3397 9.95842H22.673V8.58508L14.673 6.08375L6.67301 8.58508V18.4576C6.67301 20.1175 7.44525 21.6763 8.75089 22.6821L9.00189 22.8641L14.673 26.7304L19.7157 23.2917H13.3397C12.6033 23.2917 12.0063 22.6948 12.0063 21.9584V16.6251H29.3397V21.9584C29.3397 22.6948 28.7428 23.2917 28.0064 23.2917L23.7129 23.2932C23.1974 23.9728 22.57 24.5742 21.8464 25.0675L14.673 29.9584L7.49965 25.0675C5.31401 23.5772 4.00635 21.1029 4.00635 18.4576V7.60533C4.00635 7.02216 4.38535 6.50664 4.94199 6.3327L14.673 3.29175Z"
          fill="#040404"
        />
      </svg>
    ),
    description: (
      <div>
        MTF charges as low as <span className="text-[#182BFF]">12.49%</span> PA
      </div>
    ),
  },
];

const Pricing = () => {
  return (
    <div className="py-[24px] lg:py-[72px]">
      <div className="flex flex-col px-4 md:px-[40px] lg:px-20">
        <div className="text-[16px] md:text-[20px] font-semibold leading-[24px] mb-2 text-[#676768]">Pricing</div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="font-plus-jakarta text-[40px] leading-[52px] md:max-w-[500px] lg:max-w-[714px] mb-6 tracking-[0.54px] lg:text-[64px] font-bold md:font-[600] md:leading-[60px] lg:leading-[72px]">
            Transparent and low cost pricing
          </div>
          <a
            href="https://fyers.in/charges-list/"
            className=" text-[16px] mb-6 md:mb-0 md:h-fit text-white font-medium bg-[#182BFF] p-[6px_10px] md:p-[8px_14px]  items-center flex w-fit"
          >
            Learn More
            <span className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M13.4765 9.16658L9.0065 4.69657L10.185 3.51807L16.6668 9.99992L10.185 16.4817L9.0065 15.3032L13.4765 10.8332H3.3335V9.16658H13.4765Z"
                  fill="#F0F0FA"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="border-t border-b border-[#C8C8CC] md:px-[40px] lg:px-20 flex flex-col-reverse md:flex-row">
        <div className="px-4 md:px-0 w-full">
          {pricingDetails.map((detail, idx) => (
            <div
              key={idx}
              className={`p-4 flex gap-4 items-center border border-[#C8C8CC] ${
                idx === 0 ? "md:border-t-0" : ""
              } border-b-0 md:h-[113px]`}
            >
              <div className="">{detail.image}</div>
              <div className="text-[16px] lg:text-[24px] font-semibold tracking-[0.18px]">{detail.description}</div>
            </div>
          ))}
        </div>
        <Image
          unoptimized
          src={"https://assets.fyers.in/Marcom_Avatar/Images/home-woman.webp"}
          width={427}
          height={452}
          alt="pricing-logo"
          className="px-4 md:px-0 w-full"
        />
      </div>
    </div>
  );
};

export default Pricing;
