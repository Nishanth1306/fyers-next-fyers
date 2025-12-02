import Footer from "@/components/Common/Footer";
import NavBar from "@/components/Common/NavBar";
import SalesPitch from "@/components/Common/SalesPitch";

export const metadata = {
  title: "MTF Stocks List - Explore Stocks Available for Margin Trading",
  description:
    "Check out the full list of stocks available for margin trading on FYERS. Trade with leverage and make smarter decisions with our easy to use mtf stock list.",
  openGraph: {
    title: "MTF Stocks List - Explore Stocks Available for Margin Trading",
    description:
      "Check out the full list of stocks available for margin trading on FYERS. Trade with leverage and make smarter decisions with our easy to use mtf stock list.",
    url: "https://fyers.in/mtf-stocks-list/",
    images: [
      {
        url: "https://assets.fyers.in/images/website/mtf-stocks-list/hero-mtf-stocks-list.webp",
        alt: "Hero MTF image",
      },
    ],
  },
  twitter: {
    title: "MTF Stocks List - Explore Stocks Available for Margin Trading",
    description:
      "Check out the full list of stocks available for margin trading on FYERS. Trade with leverage and make smarter decisions with our easy to use mtf stock list.",
    images: [
      "https://assets.fyers.in/images/website/mtf-stocks-list/hero-mtf-stocks-list.webp",
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/mtf-stocks-list/",
  },
};

export default function MarketingTradingFacilityListLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <SalesPitch />
      <Footer />
    </>
  );
}
