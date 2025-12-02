const InterestRateSlabsTooltip = () => {
  return (
    <div>
      <div className="font-semibold mb-2">Interest Rate Slabs</div>
      <ul className="space-y-1">
        <li className="flex justify-between">
          <span>0%</span>
          <span>₹1 – ₹1,000</span>
        </li>
        <li className="flex justify-between">
          <span>16.49%</span>
          <span>₹1,001 – ₹1 Lakh</span>
        </li>
        <li className="flex justify-between">
          <span>15.49%</span>
          <span>₹1 Lakh – ₹10 Lakhs</span>
        </li>
        <li className="flex justify-between">
          <span>14.49%</span>
          <span>₹10 Lakhs – ₹25 Lakhs</span>
        </li>
        <li className="flex justify-between">
          <span>12.49%</span>
          <span>₹25 Lakhs – ₹50 Lakhs</span>
        </li>
      </ul>
    </div>
  );
};

export default InterestRateSlabsTooltip;
