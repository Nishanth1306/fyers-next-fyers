import NavBar from "@/components/IndexPage/NavBar";
import PageIntro from "@/components/Common/PageIntro";
import { SupportCardsSection } from "@/components/Common/SupportCardsSection";
import TableSection from "@/components/Common/TableSection";
import { contactData } from "@/data/contact-us";
import { contactData2 } from "@/data/contact-us";
import Image from "next/image";
import FyersCTA from "@/components/Common/FyersCTA";
import Footer from "@/components/IndexPage/Footer";
import ContactTable from "@/components/media/contact-us/ContactTable";

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
            text: "Sign up",
            className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] md:py-[12px] px-[24px]",
            href: "https://signup.fyers.in/",
          },
        ]}
        signUpOpen
        linkPrefix={"Are you a Stock Market Fanatic?"}
        linkText={"View open roles"}
        linkHref={"https://recruit.fyers.in/jobs/Careers"}
        align="left"
        contentWidth="md:w-[742px]"
        descWidth="md:w-[280px]"
      />

      <SupportCardsSection />

      <div className="py-[32px] flex flex-col gap-[24px] md:gap-[32px]">
        <h1 className="px-[20px] md:px-[80px] font-plus-jakarta font-semibold text-[36px] md:text-[64px] leading-[40px] md:leading-[72px] -tracking-[0.8px]">
          Escalation matrix
        </h1>

        <ContactTable contactData={contactData} />
      </div>

      <div className="px-4 md:px-[80px]">
        <div className="bg-black p-[32px] mb-[32px]">
          <div className="font-plus-jakarta text-[36px] font-semibold items-start text-[#F5FF0A] gap-[32px]">
            <h1>Important note</h1>
          </div>
          <div className="text-[#F0F0FA] font-manrope text-[18px] overflow-hidden">
            <h1>
              In absence of a response/complaint not addressed to your satisfaction, you may lodge a complaint with SEBI
              at https://scores.sebi.gov.in/ or Exchange at https://investorhelpline.nseindia.com/NICEPLUS Please quote
              your Service Ticket/Complaint Ref No. while raising your complaint at SEBI SCORES/Exchange portal.
            </h1>
          </div>

          <div className="text-[#F0F0FA] font-manrope mt-4">
            <h1 className="font-bold">SMART ORDER</h1>
            <h1>
              In accordance with SEBI circular dated July 31, 2023, w.e.f August 16, 2023, all disputes against Trading
              Members shall be filed on the ODR Portal. For link to ODR portal is https://smartodr.in/login
            </h1>
          </div>
        </div>
      </div>

      <div className="pb-[24px]">
        <ContactTable contactData={contactData2} />
      </div>

      <section className="px-4 md:px-[80px] pt-[12px] md:pt-[64px] pb-[12px] md:pb-[32px] flex flex-col gap-[24px] md:gap-[32px]">
        <h1 className="font-plus-jakarta font-semibold text-[36px] md:text-[64px] leading-[40px]">Our coordinates</h1>

        <div className="">
          <h1 className="font-plus-jakarta text-[24px] font-semibold">Address</h1>
          <h1 className="font-manrope text-[18px] max-w-[480px]">
            901 and 902, 9th Floor, A Wing, Brigade Magnum, Amruthahalli, Kodigehalli Gate, Hebbal, Bengaluru - 560092
          </h1>
        </div>

        <div className="hidden md:block w-full overflow-hidden">
          <div className="h-[420px] w-full relative">
            <Image
              src="/images/contact-us/map.png"
              alt="Contact Us Map"
              fill
              className="object-cover object-left"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="block md:hidden w-full overflow-hidden">
          <div className="h-[420px] w-full relative">
            <Image
              src="/images/media/maps-mobile.png"
              alt="Contact Us Map"
              fill
              className="object-cover object-left"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <FyersCTA />
      <Footer />
    </main>
  );
}
