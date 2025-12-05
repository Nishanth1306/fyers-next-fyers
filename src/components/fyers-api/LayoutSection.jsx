import Image from "next/image";
import Cloud from "/public/images/fyers-api/cloud-line.svg"
import GitPullRequest from "/public/images/fyers-api/git-pull-request-line.svg";
import Shield from "/public/images/fyers-api/shield-keyhole-line.svg";
import ShoppingCart from "/public/images/fyers-api/shopping-cart-2-line.svg";

export default function FyersAPISection() {
  return (
    <div className="w-full md:h-[400px] lg:h-[430px] mx-auto bg-[#131319] px-5 md:px-[40px] lg:px-[80px] py-8 lg:py-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[60px] items-start md:h-[272px]">
        {/* Left Section - Image */}
        <div className="w-full md:w-[250px] lg:w-[402px] h-auto md:h-[272px] md:flex-shrink-0">
          <Image
            src="https://assets.fyers.in/Marcom_Avatar/Images/fyers-api-banner.webp"
            width={402}
            height={272}
            alt="Professional using laptop"
            className="w-full h-auto md:h-full object-contain md:object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-full md:h-[272px] flex flex-col gap-6 md:gap-8">
          <div className="w-full md:h-[94px] flex flex-col gap-3 text-left md:text-left">
            <h2 className="text-white font-plus-jakarta text-[40px] lg:text-[32px] md:text-[32px] font-bold leading-tight md:leading-[36px]">
              Why choose FYERS API?
            </h2>
            <p className="text-[#C8C8CC] font-manrope text-[20px] text-left leading-[24px] md:leading-[26px]">
              A snapshot of some incredible features we have to offer you.
            </p>
          </div>

          {/* Features Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-6 h-6 flex-shrink-0">
                <Image src={ShoppingCart} alt="Bolt icon" width={20} height={20} className="w-full h-full" />
              </div>
              <span className="text-[#C8C8CC] font-plus-jakarta text-[20px] lg:text-[18px] leading-[20px] md:leading-[24px] tracking-[0px]">
                Place orders in <span className="text-[#F5FF0A]">&lt;20ms</span>
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-6 h-6 flex-shrink-0">
                <Image src={GitPullRequest} alt="Bolt icon" width={20} height={20} className="w-full h-full" />
              </div>
              <span className="text-[#C8C8CC] font-plus-jakarta lg:text-[18px]  text-[20px] leading-[20px] md:leading-[24px] tracking-[0px]">
                Upto <span className="text-[#F5FF0A]">1 Lakh</span> requests per day
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-6 h-6 flex-shrink-0">
                <Image src={Cloud} alt="Bolt icon" width={20} height={20} className="w-full h-full" />
              </div>
              <span className="text-[#C8C8CC] lg:text-[18px]  font-plus-jakarta text-[20px] leading-[20px] md:leading-[24px] tracking-[0px]">
                Highly scalable cloud infra
              </span>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-6 h-6 flex-shrink-0">
                <Image src={Shield} alt="Bolt icon" width={20} height={20} className="w-full h-full" />
              </div>
              <span className="text-[#C8C8CC] lg:text-[18px] font-plus-jakarta text-[20px] leading-[20px] md:leading-[24px] tracking-[0px]">
                Secure app-specific permissions
              </span>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="w-full text-center md:text-left">
            <p className="text-[#F0F0FA] font-manrope text-[20px] lg:text-[18px]  leading-[22px] text-left md:leading-[26px]">
              Built to completely transform the trading ecosystem in India, for good.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
