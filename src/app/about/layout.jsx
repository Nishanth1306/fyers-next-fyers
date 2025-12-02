export const metadata = {
  title: "About Us - FYERS",
  description:
    "FYERS aims to empower new-age traders and investors with the best-in-class technology and platforms. For a seamless experience, sign up now!",
  keywords: [""],
  openGraph: {
    title: "About Us - FYERS",
    description:
      "FYERS aims to empower new-age traders and investors with the best-in-class technology and platforms. For a seamless experience, sign up now!",
    url: "https://fyers.in/about/",
    images: [
      {
        url: "https://assets.fyers.in/images/website/about/hero-about.webp",
        alt: "hero-about",
      },
    ],
  },
  twitter: {
    title: "About Us - FYERS",
    description:
      "FYERS aims to empower new-age traders and investors with the best-in-class technology and platforms. For a seamless experience, sign up now!",
    images: ["https://assets.fyers.in/images/website/about/hero-about.webp"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "FYERS",
  },
  alternates: {
    canonical: "https://fyers.in/about/",
  },
};

export default function AboutUsLayout({ children }) {
  return <>{children}</>;
}
