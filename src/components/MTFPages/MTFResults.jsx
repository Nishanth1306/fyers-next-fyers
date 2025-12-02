import { getCookie } from "@/utils/browserHelper";
import MTFCard from "./MTFCard";
import MTFProgressBar from "./MTFProgressBar";

export default function MTFResults({ inputs, results, bottomLine }) {
  const colorMap = {
    NetProfit: "#299e47", // profit (green)
    fundsRequired: "#cecece", // insufficient funds (gray)
    Loss: "#f00", // loss (red)
  };
  const key =
    bottomLine === "Net Profit"
      ? "NetProfit"
      : bottomLine === "fundsRequired"
      ? "fundsRequired"
      : "Loss";

  const color = colorMap[key];

  const handleRedirection = () => {
    const symbolName = inputs["stockSymbol"] || "";
    const url = getCookie("_FYERS")
      ? `https://trade.fyers.in/?funcName=orderWindowBuy&symbolName=${symbolName}`
      : "https://signup.fyers.in/?utm_source=product&utm_subsource=mtf_margin_calc";
    window.open(url);
  };
  return (
    <div className="bg-[#fbfefc] flex flex-col md:items-center gap-2 md:gap-3 px-4 md:px-0 mt-6 md:mt-0 w-full md:w-[60%] md:ml-8 pt-7 md:pt-[1.88rem]">
      <p className="text-[#2a394e] text-xs font-semibold pt-5 md:pt-0 self-center">
        Total Investment with MTF: ₹{" "}
        {results.totalInvestment.toLocaleString("en-IN")}
      </p>
      <MTFProgressBar
        funding={results.withMTF?.funding}
        total={results.totalInvestment}
        bottomLine={bottomLine}
      />

      <div className="flex flex-col md:flex-row md:items-center  md:justify-center gap-4 text-xs my-3 md:my-0">
        <div className="flex items-center gap-1">
          <svg width="10" height="10">
            <circle cx="5" cy="5" r="5" fill="#CECECE" />
          </svg>
          You pay: ₹ {inputs.investment.toLocaleString("en-IN")}
        </div>
        <div className="flex items-center gap-1">
          <svg width="10" height="10">
            <circle cx="5" cy="5" r="5" fill="#299E47" />
          </svg>
          FYERS funding: ₹ {results.withMTF?.funding.toLocaleString("en-IN")}
        </div>
      </div>
      <p className="text-[16px] md:hidden font-semibold font-[#2A394E]">
        Summary
      </p>
      <div className="flex flex-col md:flex-row gap-5.5 md:gap-4 mt-4 md:mt-5">
        <MTFCard
          title="Without MTF"
          data={results.withoutMTF}
          borderColor="#cecece"
          bgColor="#cecece"
          charges={results.withoutMTF.chargesData}
          bottomLine={bottomLine}
        />
        <MTFCard
          title="With MTF"
          data={results.withMTF}
          borderColor={color }
          bgColor={color}
          textWhite={bottomLine !== "fundsRequired"}
          charges={results.withMTF.chargesData}
          bottomLine={bottomLine}
        />
      </div>

      <button
        className="mt-5 px-4 py-2 bg-[#436af4] text-white rounded-sm md:min-w-[17.375rem]"
        onClick={handleRedirection}
      >
        Buy {results.withMTF?.qty} Qty
      </button>
    </div>
  );
}
