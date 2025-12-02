export const metadata = {
  title: "FYERS One - Desktop Trading Analytics Platform",
  description:
    "Use FYERS One for deep market analysis with advanced charting, screeners and desktop trading analytics. Ideal for research-oriented investors.",
  keywords: ["fyers one", "trading analytics", "deep market analysis"],
  openGraph: {
    title: "FYERS One - Desktop Trading Analytics Platform",
    description:
      "Use FYERS One for deep market analysis with advanced charting, screeners and desktop trading analytics. Ideal for research-oriented investors.",
    keywords: ["fyers one", "trading analytics", "deep market analysis"],
    url: "https://fyers.in/fyers-one/",
    images: [
      {
        url: "https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_one.jpg",
        alt: "Fyers One Thumbnail",
      },
    ],
  },
  twitter: {
    title: "FYERS One - Desktop Trading Analytics Platform",
    description:
      "Use FYERS One for deep market analysis with advanced charting, screeners and desktop trading analytics. Ideal for research-oriented investors.",
    keywords: ["fyers one", "trading analytics", "deep market analysis"],
    images: ["https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_one.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/fyers-one/",
  },
};

export default function FyersOneLayout({ children }) {
  return <>{children}</>;
}
