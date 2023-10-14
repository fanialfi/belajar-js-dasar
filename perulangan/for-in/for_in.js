const person = {
  "firstName": "fani",
  "lastName": "alfirdaus",
}

for (const properti in person) {
  console.log(`${properti}\t: ${person[properti]}`);
}

// for in di array
const nama = ["fani", "alfirdaus"];
for (const key in nama) {
  console.log(`${key} : ${nama[key]}`);
}