import Timeline from "@/components/about-us/Timeline";
import LeaderShip from "@/components/about-us/Leadership";
import PageIntro from "@/components/Common/PageIntro";
import FyersCTA from "@/components/Common/FyersCTA";
import NavBar from "@/components/IndexPage/NavBar";
import Footer from "@/components/IndexPage/Footer";
import AboutHighlightSection from "@/components/Common/AboutHighlightSection";
import Banner from "@/components/about-us/Banner";

export default function AboutUsPage() {
  return (
    <>
      <NavBar />
      <main className="w-full overflow-y-hidden overflow-x-hidden bg-[#F2F4FB]">
        <PageIntro
          imageSrc="https://assets.fyers.in/Marcom_Avatar/Images/about-us-bk.webp"
          mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/about-us-bk.webp"}
          greeting="Welcome to FYERS"
          title="Focus Your Energy & Reform Self"
          description="At FYERS, we are focused on designing the foundational tools that enable India's active traders & investors to secure a winning edge in the evolving stock market."
          buttons={[
            {
              text: "Sign Up",
              className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
              href: " https://signup.fyers.in/",
            },
          ]}
          descWidth="md:max-w-[60%] lg:max-w-[44%]"
          // linkPrefix="Are you a stock market fanatic?"
          // linkText="View Openings"
          // linkHref="/openings"
        />

        <AboutHighlightSection
          aboutShortTitle="Our Mission"
          dynamicGrid="px-4 md:px-10 lg:px-20  grid grid-cols-1 md:grid-cols-[2.4fr_1.6fr] items-center"
          aboutTitle="To empower India's new-age traders & investors with best-in-class technology and platforms."
          aboutTitleClassName={"font-semibold font-plus-jakarta text-[36px] leading-[40px] md:text-[48px] md:leading-[56px] text-[#F0F0FA] -tracking-[-0.35px] md:-tracking-[0.64px]"}
          // aboutDesc="Our mission is to empower new-age traders & investors with the best-in-class technology and platforms."
          imageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/about-us-woman.webp"}
          imageAlt="Women using a mobile phone"
          imageContainerStyles="min-w-[540px] md:min-h-[340px]"
          imageStyles="w-full h-auto md:h-[361px] md:w-[542px] object-cover"
        />

        <Banner />

        <Timeline />

        <LeaderShip />

        <FyersCTA />
      </main>
      <Footer />
    </>
  );
}
