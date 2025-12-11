import PageIntro from "@/components/Common/PageIntro";
import NavBar from "@/components/IndexPage/NavBar";
import Feature1 from "@/assets/images/futures-options/feature-1.svg";
import FeatureLayout from "@/components/futures&options/FeatureLayout";
import FyersCTA from "@/components/Common/FyersCTA";
import Footer from "@/components/IndexPage/Footer";
import Features from "@/components/Common/Features";
import { extraFeatures1, extraFeatures2 } from "@/data/learn/community";
import Button from "@/components/Common/Button";
import FyersNextIcon from "@/assets/images/learn/community/fyers-next-icon.svg";
import NextButton from "@/assets/images/fyers-next.svg";
import Telegram from "@/assets/images/learn/community/telegram.svg";
import Reddit from "@/assets/images/learn/community/reddit.svg";
import CommunityFeatures from "@/components/learn/community/CommunityFeatures";

export const features = [
  {
    iconSrc: Feature1,
    iconAlt: "stock fill",
    title: "Join on WhatsApp",
    description: "Get in-depth understanding on topics.",
    href: "https://www.whatsapp.com/channel/0029VbAZuqLICVffp9nfth2g",
  },
  {
    iconSrc: Telegram,
    iconAlt: "stock fill",
    title: "Join on Telegram",
    description: "Rich experience in the financial markets.",
    href: "https://t.me/s/fyersofficial",
  },
  {
    iconSrc: Reddit,
    iconAlt: "icon",
    title: "Follow on Reddit",
    description: "We believe that education should be free.",
    href: "https://www.reddit.com/r/FYERS/",
  },
  {
    iconSrc: Reddit,
    iconAlt: "icon",
    title: "Follow on Quora",
    description: "We believe that education should be free.",
    href: "https://www.quora.com/profile/FYERS-1",
  },
];

const stats = [
  "Traders and investors seeking genuine, actionable insights.",
  "Professionals looking to build visibility, expertise and network credibility.",
  "New traders eager to shorten their learning curve through access to India’s top market minds.",
];

