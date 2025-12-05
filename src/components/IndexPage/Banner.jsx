"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Banner = ({ heading, tagline, bannerScroll, tickerEnabled = false, tickerWords = [] }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const words = heading.trim().split(" ");
  const staticPart = words.slice(0, -1).join(" ");
  const scrollRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!tickerEnabled) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tickerWords.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [tickerEnabled, tickerWords.length]);

  // Infinite scroll implementation (mobile only)
  useEffect(() => {
    if (!isMobile) return;

    const container = scrollRef.current;
    if (!container || !bannerScroll || bannerScroll.length === 0) return;

    // Get the actual width of the container
    const containerWidth = container.scrollWidth / 3; // Divided by 3 since we triple the items

    // Set initial scroll position to the middle set
    setTimeout(() => {
      container.scrollLeft = containerWidth;
    }, 0);

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const threshold = 50;

      // If scrolled to or past the right edge (end of content)
      if (scrollLeft + clientWidth >= scrollWidth - threshold) {
        isScrollingRef.current = true;
        requestAnimationFrame(() => {
          container.scrollLeft = scrollLeft - containerWidth;
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 100);
        });
      }
      // If scrolled to or past the left edge (start of content)
      else if (scrollLeft <= threshold) {
        isScrollingRef.current = true;
        requestAnimationFrame(() => {
          container.scrollLeft = scrollLeft + containerWidth;
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 100);
        });
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [bannerScroll, isMobile]);

  return (
    <div className="fy-banner bg-[#131319] pt-[32px] md:pt-[96px] md:mb-[37px]">
      <div className="flex flex-col px-[16px] text-start md:items-center md:max-w-[80%] md:my-0 md:mx-auto md:px-[80px] md:text-center">
        <div className="font-semibold text-[16px] md:text-[20px] leading-[24px] tracking-[1.2px] text-[#676768] md:uppercase">
          Welcome to FYERS
        </div>

        <div className="text-[#F0F0FA] my-2 md:my-3 text-[40px] leading-[52px] lg:text-[80px] font-bold lg:leading-[86px] tracking-[-0.6px] md:text-center">
          {tickerEnabled && tickerWords.length > 0 ? (
            <React.Fragment key="ticker">
              {staticPart}{" "}
              <span
                className="relative inline-block align-top"
                style={{
                  minWidth: `${Math.max(...tickerWords.map((w) => w.length))}ch`,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={tickerWords[index]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 text-[#f5fd09]"
                  >
                    {tickerWords[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </React.Fragment>
          ) : (
            <React.Fragment key="static">{heading}</React.Fragment>
          )}
        </div>

        <p className="text-sm font-normal leading-[22px] md:leading-[26px] text-[#C5C6CA] md:text-[20px] md:max-w-[600px] tracking-[-0.32px] mx-auto">
          {tagline}
        </p>

        <div className="mt-[32px] mb-[16px] z-1">
          <a
            href="https://signup.fyers.in/"
            className="text-[16px] md:text-[18px] py-[8px] px-[12px] md:p-[12px] text-white font-medium bg-[#182BFF] items-center w-fit flex gap-2"
          >
            Sign up now
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                fill="#F0F0FA"
              />
            </svg>
          </a>
        </div>

        <div className="text-[12px] text-[#F2F4FB] z-1">
          Already have an account?{" "}
          <a href="https://login.fyers.in/?cb=https://fyers.in/web" className="text-[#F5FD09] cursor-pointer">
            Login
          </a>
        </div>
      </div>

      {/* Banner Scroll Section */}
      <div className="fy-utli border-t border-[#979798] mt-[70px] relative">
        <div className="container flex justify-center min-h-[287px] md:min-h-[340px] max-w-[300px] border-r border-[#979798] mx-auto fybanner-person relative">
          <Image
            src={"https://assets.fyers.in/Marcom_Avatar/Images/home-bk.webp"}
            alt="Banner Image"
            unoptimized
            width={439}
            height={497}
            className="absolute bottom-0 min-w-[370px] md:min-w-[439px]"
          />
        </div>

        {/* Banner Scroll - Infinite on mobile, full-width grid on desktop */}
        <div
          ref={scrollRef}
          className="flex bg-[#131319] border-t overflow-x-scroll md:overflow-x-visible no-scrollbar border-[#666] absolute w-full"
          style={{ scrollBehavior: "auto" }}
        >
          {isMobile
            ? // Mobile: Triple the items for infinite scroll
              [...bannerScroll, ...bannerScroll, ...bannerScroll].map((value, index) => (
                <Link href={value.redirectUrl || ""} key={`${value.name}-${index}`}>
                  <div className="flex gap-1 items-center justify-center border-r border-[#666] min-w-[220px] px-2.5 py-1.5 whitespace-nowrap">
                    {value.image}
                    <p className="text-white">{value.name}</p>
                  </div>
                </Link>
              ))
            : // Desktop: Flex items that fill the width equally
              bannerScroll.map((value, index) => (
                <Link href={value.redirectUrl || ""} key={`${value.name}-${index}`} className="flex-1">
                  <div
                    className={`flex gap-1 items-center justify-center border-r ${
                      index === bannerScroll.length - 1 ? "border-none" : ""
                    } border-[#666] px-2.5 py-1.5 h-full whitespace-nowrap`}
                  >
                    {value.image}
                    <p className="text-white">{value.name}</p>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
