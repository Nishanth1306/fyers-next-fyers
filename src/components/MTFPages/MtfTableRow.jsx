export default function MtfTableRow({ row, getRedirectURL }) {
  return (
    <tr className="border-b border-[#dfe2e6] hover:bg-[#f9f9ff] group text-[#6a7582]">
      <td className="sticky left-0 bg-white px-6 py-3">{row.ex_sym}</td>
      <td className="px-6 py-3 text-right">₹{row.lp}</td>
      <td className="px-6 py-3">{row.margin}x</td>
      <td className="px-6 py-3 text-right">{row.qty_without_mtf}</td>
      <td className="px-6 py-3 text-right">{row.qty_with_mtf}</td>
      <td className="px-6 py-3 flex justify-center">
        <button
          onClick={() =>
            window.open(getRedirectURL("Buy", row.symbol), "_blank", "noopener")
          }
          className="inline-flex min-w-[10.5rem] cursor-pointer items-center px-3 py-1.5 bg-[#436af5] text-white text-sm font-semibold border rounded-sm border-[#436af5] hover:opacity-90 md:invisible group-hover:visible"
        >
          Trade Now, pay later
        </button>
      </td>
    </tr>
  );
}
