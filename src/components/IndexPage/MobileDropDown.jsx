"use client";
import { useState } from "react";

const MobileDropDown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col relative w-[80%] my-0 mx-auto mb-">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between text-[11px] p-3 uppercase text-white no-underline w-full "
      >
        <div className="w-fit cursor-pointer">{title}</div>
        <div className="cursor-pointer">
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
        className={`overflow-hidden transition-all duration-300 ml-4 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileDropDown;
