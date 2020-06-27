const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const find = ["JOI", "IOI"];
let JOICount = 0;
let IOICount = 0;

rl.on("line", function (input) {
  for (i = 0; i < input.length - 2; i++) {
    if (input[i] === "J") {
      if (input[i + 1] === "O") {
        if (input[i + 2] === "I") {
          JOICount += 1;
        }
      }
    }
  }

  for (i = 0; i < input.length - 2; i++) {
    if (input[i] === "I") {
      if (input[i + 1] === "O") {
        if (input[i + 2] == "I") {
          IOICount++;
        }
      }
    }
  }

  console.log(JOICount);
  console.log(IOICount);
  rl.close();
}).on("close", function () {
  process.exit();
});
