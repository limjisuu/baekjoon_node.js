const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (numbers) {
  const array = numbers.split(" ");
  num1 = Number(array[0]);
  num2 = Number(array[1]);

  if (num1 > num2) {
    console.log(">");
  } else if (num1 < num2) {
    console.log("<");
  } else {
    console.log("==");
  }
  rl.close();
}).on("close", function () {
  process.exit();
});
