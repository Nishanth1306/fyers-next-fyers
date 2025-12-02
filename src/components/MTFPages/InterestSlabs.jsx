export default function InterestSlabs({ interestRates = [] }) {
  return (
    <div className="max-w-[1024px] mx-auto mt-14 md:mt-[7.5rem] px-3">
      <h2 className="text-center text-[#2a394e] leading-[48px] text-[28px] md:text-[48px] font-bold mb-3 md:mb-6">
        Interest Rate Slabs
      </h2>
      <p className="text-[#6a7483] text-[16px] text-center mb-8 md:mb-6">
        Interest rates that go down as you buy more stocks
      </p>
      <table className="border-collapse md:w-[560px] mx-auto mt-8 md:mt-14">
        <thead>
          <tr>
            <th className="border-t border-b border-[#dfe2e6] bg-[#e4ddff] p-[18px_26px] text-[#2a394e] text-[16px] font-semibold min-w-[14.3rem] md:min-w-0">
              Funded amount
            </th>
            <th className="border-t border-b border-[#dfe2e6] bg-[#e4ddff] p-[18px_26px] text-[#2a394e] text-[16px] font-semibold">
              Interest rate (p.a.)
            </th>
          </tr>
        </thead>
        <tbody>
          {interestRates.map((interest, idx) => (
            <tr
              key={idx}
              className={`${
                idx % 2 === 0 ? "bg-[#fbfbfe]" : ""
              } border-b border-[#dfe2e6]`}
            >
              <td className="p-[16px_26px] text-[#2a394e] text-[16px] font-normal">
                {interest.funded_amount_range}
              </td>
              <td className="p-[16px_26px] font-medium">
                {interest.interest_rate_percent_per_annum}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
