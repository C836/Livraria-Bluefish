import CryptoJS from "crypto-js";

export function encrypt(data) {
  return CryptoJS.AES.encrypt(data, "tambemnaosei").toString()
}

export function decrypt(data){
  return CryptoJS.AES.decrypt(data, "tambemnaosei").toString(CryptoJS.enc.Utf8)
}