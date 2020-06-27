const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (time) {
  const array = time.split(" ");
  hour = Number(array[0]);
  minute = Number(array[1]);

  if (minute >= 45) {
    minute -= 45;
  } else {
    if (hour === 0) {
      hour = 23;
      minute += 15;
    } else {
      hour -= 1;
      minute += 15;
    }
  }

  console.log(hour, minute);
  rl.close();
}).on("close", function () {
  process.exit();
});
