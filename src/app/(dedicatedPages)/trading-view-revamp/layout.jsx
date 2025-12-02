export const metadata = {
  title: "TradingView Charts - Trade Live with FYERS TradingView",
  description:
    "Analyze markets with FYERS TradingView Charts. Use live charts, patterns, and indicators to create, test, and execute your trading strategies in real-time.",
  keywords: ["tradingview charts", "fyers tradingview"],
  openGraph: {
    title: "TradingView Charts - Trade Live with FYERS TradingView",
    description:
      "Analyze markets with FYERS TradingView Charts. Use live charts, patterns, and indicators to create, test, and execute your trading strategies in real-time.",
    url: "https://fyers.in/trading-view/",
    images: [
      {
        url: "https://assets.fyers.in/images/website/ipo/hero-ipo.webp",
        alt: "TradingView Charts Thumbnail",
      },
    ],
  },
  twitter: {
    title: "TradingView Charts - Trade Live with FYERS TradingView",
    description:
      "Analyze markets with FYERS TradingView Charts. Use live charts, patterns, and indicators to create, test, and execute your trading strategies in real-time.",
    images: ["https://assets.fyers.in/images/website/ipo/hero-ipo.webp"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/trading-view/",
  },
};

export default function TradingViewLayout({ children }) {
  return <>{children}</>;
}
