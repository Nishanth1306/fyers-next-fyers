export default function ContactTable({ contactData }) {
  // Create a mapping of row keys based on number of headers
  const getRowValue = (row, index) => {
    const keys = Object.keys(row);
    return row[keys[index]] || "";
  };

  return (
    <div className="flex flex-col items-start self-stretch overflow-x-auto">
      <div className="flex flex-col items-start w-full" style={{ minWidth: "1200px" }}>
        {/* Headers */}
        <div className="flex flex-col items-start w-full border-y border-[#C8C8CC]">
          <div className="flex items-start content-start w-full px-[20px] md:px-10 lg:px-[80px] custom-container">
            {contactData.headers.map((header, index) => (
              <div
                key={header.label}
                style={{ width: `${100 / contactData.headers.length}%` }}
                className={`flex h-[64px] md:h-[112px] p-[24px] items-center gap-[8px] border-l border-[#C8C8CC] ${
                  index === contactData.headers.length - 1 ? "border-r" : ""
                }`}
              >
                <p className="font-plus-jakarta text-[16px] md:text-[22px] font-semibold leading-[24px] md:leading-[32px] -tracking-[0.32px]">
                  {header.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col items-start w-full">
          {contactData.rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-start content-start w-full border-b border-[#C8C8CC]">
              <div className="flex items-stretch content-start w-full px-[20px] md:px-10 lg:px-[80px] custom-container flex-1">
                {contactData.headers.map((header, colIndex) => (
                  <div
                    key={colIndex}
                    style={{ width: `${100 / contactData.headers.length}%` }}
                    className={`flex p-[24px] items-center gap-[8px] border-l border-[#C8C8CC] ${
                      colIndex === contactData.headers.length - 1 ? "border-r" : ""
                    }`}
                  >
                    <p className="flex-[1_0_0] text-[#131319] font-manrope text-[16px] font-normal leading-[22px]">
                      {getRowValue(row, colIndex)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
