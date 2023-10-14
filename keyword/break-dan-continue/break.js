function testBreak(k) {
  let i = 0;

  while (i < 6) {
    if (i === 3) {
      break
    }
    i++
  }

  return i * k
}




let counter = testBreak(10);
console.log(`${counter}`);
const conditional = true;

while (conditional) {
  console.log(`perulangan ke ${counter}`);
  counter++;

  if (counter >= 50) {
    break
  }
}