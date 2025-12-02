import Footer from "@/components/IndexPage/Footer";
import NavBar from "@/components/IndexPage/NavBar";

export const metadata = {
  title: "Pricing – FYERS",
  description:
    "FYERS offers zero brokerage on mutual funds and IPO, and max ₹ 20 on other segments. Open a demat account in 5 minutes and get free AMC for life with a limited period offer.",
  openGraph: {
    title: "Pricing – FYERS",
    description:
      "FYERS offers zero brokerage on mutual funds and IPO, and max ₹ 20 on other segments. Open a demat account in 5 minutes and get free AMC for life with a limited period offer.",
    url: "https://fyers.in/pricing/",
    images: [
      {
        url: "https://assets.fyers.in/images/website/pricing/hero-pricing.webp",
        alt: "Pricing page image",
      },
    ],
  },
  twitter: {
    title: "Pricing – FYERS",
    description:
      "FYERS offers zero brokerage on mutual funds and IPO, and max ₹ 20 on other segments. Open a demat account in 5 minutes and get free AMC for life with a limited period offer.",
    images: [
      "https://assets.fyers.in/images/website/pricing/hero-pricing.webp",
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/pricing/",
  },
};

export default function MarketingTradingFacilityListLayout({ children }) {
  return (
    <div className="font-plus-jakarta">
      {children}
    </div>
  );
}
