import PageIntro from "@/components/Common/PageIntro";
import YoutubePageintro from "@/assets/images/learn/youtube/youtube-pageintro.png";
import YoutubePageintroMobile from "@/assets/images/learn/youtube/youtube-pageintro-mobile.png";
import Video from "@/components/learn/youtube/Video";
import HouseOfTrading from "@/assets/images/learn/youtube/house-of-trading.png";
import Analysis from "@/assets/images/learn/youtube/analysis.png";
import FyersProduct from "@/assets/images/learn/youtube/fyers-product.png";
import FyersCTA from "@/components/Common/FyersCTA";
import NavBar from "@/components/IndexPage/NavBar";
import Footer from "@/components/IndexPage/Footer";
import Button from "@/components/Common/Button";
import signUpImage from "@/assets/images/learn/youtube/youtube-fill.svg";
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
        title="Your gateway to knowledge"
        description="On the FYERS YouTube channels, access videos on analysis, strategies and tools. Curated by our team to help you trade and invest smarter every day."
        buttons={[
          {
            text: "Sign Up",
            className: "py-[8px] md:py-[12px] px-[24px] bg-[#182BFF] text-[#F2F4FB]",
            imageSrc: signUpImage,
            imageAlt: "Youtube Icon",
            imageHeight: 18,
            imageWidth: 18,
            invert: true,
            href: "https://signup.fyers.in/",
          },
        ]}
        linkPrefix="Not a FYERS User?"
        linkText="Sign up"
        linkHref="https://signup.fyers.in/"
        align="left"
        contentWidth="md:w-[700px] lg:w-[942px]"
        descWidth="max-w-[450px]"
      />

      <section className="px-[20px] md:px-[40px] lg:px-[64px] py-[20px] md:py-[64px]">
        <div className="flex flex-col gap-[24px] lg:gap-[48px] items-start">
          <div className="flex flex-col gap-[24px] md:gap-[32px]">
            <h3 className="text-[#070708] text-[36px] md:text-[48px] lg:text-[64px] font-plus-jakarta font-semibold leading-[40px] md:leading-[72px] -tracking-[0.35px] md:-tracking-[0.8px]">
              Subscribe to learning
            </h3>
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

      <section className="flex p-[24px] lg:py-10 lg:px-6 flex-col items-center gap-[16px] lg:gap-[40px] self-stretch bg-[linear-gradient(292deg,rgba(246,247,249,0)_8.15%,#DEDEDE_41.43%)]">
        <h3 className="text-center font-plus-jakarta text-[24px] lg:text-[64px] font-semibold leading-[32px] lg:leading-[72px] -tracking-[0.1px] lg:-tracking-[0.8px] text-[#070708]">
          FYERS School of Stocks
        </h3>

        <Button
          text="Learn More"
          imageAlt=""
          imageWidth={17}
          imageHeight={17}
          href="https://fyers.in/school-of-stocks"
          className="w-fit bg-[#182BFF] text-[#F2F4FB] items-center py-[8px] px-[14px] text-[14px]"
        />
      </section>

      <FyersCTA />
      <Footer />
    </main>
  );
}
