import PageIntro from "@/components/Common/PageIntro";
import YoutubePageintro from "/public/images/learn/youtube/youtube-pageintro.png";
import YoutubePageintroMobile from "/public/images/learn/youtube/youtube-pageintro-mobile.png";
import Video from "@/components/learn/youtube/Video";
import HouseOfTrading from "/public/images/learn/youtube/house-of-trading.png";
import Analysis from "/public/images/learn/youtube/analysis.png";
import FyersProduct from "/public/images/learn/youtube/fyers-product.png";
import FyersCTA from "@/components/Common/FyersCTA";
import NavBar from "@/components/IndexPage/NavBar";

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
    title: "Analysis",
    description:
      "Simplifying Trading & Investing for Smart Indians. Start your amazing financial journey with us. Our platforms are built for the smart discerning trader & investors. From weekly market insights on Markets Decoded to deep dives on companies, IPOs and post-listing analysis in Company Breakdown and conversations with FYERS leaders in FYERSide Chat - our upload calendar is packed with value and market knowledge.",
    imageSrc: Analysis,
    imageAlt: "Analysis",
    href: "https://www.youtube.com/watch?v=jjjIl11VC2Q",
    invert: true,
  },
  {
    title: "FYERS Product",
    description:
      "One stop shop for understanding and gaining in-depth knowledge and insights about all FYERS products with use cases, examples, walk throughs and more.",
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
        imageSrc={YoutubePageintro}
        imageSrcMobile={YoutubePageintroMobile}
        title="Your Gateway to Knowledge"
        description="On the FYERS YouTube channels, access videos on analysis, strategies, and tools - curated by FYERS to help you trade and invest smarter every day."
        buttons={[
          {
            text: "Youtube",
            className: "py-[8px] md:py-[12px] px-[24px] bg-[#182BFF] text-[#F2F4FB]",
            imageSrc: "/images/learn/youtube/youtube-fill.svg",
            imageAlt: "Youtube Icon",
            imageHeight: 18,
            imageWidth: 18,
            invert: true,
            href: "https://www.youtube.com/@FYERS-Product",
          },
        ]}
        linkPrefix="Not a FYERS User?"
        linkText="Sign up"
        linkHref="https://signup.fyers.in/"
        align="left"
      />

      <section className="px-[20px] md:px-[72px] py-[20px] md:py-[64px]">
        <div className="flex flex-col gap-[40px] md:gap-[32px] items-start">
          <div className="flex flex-col gap-[24px] md:gap-[32px]">
            <h3 className="text-[#070708] text-[36px] md:text-[64px] font-plus-jakarta font-semibold leading-[40px] md:leading-[72px] -tracking-[0.35px] md:-tracking-[0.8px]">
              Your Gateway to Knowledge
            </h3>

            <p className="text-[#020202] font-manrope text-[18px] font-normal leading-[26px]">
              On the FYERS YouTube channels, access videos on analysis, strategies and tools - curated by FYERS to help
              you trade and invest smarter every day.
            </p>
          </div>

          <div className="flex flex-col gap-[40px] md:gap-[32px]">
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

      <FyersCTA />
    </main>
  );
}
