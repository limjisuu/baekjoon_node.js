const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let rlCount = 0;
const array = [];
const result = [];

rl.on("line", function (input) {
  array.push(input.split(" "));
  rlCount++;
  if (rlCount === 2) {
    rl.close();
  }
}).on("close", function () {
  const N = Number(array[0][0]);
  const X = Number(array[0][1]);
  for (i = 0; i < N; i++) {
    if (Number(array[1][i]) < X) {
      result.push(Number(array[1][i]));
    }
  }
  let quote = "";
  for (let j = 0; j < result.length; j++) {
    quote += result[j] + " ";
  }
  console.log(quote);
  process.exit();
});
