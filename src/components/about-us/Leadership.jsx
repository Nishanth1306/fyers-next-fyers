import { leadersData } from "@/data/about-us";
import Leader from "./Leader";
import { Fragment } from "react";
import SectionHeader from "../Common/SectionHeader";
import ArrowImage from "/public/images/arrow-right.svg";

export default function LeaderShip() {
  return (
    <section className="bg-[#F2F4FB] pb-[32px] md:pb-[72px] ">
      <SectionHeader
        sectionHeading="Our Leadership"
        sectionSubheading="Meet the Architects"
        sectionDescription="The minds shaping the future of trading and investing."
        buttonText="Work with us"
        buttonImagesrc={ArrowImage}
        buttonImageAlt="Arrow right"
        buttonImageHeight={13}
        buttonImageWidth={13}
        buttonStyles="bg-[#182BFF] text-[#F2F4FB] py-[8px] px-[14px]"
        href="https://recruit.fyers.in/jobs/Careers"
      />

      <div className="hidden md:block border-b border-b-[#C5C6CA]"></div>

      <div className="px-4 md:px-10 lg:px-20 ">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px]">
          {leadersData.map((leader, index) => (
            <Fragment key={leader.name + " " + index}>
              <Leader
                imageSrc={leader.imageSrc}
                name={leader.name}
                desc={leader.desc}
                site={leader.site}
                linkedInURL={leader.linkedInURL}
                twitterURL={leader.twitterURL}
              />
            </Fragment>
          ))}
        </div>
      </div>

      <div className="hidden md:block border-b border-b-[#C5C6CA]"></div>
    </section>
  );
}
