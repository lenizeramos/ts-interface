type StringOrNumber = string | number;

function printInfo(input: StringOrNumber): void {
  if (typeof input === "string") {
    console.log(`${input} is a string`);
  } else {
    console.log(`${input} is a number`);
  }
}

printInfo("16");
printInfo(16);
