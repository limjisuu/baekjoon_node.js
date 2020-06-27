const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const result = [];

rl.on("line", function (input) {
  for (i = 0; i < 26; i++) {
    result.push(input.indexOf(alpha[i]));
  }
  console.log(result.join(" "));
  rl.close();
}).on("close", function () {
  process.exit();
});
