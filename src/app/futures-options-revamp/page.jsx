import FyersCTA from "@/components/Common/FyersCTA";
import PageIntro from "@/components/Common/PageIntro";
import CardSection from "@/components/futures&options/CardSection";
import FeatureSection from "@/components/futures&options/Features";
import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar"; 

export default function FuturesOptionsPage() {
  return (
    <>
      <NavBar />
      <PageIntro
        imageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/fo-bk.webp"}
        mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/fo-mobile-bk.webp"}
        title="Options trading made effortless"
        description="Advanced tools built for precision in futures and options from analysis to execution."
        buttons={[
          {
            text: "Sign Up",
            className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[12px] md:p-[12px]",
            // invert: true,
            // imageHeight: 20,
            // imageWidth: 20,
            href: "https://signup.fyers.in/",
          },
        ]}
        linkPrefix="Not a FYERS User?"
        linkText="Sign up"
        linkHref="https://signup.fyers.in/"
        align="left"
        contentWidth="md:max-w-[80%]"
      />

      <CardSection />

      <FeatureSection />

      <FyersCTA />
      <Footer />
    </>
  );
}
