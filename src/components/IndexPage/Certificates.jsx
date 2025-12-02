import Image from "next/image";
import carrerImage from "/public/images/IndexPage/carrer.png";

const Certificates = () => {
  return (
    <div className="fy-certificates">
      <div className="mb-6 md:mb-18">
        <div className="fy-certificate-wrapper border-b border-[#C8C8CC]  px-4 md:px-18 flex flex-wrap lg:flex-nowrap">
          <div className="flex py-6 px-4 md:px-6 gap-4 border-x-1 border-t border-[#C8C8CC] w-full justify-center">
            <div className="flex">
              <Image src={carrerImage} alt="carrer image" />
            </div>
            <div className="">
              <h3 className="font-plus-jakarta text-[#131319] md:text-[#182BFF] font-semibold leading-[32px] tracking-[-0.32px] text-[22px] lg:text-[24px]">
                Great place to work certified
              </h3>
              <p className="text-[12px] lg:text-[16px] text-[#131319] mb-[16px] lg:m-[0_0_56px] min-h-[48px]">
                FYERS has been certified to be a Great place to work!
              </p>
              <a
                href="https://recruit.fyers.in/jobs/Careers"
                className="inline-flex items-center bg-[#E0EBFF] py-1.5 px-2 text-[#131319] md:text-[#182BFF] max-w-auto text-[12px] font-medium w-fit border border-[#182BFF]"
              >
                Explore Careers
                <span className="px-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M4.66668 4.27311V2.27311C4.66668 1.90493 4.96516 1.60645 5.33334 1.60645H10.6667C11.0349 1.60645 11.3333 1.90493 11.3333 2.27311V4.27311H14C14.3682 4.27311 14.6667 4.57159 14.6667 4.93978V14.2731C14.6667 14.6413 14.3682 14.9398 14 14.9398H2.00001C1.63182 14.9398 1.33334 14.6413 1.33334 14.2731V4.93978C1.33334 4.57159 1.63182 4.27311 2.00001 4.27311H4.66668ZM2.66668 10.9398V13.6064H13.3333V10.9398H2.66668ZM7.33334 8.27311V9.60644H8.66668V8.27311H7.33334ZM6.00001 2.93978V4.27311H10V2.93978H6.00001Z"
                      fill="#182BFF"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 md:mb-0 w-full flex md:hidden justify-center ">
        <a
          href="https://fyers.in/media/"
          className="text-[14px] lg:text-[16px] text-[white] font-medium bg-[#182BFF] p-[6px_10px] items-center flex "
        >
          Featured Articles
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
    </div>
  );
};

export default Certificates;
