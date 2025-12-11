import NavBar from "@/components/IndexPage/NavBar";
import PageIntro from "@/components/Common/PageIntro";
import { SupportCardsSection } from "@/components/Common/SupportCardsSection";
import { contactData } from "@/data/contact-us";
import { contactData2 } from "@/data/contact-us";
import FyersCTA from "@/components/Common/FyersCTA";
import Footer from "@/components/IndexPage/Footer";
import ContactTable from "@/components/media/contact-us/ContactTable";
import Map from "@/components/contact-us/Map";

export default function contactUs() {
  return (
    <main>
      <NavBar />
      <PageIntro
        imageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/contact-bk.webp"}
        mobileImageSrc={"https://assets.fyers.in/Marcom_Avatar/Images/contact-mobile-bk.webp"}
        greeting="Contact us"
        title="We are here for you"
        description="From feedback to queries - we are here to help."
        buttons={[
          {
            text: "Sign Up",
            className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] md:py-[12px] px-[24px]",
            href: "https://signup.fyers.in/",
          },
        ]}
        signUpOpen
        linkPrefix={"Are you a Stock Market Fanatic?"}
        linkText={"View open roles"}
        linkHref={"https://recruit.fyers.in/jobs/Careers"}
        align="left"
        contentWidth="md:w-[500px] lg:w-[742px]"
        descWidth="md:w-[270px] lg:w-[280px]"
      />

      <SupportCardsSection />

      <div className="py-[32px] flex flex-col gap-[24px] lg:gap-[32px]">
        <h3 className="px-[20px] md:px-10 lg:px-[80px] custom-container 2xl:w-full font-plus-jakarta font-semibold text-[36px] md:text-[48px] lg:text-[64px] leading-[40px] md:leading-[72px] -tracking-[0.8px]">
          Escalation matrix
        </h3>

        <ContactTable contactData={contactData} />
      </div>

      <div className="px-4 md:px-10 lg:px-[80px] custom-container">
        <div className="bg-black p-[32px] mb-[32px]">
          <div className="font-plus-jakarta text-[36px] font-semibold items-start text-[#F5FF0A] gap-[32px]">
            <h2>Important note</h2>
          </div>
          <div className="text-[#F0F0FA] font-manrope text-[18px] overflow-hidden">
            <p>
              In absence of a response/complaint not addressed to your satisfaction, you may lodge a complaint with SEBI
              at https://scores.sebi.gov.in/ or Exchange at https://investorhelpline.nseindia.com/NICEPLUS
            </p>
            <p>
              Please quote your Service Ticket/Complaint Ref No. while raising your complaint at SEBI SCORES/Exchange
              portal.
            </p>
          </div>

          <div className="text-[#F0F0FA] font-manrope mt-4">
            <h3 className="font-bold">SMART ORDER</h3>
            <p>
              In accordance with SEBI circular dated July 31, 2023, w.e.f August 16, 2023, all disputes against Trading
              Members shall be filed on the ODR Portal. For link to ODR portal is https://smartodr.in/login
            </p>
          </div>
        </div>
      </div>

      <div className="pb-[24px]">
        <ContactTable contactData={contactData2} />
      </div>

      <section className="pt-[12px] md:pt-[36px] lg:pt-[64px] pb-[12px] md:pb-[32px] flex flex-col gap-[24px] lg:gap-[32px]">
        <h3 className="font-plus-jakarta px-4 md:px-10 lg:px-[80px] custom-container 2xl:w-full font-semibold text-[36px] md:text-[48px] lg:text-[64px] leading-[40px]">
          Our coordinates
        </h3>

        <div className="px-4 md:px-10 lg:px-[80px] custom-container 2xl:w-full">
          <h3 className="font-plus-jakarta text-[24px] font-semibold">Address</h3>
          <p className="font-manrope text-[18px] max-w-[480px]">
            901 and 902, 9th Floor, A Wing, Brigade Magnum, Amruthahalli, Kodigehalli Gate, Hebbal, Bengaluru - 560092
          </p>
        </div>

        <Map />
      </section>

      <FyersCTA />
      <Footer />
    </main>
  );
}
