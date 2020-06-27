const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (num) {
  for (i = 0; i < num; i++) {
    console.log(" ".repeat(num - 1 - i) + "*".repeat(i + 1));
  }
  rl.close();
}).on("close", function () {
  process.exit();
});
