import Image from "next/image";
import Link from "next/link";

export default function MobileNavBarDropdown({ isLearning = false, text, products, links }) {
  return (
    <div className="flex flex-col items-start gap-6 w-full">
      <div className="p-3 flex flex-col items-start gap-4 self-stretch">
        <p className="font-manrope text-[14px] font-medium leading-[24px] tracking-[1.62px] uppercase">{text}</p>

        <div className="flex items-start gap-2 self-stretch">
          <div
            className={`${
              isLearning ? "grid grid-cols-2 gap-[18px] gap-y-[18px]" : "flex items-start justify-between content-start"
            } flex-wrap gap-y-[16px] w-full`}
          >
            {products.map((product, index) => (
              <Link href={product.href} key={index} className={`w-full`}>
                {isLearning && (
                  <div className="relative h-[172px] w-full">
                    <Image src={product.img} alt="learn img" fill className="object-cover" />
                  </div>
                )}
                <div className={`flex items-center  shrink-0 w-full ${isLearning ? "gap-[6px]" : "px-2 gap-2"}`}>
                  <div className="flex items-center justify-center gap-2 p-2">{product.icon}</div>
                  <div className="flex flex-col items-start flex-[1_0_0]">
                    <div className={`flex items-center gap-2 self-stretch ${isLearning ? "" : "py-1"}`}>
                      <h4
                        className={`font-manrope ${
                          isLearning
                            ? "text-[12px] font-medium leading-[20px] -tracking-[0.8px]"
                            : "text-[16px] font-semibold leading-[24px] -tracking-[0.24px]"
                        }`}
                      >
                        {product.name}
                      </h4>
                      {product.badge && product.badge}
                    </div>
                    <p className="font-manrope text-[12px] font-normal leading-[16px] text-[#666666]">{product.desc}</p>
                  </div>
                  {/* <div className="w-[32px] h-[32px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path
                        d="M16.2289 16.0007L12.4576 12.2294L14.3433 10.3438L20.0001 16.0007L14.3433 21.6575L12.4576 19.7719L16.2289 16.0007Z"
                        fill="#182BFF"
                      />
                    </svg>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 self-stretch border-t border-[#131319] p-3">
        <div className="p-2 flex flex-col justify-between items-start gap-[20px]">
          <p className="font-manrope text-[14px] font-medium leading-[24px] tracking-[1.62px] uppercase text-[#666666]">
            Trade with
          </p>

          {links.map((link, index) => (
            <div key={index} className="flex items-center justify-center gap-1">
              <span className="w-[20px] h-[20px]">{link.icon}</span>
              <p className="font-manrope text-[14px] font-medium leading-[20px] -tracking-[0.08px] text-[#131319]">
                {link.name}
              </p>
              <span className="w-[20px] h-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10.9762 10.0006L6.85144 5.87577L8.02995 4.69727L13.3333 10.0006L8.02995 15.3038L6.85144 14.1253L10.9762 10.0006Z"
                    fill="#131319"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>

        <a
          href="https://fyers.in/school-of-stocks/"
          className="flex py-2 px-[14px] justify-center items-center gap-1 border border-[#182BFF] bg-[#E0EBFF]"
        >
          <span className="flex items-center justify-center px-1">
            <span className="font-manrope text-[14px] font-medium leading-[24px] -tracking-[0.18px] text-[#182BFF]">
              Learn More
            </span>
          </span>
          <span className="w-[24px] h-[24px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                fill="#182BFF"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
