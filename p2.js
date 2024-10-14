// Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.
var readline = require(`readline-sync`);

while (true) {
  var input = readline.question("Enter a number: ");
  if (parseInt(input) > 10) {
    break;
  }
}
