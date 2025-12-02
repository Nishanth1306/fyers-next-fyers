import Select from "react-select";

export default function MTFForm({
  inputs,
  setInputs,
  stockList,
  stocks,
  initialInputs,
}) {
  const handleChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleStockChange = (selected) => {
    const foundStock = stocks.find((s) => s.ex_sym === selected.value);
    setInputs((prev) => ({
      ...prev,
      stockName: foundStock
        ? { value: foundStock.ex_sym, label: foundStock.ex_sym }
        : { value: "", label: "" },
      stockPrice: foundStock?.lp || "",
    }));
  };

  return (
    <div className="w-full md:w-[42%] md:pt-[1.88rem]">
      <div className="text-[#2a394e] font-semibold mb-5 md:mb-[26px] text-[16px]">
        Enter Details
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col relative ">
          <label
            className="absolute -top-[22%] left-[4%] text-xs bg-white text-[#2a394e] z-1"
            htmlFor="react-select-stockName-input"
          >
            Stock Name
          </label>
          <Select
            options={stockList}
            onChange={handleStockChange}
            value={inputs.stockName}
            placeholder="Select a stock"
            instanceId="stockName"
            id="stockName"
          />
        </div>
        <div className="flex flex-col relative">
          <label
            className="absolute -top-[22%] left-[4%] text-xs bg-white text-[#2a394e]"
            htmlFor="stockPrice"
          >
            Stock Price (₹)
          </label>
          <input
            type="text"
            value={inputs.stockPrice}
            onChange={(e) => {
              let value = e.target.value;
              if (value.startsWith("-")) return;
              if (/^\d*\.?\d*$/.test(value)) {
                handleChange("stockPrice", value);
              }
            }}
            onBlur={() => {
              let value = Number(inputs.stockPrice);
              if (value <= 0) value = 0;
              handleChange("stockPrice", value);
            }}
            className="p-3 border border-[#cacacb] rounded-sm"
            id="stockPrice"
          />
        </div>
        <div className="flex flex-col relative">
          <label
            className="absolute -top-[22%] left-[4%] text-xs bg-white text-[#2a394e]"
            htmlFor="investment"
          >
            Investment Amt (₹)
          </label>
          <input
            type="number"
            id="investment"
            value={inputs.investment}
            onChange={(e) => {
              let value = Number(e.target.value);
              if (value < 0) value = 0; 
              value = Math.min(value, 100000000); 
              handleChange("investment", value);
            }}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") e.preventDefault(); 
            }}
            className="p-3 border border-[#cacacb] rounded-sm"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            className="absolute -top-[22%] left-[4%] text-xs bg-white text-[#2a394e]"
            htmlFor="holdingPrice"
          >
            Holding Period (Days)
          </label>
          <input
            type="number"
            id="holdingPrice"
            value={inputs.holdingPeriod}
            onChange={(e) => {
              let value = Number(e.target.value);
              if (value < 0) value = 0; 
              value = Math.min(value, 1000);
              handleChange("holdingPeriod", value);
            }}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") e.preventDefault();
            }}
            className="p-3 border border-[#cacacb] rounded-sm"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            className="absolute -top-[22%] left-[4%] text-xs bg-white text-[#2a394e]"
            htmlFor="expectedReturns"
          >
            Expected Returns (%)
          </label>
          <input
            type="number"
            value={inputs.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
            className="p-3 border border-[#cacacb] rounded-sm"
            id="expectedReturns"
          />
        </div>
        <button
          onClick={() => setInputs(initialInputs)}
          className="text-[#436af5] border border-[#436af5] p-2 rounded-sm w-[35%]"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
