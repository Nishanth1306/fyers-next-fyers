import PageIntro from "@/components/Common/PageIntro";
import NavBar from "@/components/IndexPage/NavBar";
import FyersCTA from "@/components/Common/FyersCTA";
import Feature1 from "/public/images/learn/school-of-stocks/stock-line.svg";
import Feature2 from "/public/images/learn/school-of-stocks/e-bike-2-line.svg";
import Feature3 from "/public/images/learn/school-of-stocks/secure-payment-fill.svg";

import Image from "next/image";
import SosFeature from "./SosFeature";
import Footer from "@/components/IndexPage/Footer";
import SosModulesSearch from "./SosModulesSearch";

export const features = [
  {
    iconSrc: Feature1,
    iconAlt: "stock fill",
    title: "Modules & chapters on various topics",
    description: "Get in-depth understanding on topics.",
  },
  {
    iconSrc: Feature2,
    iconAlt: "stock fill",
    title: "Learn from industry experts",
    description: "Rich experience in the financial markets.",
  },
  {
    iconSrc: Feature3,
    iconAlt: "icon",
    title: "Lifetime free & unlimited access",
    description: "We believe that education should be free.",
  },
];

const extraFeatures = [
  {
    title: "Introduction to stock markets",
    chapters: "26 Chapters",
    description: "Learn about the very basics about the Indian stock markets in this module.",
    href: "https://fyers.in/school-of-stocks/module/introduction-to-stock-markets.html",
  },
  {
    title: "Technical analysis",
    chapters: "14 Chapters",
    description: "Markets move for a multitude of reasons other than the fundamental performances.",
    href: "https://fyers.in/school-of-stocks/module/technical-analysis.html",
  },
  {
    title: "Fundamental analysis",
    chapters: "1 Chapter",
    description: "Fundamental analysis is the backbone of long-term investing.",
    href: "https://fyers.in/school-of-stocks/module/fundamental-analysis.html",
  },
  {
    title: "Commodities",
    chapters: "21 Chapters",
    description: "Commodity markets developed much before equities, bonds and currencies.",
    href: "https://fyers.in/school-of-stocks/module/commodities.html",
  },
  {
    title: "Currencies",
    chapters: "1 Chapter",
    description: "Forex market is the largest market in the world, with average volumes exceeding $5 trillion a day.",
    href: "https://fyers.in/school-of-stocks/module/currencies.html",
  },
  {
    title: "Options",
    chapters: "21 Chapters",
    description: "In this module, we will talk in detail about a very versatile derivative instrument called options.",
    href: "https://fyers.in/school-of-stocks/module/options.html",
  },
  {
    title: "Options strategies",
    chapters: "1 Chapter",
    description: "In this module, we shall cover Option Strategies in detail.",
    href: "https://fyers.in/school-of-stocks/module/options-strategies.html",
  },
  {
    title: "Futures",
    chapters: "21 Chapters",
    description:
      "The three most important derivative instruments that are transacted around the world are Forwards, Futures and Options.",
    href: "https://fyers.in/school-of-stocks/module/futures.html",
  },
  {
    title: "Intermarket analysis and sector rotation",
    chapters: "1 Chapter",
    description: "In this Module, we shall talk about Intermarket Analysis and Sector Rotation.",
    href: "https://fyers.in/school-of-stocks/module/intermarket-analysis-and-sector-rotation.html",
  },
  {
    title: "Risk and money management",
    chapters: "21 Chapters",
    description: "Smart risk management is key to protecting your capital and maximising gains.",
    href: "https://fyers.in/school-of-stocks/module/risk-and-money-management.html",
  },
  {
    title: "Trading psychology",
    chapters: "1 Chapter",
    description:
      "We shall talk about the basics of trading psychology and why it is such a critical aspect of trading.",
    href: "https://fyers.in/school-of-stocks/module/trading_psychology.html",
  },
];

export default function ShoolOfStocks() {
  return (
    <main>
      <NavBar />
      <PageIntro
        imageSrc={"https://res.cloudinary.com/dzuiidto8/image/upload/v1764658732/sos-bk_ihu1bp.png"}
        mobileImageSrc={"https://res.cloudinary.com/dzuiidto8/image/upload/v1764658741/sos-mobile-bk_hlyqa1.png"}
        title="Learn trading and investing from the inside out"
        description="School of Stocks is a free online stock market learning portal showcasing lessons with in-depth coverage."
        buttons={[
          {
            text: "Sign Up",
            className: "py-[8px] md:py-[12px] px-[24px] bg-[#182BFF] text-[#F2F4FB]",
            href: "https://signup.fyers.in/",
          },
        ]}
        linkPrefix="Not a FYERS User?"
        linkText="Sign up"
        linkHref="https://signup.fyers.in/"
        align="left"
        contentWidth="lg:w-[946px]"
        descWidth="lg:w-[610px]"
      />

      <section className="flex pt-[20px] lg:pt-[24px] flex-col items-start self-stretch">
        <div className="flex flex-col lg:flex-row justify-center items-start self-stretch border-y border-[#C8C8CC] px-[20px] lg:px-[80px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex w-full h-full lg:h-[112px] py-[16px] lg:py-[24px] px-[16px] items-center gap-[16px] border-x border-[#F0F0FA] bg-[#131319] ${
                index !== features.length - 1 ? "border-b border-[#C8C8CC]" : ""
              }`}
            >
              <div className="relative w-[32px] h-[32px] shrink-0">
                <Image src={feature.iconSrc} alt={feature.iconAlt} fill className="object-contain" />
              </div>

              <div className="flex flex-col items-start gap-[8px] flex-[1_0_0]">
                <h4 className="font-manrope lg:font-plus-jakarta text-[16px] lg:text-[24px] font-semibold leading-[24px] lg:leading-[32px] -tracking-[0.18px] lg:-tracking-[0.1px] text-[#F5FF0A]">
                  {feature.title}
                </h4>
                <p className="font-manrope text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[24px] -tracking-[0.16px] lg:-tracking-[0.18px] text-[#F0F0FA]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="pt-[40px] pb-[24px] px-[20px] lg:px-[80px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[12px] lg:gap-0 self-stretch">
          <h1 className="w-fit font-plus-jakarta text-[24px] lg:text-[48px] font-semibold leading-[32px] lg:leading-[56px] -tracking-[0.1px] lg:-tracking-[0.64px]">
            Modules
          </h1>

          <SosModulesSearch />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-y border-[#C8C8CC] mb-32">
          {extraFeatures.map((feature, index) => (
            <div
              key={index}
              className={`px-[20px] lg:px-0 ${index % 2 !== 0 ? "lg:pr-[80px]" : "lg:pl-[80px]"} ${
                index !== extraFeatures.length - 1 ? "border-b border-[#C8C8CC]" : ""
              }`}
            >
              <SosFeature feature={feature} index={index} />
            </div>
          ))}
        </div>
      </section>

      <FyersCTA />
      <Footer />
    </main>
  );
}
