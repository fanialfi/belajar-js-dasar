loopI:
for (let i = 0; i < 10; i++) {
  loopJ:
  for (let j = 0; j < 100; j++) {
    if (j > 10) {
      continue loopI;
    }
    console.log(`perulangan J ke ${j}`);
  }

  // baris ini tidak akan di jalankan, karena diatas dipanggil kata kunci continue
  console.log(`perulangan i ke ${i}`);
}