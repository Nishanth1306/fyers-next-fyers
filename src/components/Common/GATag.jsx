import { GA_ID } from "@/utils/constants";
import Script from "next/script";

const GATag = () => {
  return (
    <div>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
      </Script>
    </div>
  );
};

export default GATag;
