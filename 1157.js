const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = [];

for (i = 0; i < 26; i++) {
  result.push(0);
}

rl.on("line", function (input) {
  input = input.toLowerCase();
  for (i = 0; i < input.length; i++) {
    result[input.charCodeAt(i) - 97] += 1;
  }

  let max = result[0];
  for (j = 0; j < 26; j++) {
    if (result[j] > max) {
      max = result[j];
    }
  }

  const index = result.indexOf(max);
  let isSame = false;

  for (k = 0; k < 26; k++) {
    if (max === result[k] && k != index) {
      isSame = true;
    }
  }

  if (isSame) {
    console.log("?");
  } else {
    console.log(String.fromCharCode(65 + index));
  }
  rl.close();
}).on("close", function () {
  process.exit();
});
