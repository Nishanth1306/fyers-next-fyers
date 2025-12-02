import Image from "next/image";

const MobileDropDownItems = ({ dropdownItems = {} , dropDownOpen }) => {
  return (
    <div className="list-none m-0 p-0 justify-between items-center cursor-pointer">
      <div className="grid grid-cols-2 justify-between items-center mb-2 py-2">
        {dropdownItems.map((value) => (
          <div
            key={`${value.name}-image`}
            className="flex items-center min-w-6/12 min-h-[2.5rem] gap-1"
            onClick={() => window.open(value.link)}
          >
            {/* {value.img && (
                <img
                  src={value.img-url}
                  alt={`${value.name}-img`}
                  className="w-14 h-14 pr-2"
                  loading="lazy"
                />
              )} */}
            <Image
              src={"https://assets.fyers.in/images/website/Web_icon.svg"}
              alt="product-logo"
              width={56}
              height={56}
            />
            <span className="text-[11px] text-white font-medium">
              {value.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileDropDownItems;
