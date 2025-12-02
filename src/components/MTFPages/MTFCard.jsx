import ChargesBreakdownTooltip from "./ChargesBreakdownTooltip";
import InterestRateSlabsTooltip from "./InterestRateSlabsTooltip";
import TooltipInfoButton from "../Common/TooltipInfoButton";

export default function MTFCard({
  title,
  data,
  borderColor,
  bgColor,
  textWhite,
  charges,
  bottomLine,
}) {
  return (
    <div
      className={`border-2 rounded-lg min-h-[13rem] flex flex-col justify-between min-w-[17rem] md:min-w-[14rem]`}
      style={{ borderColor }}
    >
      <div className="p-4 flex flex-col gap-3">
        <p className="font-semibold">{title}</p>
        <p className="flex justify-between text-xs">
          <span>Qty</span> <span>{Number.isFinite(data.qty) ? data.qty.toLocaleString("en-IN") : 0}</span>
        </p>
        <p className="flex justify-between text-xs">
          <span>Leverage</span> <span>{data.leverage}x</span>
        </p>
        <p className="flex justify-between text-xs">
          <span>Interest amount</span>{" "}
          <span>₹{data.interestAmount.toLocaleString("en-IN")}</span>
        </p>
        <div className="flex justify-between text-xs">
          <span>
            Interest rate (p.a.)
            {title === "With MTF" && (
              <TooltipInfoButton content={<InterestRateSlabsTooltip />} />
            )}
          </span>{" "}
          <span>
            {data.interestRate}
            {data.interestRate !== "NA" ? "%" : ""}
          </span>
        </div>
        <div className="flex justify-between text-xs">
          <span>
            Charges{" "}
            <TooltipInfoButton
              content={<ChargesBreakdownTooltip data={charges} />}
            />
          </span>{" "}
          <span>₹{data.charges}</span>
        </div>
        <p className="flex justify-between text-xs">
          <span>FYERS funding</span>{" "}
          <span>₹{data.funding.toLocaleString("en-IN")}</span>
        </p>
      </div>
      <div
        className={`text-center py-3 pt-3.5`}
        style={{ background: bgColor, color: textWhite ? "#fff" : "#000" }}
      >
        <p className="text-sm font-semibold">
          {bottomLine != "fundsRequired"
            ? `${bottomLine}: ₹${data.profit.toLocaleString("en-IN")}`
            : `Net Profit: -`}
        </p>
        <p className="text-xs pt-2.5">
          {bottomLine != "fundsRequired" ? `ROI: ${data.roi}%` : `ROI: -`}
        </p>
      </div>
    </div>
  );
}
