import { contactData } from "@/data/contact-us";

export default function TableSection({ data = contactData }) {
  return (
    <div className="px-4 md:px-[80px]">
      <div className="w-full overflow-x-auto border-l border-r mb-[32px] border-[#C8C8CC]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="w-full border-t border-b border-[#C8C8CC]">
              {data.headers.map((header, index) => (
                <th
                  key={index}
                  className="font-plus-jakarta text-[22px] text-left p-[24px] font-semibold text-sm text-gray-900 border-r border-[#C8C8CC] last:border-r-0"
                >
                  <div className="flex items-center gap-2 whitespace-nowrap">{header.label}</div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="w-[full] border-b border-gray-200">
                <td className="p-[24px] border-r border-gray-200 ">
                  <div className="font-manrope font-medium text-[16px] border-[#C8C8CC] text-gray-900 whitespace-nowrap">{row.details}</div>
                </td>
                <td className="font-manrope p-[24px] border-r border-[#C8C8CC] text-[16px] text-gray-900 whitespace-nowrap">{row.contactPerson}</td>
                <td className="font-manrope p-[24px] border-r border-[#C8C8CC] text-[16px] text-gray-900">{row.email}</td>
                {row.address && (
                  <td className="font-manrope p-[24px] border-r border-[#C8C8CC] text-[16px] text-gray-900 max-w-xs">
                    {row.address}
                  </td>
                )}
                <td className="font-manrope p-[24px] border-r border-[#C8C8CC] text-[16px] text-gray-900">{row.contactNo}</td>
                {row.workingHours && (
                  <td className="font-manrope p-[24px] text-[16px] text-gray-900">{row.workingHours}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
