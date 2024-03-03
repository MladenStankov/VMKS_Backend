import qr from "qrcode"

const randomStringLen = 10

export default async function generateQRCode() {
    const QRCode = await qr.toString(await generateRandomString(randomStringLen))
    return QRCode;
}

async function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }