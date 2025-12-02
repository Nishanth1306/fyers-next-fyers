import Image from "next/image";

export function APICard({ icon, title, description, isLast }) {
  const hasDescription = Boolean(description);

  return (
    <>
      {/* Mobile top border */}
      <div className="md:hidden w-screen relative left-[calc(-50vw+50%)] border-t border-[#C8C8CC]"></div>

      {/* Card container */}
      <div
        className={`w-full md:w-[410.667px] ${
          hasDescription ? "h-[420px]" : "h-[372px]"
        } border-l border-r border-[#C8C8CC] flex flex-col`}
      >
        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full md:w-[410.666px] h-[300px]">
            <img src={icon} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text */}
        {hasDescription ? (
          <div className="min-h-[120px] px-4 py-3 border-t border-[#C8C8CC] flex flex-col justify-center gap-2">
            <h3 className="font-plus-jakarta font-semibold text-[24px] md:text-[32px] leading-[32px] text-black text-left">
              {title}
            </h3>
            <p className="font-plus-jakarta text-[16px] md:text-[18px] leading-[24px] text-[#333333] opacity-80 text-left">
              {description}
            </p>
          </div>
        ) : (
          <div className="h-[72px] p-4 border-[#C8C8CC] flex items-center justify-start gap-2">
            <h3 className="font-plus-jakarta font-semibold text-[24px] md:text-[36px] leading-[24px] text-black text-center">
              {title}
            </h3>
          </div>
        )}
      </div>

      {/* Mobile bottom border */}
      <div className="md:hidden w-screen relative left-[calc(-50vw+50%)] border-b border-[#C8C8CC]"></div>

      {/* Gap between mobile cards */}
      {!isLast && <div className="md:hidden h-8"></div>}
    </>
  );
}

export default function APIAccessSection({ heading, cards }) {
  // Split cards into rows of 3 for desktop
  const rows = [];
  for (let i = 0; i < cards.length; i += 3) {
    rows.push(cards.slice(i, i + 3));
  }

  return (
    <div className="px-4 md:px-20  py-[64px] flex flex-col gap-[64px]">
      {/* Heading */}
      <div className="w-full h-[56px] flex items-center gap-4">
        <h2 className="font-plus-jakarta font-semibold text-[48px] md:text-[48px] leading-tight md:leading-[56px] tracking-[-0.64px] text-black">
          {heading}
        </h2>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-8 w-full">
        {/* Desktop rows with full-width borders */}
        {rows.map((rowCards, rowIndex) => (
          <div
            key={rowIndex}
            className="hidden md:block w-screen relative left-[50%] translate-x-[-50%] border-t border-b border-[#C8C8CC]"
          >
            <div className={`px-4 md:px-20  flex gap-6 ${rowCards.length < 3 ? "justify-center" : "justify-between"}`}>
              {rowCards.map((card, index) => (
                <APICard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  isLast={index === rowCards.length - 1}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Mobile stacked cards with full-width borders and gap */}
        <div className="flex flex-col md:hidden px-4 md:px-20 ">
          {cards.map((card, index) => (
            <APICard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              isLast={index === cards.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
