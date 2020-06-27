const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", function (n1) {
  rl.question("", function (n2) {
    num1 = Number(n1);
    num2 = Number(n2);

    if (num1 > 0 && num2 > 0) {
      console.log(1);
    } else if (num1 < 0 && num2 > 0) {
      console.log(2);
    } else if (num1 < 0 && num2 < 0) {
      console.log(3);
    } else {
      console.log(4);
    }
    rl.close();
  });
});
