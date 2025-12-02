import { useState } from "react";
import Image from "next/image";
import { navBarLinks } from "@/data/header";
import Link from "next/link";

export default function DropDown() {
  const [activeTab, setActiveTab] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  return (
    <div className="flex gap-6 md:px-[72px]">
      {Object.keys(navBarLinks).map((tab, idx) => {
        if (navBarLinks[tab].isRedirectOnly) {
          return (
            <Link 
              key={idx} 
              href={navBarLinks[tab].redirectUrl}
              className="text-[16px] font-manrope md:text-[18px] md:leading-[24px] md:tracking-[-0.24px] font-medium md:font-semibold text-[#F2F4FB] hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap py-1 px-0.5"
            >
              {tab}
            </Link>
          );
        }

        return (<DropDownTab
          key={idx}
          tab={tab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setTimeoutId={setTimeoutId}
          timeoutId={timeoutId}
        />)
      }
      )}
    </div>
  );
}

function DropDownTab({ tab, activeTab, setActiveTab, setTimeoutId, timeoutId }) {
  const isActive = activeTab === tab;

  const handleMouseEnter = (tab) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveTab(tab);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveTab(null);
    }, 200);
    setTimeoutId(id);
  };

  return (
    <div className="group" onMouseEnter={() => handleMouseEnter(tab)} onMouseLeave={handleMouseLeave}>
      <TabLabel tab={tab} isActive={isActive} />
      {isActive && <DropDownPanel tab={tab} />}
    </div>
  );
}

