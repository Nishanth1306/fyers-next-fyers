'use client'
import { useState } from "react";

export default function TooltipInfoButton({ content }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="tooltip-info-button p-1 rounded-full hover:bg-gray-100"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M6.12 4.07993C5.92118 4.07993 5.76 3.91875 5.76 3.71993C5.76 3.5211 5.92118 3.35993 6.12 3.35993H6.1344C6.33322 3.35993 6.4944 3.5211 6.4944 3.71993C6.4944 3.91875 6.33322 4.07993 6.1344 4.07993H6.12Z"
            fill="#2A394E"
          />
          <path
            d="M6.48 8.75993C6.48 8.95875 6.31882 9.11993 6.12 9.11993C5.92118 9.11993 5.76 8.95875 5.76 8.75993V5.87993C5.76 5.6811 5.92118 5.51993 6.12 5.51993C6.31882 5.51993 6.48 5.6811 6.48 5.87993V8.75993Z"
            fill="#2A394E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6C12 9.3 9.3 12 6 12C2.7 12 0 9.3 0 6C0 2.7 2.7 0 6 0C9.3 0 12 2.7 12 6ZM11.1429 6C11.1429 8.82661 8.82661 11.1429 6 11.1429C3.17339 11.1429 0.857143 8.82661 0.857143 6C0.857143 3.17339 3.17339 0.857143 6 0.857143C8.82661 0.857143 11.1429 3.17339 11.1429 6Z"
            fill="#2A394E"
          />
        </svg>
      </button>

      {show && (
        <div className="absolute left-6 top-1 z-10 w-64 rounded-lg bg-[#404040] text-white text-sm shadow-lg p-3 transition-opacity duration-200">
          {content}
          <div className="absolute -left-1 top-2 w-2 h-2 bg-[#404040] rotate-45"></div>
        </div>
      )}
    </div>
  );
}
