/**
 * Created by Dung on 2015-05-22.
 */

const MSG_ERROR1 = "Cannot perform this operation!";
const WHAT_OPERATOR = "Which Operation do you want to perform (+ - * /)?";
const WHAT_NUMBER1 = "What is the Number 1?";
const WHAT_NUMBER2 = "What is the Number 2?";


var iError = 0; // If user give an operator undefined, we set iError to 1.
var fResult = 0;

//fResult = 0;

var fNumber1 = parseFloat(prompt(WHAT_NUMBER1));
var fNumber2 = parseFloat(prompt(WHAT_NUMBER2));
var sOperator = prompt(WHAT_OPERATOR); // Operator: + - * /

switch (sOperator) {
    case "+":
    case "plus":
        fResult = fNumber1 + fNumber2;
        break;
    case "-":
    case "minus":
        fResult = fNumber1 - fNumber2;
        break;
    case "*":
    case "multiply":
        fResult = fNumber1 * fNumber2;
        break;
    case "/":
    case "divide":
        if (fNumber2 == 0) {
            iError = 1;
        }
        else {
            fResult = fNumber1 / fNumber2;
        }
        break;
    default :
        iError = 1;
        break;
}
document.write("<br> Result = " + fNumber1 + " " + sOperator + " " + fNumber2 + " = ");

if (iError == 0) {
    document.write(fResult);
}
else {
    document.write(MSG_ERROR1);
}
 //Bonus

