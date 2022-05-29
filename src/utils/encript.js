import CryptoJS from "crypto-js";

export default function encrypt(data, method) {
  return method === "encrypt"
    ? CryptoJS.AES.encrypt(data, "xxxxxx").toString()
    : CryptoJS.AES.decrypt(data, "xxxxxx").toString(CryptoJS.enc.Utf8);
}
