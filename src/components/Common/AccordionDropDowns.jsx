const AccordionDropDowns = ({ dropdownItems }) => {
  return (
    <div>
      <div className="list-none m-0 p-0 justify-between items-center cursor-pointer">
        <div className="grid grid-cols-2 justify-between items-center mb-2 py-2">
          {dropdownItems.map((value) => (
            <div
              key={value.text}
              className="flex items-center min-w-6/12 min-h-[2.5rem]"
              onClick={() => window.open(value.link)}
            >
              {value.img && (
                <img
                  src={value.img.src}
                  alt={value.img.alt}
                  className="w-14 h-14 pr-2"
                  loading="lazy"
                />
              )}
              <span className="text-[11px] font-medium">{value.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionDropDowns;
