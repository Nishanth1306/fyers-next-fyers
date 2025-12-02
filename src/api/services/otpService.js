import { post } from "../client";
import { FYERS_CONFIG, FYERS_ENDPOINTS } from "@/config/fyers";
import { generateHashHmac } from "@/lib/hmacAuth";

// Send OTP
export async function sendOTP(mobile, captchaToken) {
  const payload = {
    mobile,
    auto_read: "",
    is_nri: false,
    country_code: FYERS_CONFIG.COUNTRY_CODE,
  };

  const hash = generateHashHmac(payload, FYERS_CONFIG.SECRET_KEY);

  return post(FYERS_CONFIG.DEFAULT_URL + FYERS_ENDPOINTS.SEND_OTP, {
    ...payload,
    captcha_token: captchaToken,
    hash,
  });
}

// Verify OTP
export async function verifyOTP(mobile, otp) {
  const payload = { mobile, otp,utm_source: "", utm_medium: "",device_id: "", apps_flyer_id: "" , app_id: "", url: "https://signup.fyers.co.in/" }; // staging

  const hash = generateHashHmac(payload, FYERS_CONFIG.SECRET_KEY);

  return post(FYERS_CONFIG.DEFAULT_URL + FYERS_ENDPOINTS.VERIFY_OTP, {
    ...payload,
    hash,
  });
}