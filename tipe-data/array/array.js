/*
  array adalah tipe data yang berisikan kumpulan data
  array di javascript memiliki sifat dinamis, 
  artinya data bisa bertambah sendirinya saat kita memasukkan data kedalam array
*/

// array kosong
const arr = [];
console.table(arr);

let fruits = ["melon", "apple", "pisang", "mangga"]
console.table(fruits);

/*
  setiap data di array akan disimpan dalam posisi yang berurutan, urutan array dimulai dari 0 
  setiap menambahkan data baru ke array, maka akan disimpan di urutan paling akhir
  urutan pada array disebut dengan index.
*/

/* 
  untuk menambahkan data ke dalam array, bisa menggunakan method push()
  maka akan disimpan di urutan paling akhir
*/

fruits.push("semangka", "melon");
console.table(fruits);

/*
  berikut beberapa operasi yang ada didalam array
  array.push(value) => menambahkan data ke array di urutan paling akhir
  array.length  => mendapatkan panjang array
  array[index]  => mendapatkan data di posisi index
  array[index] = value  => mengubah data di posisi index dengan value baru
  delete array[index] => menghapus data di posisi index, namun index tidak bergeser
*/

console.log(`panjang array fruits adalah : ${fruits.length}`);
console.log(fruits[0]);

fruits[0] = "apa ini ?";
console.log(fruits[0]);

delete fruits[2];
console.table(fruits);
fruits.push("anggur");

console.table(fruits);
console.log(fruits.length);

/*
  data didalam array tidak ada batasannya harus data apa
  jadi kita bisa memasukkan data apa saja didalam array
  bahkan jika mau, kita bisa memasukkan array kedalam array (yang biasa disebut array miltidimensi)
*/

const students = [
  ["fani alfirdaus", 122231, "teknik industri", "fanialfirdaus@gmail.com"],
  ["ucup", 7334, "teknik permesinan", "iniucup@ucup.com"],
]
console.table(students);