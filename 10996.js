const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = "";
rl.on("line", function (num) {
  num = Number(num);
  for (let i = 1; i <= 2 * num; i++) {
    if (num === 1) {
      result += "*";
      break;
    }
    if (i % 2 === 1) {
      for (let j = 1; j <= num; j++) {
        if (j % 2 === 1) {
          result += "*";
        } else {
          result += " ";
        }
      }
    } else {
      for (let k = 1; k <= num; k++) {
        if (k % 2 === 1) {
          result += " ";
        } else {
          result += "*";
        }
      }
    }
    if (i != 2 * num) {
      result += "\n";
    }
  }
  console.log(result);
  rl.close();
}).on("close", function () {
  process.exit();
});
