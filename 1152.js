const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = [];

rl.on("line", function (input) {
  array = input.trim().split(" ");
  if (array[0] === "") {
    console.log(0);
  } else {
    console.log(array.length);
  }
  rl.close();
}).on("close", function () {
  process.exit();
});
