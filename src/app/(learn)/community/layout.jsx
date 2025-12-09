export const metadata = {
  title: "FYERS Community - Pick others' brains on Trading/Investing",
  description:
    "It is a community where you can connect with fellow market participants and discuss a wide range of stock market topics. Connect with us on FYERS Community.",
  keywords: [],
  openGraph: {
    title: "FYERS Community - Pick others' brains on Trading/Investing",
    description:
      "It is a community where you can connect with fellow market participants and discuss a wide range of stock market topics. Connect with us on FYERS Community.",
    url: "https://fyers.in/community/",
    images: [
      {
        url: "https://tribe-s3-production.imgix.net/ivH3DWZQL077FDCCAzuYZ?fit=max&amp;w=1000&amp;auto=compress,format",
        alt: "Community",
      },
    ],
  },
  twitter: {
    title: "FYERS Community - Pick others' brains on Trading/Investing",
    description:
      "It is a community where you can connect with fellow market participants and discuss a wide range of stock market topics. Connect with us on FYERS Community.",
    images: ["https://tribe-s3-production.imgix.net/ivH3DWZQL077FDCCAzuYZ?fit=max&amp;w=1000&amp;auto=compress,format"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/community/",
  },
};

export default function CommunityLayout({ children }) {
  return <>{children}</>;
}
