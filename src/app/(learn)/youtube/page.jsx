import PageIntro from "@/components/Common/PageIntro";
import YoutubePageintro from "/public/images/learn/youtube/youtube-pageintro.png";
import YoutubePageintroMobile from "/public/images/learn/youtube/youtube-pageintro-mobile.png";
import Video from "@/components/learn/youtube/Video";
import HouseOfTrading from "/public/images/learn/youtube/house-of-trading.png";
import Analysis from "/public/images/learn/youtube/analysis.png";
import FyersProduct from "/public/images/learn/youtube/fyers-product.png";
import FyersCTA from "@/components/Common/FyersCTA";
import NavBar from "@/components/IndexPage/NavBar";
import Footer from "@/components/IndexPage/Footer";
import Button from "@/components/Common/Button";
const videos = [
  {
    title: "House of Trading",
    description:
      "House of Trading by FYERS is built for professional traders who want to understand the markets without the noise. From candlestick patterns to market psychology, every video breaks down real chart setups and trading logic in a clear, practical way.",
    imageSrc: HouseOfTrading,
    imageAlt: "House of trading",
    href: "https://www.youtube.com/watch?v=EKmAhIUEKqQ",
    invert: false,
  },
  {
    title: "The FYERS Channel",
    description:
      "Making Indian investors and traders smarter, with weekly market insights in Markets Decoded, deep dives on companies, IPOs and post-listing analysis in Company Breakdown, plus conversations with FYERS leaders in FYERSide Chat. Our line-up is packed to give you knowledge.",
    imageSrc: Analysis,
    imageAlt: "Analysis",
    href: "https://www.youtube.com/watch?v=jjjIl11VC2Q",
    invert: true,
  },
  {
    title: "FYERS Product",
    description:
      "One-stop shop for understanding and gaining in-depth knowledge about all FYERS products, with insights, examples, walkthroughs and more.",
    imageSrc: FyersProduct,
    imageAlt: "Fyers product",
    href: "https://www.youtube.com/watch?v=bNzlxoC_Nxk",
    invert: false,
  },
];
export default function YoutubePage() {
  return (
    <main>
      <NavBar />
      <PageIntro
        imageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/youtube-bk.webp"}
        mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/youtube-mobile-bk.webp"}
        title="Your Gateway to Knowledge"
        description="On the FYERS YouTube channels, access videos on analysis, strategies, and tools - curated by FYERS to help you trade and invest smarter every day."
        buttons={[
          {
            text: "Sign Up",
            className: "py-[8px] md:py-[12px] px-[24px] bg-[#182BFF] text-[#F2F4FB]",
            imageSrc: "/images/learn/youtube/youtube-fill.svg",
            imageAlt: "Youtube Icon",
            imageHeight: 18,
            imageWidth: 18,
            invert: true,
            href: "https://signup.fyers.in/",
          },
        ]}
        descWidth="max-w-[450px]"
        linkPrefix="Not a FYERS User?"
        linkText="Sign up"
        linkHref="https://signup.fyers.in/"
        align="left"
        contentWidth="md:w-[942px]"
      />
      <section className="px-[20px] md:px-[72px] py-[20px] md:py-[64px]">
        <div className="flex flex-col gap-[24px] md:gap-[48px] items-start">
          <div className="flex flex-col gap-[24px] md:gap-[32px]">
            <h3 className="text-[#070708] text-[36px] md:text-[64px] font-plus-jakarta font-semibold leading-[40px] md:leading-[72px] -tracking-[0.35px] md:-tracking-[0.8px]">
              Subscribe to learning
            </h3>
            {/* <p className="text-[#020202] font-manrope text-[18px] font-normal leading-[26px]">
              On the FYERS YouTube channels, access videos on analysis, strategies and tools - curated by FYERS to help
              you trade and invest smarter every day.
            </p> */}
          </div>
          <div className="flex flex-col gap-[40px] overflow-hidden md:gap-[48px] w-full">
            {videos.map(({ title, description, invert, imageSrc, imageAlt, href }) => (
              <Video
                key={title}
                title={title}
                description={description}
                invert={invert}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                href={href}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="sm:px-[24px] sm:py-[24px] py-[24px]">
        <div className="items-center justify-center">
          <div className="flex flex-col   items-center justify-center">
            <h3 className="text-[#070708] text-[24px] md:text-[64px] font-plus-jakarta text-center  font-semibold leading-[40px] md:leading-[72px] -tracking-[0.35px] md:-tracking-[0.8px]">
              FYERS School of Stocks
            </h3>
            <div className="md:py-[40px] pt-[16px]">
              <Button
                text="Learn More"
                // imageSrc="/images/arrow-right.svg"
                imageAlt=""
                imageWidth={17}
                imageHeight={17}
                href="https://fyers.in/school-of-stocks"
                className="bg-[#182BFF] text-[#F2F4FB] items-center py-[8px] px-[14px] text-[16px]"
              />
            </div>
          </div>
        </div>
      </section>
      <FyersCTA />
      <Footer />
    </main>
  );
}