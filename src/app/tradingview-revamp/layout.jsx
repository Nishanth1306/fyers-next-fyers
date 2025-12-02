export const metadata = {
  title: "TradingView Charts | FYERS - Live TradingView Chart",
  description:
    "Unlock the best trading strategy with FYERS&#039; integrated TradingView platform. Access live TradingView charts and technical analysis tools for your trading decisions.",
  keywords: [
    "TradingView",
    "FYERS",
    "TradingView integration",
    "trading",
    "stock market",
    "demat account",
  ],
  openGraph: {
    title: "TradingView Charts | FYERS - Live TradingView Chart",
    description:
      "Unlock the best trading strategy with FYERS&#039; integrated TradingView platform. Access live TradingView charts and technical analysis tools for your trading decisions.",
    url: "https://fyers.in/trading-view/",
    images: [
      {
        url: "https://assets.fyers.in/images/website/ipo/hero-ipo.webp",
        alt: "TradingView Charts Thumbnail",
      },
    ],
  },
  twitter: {
    title: "TradingView Charts | FYERS - Live TradingView Chart",
    description:
      "Unlock the best trading strategy with FYERS&#039; integrated TradingView platform. Access live TradingView charts and technical analysis tools for your trading decisions.",
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
