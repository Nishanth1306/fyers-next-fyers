"use client";
import { useState } from "react";

export default function OtpInput({ phone, onVerify }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (/^[0-9]?$/.test(val)) {
      const newOtp = [...otp];
      newOtp[index] = val;
      setOtp(newOtp);

      // Auto focus next input
      if (val && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter the 6-digit OTP");
      return;
    }

    onVerify(phone, otpString);
  };

  return (
    <div className="flex flex-col">
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        {otp.map((digit, idx) => (
          <input
            key={idx}
            id={`otp-${idx}`}
            type="text"
            value={digit}
            maxLength="1"
            className="w-10 h-10 text-center bg-white border border-gray-300 rounded-md"
            onChange={(e) => handleChange(e, idx)}
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-[#436af5] text-white px-4 py-2 hover:bg-[#3657c8] transition"
      >
        Verify OTP
      </button>
    </div>
    {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
