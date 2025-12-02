"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function FeatureInfo({
  featureTitle,
  featureDescription,
  featureLink,
  isLast,
  isTwoCols,
  index,
  totalFeatures,
  isActive,
  onClick,
  isInvert = false,
  minHeightDesktop = "min-h-[100px]",
  descImage,
}) {
  const isEvenIndex = index % 2 === 0;
  const isLastRow = isTwoCols && index >= totalFeatures - 2;
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-[16px] ${minHeightDesktop} flex flex-col justify-center gap-[8px] md:gap-[8px] hover:bg-[#F2F4FB] transition-colors relative ${
        isActive
          ? "bg-[#F2F4FB] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-1/2 before:h-[4px] before:bg-[#182BFF] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-1/2 after:h-[4px] after:bg-[#FFF]"
          : ""
      } ${
        isTwoCols
          ? `border-[#C5C6CA] ${isEvenIndex ? "border-l border-r" : "border-r"} ${isLastRow ? "border-b" : "border-b"}`
          : `${isInvert ? "border-r" : "border-l"} border-[#C5C6CA] ${isLast ? "" : "border-b"}`
      }`}
    >
      <div className="flex items-center gap-[16px]">
        {descImage && descImage}
        <div className="flex flex-col gap-[8px]">
          <h4
            className={`font-plus-jakarta font-semibold text-[18px] leading-[22px] md:leading-[24px] tracking-[0px] ${
              isActive ? "text-[#182BFF]" : "text-[#131319]"
            }`}
          >
            {featureTitle}
          </h4>
          <p className="font-manrope font-normal text-[#131319] text-[14px] leading-[22px] -tracking-[0.16px]">
            {featureDescription}
          </p>
        </div>
      </div>
      {featureLink !== null && featureLink !== undefined && (
        <Link
          href={featureLink}
          className="w-fit flex items-center justify-center relative py-[4px] pr-[4px] gap-[2px]"
        >
          <span className="font-medium font-manrope text-[12px] text-[#182BFF] leading-[16px] tracking-[0px]">
            Know More
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8.78126 8.00047L5.48145 4.70062L6.42425 3.75781L10.6669 8.00047L6.42425 12.2431L5.48145 11.3003L8.78126 8.00047Z"
              fill="#182BFF"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}

function MobileFeatureCarousel({ features, mobileImageHeight }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRefs = useState(() => features.map(() => null))[0];
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    }
  };
  useState(() => {
    const calculateMaxHeight = () => {
      const heights = contentRefs.map((ref) => ref?.offsetHeight || 0);
      const max = Math.max(...heights);
      if (max > 0) {
        setMaxHeight(max);
      }
    };
    if (typeof window !== "undefined") {
      setTimeout(calculateMaxHeight, 100);
      window.addEventListener("resize", calculateMaxHeight);
      return () => window.removeEventListener("resize", calculateMaxHeight);
    }
  });
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="relative" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {/* Image */}
        <div
          className={`relative w-full ${
            mobileImageHeight ? mobileImageHeight : "min-h-[250px]"
          }  flex items-center justify-center bg-[#131319] overflow-hidden border-x border-b border-[#C5C6CA]`}
        >
          {features[currentIndex].featureImage && (
            <Image
              key={features[currentIndex].featureImage}
              unoptimized
              src={features[currentIndex].featureImage}
              alt="image"
              fill
              className={`bg-[#E5E5E5] ${features[currentIndex].featureImageStyles ?? "object-cover"}`}
              sizes="100vw"
              priority
            />
          )}
        </div>
        {/* Feature Info */}
        <div
          className="border-x border-[#C5C6CA] p-[20px] flex flex-col gap-[8px] hover:bg-[#F2F4FB]"
          // style={{ minHeight: maxHeight > 0 ? `${maxHeight}px` : "auto" }}
        >
          <div className="flex flex-col gap-[8px]" ref={(el) => (contentRefs[currentIndex] = el)}>
            <h4 className="font-plus-jakarta font-semibold text-[#131319] text-[20px] leading-[24px] md:tracking-[1.2px]">
              {features[currentIndex].featureTitle}
            </h4>
            <p className="font-manrope font-normal text-[#131319] text-[16px] leading-[20px] tracking-[0px]">
              {features[currentIndex].featureDescription}
            </p>
          </div>
        </div>
        {/* Hidden elements to measure heights */}
        <div className="invisible absolute pointer-events-none">
          {features.map((feat, idx) => (
            <div key={idx} ref={(el) => (contentRefs[idx] = el)} className="p-[20px] flex flex-col gap-[8px]">
              <h4 className="font-plus-jakarta font-semibold text-[#131319] text-[18px] leading-[22px] tracking-[1.2px] uppercase">
                {feat.featureTitle}
              </h4>
              <p className="font-manrope font-normal text-[#020536] text-[16px] leading-[20px] tracking-[0px]">
                {feat.featureDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center">
        <div className="flex items-center justify-center space-x-[6.75px] p-[8px]">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-[8px] h-[8px] transition-colors ${idx === currentIndex ? "bg-[#182BFF]" : "bg-[#C8C8CC]"}`}
              aria-label={`Go to feature ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default function Feature({
  feature,
  invert = false,
  isImageObjectFit = false,
  isThreeCols = false,
  isTwoCols = false,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col gap-[28px]">
      <div className="border-t md:border-y border-[#C5C6CA]">
        <div className="bg-[#FFFFFF] px-5 md:px-20">
          {/* Mobile Layout */}
          <div className="md:hidden relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-screen border-b border-[#C5C6CA] bottom-[48px]" />
            <div className="relative z-10">
              <MobileFeatureCarousel features={feature.features} mobileImageHeight={feature.mobileImageHeight} />
            </div>
          </div>
          {/* Desktop Layout */}
          {isThreeCols ? (
            // ✅ Three Columns Layout: Image in first row, Feature infos in second row (3 cols)
            <div className="hidden md:grid">
              {/* Image Row */}
              <div className="relative w-full min-h-[610px] bg-[#131319] flex items-center justify-center overflow-hidden">
                {feature.features[activeIndex].featureImage && (
                  <Image
                    unoptimized
                    src={feature.features[activeIndex].featureImage}
                    alt="feature image"
                    fill
                    className={`bg-[#E5E5E5] ${
                      feature.features[activeIndex].featureImageStyles ?? "object-cover"
                    } object-top`}
                  />
                )}
              </div>

              {/* Feature Info Row - 3 Columns */}
              <div className="grid grid-cols-3">
                {feature.features.map((info, idx) => (
                  <FeatureInfo
                    key={`${info.featureTitle}-${idx}`}
                    featureTitle={info.featureTitle}
                    featureDescription={info.featureDescription}
                    featureLink={info.featureLink}
                    isLast={idx === feature.features.length - 1}
                    isTwoCols={false}
                    index={idx}
                    totalFeatures={feature.features.length}
                    isActive={idx === activeIndex}
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>
            </div>
          ) : isTwoCols ? (
            // Two Columns Layout: Image in first row, Feature infos in second row (2 cols)
            <div className="hidden md:grid">
              {/* Image Row */}
              <div className="relative w-full min-h-[610px] bg-[#131319] flex items-center justify-center overflow-hidden">
                {feature.features[activeIndex].featureImage && (
                  <Image
                    unoptimized
                    src={feature.features[activeIndex].featureImage}
                    alt="feature image"
                    fill
                    className={`bg-[#E5E5E5] ${
                      feature.features[activeIndex].featureImageStyles ?? "object-cover"
                    } object-top`}
                  />
                )}
              </div>

              {/* Feature Info Row - 2 Columns */}
              <div className="grid grid-cols-2">
                {feature.features.map((info, idx) => (
                  <FeatureInfo
                    key={`${info.featureTitle}-${idx}`}
                    featureTitle={info.featureTitle}
                    featureDescription={info.featureDescription}
                    featureLink={info.featureLink}
                    isLast={idx === feature.features.length - 1}
                    isTwoCols={isTwoCols}
                    index={idx}
                    totalFeatures={feature.features.length}
                    isActive={idx === activeIndex}
                    onClick={() => setActiveIndex(idx)}
                    descImage={info.descImage}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Original Layout: Side by side
            <div className={`hidden md:grid md:grid-cols-2`}>
              {invert ? (
                <>
                  {/* Image */}
                  <div className="relative w-full flex items-center justify-center bg-white overflow-hidden">
                    {feature.features[activeIndex].featureImage && (
                      <Image
                        unoptimized
                        src={feature.features[activeIndex].featureImage}
                        alt="feature image"
                        fill
                        className={`bg-[#E5E5E5] ${feature.features[activeIndex].featureImageStyles ?? "object-cover"}`}
                      />
                    )}
                  </div>

                  {/* Feature Info */}
                  <div className="flex flex-col">
                    {feature.features.map((info, idx) => (
                      <FeatureInfo
                        key={info.featureTitle}
                        featureTitle={info.featureTitle}
                        featureDescription={info.featureDescription}
                        featureLink={info.featureLink}
                        isLast={idx === feature.features.length - 1}
                        isTwoCols={isTwoCols}
                        index={idx}
                        totalFeatures={feature.features.length}
                        isActive={idx === activeIndex}
                        onClick={() => setActiveIndex(idx)}
                        isInvert={true}
                        minHeightDesktop={feature.minHeightDesktop}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Feature Info */}
                  <div className="flex flex-col">
                    {feature.features.map((info, idx) => (
                      <FeatureInfo
                        key={info.featureTitle}
                        featureTitle={info.featureTitle}
                        featureDescription={info.featureDescription}
                        featureLink={info.featureLink}
                        isLast={idx === feature.features.length - 1}
                        isTwoCols={false}
                        index={idx}
                        totalFeatures={feature.features.length}
                        isActive={idx === activeIndex}
                        onClick={() => setActiveIndex(idx)}
                        minHeightDesktop={feature.minHeightDesktop}
                      />
                    ))}
                  </div>

                  {/* Image */}
                  <div className="relative w-full flex items-center justify-center bg-white overflow-hidden">
                    <Image
                      unoptimized
                      src={feature.features[activeIndex].featureImage}
                      alt="feature image"
                      fill
                      className={`bg-[#E5E5E5] ${feature.features[activeIndex].featureImageStyles ?? "object-cover"}`}
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
