const nilai = "A"

switch (nilai) {
  case "A":
    console.log(`anda lulus dengan sempurna`);
    break; // digunakan untuk menghentikan eksekusi case, jika tidak maka akan lanjut ke bawah
  case "B":
  case "C":
    console.log(`anda lulus`);
    break;
  case "D":
    console.log(`anda tidak lulus`);
  default:
    console.log(`anda mungkin salah jurusan`);
    break;
}