export default function SalesPitch() {
  return (
    <div className="bg-[url('https://assets.fyers.in/Blog/sales-bk.svg')] bg-no-repeat bg-left-bottom bg-cover md:min-h-[254px] py-7 md:py-16.5 mt-14 md:mt-30">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap">
          {/* Left content */}
          <div>
            <h3 className="text-[#2a394e] text-[40px] font-bold leading-[48px] mb-4">Ready to Trade More?</h3>
            <p className="text-[#6a7582] text-[19px] font-medium leading-[23px] m-0">
              Use FYERS MTF and enjoy 4X more buying power.
            </p>
          </div>

          {/* Right button */}
          <div>
            <a
              href="#"
              className="rounded-[2px] bg-[#436af5] text-white text-[16px] font-medium leading-[13px] px-4 h-12 flex items-center justify-center hover:bg-[#3654c9] transition-colors duration-200 mt-3 md:m-0"
            >
              Get Started with MTF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
