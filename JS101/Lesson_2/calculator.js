//get user input number one
//get user input operator
//get user input number 2
//perfom operation
//return result

const readline = require('readline-sync');

console.log('Welcome to calculator!');

console.log('What\'s the first number?');

let number1 = readline.question();

console.log('What\'s the second number?');

let number2 = readline.question();

console.log('What operation would you like to perform? \n 1) Add 2) Subtract 3) Multiply 4) Divide.');

let operation = readline.question();

let result;

if (operation === '1') {

  result = Number(number1) + Number(number2);

} else if (operation === '2') {

  result = Number(number1) - Number(number2);

} else if (operation === '3') {

  result = Number(number1) * Number(number2);

} else {

  result = Number(number1) / Number(number2);

}

console.log(`The result of the operation is ${result}.`);


