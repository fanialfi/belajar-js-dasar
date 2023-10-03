const nilai = 77
let ucapan;

if (nilai >= 75) {
  ucapan = "selamat anda lulus"
} else {
  ucapan = "silahkan coba lagi"
}
console.log(`${ucapan}`);

// menggunakan ternary operator
{
  const ucapan = (nilai >= 75) ? "selamat anda lulus" : "silahkan coba lagi";
  console.log(`${ucapan}`);
}