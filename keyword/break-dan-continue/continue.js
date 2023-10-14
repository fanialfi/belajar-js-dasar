function buatAngkaGanjil(delimiter) {
  let ganjil = [];
  for (let index = 0; index < delimiter; index++) {
    if (index % 2 === 0) {
      continue;
    }
    ganjil.push(index);
  }

  return ganjil;
}

const ganjil = buatAngkaGanjil(30);

for (let index = 0; index < ganjil.length; index++) {
  console.log(`${ganjil[index]}`);
}