import Link from "next/link";
import Button from "./Button";
import DownloadImage from "/public/images/download-line.svg";

export default function FyersCTA() {
  return (
    <div className="bg-[#131319] py-[24px] border-b border-[#979798]">
      <div className="px-4 md:px-20 flex flex-col md:flex-row md:items-center md:justify-between gap-[24px]">
        {/* Text Block */}
        <div className="text-white flex flex-col gap-[16px] max-w-[700px]">
          <h2 className="text-[48px] md:text-[64px] font-plus-jakarta font-semibold text-[#F5FD09] leading-[56px] md:leading-[72px] -tracking-[0.64px] md:-tracking-[0.8px]">
            Your next level awaits
          </h2>
          <p className="w-[246.61px] md:w-[450px] font-normal text-[14px] md:text-[20px] text-[#F2F4FB] font-manrope leading-[22px] md:leading-[26px] -tracking-[0.16px] md:-tracking-[0.32px]">
            Trade sharper. Invest smarter.
            <br />
            Experience it all on the all-new FYERS Web & App.
          </p>


        </div>

        {/* Buttons */}
      </div>
      <div className="flex gap-4 mt-6 md:mt-0 md:self-end md:justify-end px-4 md:px-20">
        <Link
          href="https://fyers.onelink.me/cj1P/9pfepauj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            text={"Download the App"}
            className="bg-[#F2F4FB] text-[#182BFF] border border-[#182BFF] py-[6px] md:py-[8px] cursor-pointer px-[10px] md:px-[14px]"
            imageSrc={DownloadImage}
            imageAlt="download icon"
            imageHeight={20}
            imageWidth={20}
            imageStyles={`w-6 h-6`}
          />
        </Link>
        <Link
          href="https://signup.fyers.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            text={"Sign Up"}
            className="bg-[#182BFF] text-[#F2F4FB] py-[6px] cursor-pointer md:py-[8px] px-[10px] md:px-[14px] min-h-[38px] md:min-h-[42px]"
          />
        </Link>
      </div>
    </div>
  );
}
