import Image from "next/image";

const Carousel = ({ slide, lastSlide }) => {
  return (
    <div
      className={`fy-pro-card border-r border-l border-[#C8C8CC] flex-shrink-0
    w-[87%] sm:w-[70%] md:w-[65%] 
    ${lastSlide ? "mr-8" : ""}`}
    >
      <div className="p-4 md:p-6 min-h-[230px] md:min-h-[154px] flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]">
              {slide.picture}
            </div>
            <h2 className="text-[14px] md:text-[20px] font-semibold font-plus text-[#131319] leading-[20px] md:leading-[24px]">
              {slide.name}
            </h2>
          </div>
          <p className="text-[12px] md:text-[14px] leading-[16px] md:leading-[19px] lg:leading-[22px] text-[#020536] mt-2 md:max-w-[420px]">
            {slide.description}
          </p>
        </div>
        {slide.button_present && (
          <a
            href={slide.redirection}
            className="ml-2 flex items-center self-end whitespace-nowrap bg-[#E0EBFF] py-1.5 px-2 text-[#182BFF] text-[14px] w-fit border border-[#182BFF]"
          >
            {slide.button_text}
            <span className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.16667 9.16663V4.16663H10.8333V9.16663H15.8333V10.8333H10.8333V15.8333H9.16667V10.8333H4.16667V9.16663H9.16667Z"
                  fill="#182BFF"
                />
              </svg>
            </span>
          </a>
        )}
      </div>
      <Image
        unoptimized
        src={slide.carousel_image}
        width={400}
        height={300}
        className="w-full h-auto object-cover"
        alt={slide.name}
      />
    </div>
  );
};

export default Carousel;
