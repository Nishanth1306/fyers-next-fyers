import NavBar from "@/components/IndexPage/NavBar";
import PageIntro from "@/components/Common/PageIntro";
import { SupportCardsSection } from "@/components/Common/SupportCardsSection";
import TableSection from "@/components/Common/TableSection";
import { contactData } from "@/data/contact-us";
import { contactData2 } from "@/data/contact-us";
import Image from "next/image";
import FyersCTA from "@/components/Common/FyersCTA";
import Footer from "@/components/IndexPage/Footer";

export default function contactUs() {
  return (
    <main>
      <NavBar />
      <PageIntro
        imageSrc="/images/contact-us/contact-us.png"
        title="We are here for you"
        description="From feedback to queries - we are here to help."
        buttons={[
          {
            text: "Join Us",
            className: "bg-[#182BFF] text-[#F2F4FB] py-[8px] md:py-[12px] px-[24px]",
            href: "https://login.fyers.in/?cb=https://fyers.in/web",
          },
        ]}
        linkPrefix={"Are You A Stock Market Fanatic?"}
        linkText={"View Openings"}
        linkHref={"https://signup.fyers.in/"}
        align="left"
      />

      {/* <SupportCardsSection /> */}

      <div className="px-4 md:px-[80px]">
        <div className="font-plus-jakarta font-semibold text-[64px] my-[32px]">
          <h1>Escalation Matrix</h1>
        </div>
      </div>

      <TableSection data={contactData} />

      <div className="px-4 md:px-[80px]">
        <div className="bg-black p-[32px] mb-[32px]">
          <div className="font-plus-jakarta text-[36px] font-semibold items-start text-[#F5FF0A] gap-[32px]">
            <h1>Important Note</h1>
          </div>
          <div className="text-[#F0F0FA] font-manrope text-[18px]">
            <h1>
              In absence of a response/complaint not addressed to your satisfaction, you may lodge a complaint with SEBI
              at https://scores.sebi.gov.in/ or Exchange at https://investorhelpline.nseindia.com/NICEPLUS Please quote
              your Service Ticket/Complaint Ref No. while raising your complaint at SEBI SCORES/Exchange portal.
            </h1>
          </div>

          <div className="text-[#F0F0FA] font-manrope">
            <h1>SMART ORDER</h1>
            <h1>
              In accordance with SEBI circular dated July 31, 2023, w.e.f August 16, 2023, all disputes against Trading
              Members shall be filed on the ODR Portal. For link to ODR portal is https://smartodr.in/login
            </h1>
          </div>
        </div>
      </div>

      <TableSection data={contactData2} />

      <section className="px-4 md:px-[80px]">
        <div className="pt-[32px]">
          <h1 className="font-plus-jakarta font-semibold text-[64px]">Our Coordinates</h1>
        </div>
        <div className="py-[32px]">
          <h1 className="font-plus-jakarta text-[24px] font-semibold">Address</h1>
          <h1 className="font-manrope text-[18px]">
            901 and 902, 9th Floor, A Wing, Brigade Magnum, Amruthahalli, Kodigehalli Gate, Hebbal, Bengaluru - 560092
          </h1>
        </div>
      </section>

      <section className="px-4 md:px-[80px] pb-[32px]">
        <div>
          <Image src="/images/contact-us/map.png" alt="Contact Us Map" width={1200} height={420} />
        </div>
      </section>

      <FyersCTA />
      <Footer />
    </main>
  );
}
