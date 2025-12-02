const MtfFilters = ({ onSearch, stockRef, fundsRef }) => {
  return (
    <div className="flex justify-between w-full md:mt-10 flex-wrap gap-4 max-w-[1140px] my-0 mx-auto">
      <div className="flex flex-col text-center w-full md:w-[48%] min-w-[200px]">
        <label
          htmlFor="stock"
          className="text-[#6a7483] text-[1.3125rem] font-semibold"
        >
          Search for a stock
        </label>
        <input
          ref={stockRef}
          id="stock"
          type="search"
          placeholder="Eg: TCS"
          className="w-full h-[2.625rem] px-3 mt-4 border border-[#ced4da] rounded-md focus:outline-none focus:border-[#436af5]"
          onInput={onSearch}
        />
      </div>
      <div className="flex flex-col text-center w-full md:w-[48%] min-w-[200px]">
        <label
          htmlFor="funds"
          className="text-[#6a7483] text-[1.3125rem] font-semibold"
        >
          Funds available
        </label>
        <input
          ref={fundsRef}
          id="funds"
          type="search"
          placeholder="Eg: 100000"
          className="w-full h-[2.625rem] px-3 mt-4 border border-[#ced4da] rounded-md focus:outline-none focus:border-[#436af5]"
          onInput={onSearch}
        />
      </div>
    </div>
  );
};

export default MtfFilters;
