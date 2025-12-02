export default function ChargesBreakdownTooltip({ data = {} }) {
  return (
    <div>
      <h4 className="font-semibold mb-2">Charges Breakdown</h4>
      <ul className="space-y-1">
        <li className="flex justify-between">
          <span>STT</span>
          <span>{data.stt}</span>
        </li>
        <li className="flex justify-between">
          <span>Brokerage</span>
          <span>{data.brokerage}</span>
        </li>
        <li className="flex justify-between">
          <span>Exchange transaction</span>
          <span>{data.exchange}</span>
        </li>
        <li className="flex justify-between">
          <span>GST</span>
          <span>{data.gst}</span>
        </li>
        <li className="flex justify-between">
          <span>SEBI charges</span>
          <span>{data.sebi}</span>
        </li>
        <li className="flex justify-between">
          <span>Stamp duty</span>
          <span>{data.stamp}</span>
        </li>
        <li className="flex justify-between">
          <span>Pledge</span>
          <span>{data.pledge}</span>
        </li>
        <li className="flex justify-between">
          <span>Unpledge</span>
          <span>{data.unPledge}</span>
        </li>
        <li className="flex justify-between">
          <span>Total Charges</span>
          <span>{data.total}</span>
        </li>
      </ul>
    </div>
  );
}
