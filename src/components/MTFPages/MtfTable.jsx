import NoResultFound from "../Common/NoResultFound";
import MtfTableRow from "./MtfTableRow";

export default function MtfTable({
  headings,
  tableData,
  sortStates,
  onSort,
  getRedirectURL,
  hasError,
}) {
  return (
    <div className="overflow-x-auto w-full max-w-[1140px] min-h-[75vh] my-0 mx-auto mt-6">
      <table className="border-collapse w-full min-w-[600px]">
        <thead className="bg-[#e3ddff]">
          <tr className="text-[#2a394e]">
            {headings.map((heading) => (
              <th
                key={heading.sortName || heading.name}
                className={`px-6 py-3 font-semibold cursor-pointer ${
                  heading.align
                } 
                  ${heading.sticky ? "sticky left-0 bg-[#e3ddff]" : ""} 
                  ${
                    heading.name
                      ? "bg-no-repeat bg-right bg-[url('https://assets.fyers.in/images/website/haircut/icon-sort.svg')]"
                      : ""
                  } 
                  ${
                    sortStates[heading.sortName] === "asc" &&
                    "!bg-[url('https://assets.fyers.in/images/pledge/icon-sort-up.svg')]"
                  }
                  ${
                    sortStates[heading.sortName] === "des" &&
                    "!bg-[url('https://assets.fyers.in/images/pledge/icon-sort-down.svg')]"
                  }
                `}
                onClick={() => onSort(heading.sortName)}
              >
                {heading.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((row, idx) => (
              <MtfTableRow
                key={idx}
                row={row}
                getRedirectURL={getRedirectURL}
              />
            ))
          ) : (
            <tr>
              <td colSpan={6} className="py-8 text-center">
                {hasError ? (
                  <NoResultFound />
                ) : (
                  "Loading..."
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
