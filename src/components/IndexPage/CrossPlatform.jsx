import { detectDeviceServer } from "@/utils/browserHelper";
import { headers } from "next/headers";
import Image from "next/image";

const CrossPlatform = async () => {
  const isMobile = await detectDeviceServer(headers);

  return (
    <div className="fy-cross-platform bg-[#131319]">
      <div className=" py-6 px-4 lg:px-[80px] lg:py-[72px]">
        <div className="font-plus text-[14px] lg:text-[20px] mb-2 font-semibold leading-[24px] tracking-[1.2px] text-[#666]">
          Cross-device trading that follows you
        </div>
        <h2 className="font-plus-jakarta font-bold mb-6 text-white text-[40px] lg:text-[64px] leading-[52px] sm:leading-[72px] tracking-[ -0.8px ]">
          Trade anywhere.
          <br /> Stay synced everywhere.
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap items-end justify-between">
          <div className="text-[14px] leading-[26px] font-normal lg:text-[18px] tracking-[-0.16px] text-[#C8C8CC] max-w-[610.5px]">
            Cross-device functionality of the FYERS platform makes trading and investing seamless and integrated. Switch
            from phone to desktop to web without missing a beat.
          </div>
          <div className="flex flex-1 mt-[24px] lg:mt-0 lg:justify-end">
            <a
              href={`${isMobile ? "https://fyers.onelink.me/cj1P/9pfepauj" : "https://fyers.in/products/web-and-app"}`}
              className="text-[14px] lg:text-[16px] text-[white] font-medium bg-[#182BFF] p-[6px_10px] md:p-[8px_14px] items-center flex"
            >
              FYERS Web & App{" "}
              <span className="mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
      <div className="">
        <Image
          unoptimized
          src="https://assets.fyers.in/Marcom_Avatar/Images/home-trade-anywhere-light.webp"
          alt="Fyers Cross Device Trading"
          width={1920}
          height={1080}
          className=" w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default CrossPlatform;