export default function CommunityPage() {
  return (
    <main>
      <NavBar />
      <PageIntro
        imageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/community-bk.webp"}
        mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/community-mobile-bk.webp"}
        greeting="Community"
        title="FYERS Community: Where like-minded people come together"
        description="Connect, share and grow with like-minded traders in the FYERS community. Insights, discussions and support in one place."
        buttons={[
          {
            imageSrc: NextButton,
            invert: true,
            text: "Sign Up",
            className: "py-[8px] md:py-[12px] px-[24px] bg-[#182BFF] text-[#F2F4FB] gap-[4px]",
            href: "https://signup.fyers.in/",
            imageSrc: FyersNextIcon,
            imageHeight: 18,
            imageWidth: 18,
            invert: true,
          },
        ]}
        linkPrefix="Not a FYERS User?"
        linkText="Sign up"
        linkHref="https://signup.fyers.in/"
        align="left"
        contentWidth="md:w-[700px] lg:w-[1112px]"
        descWidth="md:w-[421px]"
      />

      <section className="relative">
        {/* Full-width top border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#C5C6CA]" />

        {/* Mobile: Horizontal scrollable */}
        <div className="md:hidden overflow-x-auto px-4 md:px-20  scrollbar-hide">
          <div className="flex w-max divide-y">
            {features.map(({ iconSrc, iconAlt, title, description, href }, index) => (
              <FeatureLayout
                key={title}
                iconSrc={iconSrc}
                iconAlt={iconAlt}
                title={title}
                isLastInRow={index === features.length - 1}
                href={href}
                isMobile={true}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:block px-4 md:px-10 lg:px-20 custom-container">
          <div className="grid grid-cols-4 divide-y">
            {features.map(({ iconSrc, iconAlt, title, description, href }, index) => (
              <FeatureLayout
                key={title}
                iconSrc={iconSrc}
                iconAlt={iconAlt}
                title={title}
                isLastInRow={(index + 1) % 4 === 0}
                href={href}
                className="p-4 flex flex-row items-center gap-2 border-[#C5C6CA] max-md:border-r max-md:first:border-l md:border-l"
                titleClassName="font-manrope md:font-plus-jakarta font-medium md:font-semibold text-[16px] md:text-[18px] lg:text-[24px] leading-[20px] lg:leading-[32px] -tracking-[0.18px] md:-tracking-[0.1px] break-words"
                iconClassName="md:-[25px] lg:h-[35px] md:w-[25px] lg:w-[35px] object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Full-width bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C5C6CA]" />
      </section>

      <section className="flex flex-col gap-[24px] lg:gap-[32px] py-[24px] md:py-[48px] lg:py-[64px]">
        <h2 className="font-plus-jakarta text-[36px] lg:text-[64px] font-semibold leading-[40px] lg:leading-[72px] -tracking-[0.35px] lg:-tracking-[0.8px] text-[#070708] px-[20px] md:px-[40px] lg:px-[80px] custom-container 2xl:w-full">
          Why join FYERS Community?
        </h2>

        <Features features={extraFeatures1} featuresPerRow={3} mobileFeaturesPerRow={1} />
      </section>

      <section className="flex flex-col items-start gap-[24px] lg:gap-[32px] py-[24px] lg:py-[32px]">
        <h2 className="font-plus-jakarta text-[36px] lg:text-[64px] font-semibold leading-[40px] lg:leading-[72px] -tracking-[0.35px] lg:-tracking-[0.8px] text-[#070708] px-[20px] md:px-[40px] lg:px-[80px] custom-container 2xl:w-full">
          What's in it for members?
        </h2>
        <CommunityFeatures features={extraFeatures2} />
      </section>

      <section className="flex py-[40px] flex-col items-center gap-[40px] self-stretch border-t border-[#666666] bg-[#131319]">
        <div className="flex flex-col lg:flex-row px-[20px] md:px-10 lg:px-[80px] justify-center items-start gap-[24px] self-stretch custom-container 2xl:w-full">
          <div className="flex flex-col items-start gap-[24px] flex-grow flex-shrink-0 basis-0">
            <div className="flex flex-col items-start gap-[8px] self-stretch">
              <h3 className="text-[#F0F0FA] font-plus-jakarta text-[36px] lg:text-[64px] font-semibold leading-[40px] lg:leading-[72px] -tracking-[0.35px] lg:-tracking-[0.8px] ">
                Who should join?
              </h3>
            </div>
            <div className="flex flex-col items-start gap-[32px] self-stretch">
              <p className="md:max-w-[650px] text-[#C8C8CC] font-manrope text-[14px] lg:text-[20px] font-normal leading-[22px] lg:leading-[26px] -tracking-[0.16px] lg:-tracking-[0.32px]">
                Joining the FYERS Community means being part of a focused, practical and collaborative space. Built to
                help you trade smarter and invest better.
              </p>
            </div>
          </div>

          <Button
            text="Sign Up"
            className="px-[12px] py-[8px] lg:p-[12px] bg-[#182BFF] text-[#F0F0FA] gap-[4px]"
            imageSrc={FyersNextIcon}
            imageAlt="Fyers Next Icon"
            imageHeight={18}
            imageWidth={18}
            invert
            isLink
            href="https://signup.fyers.in/"
          />
        </div>

        <div className="flex items-start gap-[32px] self-stretch border-y border-[#666666]">
          <div className="custom-container 2xl:w-full px-[20px] md:px-10 lg:px-[80px]">
          <div className="flex flex-col lg:flex-row items-center flex-grow shrink-0 basis-0 border-r border-[#666666]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex p-[12px] lg:p-[32px] flex-col justify-center items-start lg:items-center flex-[1_0_0] self-stretch border-l border-[#666666] ${
                  index !== stats.length - 1 ? "border-b borde-[#666666]" : ""
                }`}
              >
                <p className="font-plus-jakarta text-[16px] lg:text-[24px] font-semibold leading-[24px] lg:leading-[32px] -tracking-[0.1px] text-[#F5FF0A]">
                  {stat}
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <FyersCTA />
      <Footer />
    </main>
  );
}
