const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count = 0;
let i = 0;
rl.on("line", function (input) {
  while (i < 8) {
    while (input.includes(alphabet[i])) {
      count++;
      input = input.replace(alphabet[i], "0");
    }
    i++;
  }
  console.log(input.length);
  rl.close();
}).on("close", function () {
  process.exit();
});
