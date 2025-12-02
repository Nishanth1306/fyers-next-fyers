import crypto from "crypto";

export function generateHashHmac(payload, secretKey) {
  const payloadStr = JSON.stringify(payload);
  return crypto.createHmac("sha256", secretKey).update(payloadStr).digest("base64");
}
