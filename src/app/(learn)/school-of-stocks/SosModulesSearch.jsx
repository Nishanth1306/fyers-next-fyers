"use client";

import Image from "next/image";
import SearchIcon from "/public/images/learn/school-of-stocks/search-2-line.svg";
import { useState } from "react";

export default function SosModulesSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const search = searchTerm.trim();
      if (!search) return;

      setIsSubmitting(true);

      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://fyers.in/school-of-stocks/search/";

      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "s";
      input.value = search;

      form.appendChild(input);
      document.body.appendChild(form);

      form.submit();
    }
  };

  return (
    <div className="relative w-full lg:w-[320px]">
      <Image
        src={SearchIcon}
        alt=""
        height={20}
        width={20}
        className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[20px] h-[20px]"
      />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isSubmitting}
        className="w-full h-[48px] pl-[40px] pr-[12px] border border-[#C8C8CC] focus:outline-none placeholder-[#232324] text-[#232324] font-manrope text-[14px] lg:text-[16px] font-medium leading-[20px] lg:leading-[24px] -tracking-[0.08px] lg:-tracking-[0.18px]"
      />
    </div>
  );
}
