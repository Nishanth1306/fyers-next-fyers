export const metadata = {
  title: "Advanced Order Types | FYERS Smart Orders for Trading",
  description:
    "Execute trades smarter with FYERS Smart Orders. Access advanced order types including Bracket Order and Cover Order for disciplined and automated trading.",
  keywords: ["bracket order", "order types", "cover order", "smart orders", "advanced order types"],
  openGraph: {
    title: "Advanced Order Types | FYERS Smart Orders for Trading",
    description:
      "Execute trades smarter with FYERS Smart Orders. Access advanced order types including Bracket Order and Cover Order for disciplined and automated trading.",
    url: "https://fyers.in/smart-order/",
    images: [
      {
        url: "",
        alt: "",
      },
    ],
  },
  twitter: {
    title: "Advanced Order Types | FYERS Smart Orders for Trading",
    description:
      "Execute trades smarter with FYERS Smart Orders. Access advanced order types including Bracket Order and Cover Order for disciplined and automated trading.",
    images: [""],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/smart-order",
  },
};

export default function SmartOrderLayout({ children }) {
  return <>{children}</>;
}
