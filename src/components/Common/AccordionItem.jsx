"use client";
import { useState } from "react";

export default function AccordionItem({ title , redirectionLink, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center justify-between text-[11px] uppercase text-[#050505] no-underline py-2 w-full">
        <div onClick={()=> window.open(redirectionLink)} className="w-fit cursor-pointer">{title}</div>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <svg
            width={20}
            height={20}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-469, -26)">
                <g transform="translate(469, 26)">
                  <rect x="0" y="0" width="16" height="16" />
                  <g
                    transform="translate(3, 6)"
                    stroke="#677583"
                    strokeWidth="1.5"
                  >
                    <polyline points="0 0 5 5 10 0" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
