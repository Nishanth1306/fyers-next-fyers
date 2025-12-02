"use client";
import { footerLinks, socialLinks } from "@/data/footerLinks";
import FooterLogo from "/public/images/fyers-logo.svg";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex py-6 px-4 sm:p-16 flex-col items-start bg-[#131319]">
      <div className="mx-auto">
        <div className="w-full fy-ftop flex flex-wrap lg:flex-nowrap justify-between items-center p-2 lg:p-0">
          <div className="text-white inline-flex items-center text-[14px] leading-[32px] font-semibold">
            <Image
              src={FooterLogo}
              alt="Fyers"
              className="max-w-[120px] lg:max-w-auto"
            />
            <span className="px-6 font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="26"
                viewBox="0 0 2 26"
                fill="none"
              >
                <path
                  d="M1 0.939453V24.9395"
                  stroke="#CACACA"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <p className="md:!text-[20px] text-[14px]  font-[600] not-italic text-[#F0F0FA] leading-[20px] md:leading-[24px]">
              Unlock your next level with FYERS.
            </p>
          </div>
          <div className="fy-social-links grid grid-cols-5 md:inline-flex gap-4 lg:gap-[8px] my-6 lg:my-0 justify-between flex-1 lg:flex-0">
            {socialLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                target="_blank"
                className="p-[12px]"
                rel="noopener"
                aria-label="twitter-logo"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>



        <div className="flex flex-col md:flex-row md:gap-[60px]">
          <div className="font-manrope text-[12px] text-[#F0F0FA] font-[400] pt-[4px] pb-6 md:pb-0 md:pt-18">
            FYERS Securities Private Limited <br />
            901 and 902, 9th Floor, <br />
            A Wing, Brigade Magnum, <br />
            Amruthahalli, Kodigehalli Gate, <br />
            Hebbal, Bangalore - 560092
          </div>

          <div className="font-manrope text-[12px] text-[#F0F0FA] font-[400] pt-[4px] pb-6 md:pb-0 md:pt-18">
            SEBI Registration No: INZ000008524 <br />
            DP Registration No : IN-DP-432-2019 <br />
            NSE Member Code: 90061 <br />
            MCX Member Code: 56100 <br />
            BSE Member Code: 6697 <br />
            CDSL Member Code: 12089400 <br />
            NSDL Member Code: IN304502 <br />

            <div className="mt-[8px] flex flex-row items-center gap-[8px]">
              <Image
                src="https://assets.fyers.in/images/iso.png"
                alt="ISO Certification Logo"
                width={80}
                height={20}
              />
              <span>FYERS is ISO 27001:2022 certified</span>
            </div>


          </div>



        </div>






        <div className="w-full pb-[24px] sm:py-[72px] px-0">
          <div className="fy-flinks flex flex-wrap justify-between">
            {footerLinks.map((section, idx) => (
              <div
                className="fy-fcards text-white w-1/2 sm:w-1/5 pb-6 lg:pb-0"
                key={idx}
              >
                <h4 className="text-[18px] text-[#F0F0FA] leading-[24px] tracking-[ -0.24px] pb-6 font-semibold">
                  {section.title}
                </h4>
                <ul className="text-[14px] flex flex-col gap-2 lg:text-[16px] ">
                  {section.links.map((link, liIdx) => (
                    <li key={liIdx}>
                      <a
                        href={link.href}
                        target={link.target || "_self"}
                        rel={link.target ? "noopener" : undefined}
                        className="font-[500] text-[#C8C8CC] text-[14px] font-manrope leading-[20px] tracking-[-0.08px] hover:text-[#494f54]"
                      >
                        {link.label}
                        {link.icon && (
                          <img
                            src={link.icon}
                            alt={`${link.label}-image`}
                            className="inline-block max-h-4 px-2 mb-1"
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full font-manrope fy-terms text-[#C8C8CC] text-[12px] lg:pb-[72px] leading-[16px]">
          <p>
            Investment in securities markets are subject to market risks, read
            all the related documents carefully before investing as prescribed
            by SEBI. Issued in the interest of the investors.
          </p>
          <p>
            The clients can write to{" "}
            <a href="mailto:sales-complaints@fyers.in">
              sales-complaints@fyers.in
            </a>{" "}
            for any account opening related queries. Also you can send IT / Tech
            related feedback to{" "}
            <a href="mailto:tech-feedback@fyers.in">tech-feedback@fyers.in</a>
          </p>

          <p>
            For any complaints / Investor grievances email to{" "}
            <a href="mailto:grievance@fyers.in">grievance@fyers.in</a> Also
            refer our investor grievance matrix from our contact us page. A
            client can also opt to write to{" "}
            <a href="https://www.nseindia.com/" rel="noopener" target="_blank">
              {" "}
              NSE
            </a>{" "}
            or{" "}
            <a href="https://www.mcxindia.com/" rel="noopener" target="_blank">
              {" "}
              MCX
            </a>{" "}
            or{" "}
            <a href="https://www.bseindia.com/" rel="noopener" target="_blank">
              {" "}
              BSE
            </a>{" "}
            or{" "}
            <a href="https://www.cdslindia.com/" rel="noopener" target="_blank">
              {" "}
              CDSL
            </a>{" "}
            to resolve in form of grievance.
          </p>

          <p>
            For revocation of E-DIS mandate and related queries, kindly reach
            out to us at <a href="mailto:revoke@fyers.in">revoke@fyers.in</a>.
          </p>

          <p className="pb-4">
            Disclaimer: Ensure that no unauthorized transactions occur in your
            account. Kindly update your mobile number /email IDs with your stock
            brokers to receive information of your transactions directly from
            Exchange on your mobile/email at the end of the day.
          </p>

          <p>
            Stock Brokers can accept securities as margin from clients only by
            way of pledge in the depository system w.e.f. September 1, 2020.
          </p>

          <p>
            Update your email id and mobile number with your stock broker /
            depository participant and receive OTP directly from depository on
            your email id and/or mobile number to create pledge.
          </p>

          <p>
            Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.
          </p>

          <p className="pb-4">
            Procedure to file a complaint on SEBI SCORES: Register on{" "}
            <a
              href="https://scores.sebi.gov.in/"
              rel="noopener"
              target="_blank"
            >
              {" "}
              SCORES
            </a>{" "}
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            KYC is one time exercise while dealing in securities markets - once
            KYC is done through a SEBI registered intermediary (broker, DP,
            Mutual Fund etc.), you need not undergo the same process again when
            you approach another intermediary. Dear Investor, if you are
            subscribing to an IPO, there is no need to issue a cheque. Please
            write the Bank account number and sign the IPO application form to
            authorize your bank to make payment in case of allotment. In case of
            non allotment the funds will remain in your bank account. As a
            business we don't give stock tips, and have not authorized anyone to
            trade on behalf of others.*Investments in the securities market are
            subject to market risks; read all the related documents carefully
            before investing.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full">
            <div className="text-[#CACACA] text-[12px] leading-[16px] font-[400] font-manrope">
              ©FYERS Securities Pvt. Ltd. All Rights Reserved.
            </div>
          </div>

          <div
            className="my-6 bg-[#182BFF] w-fit self-end md:self-auto justify-self-end cursor-pointer"
            onClick={scrollToTop}
          >
            <span className="flex items-center text-[12px] not-italic font-manrope text-[#F0F0FA] p-1 md:whitespace-nowrap ">
              Scroll to top{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.99987 7.414L5.52487 9.889L4.81787 9.182L7.99987 6L11.1819 9.182L10.4749 9.889L7.99987 7.414Z"
                  fill="#F0F0FA"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
