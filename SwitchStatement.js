/*The switch statement in Java evaluates an expression and executes the block of code corresponding to the matching case. 
It is an alternative to using multiple if-else statements for conditional logic.

SYNTAX:

switch (expression) {
    case value1:
        // code to execute if expression equals value1
        break;
    case value2:
        // code to execute if expression equals value2
        break;
    // additional cases
    default:
        // code to execute if no cases match
}
*/

//CALCULATOR PROGRAM//

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

let result;

// Perform the calculation using switch
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero is not allowed.";
        }
        break;
    default:
        result = "Error: Invalid operator.";
}

// Display the result
console.log(`Result: ${result}`);
alert(`Result: ${result}`);