import Footer from "@/components/Common/Footer";
import NavBar from "@/components/Common/NavBar";
import SalesPitch from "@/components/Common/SalesPitch";

export const metadata = {
  title: "MTF Calculator - Calculate Charges, Interest and Margin Availability",
  description:
    "MTF Calculator - Get quick calculations for margin availability, interest, and charges. Understand your trading costs and optimize your margin trading strategy.",
  keywords: 
    ["mtf calculator", "mtf interest rates", "mtf margin calculator", "mtf interest calculator", "mtf charges calculator", "mtf brokerage calculator", "mtf interest rate calculator"],
  openGraph: {
    title: "MTF Calculator - Calculate Charges, Interest and Margin Availability",
    description: "MTF Calculator - Get quick calculations for margin availability, interest, and charges. Understand your trading costs and optimize your margin trading strategy.",
    url: "https://fyers.in/calculator/mtf-calculator/",
    images: [
      {
        url: "https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_brokerage_calculator.jpg",
        alt: "Hero MTF Calc image"
      }
    ],
  },
  twitter: {
    title: "MTF Calculator - Calculate Charges, Interest and Margin Availability",
    description:
      "MTF Calculator - Get quick calculations for margin availability, interest, and charges. Understand your trading costs and optimize your margin trading strategy.",
    images: ["https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_brokerage_calculator.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/calculator/mtf-calculator/",
  },
};

export default function MarketingTradingFacilityCalculatorLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <SalesPitch />
      <Footer />
    </>
  );
}
