export const metadata = {
  title: "Pledge Shares for Margin Trading | FYERS Pledge",
  description:
    "With FYERS Pledge, pledge shares to gain margin for F&O and equity trading. Access funds instantly and maximize opportunities through our seamless pledge system.",
  keywords: ["pledge shares", "fyers pledge", "pledge system"],
  openGraph: {
    title: "Pledge Shares for Margin Trading | FYERS Pledge",
    description:
      "With FYERS Pledge, pledge shares to gain margin for F&O and equity trading. Access funds instantly and maximize opportunities through our seamless pledge system.",
    keywords: ["pledge shares", "fyers pledge", "pledge system"],
    url: "https://fyers.in/pledge/",
    images: [
      {
        url: "https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_pledge.jpg",
        alt: "Pledge Image",
      },
    ],
  },
  twitter: {
    title: "Pledge Shares for Margin Trading | FYERS Pledge",
    description:
      "With FYERS Pledge, pledge shares to gain margin for F&O and equity trading. Access funds instantly and maximize opportunities through our seamless pledge system.",
    keywords: ["pledge shares", "fyers pledge", "pledge system"],
    images: ["https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_pledge.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/pledge",
  },
};

export default function TradingViewLayout({ children }) {
  return <>{children}</>;
}
