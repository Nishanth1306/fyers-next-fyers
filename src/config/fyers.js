export const FYERS_ENDPOINTS = {
  SEND_OTP: "signup/v2/marketing/send-otp",
  VERIFY_OTP: "signup/v2/marketing/verify-otp",
};

export const FYERS_CONFIG = {
  SECRET_KEY: process.env.NEXT_PUBLIC_FYERS_SECRET_KEY || "mkg_signup_july",
  DEFAULT_URL: "https://api-a1.fyers.co.in/", // staging url
  COUNTRY_CODE: "91",
};