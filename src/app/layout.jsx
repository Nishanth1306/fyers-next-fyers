import GTM from "@/components/GTM/GTM";
import "./globals.css";
import { UserProvider } from "@/contexts/UserContext";
import GTMPageView from "@/components/GTM/GTMPageView";
import { GTM_ID } from "@/utils/constants";
import GATag from "@/components/Common/GATag";

export const metadata = {
  metadataBase: new URL("https://fyers.in"),
  title: "Online Stock Trading & Investment Platform in India | FYERS",
  description:
    "Start trading in equities, f&o, etc. Access advanced charting, fast order execution, and APIs for smart trading by opening your free demat account with FYERS.",
  keywords: ["stock trading", "investment", "fyers", "demat account"],

  icons: {
    icon: "https://assets.fyers.in/images/favicon.ico",
    shortcut: "https://assets.fyers.in/images/favicon.ico",
    apple: "https://assets.fyers.in/images/favicon.ico",
  },

  openGraph: {
    title: "Online Stock Trading & Investment Platform in India | FYERS",
    description:
      "Start trading in equities, f&o, etc. Access advanced charting, fast order execution, and APIs for smart trading by opening your free demat account with FYERS.",
    url: "https://fyers.in/",
    siteName: "FYERS",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://assets.fyers.in/images/fyers-trade-simplified.png",
        width: 700,
        height: 450,
        alt: "Fyers Trading Simplified",
      },
    ],
  },

  twitter: {
    card: "summary",
    site: "@fyers1",
    creator: "@fyers1",
    title: "Online Stock Trading & Investment Platform in India | FYERS",
    description:
      "Start trading in equities, f&o, etc. Access advanced charting, fast order execution, and APIs for smart trading by opening your free demat account with FYERS.",
    images: ["https://assets.fyers.in/images/fyers-trade-simplified.png"],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <html lang="en">
        <body>
          <GTM gtmId={GTM_ID} />
          <GATag />
          <GTMPageView />
          {children}
        </body>
      </html>
    </UserProvider>
  );
}
