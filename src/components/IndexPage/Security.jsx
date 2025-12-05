const Security = () => {
  return (
    <div className="fy-security py-[24px] px-4 lg:py-[72px] bg-[#131319]">
      <div className="flex flex-col justify-start sm:justify-center sm:items-center gap-4 lg:gap-3 self-stretch max-w-screen-sm-auto max-w-[1080px] sm:text-center mx-auto">
        {/* <div className="text-[16px] md:text-[20px] font-semibold leading-[24px] tracking-[1.2px] uppercase text-[#676768]">
          DATA
        </div> */}
        <div className=" font-plus text-white text-[40px] leading-[52px] lg:text-[72px] font-bold lg:leading-[80px]">
          Your money is safe at <span className="text-[#F5FF0A]">FYERS.</span>{" "}

          ISO-certified security <br className="hidden md:block"/>
          for peace of mind.
        </div>
        <p className="text-[14px] lg:text-lg text-[#C5C6CA] max-w-[620px]">
          We take your data and trades seriously. <br />FYERS is ISO 27001:2022
          certified with 2FA, encrypted data handling, session monitoring & a
          dedicated fraud-prevention team.
        </p>
        <a
          href="https://fyers.in/trust-and-security/"
          className=" text-[16px] mb-4 lg:text-lg text-white font-medium bg-[#182BFF] p-[8px_14px] sm:p-[12px_24px] items-center flex max-w-[270px] sm:max-w-[400px]"
        >
          Learn More About Security{" "}
          <span className="mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.0049 20H6.00488V22H4.00488V20H3.00488C2.4526 20 2.00488 19.5523 2.00488 19V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V19C22.0049 19.5523 21.5572 20 21.0049 20H20.0049V22H18.0049V20ZM11.0049 13.874V17H13.0049V13.874C14.7301 13.4299 16.0049 11.8638 16.0049 10C16.0049 7.79086 14.214 6 12.0049 6C9.79574 6 8.00488 7.79086 8.00488 10C8.00488 11.8638 9.27966 13.4299 11.0049 13.874ZM12.0049 12C10.9003 12 10.0049 11.1046 10.0049 10C10.0049 8.89543 10.9003 8 12.0049 8C13.1095 8 14.0049 8.89543 14.0049 10C14.0049 11.1046 13.1095 12 12.0049 12Z"
                fill="#F0F0FA"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Security;
