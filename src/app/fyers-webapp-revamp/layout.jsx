export const metadata = {
  title: "Web Trading Platform | Trade Smart with FYERS Web & App",
  description:
    "Upgrade to FYERS Web Trading for a featured web trading platform. Access advanced charts, multi-layout interface, smart tools, and an all-in-one share market app.",
  keywords: ["fyers web", "share market app", "web trading platform", "fyers web trading platform"],
  openGraph: {
    title: "Web Trading Platform | Trade Smart with FYERS Web & App",
    description:
      "Upgrade to FYERS Web Trading for a featured web trading platform. Access advanced charts, multi-layout interface, smart tools, and an all-in-one share market app.",
    url: "https://fyers.in/fyers-webapp/",
    images: [
      {
        url: "https://assets.fyers.in/images/website/web/hero_section.svg",
        alt: "Web & app Thumbnail",
      },
    ],
  },
  twitter: {
    title: "Web Trading Platform | Trade Smart with FYERS Web & App",
    description:
      "Upgrade to FYERS Web Trading for a featured web trading platform. Access advanced charts, multi-layout interface, smart tools, and an all-in-one share market app.",
    images: ["https://assets.fyers.in/images/website/web/hero_section.svg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/fyers-webapp/",
  },
};

export default function FyersWebAppLayout({ children }) {
  return <>{children}</>;
}
