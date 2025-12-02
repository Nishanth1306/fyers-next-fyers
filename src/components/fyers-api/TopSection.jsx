
export default function TopSection() {
  return (
    <div className="relative bg-black w-full max-w-[1440px] h-[906px] pt-[96px] pb-[200px] px-[72px] mx-auto overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <img
          src="/images/fyers-api.jpg"
          alt="Trading setup background"
          className="object-cover w-full max-w-[1440px] h-[886px] opacity-100 rotate-0"
        />

        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-[1033px] flex flex-col gap-[14px]">
          <h1 className="text-white font-plus-jakarta font-semibold text-[80px] leading-[88px] tracking-[-0.96px] w-[1020px] h-[264px]">
            Integrate. Automate.
            <br />
            Trade smarter
            <br />
            with <span className="text-white">FYERS API</span>.
          </h1>

          <p className="text-gray-300 font-manrope text-[18px] leading-[26px] w-[762px] h-[26px]">
            Start Algo trading or integrate with third-party platforms using FYERS API, for absolutely free.
          </p>

          <div className="flex flex-col gap-[16px] w-[321px] h-[80px]">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-[16px] transition-all duration-300 hover:scale-105 w-[284px] h-[48px]">
              <img src="/images/Fyers-ONE.svg" alt="Icon" className="w-[24px] h-[24px]" />
              Integrate with FYERS API
            </button>

            <p className="text-[#F2F4FB] font-manrope text-[12px] leading-[16px] w-[321px] h-[16px]">
              Not a FYERS User <span className="text-yellow-500">Sign up</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600"></div>
    </div>
  );
}
