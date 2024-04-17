#! /usr/bin/env node

import inquirer from "inquirer"
let myBalance = 25000;
let myPin = 2006;
let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});
if (pinAnswer.pin === myPin) {
  console.log("You entered correct pin !!!.");

  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "Enter operation",
      type: "list",
      choices: ["Deposit", "Withdraw", "Balance", "Exit"],
    },
  ]);
  if (operationAnswer.operation === "Deposit") {
    let amount = await inquirer.prompt({
      name: "amount",
      message: "Enter amount",
      type: "number",
    });
    myBalance += amount.amount;
    console.log(`Your new balance is: ${myBalance}`);
  } else if (operationAnswer.operation === "Withdraw") {
    let amount = await inquirer.prompt({
      name: "amount",
      message: "Enter amount",
      type: "number",
    });
    myBalance -= amount.amount;
    console.log(`Your Remaining balance is: ${myBalance}`);
  } else if (operationAnswer.operation === "Balance") {
    console.log(`Your balance is: ${myBalance}`);
  } else if (operationAnswer.operation === "Exit") {
    console.log("Thank you for using our application");
    process.exit();
  }
} else {
  console.log("You entered incorrect pin");
}
