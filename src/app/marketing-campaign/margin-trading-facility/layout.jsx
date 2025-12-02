import Footer from "@/components/Common/Footer";
import NavBar from "@/components/Common/NavBar";
import SalesPitch from "@/components/Common/SalesPitch";

export const metadata = {
  title: "Margin Trading Facility (MTF) – Trade with Leverage | FYERS",
  description:
    "FYERS margin trading facility (pay later) lets you trade bigger with up to 4x leverage. Keep your capital light and greater growth potential in the market.",
};

export default function MarketingTradingFacilityLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <SalesPitch />
      <Footer />
    </>
  );
}
