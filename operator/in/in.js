const person = {
  "namaDepan": "fani",
  "namaBelakang": "alfirdaus",
  "alamat": "indonesia",
  "gender": undefined,
  "umur": 17
}

if ("namaDepan" in person) {
  console.log(`Hello my name is ${person.namaDepan}`);
}

if ("gender" in person) {
  if (person.gender !== null && person.gender !== undefined) {
    console.log(`jenis kelamin saya ${person.gender}`);
  } else {
    console.log(`Hello bro`);
  }
}

const value = [null, undefined, 123, true]

if (1 in value) {
  console.log(value[1]);
}