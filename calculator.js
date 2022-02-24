const readline = require("readline-sync");
var num1 = readline.questionInt("Please enter your first number: ");
var num2 = readline.questionInt("Please enter your second number: ");
var enterOperator = readline.question("Please enter the operation you want to perform: +, -, *, / ");



//add num1 & num2
function addTwoNums(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNums);

//subtract num1 & num2
function subTwoNums(num1, num2) {
    return num1 - num2;
}
console.log(addTwoNums);

//multiply num1 & num2
function mulTwoNums(num1, num2) {
    return num1 * num2;
}
console.log(mulTwoNums);

//divide num1 & num2
function divTwoNums(num1, num2) {
    return num1 / num2;
}
console.log(divTwoNums);



//function defs +, -, *, / of num1 & num2
function calculator(num1, num2, enterOperator) {
    if (enterOperator == "add") {
        console.log("When you add num1: " + num1 + "& num2: " + num2 + 
        "the result is: " + addTwoNums(num1, num2));
    }
    else if(enterOperator == "sub"){
        console.log("When you sub num1: " + num1 + "& num2: " + num2 + 
        "the result is: " + subTwoNums(num1, num2));
    }
    else if(enterOperator == "mul"){
        console.log("When you mul num1: " + num1 + "& num2: " + num2 + 
        "the result is: " + mulTwoNums(num1, num2));
    }    
    else if(enterOperator == "div"){
        console.log("When you div num1: " + num1 + "& num2: " + num2 + 
        "the result is: " + divTwoNums(num1, num2));
    }
}



myCalculator(num1, num2, enterOperator);