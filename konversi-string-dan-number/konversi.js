// untuk melakukan konversi string dan number, kita bisa menggunakan function berikut ini

// parseInt(string) => ke bilangan bulat
// parseFloat(string) => ke bilangan pecahan
// Number(string) => ke number (bisa bulat / pecahan) tergantung string-nya
// number.toString() => konversi number ke string

console.log(`1 + "1" = ${1 + "1"}`);
console.log(`1 + 1 = ${1 + parseInt("1")}`);
console.log(parseFloat("10.1"));
console.log(Number("20"));

/*
  jika konversi dari string ke number bukanlah data yang valid
  maka hasil dari konversi tersebut adalah NaN

  NaN adalah tipe data number special yang menyebutkan bahwa dia bukan number
  semua operasi dengan NaN adalah NaN lagi
*/

console.log(parseInt("1satu"));
console.log(parseInt("satu1"));

console.log(parseFloat("10.10bro"));
console.log(parseFloat("ini10.10"));

console.log(Number("10"));
console.log(Number("10s"));
console.log(Number("s10"));

/*
  untuk mengecek apakah sebuah number isinya NaN atau tidak,
  kita bisa mengeceknya dengan menggunakan function isNaN(number)
  hasil dari function tersebut adalah boolean
*/

let data = Number("10")
console.log(isNaN(data));

data = Number("10puh")
console.log(isNaN(data));

data = NaN
console.log(isNaN(data));