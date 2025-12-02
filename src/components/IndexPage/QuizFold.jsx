import Image from "next/image";
import Button from "../Common/Button";

const QuizFold = () => {
  return (
    <>
      {/* Desktop fold */}
      <div className="hidden bg-[#DEDEDE] relative md:flex">
        <div className="flex flex-col">
          <div className="quiz__person flex-shrink-0">
            <Image
              unoptimized
              src={"https://assets.fyers.in/Marcom_Avatar/Images/home-man.webp"}
              width={507}
              height={279}
              alt="Quiz Person Image"
            />
          </div>
          <div className="min-h-[48px] border-r border-[#828282]"></div>
          <div className="border-t bottom-[14.5%] w-full absolute border-[#828282]"></div>
        </div>
        <div className="flex-1 flex flex-col pl-[48px] justify-center">
          <div className="max-w-max px-[24px]">
            <h2 className="text-[#131319] text-[48px] not-italic font-[700] leading-[56px] tracking-[-0.64px] font-plus-jakarta">
              Are you <span className="text-[#182BFF]">Born To Trade?</span>
            </h2>
            <div className="text-[20px] mt-[16px] text-[#131319] font-manrope not-italic font-[500] leading-[26px] tracking-[-0.32px]">
              Take the quiz and find out!*
            </div>
            <Button
              text={"Go to Quiz"}
              className="bg-[#182BFF] py-[8px] px-[14px] flex items-center justify-center text-[#F0F0FA] mt-[24px] w-fit"
              href="https://borntotrade.in?utm_source=fyers_home"
            />
            <div className="font-manrope text-[14px] font-[400] not-italic leading-[22px] tracking-[-0.16px] text-[#131319] mt-[24px]">
              *This is for educational purposes only.
            </div>
          </div>
        </div>
      </div>
      {/* mobile fold  */}
      <div className="flex flex-col md:hidden quiz__person_mobile bg-[#DEDEDE] mt-[36px] relative">
        <Image
          unoptimized
          src={"https://assets.fyers.in/Marcom_Avatar/Images/home-man.webp"}
          width={412}
          height={234}
          alt="Quiz Person Image"
          className=""
        />
        <div className="w-[1px] min-h-[100%]  absolute right-[10%] top-0 bg-[#828282]"></div>
        <div className="p-[24px] border-t border-[#828282]">
          <h2 className="text-[#131319] text-[24px] not-italic font-[700] leading-[32px] tracking-[-0.1px] font-plus-jakarta">
            Are you <span className="text-[#182BFF]">Born To Trade?</span>
          </h2>
          <div className="text-[14px] mt-[4px] text-[#131319] font-manrope not-italic font-[500] leading-[26px] tracking-[-0.32px]">
            Take the quiz and find out!*
          </div>
          <Button
            text={"Play Now"}
            className="bg-[#182BFF] py-[6px] px-[14px] flex items-center justify-center text-[#F0F0FA] mt-[24px] w-fit"
          />
          <div className="font-manrope text-[12px] font-[400] not-italic leading-[16px] text-[#131319] mt-[8px]">
            *This is for educational purposes only.
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizFold;
