import parse from "html-react-parser";
import Image from "next/image";

const Articles = async ({ articles }) => {
  return (
    <div className="fy-articles mt-[24px] lg:mt-[72px]">
      <div className="justify-between items-center px-4 md:flex md:px-20 md:mb-4">
        <div className="mb-6 md:mb-0 w-full hidden md:flex justify-end">
          <a
            href="https://fyers.in/media/"
            className="text-[14px] lg:text-[16px] text-[white] font-medium bg-[#182BFF] p-[6px_10px] items-center flex "
          >
            Featured Articles
            <span className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M13.3365 7.84518L6.16435 15.0173L4.98584 13.8388L12.158 6.66667H5.83652V5H15.0032V14.1667H13.3365V7.84518Z"
                  fill="#F0F0FA"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="fy-acwrapper border-t border-[#C8C8CC] px-4 md:px-0">
        <div className="flex flex-wrap lg:flex-nowrap md:px-[40px] lg:px-[72px]">
          {articles.map((value, idx) => (
            <div
              className={`fy-acard border-l border-r border-b border-[#C8C8CC] flex py-10 md:py-6 px-6 w-full
                 ${idx !== 0 ? "lg:border-l-0" : ""}
                `}
              key={`${value.title}-${idx}`}
            >
              <div className="flex gap-4">
                <div className="">{parse(`${value.template_pic}`)}</div>
                <div className="min-h-auto lg:min-h-[280px]  flex flex-col justify-between">
                  <div>
                    <h3 className="font-plus-jakarta text-[#131319] text-[22px] font-semibold leading-[32px] pb-2">
                      {value.title}
                    </h3>
                    <p className="max-w-[336px] text-[14px] lg:text-[16px] text-[#131319] leading-[22px] tracking-[0.16px] lg:my-0">
                      {value.tagline}
                    </p>
                    <p className="text-[14px] lg:text-[16px] text-[#131319] leading-[22px] tracking-[0.16px] lg:my-0">
                      {value.tagline2}
                    </p>
                  </div>
                  {value.additional_image && (
                    <a href="" className="mt-2 lg:mt-0">
                      <Image
                        className="w-[150px] h-[47px] object-cover"
                        width={150}
                        height={47}
                        loading="lazy"
                        src={value.additional_image}
                        alt="The Guardian"
                      />
                    </a>
                  )}
                  <a
                    href={value.button_redirection}
                    className="inline-flex items-center bg-[#E0EBFF] mt-6 lg:mt-0 py-1.5 px-2 font-medium text-[12px] text-[#182BFF] w-fit border border-[#182BFF]"
                  >
                    {value.button_text}
                    <span className="px-1">{parse(`${value.button_icon}`)}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
