export const metadata = {
  title: "FYERS Next – Advanced Desktop Trading Platform",
  description:
    "Trade smarter with FYERS Next, the advanced desktop trading platform from FYERS. Access lightning-fast tools, real-time insights, and a modern trading experience.",
  keywords: ["modern trading", "fyers next", "desktop trading platform"],
  openGraph: {
    title: "FYERS Next – Advanced Desktop Trading Platform",
    description:
      "Trade smarter with FYERS Next, the advanced desktop trading platform from FYERS. Access lightning-fast tools, real-time insights, and a modern trading experience.",
    url: "https://fyers.in/fyers-next",
    images: [
      {
        url: "https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_next.jpg",
        alt: "Next - Desktop Trading Platform by FYERS",
      },
    ],
  },
  twitter: {
    title: "FYERS Next – Advanced Desktop Trading Platform",
    description:
      "Trade smarter with FYERS Next, the advanced desktop trading platform from FYERS. Access lightning-fast tools, real-time insights, and a modern trading experience.",
    images: ["https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_next.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/fyers-next",
  },
};

export default function FyersNextLayout({ children }) {
  return <>{children}</>;
}
