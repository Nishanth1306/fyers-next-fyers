import NavBar from "@/components/IndexPage/NavBar";
import Articles from "@/components/IndexPage/Articles";
import Awards from "@/components/IndexPage/Awards";
import Banner from "@/components/IndexPage/Banner";
import Certificates from "@/components/IndexPage/Certificates";
import CrossPlatform from "@/components/IndexPage/CrossPlatform";
import Edge from "@/components/IndexPage/Edge";
import FIA from "@/components/IndexPage/FIA";
import Reviews from "@/components/IndexPage/Reviews";
import Security from "@/components/IndexPage/Security";
import Footer from "@/components/IndexPage/Footer";
import FyersCTA from "@/components/Common/FyersCTA";
import Pricing from "@/components/IndexPage/Pricing";
import Faqs from "@/components/IndexPage/Faqs";
import GuardianImage from "/public/images/press-g.svg";
import QuizFold from "@/components/IndexPage/QuizFold";

export default function IndexHomePage() {
  const data = {
    seo: {
      meta_title: "Fyers home page title",
      meta_description: "Fyers home page description",
      meta_keywords: ["home", "stock"],
    },
    h1: "Built for those who are Born to Trade",
    tagline:
      "Advanced tools to help you unlock the next level of precision, insight and performance.  One platform to rule the markets.",
    bannerScroll: [
      {
        name: "Futures and Options",
        image: (
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path
              d="M2.16667 0.5V13.8333H15.5V15.5H0.5V0.5H2.16667ZM14.9108 3.24408L16.0893 4.42259L11.3333 9.1785L8.83333 6.67917L5.25593 10.2559L4.07741 9.07742L8.83333 4.32149L11.3333 6.82083L14.9108 3.24408Z"
              fill="#182BFF"
            />
          </svg>
        ),
        redirectUrl: "/futures-options",
      },
      {
        name: "Commodity",
        image: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10.0041 3.33582C15.0667 3.33582 19.1708 5.57439 19.1708 8.33579V11.6691C19.1708 14.4305 15.0667 16.6691 10.0041 16.6691C5.03187 16.6691 0.984286 14.5098 0.841311 11.8165L0.837402 11.6691V8.33579C0.837402 5.57439 4.94146 3.33582 10.0041 3.33582ZM10.0041 13.3358C6.90369 13.3358 4.16281 12.4963 2.50389 11.2112L2.50407 11.6691C2.50407 13.2376 5.73959 15.0025 10.0041 15.0025C14.1797 15.0025 17.3688 13.3105 17.4999 11.7675L17.5041 11.6691L17.5051 11.2105C15.8463 12.496 13.105 13.3358 10.0041 13.3358ZM10.0041 5.00248C5.73959 5.00248 2.50407 6.76732 2.50407 8.33579C2.50407 9.90429 5.73959 11.6691 10.0041 11.6691C14.2686 11.6691 17.5041 9.90429 17.5041 8.33579C17.5041 6.76732 14.2686 5.00248 10.0041 5.00248Z"
              fill="#182BFF"
            />
          </svg>
        ),
        redirectUrl: "/commodity-trading",
      },
      {
        name: "Stocks",
        image: (
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path
              d="M7.17057 4.16907H9.67059V11.669H7.17057V14.169H5.50391V11.669H3.00391V4.16907H5.50391V1.66907H7.17057V4.16907ZM4.67057 5.83573V10.0024H8.00391V5.83573H4.67057ZM15.5039 8.33571H18.0039V15.8357H15.5039V18.3357H13.8373V15.8357H11.3373V8.33571H13.8373V5.83573H15.5039V8.33571ZM13.0039 10.0024V14.169H16.3373V10.0024H13.0039Z"
              fill="#182BFF"
            />
          </svg>
        ),
        redirectUrl: "/stocks",
      },
      {
        name: "ETFs",
        image: (
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path
              d="M10.5005 13.3334C12.3414 13.3334 13.8338 11.841 13.8338 10C13.8338 8.15909 12.3414 6.66671 10.5005 6.66671C8.65952 6.66671 7.16714 8.15909 7.16714 10C7.16714 11.841 8.65952 13.3334 10.5005 13.3334ZM18.0042 3.33582H3.00423C2.544 3.33582 2.1709 3.70891 2.1709 4.16915V15.8358C2.1709 16.296 2.544 16.6691 3.00423 16.6691H18.0042C18.4645 16.6691 18.8376 16.296 18.8376 15.8358V4.16915C18.8376 3.70891 18.4645 3.33582 18.0042 3.33582ZM3.83757 13.0386V6.96147C4.77571 6.68087 5.51547 5.94081 5.79562 5.00248H15.2053C15.4862 5.94332 16.2292 6.68483 17.1709 6.96371V13.0364C16.2276 13.3157 15.4837 14.0593 15.2038 15.0025H5.79708C5.51803 14.0619 4.77734 13.3197 3.83757 13.0386Z"
              fill="#182BFF"
            />
          </svg>
        ),
        redirectUrl: "/etf",
      },
      {
        name: "Mutual Funds",
        image: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3.33757 13.3333V3.33329H1.6709V1.66663H4.1709C4.63114 1.66663 5.00423 2.03973 5.00423 2.49996V12.5H15.3696L17.0362 5.83329H6.6709V4.16663H18.1036C18.5638 4.16663 18.9369 4.53973 18.9369 4.99996C18.9369 5.06809 18.9286 5.13598 18.912 5.20208L16.8287 13.5354C16.736 13.9064 16.4027 14.1666 16.0202 14.1666H4.1709C3.71066 14.1666 3.33757 13.7935 3.33757 13.3333ZM5.00423 19.1666C4.08376 19.1666 3.33757 18.4205 3.33757 17.5C3.33757 16.5795 4.08376 15.8333 5.00423 15.8333C5.92471 15.8333 6.6709 16.5795 6.6709 17.5C6.6709 18.4205 5.92471 19.1666 5.00423 19.1666ZM15.0042 19.1666C14.0837 19.1666 13.3376 18.4205 13.3376 17.5C13.3376 16.5795 14.0837 15.8333 15.0042 15.8333C15.9247 15.8333 16.6709 16.5795 16.6709 17.5C16.6709 18.4205 15.9247 19.1666 15.0042 19.1666Z"
              fill="#182BFF"
            />
          </svg>
        ),
        redirectUrl: "/mutual-funds",
      },
      {
        name: "IPOs",
        image: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path
              d="M10.0003 15.2166L4.12246 18.5068L5.43524 11.8999L0.489746 7.32646L7.17895 6.53334L10.0003 0.416626L12.8217 6.53334L19.5108 7.32646L14.5654 11.8999L15.8782 18.5068L10.0003 15.2166ZM10.0003 13.3066L13.5393 15.2875L12.7488 11.3097L15.7264 8.55613L11.699 8.07858L10.0003 4.39581L8.30162 8.07858L4.27418 8.55613L7.25176 11.3097L6.46136 15.2875L10.0003 13.3066Z"
              fill="#182BFF"
            />
          </svg>
        ),
        redirectUrl: "/ipo",
      },
    ],
    products: [
      {
        id: 1,
        name: "Advanced Charts",
        description:
          "Real-time precision, 25+ years of data, multi-chart layouts, Seconds Charts, 50-Market Depth, and seamless execution from charts  - built for serious traders.",
        picture: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
            <path
              d="M10.6732 6.67053H14.6732V18.6705H10.6732V22.6705H8.00651V18.6705H4.00651V6.67053H8.00651V2.67053H10.6732V6.67053ZM24.0065 13.3372H28.0065V25.3372H24.0065V29.3372H21.3399V25.3372H17.3399V13.3372H21.3399V9.3372H24.0065V13.3372Z"
              fill="#131319"
            />
          </svg>
        ),
        button_text: "Learn More",
        button_icon: "pic-url",
        button_present: true,
        redirection: "https://fyers.in/advanced-charts",
        carousel_image: "https://assets.fyers.in/Marcom_Avatar/Images/home-advanced-charts.webp",
      },
      {
        id: 2,
        name: "Smart Orders",
        description:
          "Automated risk-managed execution with bracket orders, Smart Exit, Trailing stop-loss and more; built for precision and control.",
        picture: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
            <path
              d="M8.00649 12H26.591L27.2577 9.33329H10.6732V6.66663H28.9655C29.7018 6.66663 30.2988 7.26359 30.2988 7.99996C30.2988 8.10897 30.2854 8.21759 30.2589 8.32335L26.9256 21.6566C26.7773 22.2502 26.244 22.6666 25.6321 22.6666H6.67316C5.93678 22.6666 5.33982 22.0697 5.33982 21.3333V5.33329H2.67316V2.66663H6.67316C7.40954 2.66663 8.00649 3.26359 8.00649 3.99996V12ZM8.00649 30.6666C6.53373 30.6666 5.33982 29.4728 5.33982 28C5.33982 26.5272 6.53373 25.3333 8.00649 25.3333C9.47925 25.3333 10.6732 26.5272 10.6732 28C10.6732 29.4728 9.47925 30.6666 8.00649 30.6666ZM24.0065 30.6666C22.5337 30.6666 21.3399 29.4728 21.3399 28C21.3399 26.5272 22.5337 25.3333 24.0065 25.3333C25.4793 25.3333 26.6732 26.5272 26.6732 28C26.6732 29.4728 25.4793 30.6666 24.0065 30.6666Z"
              fill="#131319"
            />
          </svg>
        ),
        button_text: "Learn More",
        button_icon: "pic-url",
        button_present: true,
        redirection: "https://fyers.in/smart-orders",
        carousel_image: "https://assets.fyers.in/Marcom_Avatar/Images/home-smart-orders.webp",
      },
      {
        id: 3,
        name: "Scalping Mode",
        description:
          "Get a market view tailored for scalping along with lightning-fast execution, custom keyboard shortcuts and a terminal that remembers your preferences.",
        picture: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
            <path
              d="M7.99736 2.66663C7.99736 3.35041 8.65069 3.99996 9.33069 3.99996H22.664C23.3478 3.99996 23.9973 3.34663 23.9973 2.66663H26.664C26.664 4.87576 24.8732 6.66663 22.664 6.66663H17.3306L17.332 9.41597C22.5932 10.0727 26.664 14.5609 26.664 20V28C26.664 28.7364 26.067 29.3333 25.3306 29.3333H6.66402C5.92764 29.3333 5.33069 28.7364 5.33069 28V20C5.33069 14.5605 9.4023 10.0719 14.6641 9.41581L14.664 6.66663H9.33069C7.11736 6.66663 5.33069 4.87996 5.33069 2.66663H7.99736ZM15.9973 14.6666C13.0518 14.6666 10.664 17.0545 10.664 20C10.664 22.9454 13.0518 25.3333 15.9973 25.3333C18.9429 25.3333 21.3306 22.9454 21.3306 20C21.3306 19.0109 21.0614 18.0846 20.5922 17.2906L16.9402 20.9428L16.8145 21.0537C16.2916 21.4604 15.5352 21.4234 15.0545 20.9428C14.5338 20.4221 14.5338 19.5778 15.0545 19.0572L18.7066 15.405C17.9126 14.9358 16.9865 14.6666 15.9973 14.6666Z"
              fill="#070708"
            />
          </svg>
        ),
        button_text: "Learn More",
        button_icon: "pic-url",
        redirection: "https://fyers.in/scalper-terminal",
        button_present: true,
        carousel_image: "https://assets.fyers.in/Marcom_Avatar/Images/home-scalping-mode.webp",
      },
      {
        id: 4,
        name: "AI-Powered Discovery",
        description:
          "With India’s first AI-powered analyst - FIA (FYERS Intelligent Assistant), create screeners, analyse stocks, track news and get portfolio intelligence instantly.",
        picture: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
            <path
              d="M18.0005 9.33362C18.6588 6.07438 22.2429 4.26694 25.4976 4.92639C28.7524 5.58608 30.8576 8.76366 30.1997 12.0231C29.5416 15.2826 26.3687 17.3898 23.1138 16.7301L23.064 16.7213L23.0142 16.7057L20.0005 15.9996L18.6665 21.9996C17.739 26.5915 12.8223 29.1427 8.23682 28.2135C3.85729 27.3258 1.26647 23.3177 1.52588 19.0387C1.56075 18.4636 1.69523 17.9284 1.84229 17.4596C3.34603 12.667 8.42411 9.98146 13.2251 11.4391L17.3335 12.6666L18.0005 9.33362ZM11.6108 14.4567C8.24162 13.5946 5.5611 15.3019 4.6665 18.6666C4.57129 19.025 4.67116 19.0392 4.6665 19.3326C3.99985 21.3326 6.1599 25.1206 9.06689 25.5768C12.1898 26.0664 15.118 23.9285 15.6069 20.8014L16.6675 15.9996L11.6108 14.4567ZM24.8306 7.8512C23.1866 7.51817 21.5835 8.5831 21.2505 10.2291L20.7065 12.9235L23.6528 13.818C25.288 14.1348 26.8749 13.0742 27.2056 11.4362C27.5374 9.78991 26.4744 8.1846 24.8306 7.8512Z"
              fill="#131319"
            />
          </svg>
        ),
        button_text: "Learn More",
        button_icon: "pic-url",
        redirection: "https://fyers.in/fia",
        button_present: true,
        carousel_image: "https://assets.fyers.in/Marcom_Avatar/Images/home-ai-powered-discover.webp",
      },
      {
        id: 5,
        name: "Smart Equity SIP",
        description:
          "Portfolio-building redefined through automated equity SIPs with intelligent allocation and scheduling.",
        picture: (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M13.2974 24.0003H18.7025C18.8785 22.3982 19.6961 21.0757 21.0234 19.6305C21.1729 19.4678 22.1316 18.4755 22.2454 18.3338C23.3757 16.9245 23.9999 15.1803 23.9999 13.3337C23.9999 8.91538 20.4182 5.33366 15.9999 5.33366C11.5816 5.33366 7.99992 8.91538 7.99992 13.3337C7.99992 15.1794 8.62357 16.9226 9.75275 18.3315C9.86664 18.4737 10.8277 19.4686 10.9753 19.6294C12.3035 21.0755 13.1213 22.3982 13.2974 24.0003ZM18.6666 26.667H13.3333V28.0003H18.6666V26.667ZM7.67185 19.9993C6.20852 18.1733 5.33325 15.8557 5.33325 13.3337C5.33325 7.44262 10.1089 2.66699 15.9999 2.66699C21.891 2.66699 26.6666 7.44262 26.6666 13.3337C26.6666 15.857 25.7903 18.1757 24.3257 20.0022C23.4986 21.0334 21.3333 22.667 21.3333 24.667V28.0003C21.3333 29.4731 20.1394 30.667 18.6666 30.667H13.3333C11.8605 30.667 10.6666 29.4731 10.6666 28.0003V24.667C10.6666 22.667 8.49936 21.0318 7.67185 19.9993ZM17.3333 13.3401H20.6666L14.6666 21.3401V16.0067H11.3333L17.3333 8.00033V13.3401Z"
              fill="#131319"
            />
          </svg>
        ),
        button_text: "Learn More",
        button_icon: "pic-url",
        redirection: " https://fyers.in/smart-orders",
        button_present: true,
        carousel_image: "https://assets.fyers.in/Marcom_Avatar/Images/home-smart-equity-sip.webp",
      },
      {
        id: 6,
        name: "Advanced Symbol Info",
        description:
          "Unified view of 25+ years of institutional-grade fundamentals, stocks scores, SWOT analysis, real-time bulk block & insider deals with detailed technical analysis.",
        picture: (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M6.66667 4V25.3333H28V28H4V4H6.66667ZM27.0572 8.39052L28.9428 10.2761L21.3333 17.8856L17.3333 13.8867L11.6095 19.6095L9.72385 17.7239L17.3333 10.1144L21.3333 14.1133L27.0572 8.39052Z"
              fill="#131319"
            />
          </svg>
        ),
        button_text: "Learn More",
        button_icon: "pic-url",
        redirection: "https://fyers.in/",
        button_present: false,
        carousel_image: "https://assets.fyers.in/Marcom_Avatar/Images/home-advanced-symbol-info.webp",
      },
      {
        id: 7,
        name: "Real-time News",
        description:
          "Portfolio-building redefined through automated equity SIPs with intelligent allocation and scheduling.",
        picture: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
            <path
              d="M25.3332 29.3333H6.6665C4.45737 29.3333 2.6665 27.5425 2.6665 25.3333V3.99996C2.6665 3.26359 3.26346 2.66663 3.99984 2.66663H22.6665C23.4029 2.66663 23.9998 3.26359 23.9998 3.99996V13.3333H29.3332V25.3333C29.3332 27.5425 27.5424 29.3333 25.3332 29.3333ZM23.9998 16V25.3333C23.9998 26.0697 24.5968 26.6666 25.3332 26.6666C26.0696 26.6666 26.6665 26.0697 26.6665 25.3333V16H23.9998ZM6.6665 7.99996V16H14.6665V7.99996H6.6665ZM6.6665 17.3333V20H19.9998V17.3333H6.6665ZM6.6665 21.3333V24H19.9998V21.3333H6.6665ZM9.33317 10.6666H11.9998V13.3333H9.33317V10.6666Z"
              fill="#131319"
            />
          </svg>
        ),
        button_text: "Learn More",
        button_icon: "pic-url",
        redirection: "redirection-url",
        button_present: false,
        carousel_image: "https://assets.fyers.in/Marcom_Avatar/Images/home-real-time-news.webp",
      },
    ],
    testimonials: [
      {
        name: "Biswajit Ghosh",
        role: "28 October 2025",
        comment:
          "Really impressed with the app! The flat ₹20 brokerage and zero charges on equity delivery trades make it super affordable. The charting tools are top-notch and the TradingView integration makes analysis smooth and visual. Account setup was fast and paperless too. Ideal for someone who trades actively and values clean tech + low cost.",
        profile_pic: "avatar.png",
      },
      {
        name: "Naveen Basti",
        role: "2 November 2025",
        comment:
          "Overall: A wonderful, low-cost and tech-driven trading platform—great for both traders and long-term investors. Pros: Zero brokerage on delivery trades. Powerful TradingView charts and smooth web/mobile platforms. Flat ₹20 brokerage for intraday & F&O. Reliable for investing and active trading.",
        profile_pic: "avatar-1.png",
      },
      {
        name: "Shubham Pal",
        role: "30 October 2025",
        comment:
          "Voice mode gives freedom to explore hands-free making searching faster simpler and more enjoyable in any environment I use it in!",
        profile_pic: "avatar-1.png",
      },
      {
        name: "SRINIVAS KAMUJU",
        role: "6 November 2025",
        comment:
          "It's a very user-friendly app with loads of advanced features which are very useful for every segment of the market like scalpers, intraday traders, positional traders, investors, etc. In a nutshell, it's a one-stop solution for market players. I'm absolutely happy with it.",
        profile_pic: "avatar.png",
      },
      {
        name: "MuhammedAshmil2008",
        role: "20 October 2025",
        comment:
          "I use FYERS daily for trading options. The charts are advanced and customisable. Execution speed is excellent.",
        profile_pic: "avatar.png",
      },
    ],
    articles: [
      {
        title: "1 Million + customers",
        tagline: "The fast, feature-packed and intuitive way to invest and trade.",
        tagline2: "Available on Android and IOS.",
        template_pic: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"><path d="M9.72156 28.7054L2.66666 30.2731L4.23441 23.2182C3.23392 21.3472 2.66666 19.2098 2.66666 16.9398C2.66666 9.57598 8.6362 3.60645 16 3.60645C23.3637 3.60645 29.3333 9.57598 29.3333 16.9398C29.3333 24.3035 23.3637 30.2731 16 30.2731C13.73 30.2731 11.5925 29.7059 9.72156 28.7054ZM9.33333 16.9398C9.33333 20.6216 12.3181 23.6064 16 23.6064C19.6819 23.6064 22.6667 20.6216 22.6667 16.9398H20C20 19.149 18.2092 20.9398 16 20.9398C13.7908 20.9398 12 19.149 12 16.9398H9.33333Z" fill="#182BFF"/></svg>`,
        button_text: "Download App",
        button_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M2.00002 13.6064H14V14.9398H2.00002V13.6064ZM8.66668 6.93978H13.3333L8.00002 12.2731L2.66668 6.93978H7.33335V1.60645H8.66668V6.93978Z" fill="#182BFF"/></svg>`,
        button_redirection: "https://fyers.onelink.me/cj1P/9pfepauj",
      },
      {
        title: "4.5+ rating on Play store & App store",
        tagline: "A robust web trading platform built using the world-class TradingView library.",
        template_pic: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"><path d="M16.0008 25.2864L6.59622 30.5507L8.69666 19.9796L0.783875 12.6622L11.4866 11.3932L16.0008 1.60645L20.515 11.3932L31.2176 12.6622L23.305 19.9796L25.4054 30.5507L16.0008 25.2864Z" fill="#182BFF"/></svg>`,
        button_text: "Read Reviews",
        button_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 33" fill="none"><path d="M16.0008 25.2864L6.59622 30.5507L8.69666 19.9796L0.783875 12.6622L11.4866 11.3932L16.0008 1.60645L20.515 11.3932L31.2176 12.6622L23.305 19.9796L25.4054 30.5507L16.0008 25.2864Z" fill="#182BFF"/></svg>`,
        button_redirection: "https://fyers.onelink.me/cj1P/9pfepauj",
      },
      {
        title: "ET - Best bootstrapped startup award",
        tagline: "Honored with the Leading Member - Client Participation award by MCXIndialtd.",
        template_pic: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"><path d="M22.6666 21.2673V30.4293C22.6666 30.7974 22.3681 31.0961 22 31.0961C21.8792 31.0961 21.7606 31.0632 21.657 31.001L16 27.6068L10.343 31.001C10.0273 31.1904 9.61775 31.088 9.42831 30.7724C9.36615 30.6686 9.33331 30.5501 9.33331 30.4293V21.2673C6.89474 19.3125 5.33331 16.3086 5.33331 12.9401C5.33331 7.04906 10.1089 2.27344 16 2.27344C21.891 2.27344 26.6666 7.04906 26.6666 12.9401C26.6666 16.3086 25.1052 19.3125 22.6666 21.2673ZM16 20.9401C20.4182 20.9401 24 17.3584 24 12.9401C24 8.52182 20.4182 4.9401 16 4.9401C11.5817 4.9401 7.99998 8.52182 7.99998 12.9401C7.99998 17.3584 11.5817 20.9401 16 20.9401ZM16 18.2734C13.0545 18.2734 10.6666 15.8856 10.6666 12.9401C10.6666 9.99458 13.0545 7.60677 16 7.60677C18.9454 7.60677 21.3333 9.99458 21.3333 12.9401C21.3333 15.8856 18.9454 18.2734 16 18.2734Z" fill="#182BFF"/></svg>`,
        button_text: "Our Story",
        additional_image: GuardianImage,
        button_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 33" fill="none"><path d="M22.6666 21.2673V30.4293C22.6666 30.7974 22.3681 31.0961 22 31.0961C21.8792 31.0961 21.7606 31.0632 21.657 31.001L16 27.6068L10.343 31.001C10.0273 31.1904 9.61775 31.088 9.42831 30.7724C9.36615 30.6686 9.33331 30.5501 9.33331 30.4293V21.2673C6.89474 19.3125 5.33331 16.3086 5.33331 12.9401C5.33331 7.04906 10.1089 2.27344 16 2.27344C21.891 2.27344 26.6666 7.04906 26.6666 12.9401C26.6666 16.3086 25.1052 19.3125 22.6666 21.2673ZM16 20.9401C20.4182 20.9401 24 17.3584 24 12.9401C24 8.52182 20.4182 4.9401 16 4.9401C11.5817 4.9401 7.99998 8.52182 7.99998 12.9401C7.99998 17.3584 11.5817 20.9401 16 20.9401ZM16 18.2734C13.0545 18.2734 10.6666 15.8856 10.6666 12.9401C10.6666 9.99458 13.0545 7.60677 16 7.60677C18.9454 7.60677 21.3333 9.99458 21.3333 12.9401C21.3333 15.8856 18.9454 18.2734 16 18.2734Z" fill="#182BFF"/></svg>`,
        button_redirection: "https://fyers.in/about",
      },
    ],
    faqs: {
      Overview: [
        {
          id: "faq1",
          question: "What is FYERS's?",
          answer: "Answer",
        },
        {
          id: "faq2",
          question: "What instruments can I trade on FYERS?",
          answer: "Answer",
        },
        {
          id: "faq3",
          question: "FYERS offers trading in stocks, derivatives, commodities, and currencies.",
          answer: "Answer",
        },
        {
          id: "faq4",
          question: "Where is FYERS's main office located?",
          answer: "Answer",
        },
      ],
      Traders: [
        {
          id: "faq1",
          question: "What is FYERS's traders?",
          answer: "Answer",
        },
        {
          id: "faq2",
          question: "What instruments can I trade on FYERS?",
          answer: "Answer",
        },
        {
          id: "faq3",
          question: "FYERS offers trading in stocks, derivatives, commodities, and currencies.",
          answer: "Answer",
        },
        {
          id: "faq4",
          question: "Where is FYERS's main office located?",
          answer: "Answer",
        },
      ],
      Investors: [
        {
          id: "faq1",
          question: "What is FYERS's investors?",
          answer: "Answer",
        },
        {
          id: "faq2",
          question: "What instruments can I trade on FYERS?",
          answer: "Answer",
        },
        {
          id: "faq3",
          question: "FYERS offers trading in stocks, derivatives, commodities, and currencies.",
          answer: "Answer",
        },
        {
          id: "faq4",
          question: "Where is FYERS's main office located?",
          answer: "Answer",
        },
      ],
    },
  };

  return (
    <div className="bg-[#F2F4FB] font-plus-jakarta">
      <NavBar />
      <Banner
        heading={data.h1}
        tagline={data.tagline}
        bannerScroll={data.bannerScroll}
        tickerEnabled={true}
        tickerWords={["Trade", "Invest", "Level Up"]}
      />
      {/* <QuizFold /> */}
      <Edge products={data.products} />
      <CrossPlatform />
      <Pricing />
      <FIA />
      {/* <Charts /> */}
      <Security />
      <Reviews reviews={data.testimonials} />
      <Articles articles={data.articles} />
      <Awards />
      <Certificates />
      {/* <Faqs faqs={data.faqs} /> */}
      <FyersCTA />
      <Footer />
    </div>
  );
}
