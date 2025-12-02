"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function MtfTabs({ activeWindow }) {
  const router = useRouter();

  // { label: "Overview", value: "mtf-overview", href: "/marketing-campaign/margin-trading-facility" },
  const tabs = [
    { label: "MTF Stocks List", value: "mtf-list", href: "/mtf-stocks-list" },
    { label: "MTF Calculator", value: "mtf-calculator", href: "/calculator/mtf-calculator" },
  ];

  const [selected, setSelected] = useState(activeWindow || "mtf-overview");

  const handleSelect = (value) => {
    setSelected(value);
    const tab = tabs.find((t) => t.value === value);
    if (tab) router.push(tab.href);
  };

  useEffect(() => {
    if (activeWindow) setSelected(activeWindow);
  }, [activeWindow]);

  return (
    <div>
      {/* Desktop Tabs */}
      <ul className="hidden md:flex justify-center list-none p-0">
        {tabs.map((tab) => (
          <li key={tab.value}>
            <a
              href={tab.href}
              className={`px-4 py-2 inline-block text-[20px] font-medium leading-[28px] text-[#6a7582] transition ${
                selected === tab.value
                  ? "border-b-4 border-[#436af5] text-[#2a394e] bg-gradient-to-b from-white to-[#f3f5ff] backdrop-blur-sm"
                  : "hover:border-b-4 hover:border-[#436af5] hover:text-[#2a394e] hover:bg-gradient-to-b hover:from-white hover:to-[#f3f5ff] hover:backdrop-blur-sm"
              }`}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Select Box */}
      <label htmlFor="tab-switch" className="sr-only">Tab Switch</label>
      <select
        id="tab-switch"
        value={selected}
        onChange={(e) => handleSelect(e.target.value)}
        className="block md:hidden w-full md:w-11/12 mx-auto mt-8 mb-8 p-2 text-base bg-white rounded border border-[#ccc]"
      >
        {tabs.map((tab) => (
          <option key={tab.value} value={tab.value}>
            {tab.label}
          </option>
        ))}
      </select>
    </div>
  );
}
