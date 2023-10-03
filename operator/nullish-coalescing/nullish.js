let parameter;

let data = parameter

if (data === undefined || data === null) {
  data = "nilai default"
}
console.log(`${data}`);

{
  // menggunakan nullish coalesching
  let param;
  const dt = param ?? "nilai default"
  console.log(`${dt}`);
}