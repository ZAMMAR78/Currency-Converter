import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_anwser = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter your currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter to currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'Amount',
        message: 'Enter your amount',
        type: 'number'
    }
]);
let userfromcurrency = user_anwser.from;
let usertocurrency = user_anwser.to;
let fromAmount = currency[userfromcurrency];
let toAmount = currency[usertocurrency];
let amount = user_anwser.amount;
let baseamount = amount / fromAmount;
let converterdamount = baseamount * toAmount;
console.log(converterdamount);
