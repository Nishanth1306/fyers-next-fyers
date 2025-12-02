export const metadata = {
  title: "Trading API – Best Algo Trading API Platform | FYERS API",
  description:
    "Access the FYERS API to build and automate your trading strategies. The best  trading API with free integration, live data, and seamless trading support.",
  keywords: ["fyers api", "trading api", "algo trading api", "best algo trading api"],
  openGraph: {
    title: "Trading API – Best Algo Trading API Platform | FYERS API",
    description:
      "Access the FYERS API to build and automate your trading strategies. The best  trading API with free integration, live data, and seamless trading support.",
    url: "https://fyers.in/fyers-api",
    images: [
      {
        url: "https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_apis.jpg",
        alt: "Fyers API Thumbnail",
      },
    ],
  },
  twitter: {
    title: "Trading API – Best Algo Trading API Platform | FYERS API",
    description:
      "Access the FYERS API to build and automate your trading strategies. The best  trading API with free integration, live data, and seamless trading support.",
    images: ["https://assets.fyers.in/images/marketing_website/thumbnail-images/fyers_apis.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/fyers-api",
  },
};

export default function FyersAPILayout({ children }) {
  return <>{children}</>;
}
