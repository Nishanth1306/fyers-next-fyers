import Feature1 from "@/assets/images/scalper-terminal/timer-flash-line.svg";
import Feature2 from "@/assets/images/scalper-terminal/cursor-line.svg";
import Feature3 from "@/assets/images/scalper-terminal/keyboard-box-fill.svg";
import Feature4 from "@/assets/images/scalper-terminal/search-eye-line.svg";

export const feature = {
  mobileImageHeight: "min-h-[240px]",
  features: [
    {
      featureImage: "https://assets.fyers.in/Marcom_Avatar/Images/scalp-f1-three-chart-layout.webp",
      featureImageStyles: "md:object-cover lg:object-fit md:object-left lg:object-center",
      featureTitle: "Three-Chart Layout",
      featureDescription: "Spot, CE & PE charts side by side with real-time P&L all in one view.",
    },
    {
      featureImage: "https://assets.fyers.in/Marcom_Avatar/Images/scalp-f1-advanced-customisation.webp",
      featureImageStyles: "md:object-cover lg:object-fit md:object-left lg:object-center",
      featureTitle: "Advanced Customisation",
      featureDescription: "Add indicators and customise widgets to display 50-Market Depth and option chain.",
    },
    {
      featureImage: "https://assets.fyers.in/Marcom_Avatar/Images/scalp-f1-quick-trade.webp",
      featureImageStyles: "md:object-cover lg:object-fit md:object-left lg:object-center",
      featureTitle: "Quick Trade Mode",
      featureDescription: "One-click chart orders with keyboard shortcuts for fast execution.",
    },
    {
      featureImage: "https://assets.fyers.in/Marcom_Avatar/Images/scalp-f1-smart-risk-tools.webp",
      featureImageStyles: "md:object-cover lg:object-fit md:object-left lg:object-center",
      featureTitle: "Smart Risk Tools",
      featureDescription: "Alerts, partial exits & single-click square-off.",
    },
  ],
};

export const extraFeatures = [
  {
    iconSrc: Feature1,
    iconAlt: "stock fill",
    title: "Fast Order Management",
    description: "Place, modify and execute trades instantly without delays.",
  },
  {
    iconSrc: Feature2,
    iconAlt: "icon",
    title: "One Click Cancel (Single or All)",
    description: "Cancel individual or all orders in just one click.",
  },
  {
    iconSrc: Feature3,
    iconAlt: "icon",
    title: "Trade From Keyboard",
    description: "Use hotkeys for quick, hassle-free order placement.",
  },
  {
    iconSrc: Feature4,
    iconAlt: "stock fill",
    title: "Bird's-Eye View",
    description: "Track multiple instruments and market depth in a single glance.",
  },
];
