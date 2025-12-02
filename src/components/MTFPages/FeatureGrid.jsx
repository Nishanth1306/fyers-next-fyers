export default function FeatureGrid({ data, heading }) {
  return (
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="text-center text-[#2a394e] leading-[48px] text-[24px] md:text-[48px] font-bold mb-8 md:mb-14">
          {heading}
        </h2>

        <div className="flex flex-wrap justify-center gap-x-[7.5rem] md:gap-y-[3.5rem]">
          {data.map((item, index) => (
            <div key={index} className="w-full mb-10 md:mb-0 md:max-w-3/12">
              <img
                src={item.img}
                alt={item.alt}
                className="max-h-16 mx-auto my-0 md:m-0"
              />
              <h3 className="text-[#2a394e] text-[24px] font-semibold leading-[32px] mt-6 md:mt-9.5 mb-3 md:mb-4 text-center md:text-start">
                {item.title}
              </h3>
              <p className="text-[#6a7582] text-[20px] font-medium leading-[28px] text-center md:text-start">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
}
