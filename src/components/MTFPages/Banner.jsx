"use client";
import Turnstile from "react-turnstile";
import { useUser } from "@/contexts/UserContext";
import PhoneInputWithFlags from "../Common/PhoneInput";
import { sendOTP, verifyOTP } from "@/api/services/otpService";
import { PhoneNumberUtil } from "google-libphonenumber";
import { useState } from "react";
import OtpInput from "./OtpInput";
import Link from "next/link";

const phoneUtil = PhoneNumberUtil.getInstance();

export default function Banner({ seo }) {
  const userData = useUser();

  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [otpScreen, setOtpScreen] = useState(false);
  const [verified, setVerified] = useState(false);

  const validMobileNumber = (phone) => {
    try {
      const parsed = phoneUtil.parseAndKeepRawInput("+" + phone);
      return phoneUtil.isValidNumber(parsed);
    } catch (err) {
      return false;
    }
  };

  const handlePhoneChange = (phone, country) => {
    setPhone(phone);
    setCountry(country);
    if (!validMobileNumber(phone)) {
      setError("Please enter a valid mobile number");
    } else {
      setError("");
    }
  };

  const handleGetStartedClick = async () => {
    if (!validMobileNumber(phone)) {
      setError("Please enter a valid mobile number");
      return;
    }

    if (!captchaToken) {
      setError("Please complete the CAPTCHA");
      return;
    }

    setError("");
    const localPhone = country?.dialCode ? phone.slice(country.dialCode.length) : phone;
    const res = await sendOTP(localPhone, captchaToken);

    if (res.code === 1000) {
      setOtpScreen(true);
      console.log("OTP has been sent", res);
    } else {
      console.error("OTP error", res.message || "Error sending OTP");
    }
  };

  const handleVerifyOtp = async (phone, otp) => {
    const localPhone = country?.dialCode ? phone.slice(country.dialCode.length) : phone;

    const res = await verifyOTP(localPhone, otp);

    if (res.code === 1000) {
      console.log("OTP Verified Successfully", res);
      setVerified(true);
    } else {
      setError(res.message || "Invalid OTP");
      console.error("OTP verification error", res.message);
    }
  };

  return (
    <div className="bg-[url('/images/mtf-bk.svg')] bg-cover bg-center w-full pt-9 md:pt-[6.313rem] relative mb-[14.438rem]">
      <div className="md:max-w-[1140px] mx-4 md:mx-auto px-4">
        <div className="flex flex-col items-start gap-8 md:gap-[2.125rem] md:flex-row justify-between ">
          <div className="md:w-1/2 space-y-4 flex flex-col md:text-start text-center">
            <h1 className="text-4xl md:text-[56px] md:pb-1 md:leading-[4.25rem] font-bold text-[#2a394e] self-start">
              Trade Now, <br className="hidden md:block" /> Pay Later with MTF
            </h1>
            <p className="text-lg pb-2 md:pb-4 text-gray-600 md:text-start">
              Use extra margin to buy and hold stocks without paying the full amount upfront.
            </p>

            <div className="flex md:items-center gap-4 md:gap-2 items-start ml-3 md:m-0 flex-col sm:flex-row md:w-fit">
              {!userData.userLoggedIn && (
                <>
                  {!otpScreen ? (
                    <>
                      <label htmlFor="phone" className="sr-only">
                        Phone Number
                      </label>
                      <PhoneInputWithFlags value={phone} error={error} onChange={handlePhoneChange} />
                      <button
                        onClick={handleGetStartedClick}
                        className="bg-[#436af5] text-white px-4 py-2 hover:bg-[#3657c8] transition w-full md:w-fit self-center md:self-start"
                      >
                        Get Started
                      </button>
                    </>
                  ) : !verified ? (
                    <OtpInput phone={phone} onVerify={handleVerifyOtp} />
                  ) : (
                    <div className="text-green-500 font-bold">OTP Verified! You can proceed further.</div>
                  )}
                </>
              )}
              {userData.userLoggedIn && (
                <Link
                  href="https://trade.fyers.in/"
                  className="bg-[#436af5] text-white px-4 py-2 hover:bg-[#3657c8] transition w-full md:w-fit self-center md:self-start"
                >
                  Get Started
                </Link>
              )}
            </div>

            {!userData.userLoggedIn && !verified && !otpScreen && validMobileNumber(phone) && (
              <Turnstile
                sitekey="0x4AAAAAAAX-ITdP-oek6KZb"
                theme="light"
                className="flex items-center md:items-start ml-3 md:ml-0 mt-2"
                onVerify={(token) => {
                  sessionStorage.setItem("fy_captcha_token", token);
                  setError("");
                  setCaptchaToken(token);
                }}
              />
            )}
          </div>

          <div className="md:w-1/2 md:pt-[9.75rem] md:pb-2.5">
            <img src="/images/mtf-banner.svg" alt="banner" />
          </div>
        </div>

        <div className="absolute bottom-[-169px] md:bottom-[-145px] left-0 right-0 mx-auto flex items-center justify-evenly rounded-[32px] text-white min-h-[148px] max-w-[1180px] bg-[#2b449e] bg-[url('/images/usb-bk.png')] bg-cover bg-center">
          <div className="md:flex justify-evenly md:space-x-0">
            <div className="fys-usbp px-8 py-2 text-[12px] leading-[20px] md:text-[20px] md:leading-[26px] md:pr-16 md:px-16  border-r border-white">
              <span className="block text-[18px] leading-[24px] font-bold md:text-[32px] md:leading-[38px]">9L</span>
              Customers
            </div>
            <div className="fys-usbp px-8 py-2 text-[12px] leading-[20px] md:text-[20px] md:leading-[26px] md:pr-16 md:px-16  border-r border-white">
              <span className="block text-[18px] leading-[24px] font-bold md:text-[32px] md:leading-[38px]">
                4.3 ⭐
              </span>
              App rating
            </div>
          </div>

          <div className="md:flex items-center gap-4 md:gap-10 mt-2 md:mt-0 py-[1.438rem]">
            <div>
              <img src="/images/best-broker.png" alt="Best Broker" className="max-w-[120px] md:max-w-none" />
            </div>
            <div className="text-[12px] leading-[20px] mt-2 md:mt-0">
              By <img src="/images/tv.svg" alt="Trading View" className="inline-block ml-2" /> Trading View
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