function TabLabel({ tab, isActive }) {
  return (
    <div className="flex items-center gap-2 py-1 px-0.5">
      <span className="text-[16px] font-manrope md:text-[18px] md:leading-[24px] md:tracking-[-0.24px] font-medium md:font-semibold text-[#F2F4FB] hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap">
        {tab}
      </span>
      <div
        className={`w-4 h-4 text-[#F2F4FB] transition-all duration-200 ${
          isActive ? "rotate-180 text-white" : "group-hover:text-white"
        }`}
        style={{ transformOrigin: "center" }}
      >
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

function DropDownPanel({ tab }) {
  const { LHS, RHS } = navBarLinks[tab];
  return (
    <div className="absolute top-full flex left-1/2 transform -translate-x-1/2 bg-[#F0F0FA] z-50 md:w-[100%] animate-in fade-in slide-in-from-top-2 duration-300">
      <LeftSection tab={tab} LHS={LHS} />
      <RightSection RHS={RHS} />
    </div>
  );
}

function LeftSection({ tab, LHS }) {
  return (
    <div className="pl-[80px] w-[75%]">
      <div className="pr-[32px] py-[32px] border-r border-[#C8C8CC]">
        <div className="text-[14px] font-[500] not-italic leading-[24px] uppercase tracking-[1.62px] font-manrope text-[#666] pb-[16px] ">
          {LHS.title}
        </div>
        {/* {tab === "Learnings" ? (
          <LearningProducts products={LHS.products} />
        ) : ( */}
        <DefaultProducts products={LHS.products} />
        {/* )} */}
      </div>
    </div>
  );
}

function LearningProducts({ products }) {
  const [highlightedItem, setHighlightedItem] = useState(null);

  return (
    <div className="flex gap-[24px]">
      {products.map((item) => {
        const isHighlighted = highlightedItem === item.name;

        return (
          <div
            key={item.name}
            onMouseEnter={() => setHighlightedItem(item.name)}
            onMouseLeave={() => setHighlightedItem(null)}
          >
            <Link href={item["redirect-url"]}>
              <div className="flex flex-col cursor-pointer">
                <div className="pb-[12px] w-[210px] h-[210px] ">
                  <Image
                    src={item.bannerImage}
                    alt={item.name}
                    width={228}
                    height={228}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`flex items-center gap-[8px] transition-all duration-200 border-l-4 ${
                    isHighlighted ? "border-[#182BFF]" : "border-transparent"
                  }`}
                >
                  <div className={`${isHighlighted ? "text-[#182BFF]" : "text-[#131319]"} p-[4px]`}>{item.img}</div>
                  <div>
                    <div
                      className={`font-manrope text-[18px] font-[600] leading-[24px] tracking-[-0.24px] not-italic transition-colors duration-200 ${
                        isHighlighted ? "text-[#182BFF]" : "text-[#131319]"
                      }`}
                    >
                      {item.name}
                    </div>
                    <div className="font-manrope text-[12px] font-[400] leading-[16px] not-italic text-[#666]">
                      {item.tagline}
                    </div>
                  </div>
                  <div className={`transition-opacity duration-200 ${isHighlighted ? "opacity-100" : "opacity-0"}`}>
                    <RightArrowBlue />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

function DefaultProducts({ products }) {
  const [highlightedItem, setHighlightedItem] = useState(null);

  return (
    <div className="grid grid-cols-2">
      {products.map((item) => {
        const isHighlighted = highlightedItem === item.name;

        return (
          <div
            key={item.name}
            onMouseEnter={() => setHighlightedItem(item.name)}
            onMouseLeave={() => setHighlightedItem(null)}
          >
            <Link href={item["redirect-url"]}>
              <div className="mb-[16px] flex justify-between cursor-pointer">
                <div
                  className={`flex items-center px-[8px] transition-all duration-200 border-l-4 ${
                    isHighlighted ? "border-[#182BFF]" : "border-transparent"
                  }`}
                >
                  <div className={`mr-[8px] min-w-[36px] ${isHighlighted ? "text-[#182BFF]" : "text-[#131319]"}`}>
                    {item.img}
                  </div>
                  <div>
                    <div className="py-[4px] flex items-center">
                      <div
                        className={`text-[18px] font-[600] tracking-[-0.24px] leading-[24px] font-manrope not-italic mr-[8px] transition-colors duration-200 ${
                          isHighlighted ? "text-[#182BFF]" : "text-[#131319]"
                        }`}
                      >
                        {item.name}
                      </div>
                      {item.isNew && <NewBadge />}
                    </div>
                    <div className="not-italic text-[12px] font-manrope font-[400] leading-[16px] text-[#666]">
                      {item.tagline}
                    </div>
                  </div>
                </div>
                <div className={`transition-opacity duration-200 ${isHighlighted ? "opacity-100" : "opacity-0"}`}>
                  <RightArrowBlue />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

function RightSection({ RHS }) {
  return (
    <div className="w-[25%] py-[32px] px-[24px] flex flex-col">
      <div className="p-[8px] flex flex-col items-start gap-[16px]">
        <div className="text-[14px] not-italic font-manrope font-[500] leading-[24px]trackin-[1.62px] uppercase text-[#666]">
          {RHS.title}
        </div>
        {RHS.products.map((item) => (
          <Link href={item["redirect-url"]} key={item.name}>
            <div className="flex gap-[4px] cursor-pointer" key={item.name}>
              {item.image}
              <div className="text-[#131319] font-manrope text-[14px] not-italic font-[500] leading-[20px] tracking-[-0.08px]">
                {item.name}
              </div>
              <RightArrow />
            </div>
          </Link>
        ))}
      </div>
      <div className="pt-[24px]">
        <Link href={RHS.button["redirect-url"]}>
          <button className="flex cursor-pointer items-center gap-[4px] py-[8px] px-[14px] text-[#182BFF] font-manrope text-[16px] non-italic tracking-[-0.18px] leading-[24px] bg-[#E0EBFF] border border-[#182BFF]">
            {RHS.button.leftImage}
            <p>{RHS.button.text}</p>
            {RHS.button.rightImage}
          </button>
        </Link>
      </div>
    </div>
  );
}

const RightArrowBlue = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M16.229 16.0007L12.4578 12.2294L14.3434 10.3438L20.0002 16.0007L14.3434 21.6575L12.4578 19.7719L16.229 16.0007Z"
      fill="#182BFF"
    />
  </svg>
);

const RightArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10.9762 10.0006L6.85144 5.87577L8.02995 4.69727L13.3333 10.0006L8.02995 15.3038L6.85144 14.1253L10.9762 10.0006Z"
      fill="#131319"
    />
  </svg>
);

const NewBadge = () => (
  <div className="flex bg-[#DCF2D8] not-italic items-center py-[2px] gap-[2px] uppercase text-[12px] font-[500] leading-[16px] tracking-[0.8px] px-[8px]">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M1 11C1 6.5 1 3.76141 1 1.00001C5.50002 1.00001 8.23859 1 11 1C11 5.75 11 8.23857 11 11C5.50002 11 3.7614 11 1 11ZM5.50002 5.5V8.5H6.50002V5.5H5.50002ZM5.50002 3.5V4.5H6.50002V3.5H5.50002Z"
        fill="#0A3203"
      />
    </svg>
    New
  </div>
);
