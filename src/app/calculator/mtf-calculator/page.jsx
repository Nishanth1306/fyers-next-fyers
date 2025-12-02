"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import MtfTabs from "@/components/MTFPages/MtfTabs";
import MTFCalcContent from "@/components/MTFPages/MTFCalcContent";
import MTFResults from "@/components/MTFPages/MTFResults";
import MTFForm from "@/components/MTFPages/MTFForm";
import FaqComponent from "@/components/Common/FaqComponent";
import { faqs } from "@/data/mtf-calculators";
import { ENV, NEXT_PUBLIC_API_BASE, NEXT_PUBLIC_CO_API_BASE } from "@/utils/constants";

export default function MTFCalculator() {
  const [stocks, setStocks] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [bottomLine , setBottomLine] = useState("Net Profit")

  const API_BASE = NEXT_PUBLIC_API_BASE;
  const ChargesApiBase = ENV === "staging" ? NEXT_PUBLIC_CO_API_BASE : NEXT_PUBLIC_API_BASE;

  const initialInputs = {
    stockName: { value: "", label: "" },
    stockPrice: 0,
    investment: 10000,
    holdingPeriod: 10,
    expectedReturn: 10,
    stockSymbol: "",
  };
  const [inputs, setInputs] = useState(initialInputs);
  const [results, setResults] = useState({
    stockDetails: {},
    totalInvestment: 0,
    withoutMTF: {
      qty: 0,
      leverage: 1,
      interestAmount: 0,
      interestRate: "NA",
      funding: 0,
      charges: 0,
      profit: 0,
      roi: 0,
      chargesData: {
        stt: "---",
        brokerage: "---",
        exchange: "---",
        gst: "---",
        sebi: "---",
        stamp: "---",
        pledge: "---",
        unPledge: "---",
        total: "---",
      },
    },
    withMTF: {
      qty: 0,
      leverage: 1,
      interestAmount: 0,
      interestRate: "NA",
      funding: 0,
      charges: 0,
      profit: 0,
      roi: 0,
      chargesData: {
        stt: "---",
        brokerage: "---",
        exchange: "---",
        gst: "---",
        sebi: "---",
        stamp: "---",
        pledge: "---",
        unPledge: "---",
        total: "---",
      },
    },
  });

  const formatNumber = (num, decimals = 2) => {
    if (!Number.isFinite(num)) return 0;
    return parseFloat(num.toFixed(decimals));
  };

  const findInterestSlabs = (funding) => {
    if (funding > 1000 && funding <= 100000) return 16.49;
    if (funding > 100000 && funding <= 1000000) return 15.49;
    if (funding > 1000000 && funding <= 2500000) return 14.49;
    if (funding > 2500000) return 12.49;
    return 0;
  };

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(
          `${API_BASE}/indus/v1/watchlist/get_mtf_scripts?all=true&sort_by=symbol&sort_type=asc`
        );
        if (response.status === 200 && response.data?.code === 200) {
          const mtfDatas = response.data.data;
          setStocks(mtfDatas);
          setStockList(
            mtfDatas.map((v) => ({ value: v.ex_sym, label: v.ex_sym }))
          );
          setInputs((prev) => ({
            ...prev,
            stockName: { value: mtfDatas[0].ex_sym, label: mtfDatas[0].ex_sym },
            stockPrice: mtfDatas[0].lp,
            stockSymbol: mtfDatas[0].symbol,
          }));
        }
      } catch (err) {
        console.error("Error fetching MTF data", err);
      }
    };
    fetchStocks();
  }, []);

  useEffect(() => {
    if (!stocks.length) return;

    const { stockName, stockPrice, investment, holdingPeriod, expectedReturn } =
      inputs;
    const currentStock = stocks.find((s) => s.ex_sym === stockName.value);
    const mtfLeverage = currentStock?.margin || 1;

    let totalInv = formatNumber(investment * mtfLeverage);
    const qtyWith = Math.floor(totalInv / stockPrice);
    if(qtyWith <= 0){
      totalInv = totalInv / mtfLeverage
    }
    const funding = qtyWith > 0 ? Math.max(totalInv - investment, 0) : 0;

    const qtyWithout = Math.floor(investment / stockPrice);
    const interestRate = findInterestSlabs(funding);
    const interestAmt = formatNumber(
      funding * (interestRate / 100) * (holdingPeriod / 365)
    );

    setResults({
      totalInvestment: totalInv,
      withoutMTF: {
        qty: qtyWithout,
        leverage: 1,
        interestAmount: 0,
        interestRate: "NA",
        funding: 0,
        charges: 0,
        profit: 0,
        roi: 0,
        chargesData: {
          stt: 0,
          brokerage: 0,
          exchange: 0,
          gst: 0,
          sebi: 0,
          stamp: 0,
          total: 0,
          pledge: 0,
          unPledge: 0,
        },
      },
      withMTF: {
        qty: qtyWith,
        leverage: mtfLeverage,
        interestAmount: interestAmt,
        interestRate,
        funding,
        charges: 0,
        profit: 0,
        roi: 0,
        chargesData: {
          stt: 0,
          brokerage: 0,
          exchange: 0,
          gst: 0,
          sebi: 0,
          stamp: 0,
          total: 0,
          pledge: 12,
          unPledge: 12,
        },
      },
    });

    if (currentStock && inputs.stockSymbol !== currentStock.symbol) {
      setInputs((prev) => ({
        ...prev,
        stockSymbol: currentStock.symbol,
      }));
    }

    const fetchCharges = async () => {
      try {
        const [resWithMTF, resWithoutMTF] = await Promise.allSettled([
          axios.get(
            `${ChargesApiBase}/puri/public/orderCharges?side=1&limitPrice=0&productType=CNC&qty=${qtyWith}&symbol=${currentStock.symbol}`,
          ),
          axios.get(
            `${ChargesApiBase}/puri/public/orderCharges?side=1&limitPrice=0&productType=CNC&qty=${qtyWithout}&symbol=${currentStock.symbol}`,
          ),
        ]);
        const pledgeCharges = qtyWith > 0 ? 12 : 0;
        const unPledgeCharges = qtyWith > 0 ? 12 : 0;

        // --- With MTF ---
        let withCharges = pledgeCharges + unPledgeCharges;
        let withChargeData = {
          stt: 0,
          brokerage: 0,
          exchange: 0,
          gst: 0,
          sebi: 0,
          stamp: 0,
          total: withCharges,
          pledge: pledgeCharges,
          unPledge: unPledgeCharges,
        };

        if (
          resWithMTF.status === "fulfilled" &&
          resWithMTF.value.status === 200 &&
          resWithMTF.value.data.code === 200
        ) {
          const data = resWithMTF.value.data.data;
          withCharges = Number((data.totalCharge + pledgeCharges + unPledgeCharges).toFixed(2));
          withChargeData = {
            stt: data.stt,
            brokerage: data.brokerage,
            exchange: data.exchangeTran,
            gst: data.gst,
            sebi: data.sebi,
            stamp: data.stampDuty,
            total: withCharges,
            pledge: pledgeCharges,
            unPledge: unPledgeCharges,
          };
        }

        const withProfit = formatNumber(
          (qtyWith * stockPrice * expectedReturn) / 100 -
            interestAmt -
            withCharges
        );
        withProfit < 0 ? setBottomLine("Net Loss") : setBottomLine("Net Profit")
        if(qtyWith <=0 ){
          setBottomLine("fundsRequired")
        }
        const withRoi = formatNumber((withProfit / investment) * 100);

        setResults((prev) => ({
          ...prev,
          withMTF: {
            ...prev.withMTF,
            charges: withCharges,
            profit: withProfit,
            roi: withRoi,
            chargesData: withChargeData,
          },
        }));

        // --- Without MTF ---
        let withoutCharges = 0;
        let withoutChargeData = {
          stt: 0,
          brokerage: 0,
          exchange: 0,
          gst: 0,
          sebi: 0,
          stamp: 0,
          total: withoutCharges,
          pledge: 0,
          unPledge: 0,
        };

        if (
          resWithoutMTF.status === "fulfilled" &&
          resWithoutMTF.value.status === 200 &&
          resWithoutMTF.value.data.code === 200
        ) {
          const data = resWithoutMTF.value.data.data;
          withoutCharges = data.totalCharge;
          withoutChargeData = {
            stt: data.stt,
            brokerage: data.brokerage,
            exchange: data.exchangeTran,
            gst: data.gst,
            sebi: data.sebi,
            stamp: data.stampDuty,
            total: withoutCharges,
            pledge: 0,
            unPledge: 0,
          };
        }

        const withoutProfit = formatNumber(
          (qtyWithout * stockPrice * expectedReturn) / 100 - withoutCharges
        );
        const withoutRoi = formatNumber((withoutProfit / investment) * 100);

        setResults((prev) => ({
          ...prev,
          withoutMTF: {
            ...prev.withoutMTF,
            charges: withoutCharges,
            profit: withoutProfit,
            roi: withoutRoi,
            chargesData: withoutChargeData,
          },
        }));
      } catch (error) {
        console.error("Tooltip API error:", error);
      }
    };

    fetchCharges();
  }, [inputs, stocks]);

  return (
    <div className="max-w-[93%] mx-auto mt-8">
      <div className="mt-4 md:mt-14 mb-3 md:mb-20">
        <MtfTabs activeWindow="mtf-calculator" />
      </div>
      <div className="text-center">
        <h2 className="text-[#2a394e] text-center font-poppins text-[1.5rem] md:text-[3.5rem] font-bold mb-6 md:mb-2">
          MTF Calculator
        </h2>
        <p className="text-[#6a7582] text-base mx-auto">
          Estimate your buying power and potential returns using <br className="md:block hidden" />the pay later option with MTF.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-[93%] md:w-[85%] justify-center md:pt-4  md:px-[2.88rem] md:py-[2.44rem] md:shadow-[2px_8px_20px_rgba(203,194,255,0.24)] mx-auto mt-6.5">
        <MTFForm
          inputs={inputs}
          setInputs={setInputs}
          stockList={stockList}
          stocks={stocks}
          initialInputs={initialInputs}
        />
        <MTFResults inputs={inputs} results={results} bottomLine={bottomLine}/>
      </div>

      <MTFCalcContent />
      <FaqComponent faqs={faqs} />
    </div>
  );
}
