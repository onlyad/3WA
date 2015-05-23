/**
 * Created by Dung on 2015-05-23.
 */

const asOPERATOR_PLUS = ["+", "plus", "addition"];
const asOPERATOR_MINUS = ["-", "minus", "subtraction", "moins"];
const WHAT_OPERATOR = 'Which Operation do you want to perform (+ -)?';
const WHAT_NUMBER1 = "What is the Number 1?";
const WHAT_NUMBER2 = "What is the Number 2?";


var fResult = 0;

//fResult = 0;

var fNumber1 = parseFloat(prompt(WHAT_NUMBER1));
var fNumber2 = parseFloat(prompt(WHAT_NUMBER2));
var sOperator = prompt(WHAT_OPERATOR); // Operator: + -

if (asOPERATOR_PLUS.indexOf(sOperator) > -1) {
    fResult = fNumber1 + fNumber2;
}
else if (asOPERATOR_MINUS.indexOf(sOperator) > -1) {
    fResult = fNumber1 - fNumber2;
}
document.write("<br> Result = " + fNumber1 + " " + sOperator + " " + fNumber2 + " = ");
document.write(fResult);