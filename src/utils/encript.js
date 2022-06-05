import CryptoJS from "crypto-js";

export default function encrypt(data, method) {
  return method === "encrypt"
    ? CryptoJS.AES.encrypt(data, "tambemnaosei").toString()
    : CryptoJS.AES.decrypt(data, "tambemnaosei").toString(CryptoJS.enc.Utf8);
}

export function decrypt(data){
  return CryptoJS.AES.decrypt(data, "tambemnaosei").toString(CryptoJS.enc.Utf8)
}