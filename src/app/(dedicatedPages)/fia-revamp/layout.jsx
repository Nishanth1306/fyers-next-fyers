export const metadata = {
  title: "AI Trading Assistant | FIA-GPT for Smart Trading by FYERS",
  description:
    "Meet FYERS FIA, your AI-powered intelligent assistant for trading. Use the AI trading tool to research stocks, create screeners, analyse your portfolio and more.",
  keywords: ["ai trading", "ai trading tool", "fyers fia", "fia gpt", "ai trading assistant"],
  openGraph: {
    title: "AI Trading Assistant | FIA-GPT for Smart Trading by FYERS",
    description:
      "Meet FYERS FIA, your AI-powered intelligent assistant for trading. Use the AI trading tool to research stocks, create screeners, analyse your portfolio and more.",
    url: "https://fyers.in/fia/",
    images: [
      {
        url: "",
        alt: "",
      },
    ],
  },
  twitter: {
    title: "AI Trading Assistant | FIA-GPT for Smart Trading by FYERS",
    description:
      "Meet FYERS FIA, your AI-powered intelligent assistant for trading. Use the AI trading tool to research stocks, create screeners, analyse your portfolio and more.",
    images: [""],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/fia",
  },
};

export default function FIALayout({ children }) {
  return <>{children}</>;
}
