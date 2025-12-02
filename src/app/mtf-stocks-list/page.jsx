"use client";
import MtfTabs from "@/components/MTFPages/MtfTabs";
import MtfFilters from "@/components/MTFPages/MtfFilters";
import MtfTable from "@/components/MTFPages/MtfTable";
import { detectDeviceClient } from "@/utils/browserHelper";
import axios from "axios";
import { useEffect, useState, useRef, useCallback } from "react";
import { useUser } from "@/contexts/UserContext";
import { NEXT_PUBLIC_API_BASE } from "@/utils/constants";

export default function MtfLists() {
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortStates, setSortStates] = useState({});
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasError, setHasError] = useState(false);

  const stockRef = useRef();
  const fundsRef = useRef();
  const scrollTimeout = useRef();
  const containerRef = useRef();

  const API_BASE = NEXT_PUBLIC_API_BASE;

  const tableHeadings = [
    { name: "Symbol", sortName: "symbol", align: "text-left", sticky: true },
    { name: "LTP", sortName: "ltp", align: "text-right" },
    { name: "Leverage", sortName: "margin", align: "text-left" },
    { name: "Qty without MTF", sortName: "nonmtfqty", align: "text-right" },
    { name: "Qty with MTF", sortName: "mtfqty", align: "text-right" },
    { name: "", sortName: "", align: "" },
  ];

  const userData = useUser();

  const getRedirectURL = (orderType, scripName) => {
    const deviceType = detectDeviceClient();
    if (deviceType === "mobile" || deviceType === "tablet") {
      return "https://fyers.onelink.me/cj1P/kt4s25n0";
    }
    if (userData.userLoggedIn) {
      return `https://trade.fyers.in/?funcName=orderWindow${orderType}&symbolName=${scripName}&prodType=MTF`;
    }
    return "https://signup.fyers.in/?utm_source=product&utm_subsource=mtf_margin_calc";
  };

  const fetchMtfLists = async ({
    page = 1,
    sortBy,
    sortType,
    searchKey,
    amount,
    isAppend = false,
  } = {}) => {
    try {
      setHasError(false);
      const apiUrl = `${API_BASE}/indus/v1/watchlist/get_mtf_scripts?${
        page ? `&page=${page}` : ""
      }${sortBy ? `&sort_by=${sortBy}` : ""}${
        sortType ? `&sort_type=${sortType}` : ""
      }${searchKey ? `&search=${searchKey}` : ""}${
        amount ? `&amount=${amount}` : ""
      }`;

      const response = await axios.get(apiUrl);
      if (response.status === 200 && response.data?.code === 200 && response.data?.data) {
        const mtfDatas = response.data.data;
        setTotalPages(Math.ceil(response.data.query_count / 50));
        setTableData((prev) => (isAppend ? [...prev, ...mtfDatas] : mtfDatas));
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    }
  };

  const handleSort = (col) => {
    if (!col) return;
    let newSortType = "asc";
    if (sortStates[col] === "asc") newSortType = "des";
    else if (sortStates[col] === "des") newSortType = "asc";

    setSortStates({ [col]: newSortType });
    setPage(1);
    fetchMtfLists({
      page: 1,
      sortBy: col,
      sortType: newSortType,
      searchKey: stockRef.current?.value,
      amount: fundsRef.current?.value,
    });
  };

  let searchTimeout;
  const handleSearch = () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      setPage(1);
      fetchMtfLists({
        page: 1,
        sortBy: Object.keys(sortStates)[0],
        sortType: sortStates[Object.keys(sortStates)[0]],
        searchKey: stockRef.current?.value,
        amount: fundsRef.current?.value,
      });
    }, 500);
  };

  const handleScroll = useCallback(() => {
    if (loadingMore || page >= totalPages || hasError || !containerRef.current)
      return;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      const container = containerRef.current;
      if (
        container.getBoundingClientRect().bottom <=
        window.innerHeight + 500
      ) {
        setLoadingMore(true);
        const sortBy = Object.keys(sortStates)[0];
        const sortType = sortStates[sortBy];
        const searchKey = stockRef.current?.value;
        const amount = fundsRef.current?.value;
        const nextPage = page + 1;
        setPage(nextPage);
        fetchMtfLists({
          page: nextPage,
          sortBy,
          sortType,
          searchKey,
          amount,
          isAppend: true,
        }).finally(() => setLoadingMore(false));
      }
    }, 200);
  }, [loadingMore, page, totalPages, hasError, sortStates]);

  useEffect(() => {
    fetchMtfLists();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [handleScroll]);

  return (
    <div
      className="mx-auto w-full max-w-[90%] overflow-x-auto"
      ref={containerRef}
    >
      <div className="mt-4 md:mt-14 mb-3 md:mb-20">
        <MtfTabs activeWindow={"mtf-list"} />
      </div>

      <h2 className="text-[#2a394e] text-center font-poppins text-[1.5rem] md:text-[3.5rem] font-bold mb-2">
        MTF Stocks List
      </h2>
      <p className="text-[#6a7582] text-center font-poppins text-base font-normal mx-auto pb-8">
        Explore 1600+ stocks eligible for the pay later option<br className="md:block hidden" /> with MTF.
      </p>

      <MtfFilters
        stockRef={stockRef}
        fundsRef={fundsRef}
        onSearch={handleSearch}
      />

      <MtfTable
        headings={tableHeadings}
        tableData={tableData}
        sortStates={sortStates}
        onSort={handleSort}
        getRedirectURL={getRedirectURL}
        hasError={hasError}
      />

      {loadingMore && (
        <div className="text-center py-4">
          <span className="text-[#6a7582]">Loading more...</span>
        </div>
      )}
    </div>
  );
}
