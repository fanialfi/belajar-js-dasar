/*
  tipe data object adalah tipe data yang mirip dengan array
  yang membedakan adalah index di object bisa di custom
  index di object disebut attribut atau properti
*/

const students = [
  {
    "nama": "fani alfirdaus",
    "nrp": 123457890,
    "jurusan": "teknik informatika",
    "email": "fanialfirdaus@gmail.com"
  }, {
    "nama": "ucup",
    "nrp": 2345678901,
    "jurusan": "farmasi",
    "email": "ucup@gmail.com"
  }
]
console.table(students);

/*
  untuk mengakses value dari properti sebuah object terdapat dua cara
  cara pertama dengan menggunakan object[properti]
  atau object.properti
*/

const person = {
  "nama depan": "fani",
  "nama belakang": "alfirdaus",
  "alamat": "indonesia"
}
console.log(person["nama depan"]);
console.log(person.alamat);

//  menghapus properti di object
delete person.alamat

console.table(person);