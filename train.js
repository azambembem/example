// // console.log("Jack Ma maslahatlari");
// // const list = [
// //   "yahshi talaba boling", // 0-20
// //   "togri boshliq tanlang va koproq hato qiling", // 20-30
// //   "uzingizga ishlashingizni boshlang", // 30-40
// //   "siz kuchli bolgan narsalarni qiling", // 40-50
// //   "yoshlarga investitsiya qiling", // 50-60
// //   "endi dam oling, foydasi yoq endi" // >60
// // ];

// callback func
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(() => {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// maslahatBering(10, (err, data) => {
//   if(err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// maslahatBering(25, (err, data) => {
//   if(err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// maslahatBering(55, (err, data) => {
//   if(err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// maslahatBering("salom!", (err, data) => {
//   if(err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here 1");
// maslahatBering(65, (err, data) => {
//   if(err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 2");

// console.log("passed here 1");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 2");

// Async function
// async function maslahatBering(a) {
//   if(typeof a !== "number") throw new Error("insert a number", null);
//   else if (a <= 20) return(list[0]);
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise ((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     })
//   }
// }
// call then/catch
// console.log("passed here 1");
// maslahatBering(25)
// .then((data) => {
//   console.log("javob:", data);
// })
// .catch((err) => {
//   console.log("ERROR:", err);
// });
// console.log("passed here 2");

// call async/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// task A

// function countLetter(lett, word) {
//   return word.split("").filter((char) => char === lett).length;
// }

// const result0 = countLetter("e", "engineer");
// const result1 = countLetter("o", "book");
// console.log("result0:", result0); // result0: 3
// console.log("result1:", result1); // result1: 2

// task B

// function countDigits(str) {
//   let count = 0;
//   for (let char of str) {
//     if (!isNaN(char) && char !== " ") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("FDSFW4335SD")); // 4
// console.log(countDigits("HEY1 WHATSUP 123 BRO 456")); // 7
// console.log(countDigits("YUQ BUYERDA RAQAM")); // 0

// task C

// function checkContent(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// // Test
// console.log(checkContent("mitgroup", "gmtiprou")); // true
// console.log(checkContent("hello", "world")); // false

// task D

class Shop {
  constructor(non, lagmon, cola) {
    // this.non = non;
    // this.lagmon = lagmon;
    // this.cola = cola;
    this.products = { non, lagmon, cola };
  }
  logTime() {
    const now = new Date();
    return `Current time: ${now.getHours()} : ${now
      .getMinutes()
      .toString()
      .padStart(2, 0)} `; // agar daqiqa 1 xonali bulsa, oldiga "0" qo'shadi
  }
  qoldiq() {
    console.log(
      // logTime() => hozirgi vaqt
      // this.products => ombordagi maxsulot
      `${this.logTime()}, Non: ${this.products.non}, Lagmon: ${
        this.products.lagmon
      }, Cola: ${this.products.cola}`
    );
  }
  sotish(mahsulot, soni) {
    if (this.products[mahsulot] >= soni) {
      this.products[mahsulot] -= soni;
      console.log(`${this.logTime()} ${soni} ta ${mahsulot} sotildi`);
    } else {
      console.log(`${this.logTime()} yetarlicha ${mahsulot} yuq!!`);
    }
  }
  qabul(mahsulot, soni) {
    this.products[mahsulot] += soni;
    console.log(`${this.logTime()} ${soni} ta ${mahsulot} qabul qilindi`);
  }
}
const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();
