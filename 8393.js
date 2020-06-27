const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i + 1;
  }
  console.log(sum);
  rl.close();
}).on("close", function () {
  process.exit();
});
