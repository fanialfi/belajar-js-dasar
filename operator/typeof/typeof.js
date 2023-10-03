let data = [1, 1, 1, 1];

switch (typeof data) {
  case "undefined":
    console.log(`undefined`);
    break;
  case "boolean":
    console.log(`boolean`);
    break;
  case "number":
    console.log(`number`);
    break;
  case "bigint":
    console.log(`bigint`);
    break
  case "string":
    console.log(`string`);
    break;
  case "symbol":
    console.log(`symbol`);
    break;
  case "function":
    console.log(`function`);
    break;
  default:
    console.log(typeof data);
    break;
}
