"use client";
import { useState } from "react";

const Faqs = ({ faqs = [] }) => {
  const tabs = Object.keys(faqs);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="pb-12 md:pb-18">
      <div className="pt-6 pb-4 px-6 md:pt-18 md:px-20">
        <h2 className="font-bold text-[#131319] text-[40px] leading-[-0.54px] sm:text-[64px] sm:leading-[80px] tracking-[ -0.8px ] pb-3">
          FAQs
        </h2>
        <p className="text-[18px] text-[#131319] font-[400] leading-[24px]">
          {" "}
          Your questions about our platform, answered.{" "}
        </p>
      </div>

      <div className="w-full px-6 md:px-20 mx-auto">
        <div className="text-sm font-medium text-center text-gray-500">
          <ul className="flex flex-wrap py-[16px]">
            {tabs.map((tab) => (
              <li key={tab} className="">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`inline-block p-2 rounded-t-lg md:min-w-[120px] ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-[#182BFF]"
                      : ""
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-[#C8C8CC] rounded-sm">
          {faqs[activeTab].map((faq, idx) => (
            <div key={faq.id} className="">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className={`flex w-full items-center justify-between p-6 ${
                  idx % 2 != 0 ? "bg-[#E0EBFF]" : ""
                }`}
              >
                <span className="text-start w-[80%]">{faq.question}</span>
                <div className="bg-[#C8C8CC] border border-[#C8C8CC] rounded-[50%] p-1 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99959 10.9763L14.1244 6.85156L15.3029 8.03007L9.99959 13.3334L4.69629 8.03007L5.87481 6.85156L9.99959 10.9763Z"
                      fill="#131319"
                    />
                  </svg>
                </div>
              </button>

              {openFAQ === faq.id && (
                <p className="pl-6 pt-4 pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
