"use client";
import { useState } from "react";

export default function FaqComponent({ faqs = [] }) {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return faqs.length > 0 ? (
    <div className="mt-14 md:mt-30">
      <div className="md:max-w-[780px] mx-auto">
        <h2 className="text-center text-[#2a394e] leading-[48px] text-[24px] md:text-[48px] font-bold mb-6 md:mb-14">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 md:mt-14">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-[#fbfbfe] mb-[7px] rounded">
              <button
                className="flex justify-between items-center w-full px-6 py-7.5 text-left focus:outline-none"
                onClick={() => toggleFaq(faq.id)}
              >
                <h2 className="text-[20px] font-medium text-[#2a394e]">{faq.question}</h2>
                <span className={`transition-transform duration-300 ${openId === faq.id ? "rotate-45" : ""}`}>
                  <img src="https://assets.fyers.in/FAMPL/add-circle.svg" alt="toggle icon" className="w-6 h-6" />
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-6 text-[#747e8b] transition-all duration-300 ease-in-out overflow-hidden">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-5 md:mt-9">
          <a href="/support" className="text-[20px] text-[#436af5] flex items-center justify-center">
            Visit Support Portal for more
            <span className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 22" fill="none">
                <circle
                  cx="11.5"
                  cy="11.168"
                  r="10"
                  stroke="#436AF5"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0355 11.1679H7.96447"
                  stroke="#436AF5"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5 14.7034L15.0355 11.1679L11.5 7.63232"
                  stroke="#436AF5"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
