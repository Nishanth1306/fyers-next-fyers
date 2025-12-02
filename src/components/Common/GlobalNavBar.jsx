"use client";
import { useState } from "react";
import NoResultFound from "./NoResultFound";

export default function GlobalNavbar({ isOpen, onClose, globalNavBar }) {
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(globalNavBar)[0]
  );
  const [filteredNav, setFilteredNav] = useState(globalNavBar);
  const [noResult, setNoResult] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    document.querySelector(`[data-category="${category}"]`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    if (!value) {
      setFilteredNav(globalNavBar);
      return;
    }

    const filtered = {};
    for (const [category, items] of Object.entries(globalNavBar)) {
      const matched = items.filter(
        (item) =>
          item.name.toLowerCase().includes(value) ||
          item.tag_line.toLowerCase().includes(value)
      );
      if (matched.length) {
        setNoResult(false);
        filtered[category] = matched;
      }else{
        setNoResult(true);
      }
    }
    setFilteredNav(filtered);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-start pt-10">
      <div className="bg-white max-w-[1280px] w-full h-[90vh] overflow-hidden rounded-lg flex flex-col">
        <div className="flex ">
          <div className="w-1/5 border-r border-gray-200"></div>
          <div className="flex-1 p-6 flex justify-between items-center">
            <input
              type="search"
              placeholder="Search here..."
              className="bg-[url('https://assets.fyers.in/images/global-header/search-product-icon.svg')] bg-no-repeat bg-[3%_50%] pl-10 pr-4 py-2 text-sm border border-gray-300 rounded w-full max-w-sm"
              onChange={handleSearch}
            />
            <div className="flex items-center gap-4 mr-2">
              <a
                href="https://forms.fyers.in/fyers/form/FYERSProductFeedback/formperma/ZiaB9_3-KvEZZdnyxaY6d6LNb5vlmzYL8Ta3KcsV4xI"
                target="_blank"
                rel="noopener"
                className="border border-[#eaebed] rounded-full px-2 py-1 text-xs flex items-center gap-1 hover:bg-[#ecf0fe] hover:border-[#ecf0fe]"
              >
                <img
                  src="https://assets.fyers.in/images/global-header/feedback.svg"
                  alt="feedback"
                  className="w-5 h-5"
                />
                Request Feature/Support
              </a>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/5 border-r border-gray-200 p-0 overflow-y-auto no-scrollbar">
            <ul className="list-none m-0 p-0">
              {Object.keys(globalNavBar).map((cat) => (
                <li
                  key={cat}
                  className={`cursor-pointer py-4 px-2 font-medium my-2 ml-3 ${
                    activeCategory === cat
                      ? "bg-[#ecf0fe] border-r-4 border-[#436af5] text-[#436af5]"
                      : "text-[#2a394e]"
                  }`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {Object.entries(filteredNav).map(([category, items]) => (
              <div key={category} data-category={category}>
                <h3 className="bg-gradient-to-l from-transparent to-[#F2F1FF] rounded-md font-medium text-[18px] text-[#2A394E] leading-[27px] p-4 max-w-[50%]">
                  {category}
                </h3>
                <div className="flex flex-wrap mt-4">
                  {items.map((item, idx) => (
                    <div key={idx} className="w-1/4 p-2 mt-4">
                      <a
                        href={item.redirect_url}
                        className="block no-underline hover:text-[#436af5]"
                      >
                        <div className="flex">
                          <div className="bg-[#f9f9fa] rounded-lg w-[41px] h-[41px] flex items-center justify-center">
                            <img
                              src={item.logo_url}
                              alt={item.name}
                              className="h-[41px] w-[41px]"
                            />
                          </div>
                          <div className="ml-2 group">
                            <span className="flex items-center">
                              <h6 className="m-0 font-medium text-[0.9rem] text-[#2a394e]">
                                {item.name}
                              </h6>
                              <img
                                src="https://assets.fyers.in/marketing_website/calculator_icon/arrow.svg"
                                alt="arrow"
                                className="ml-2 invisible group-hover:visible"
                              />
                            </span>
                            <p className="text-[13px] font-normal mt-1 mb-4 text-gray-500 ">
                              {item.tag_line}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}

                  {items.some((i) => i.product_type === "viewmore") && (
                    <div className="w-1/4 p-2">
                      <a
                        href="https://fyers.in/calculators.php"
                        className="flex flex-row-reverse items-center gap-2"
                      >
                        <img
                          src="https://assets.fyers.in/images/website/icon-link-next.svg"
                          alt="arrow"
                        />
                        <h6 className="m-0">View more</h6>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {noResult && (
              <NoResultFound />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
