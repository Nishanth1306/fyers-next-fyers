export const metadata = {
  title: "Trade Smarter with FYERS Trader – Online Trading Platform",
  description:
    "FYERS Trader offers an advanced trading experience with real-time data, customizable charts, and innovative tools for professional traders in every market.",
  keywords: ["online trading platform", "trade smarter", "advanced trading", "fyers trader"],
  openGraph: {
    title: "Trade Smarter with FYERS Trader – Online Trading Platform",
    description:
      "FYERS Trader offers an advanced trading experience with real-time data, customizable charts, and innovative tools for professional traders in every market.",
    url: "https://fyers.in/fyers-trader/",
    images: [
      {
        url: "https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_web.jpg",
        alt: "Trader Thumbnail",
      },
    ],
  },
  twitter: {
    title: "Trade Smarter with FYERS Trader – Online Trading Platform",
    description:
      "FYERS Trader offers an advanced trading experience with real-time data, customizable charts, and innovative tools for professional traders in every market.",
    images: ["https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_web.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/fyers-trader/",
  },
};

export default function FyersTraderLayout({ children }) {
  return <>{children}</>;
}
