const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let word = [];
let vowelCount = 0;

rl.on("line", function (input) {
  word = input.split("");
  rl.close();
}).on("close", function () {
  for (let i = 0; i < word.length; i++) {
    let s = word[i];
    if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
      vowelCount++;
    }
  }
  console.log(vowelCount);
  process.exit();
});
