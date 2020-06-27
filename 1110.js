const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cycleNum = 0;

rl.on("line", function (input) {
  if (Number(input) < 10) {
    input = "0".concat(input);
  }
  let first = input[0];
  let second = input[1];
  while (1) {
    let add = String(Number(first) + Number(second));
    first = second;
    second = add[add.length - 1];
    cycleNum++;
    if (first === input[0] && second === input[1]) {
      break;
    }
  }
  console.log(cycleNum);

  rl.close();
}).on("close", function () {
  process.exit();
});
