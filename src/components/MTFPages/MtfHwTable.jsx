export default function MtfHwTable() {
  return (
    <div className="max-w-[1024px] mx-auto mt-14 md:mt-[7.5rem]  px-3">
      <h2 className="text-center text-[#2a394e] leading-[48px] text-[24px] md:text-[48px] font-bold mb-8 md:mb-14">
        Example of How MTF Works
      </h2>

      <table className="border-collapse table-fixed w-full max-w-[1024px] mx-auto">
        <thead>
          <tr>
            <th className="p-4 w-1/3 py-4.5"></th>
            <th className="p-4 w-1/3 py-4.5">Without MTF</th>
            <th className="p-4 w-1/3 bg-[#f4f1ff] py-4.5">With MTF</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#dfe2e6]">
            <td className="p-4">You invest</td>
            <td className="p-4">₹25,000</td>
            <td className="p-4 bg-[#f4f1ff]">₹25,000</td>
          </tr>
          <tr className="border-b border-[#dfe2e6]">
            <td className="p-4">FYERS funds</td>
            <td className="p-4">NIL</td>
            <td className="p-4 bg-[#f4f1ff]">₹75,000</td>
          </tr>
          <tr className="border-b border-[#dfe2e6]">
            <td className="p-4">Stock price</td>
            <td className="p-4">₹2,500</td>
            <td className="p-4 bg-[#f4f1ff]">₹2,500</td>
          </tr>
          <tr className="border-b border-[#dfe2e6]">
            <td className="p-4">Qty you can buy</td>
            <td className="p-4">10 shares</td>
            <td className="p-4 bg-[#f4f1ff]">40 shares</td>
          </tr>
          <tr className="border-b border-[#dfe2e6]">
            <td className="p-4">Returns @ 10%</td>
            <td className="p-4">₹2,500</td>
            <td className="p-4 bg-[#f4f1ff]">₹10,000</td>
          </tr>
          <tr className="border-b border-[#dfe2e6] font-bold text-[20px] leading-[16px]">
            <td className="p-4">ROI</td>
            <td className="p-4">10%</td>
            <td className="p-4 bg-[#f4f1ff] md:flex">
              <p>40%</p>
              <span className="bg-[#449c47] text-white rounded-full overflow-hidden text-[8px] md:text-[10px] font-semibold leading-[11px] px-1.5 md:px-2 py-1 md:ml-2">
                30% more returns
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-3 md:mt-6 text-[12px] font-normal text-[#6a7483] bg-[#f4f5f6] flex items-center p-2 pt-1 md:pt-2 rounded max-w-[1024px] mx-auto">
        <span className="pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7.12798 5.12023C6.9159 5.12023 6.74398 4.94831 6.74398 4.73623C6.74398 4.52415 6.9159 4.35223 7.12798 4.35223H7.14334C7.35541 4.35223 7.52734 4.52415 7.52734 4.73623C7.52734 4.94831 7.35541 5.12023 7.14334 5.12023H7.12798Z"
              fill="#6A7483"
            />
            <path
              d="M7.51198 10.1122C7.51198 10.3243 7.34005 10.4962 7.12798 10.4962C6.9159 10.4962 6.74398 10.3243 6.74398 10.1122V7.04023C6.74398 6.82815 6.9159 6.65623 7.12798 6.65623C7.34005 6.65623 7.51198 6.82815 7.51198 7.04023V10.1122Z"
              fill="#6A7483"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.4 7.16831C13.4 10.6883 10.52 13.5683 6.99998 13.5683C3.47998 13.5683 0.599976 10.6883 0.599976 7.16831C0.599976 3.64831 3.47998 0.768311 6.99998 0.768311C10.52 0.768311 13.4 3.64831 13.4 7.16831ZM12.4857 7.16831C12.4857 10.1834 10.015 12.654 6.99998 12.654C3.98492 12.654 1.51426 10.1834 1.51426 7.16831C1.51426 4.15326 3.98492 1.6826 6.99998 1.6826C10.015 1.6826 12.4857 4.15326 12.4857 7.16831Z"
              fill="#6A7483"
            />
          </svg>
        </span>
        Return on Investment (ROI) may change after applying charges and
        interest.
      </div>
    </div>
  );
}
