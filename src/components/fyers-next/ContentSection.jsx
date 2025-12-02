
export default function ContentSection() {
  const cardsData = [
    {
      icon: "/images/edit-fill.svg",
      title: "Custom Columns",
      description: "Drag and drop columns to customize your market watch to suit the trader you are.",
    },
    {
      icon: "/images/filter-fill.svg",
      title: "Advanced Filters",
      description:
        "Narrow down your options by filtering column values and uncover stocks that meet your specific criteria.",
    },
    {
      icon: "/images/eye-fill.svg",
      title: "Market Watch",
      description: "Create any number of market watches and group instruments accordingly.",
    },
    {
      icon: "/images/notification-4-fill.svg",
      title: "Option Chain",
      description: "You will get notified about potentially valuable trades. You won't miss it.",
    },
    {
      icon: "/images/alert-fill.svg",
      title: "Real-Time Widgets",
      description: "Stay in control of your trades with real-time alerts, customized triggers, and quotes.",
    },
    {
      icon: "/images/shopping-basket-fill.svg",
      title: "AMO Basket Order",
      description: "Group your trades and execute them once the market opens, saving you time and effort.",
    },
    {
      icon: "/images/table-2.svg",
      title: "Link to Excel",
      description: "Instantly convert massive trading data into Excel format in real time.",
    },
    {
      icon: "/images/calculator-blue-fill.svg",
      title: "Options Calculator",
      description:
        "Discover the power of options strategies with accurate theoretical pricing and implied volatility calculations.",
    },
    {
      icon: "/images/price-tag-3-blue-fill.svg",
      title: "Snap Quote",
      description: "Get real-time 360 degree price quotes of any instrument to stay ahead.",
    },
    {
      icon: "/images/book-2-fill.svg",
      title: "Trigger Order Book",
      description: "A dedicated order book to refer and study your GTT orders.",
    },
    {
      icon: "/images/calculator-blue-fill.svg",
      title: "Span Calculator",
      description: "Know the margin requirements for your futures and options positions.",
    },
    {
      icon: "/images/ruler-2-fill.svg",
      title: "Price Ladder",
      description: "A visual representation of the order book to gain insights about the market depth.",
    },
  ];

  return (
    <div className="w-full py-10 flex flex-col gap-10">
      {/* Heading */}
      <div className="px-4 md:px-20 ">
        <h2 className="font-plus-jakarta text-[40px] md:text-[64px] font-semibold leading-[72px] tracking-[-0.8px] text-gray-900">
          Why Choose FYERS Next?
        </h2>
      </div>

      <div className="w-full border-t border-b border-gray-300">
        <div className="px-4 md:px-20  grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-gray-300 border-l border-r border-gray-300 md:[&>*]:border-b md:[&>*]:border-r md:[&>*]:border-gray-300 md:[&>*:nth-child(3n)]:border-r-0 md:[&>*:nth-last-child(-n+3)]:border-b-0">
          {cardsData.map((card, index) => (
            <div key={index} className="flex items-start gap-4 p-6 h-[162.5px]">
              {/* Icon */}
              <div className="w-8 h-8 flex-shrink-0">
                <img src={card.icon} alt={card.title} className="w-full h-full" />
              </div>

              {/* Text */}
              <div className="flex flex-col h-[114.5px] w-full">
                <h3 className="font-plus-jakarta text-[22px] font-medium leading-[32px] tracking-[-0.32px] text-[#182BFF]">
                  {card.title}
                </h3>

                <p className="font-manrope text-[16px] leading-[22px] text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
