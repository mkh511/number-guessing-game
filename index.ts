#! /usr/bin/env node 

import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random()* 6+1)
console.log("Welcome To Number Guessing Game")
const answer = await inquirer.prompt([
  {
    name: "userguess",
    type: "number",
    message: [
      `I have a number in my my mind. Can you guess it right?
      "Enter a number between 1 to 6:`,
    ],
  },
]);

if (answer.userguess === randomnumber) {
    console.log("Congratulations Your Guess is Right")
}
else console.log("You Failed ! Please Try Again")