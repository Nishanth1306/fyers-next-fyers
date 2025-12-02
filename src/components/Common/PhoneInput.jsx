import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneInputWithFlags({ value, onChange, error }) {
  const handlePhoneChange = (phone, country) => {
    onChange(phone, country);
  };

  return (
    <div className="flex flex-col gap-1">
      <PhoneInput
        country={"in"}
        value={value}
        onChange={handlePhoneChange}
        enableSearch={true}
        containerClass={`w-full rounded-md ${
          error ? "border border-red-500" : "border border-gray-300"
        }`}
        inputClass="w-full outline-none"
        buttonClass="rounded-l-md"
      />
      {error && <span className="text-red-500 text-[10px]">{error}</span>}
    </div>
  );
}
