const person = {}

// let address;

// if (person.country !== undefined && person.country !== null) {
//   address = person.country.address
// }
// console.log(address);

let address = person?.country?.address

console.log(address);

address = person?.country?.address ?? "nilai default";
console.log(address);