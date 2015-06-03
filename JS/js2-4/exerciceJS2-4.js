var fNumber1 = parseFloat(prompt('number 1?'));
var fNumber2 = parseFloat(prompt('number 2?'));
var sOperator = prompt('Operator ? (+, -, *, /)');
var fResult = 0;

// selon la valeur de l'opérateur
switch (sOperator) {
    // si c'est un plus
    case '+':
        fResult = fNumber1 + fNumber2;
        break;
    // si c'est un moins
    case '-':
        fResult = fNumber1 - fNumber2;
        break;
    // si c'est une étoile
    case '*':
        fResult = fNumber1 * fNumber2;
        break;
    // si c'est un slash
    case '/':
        fResult = fNumber1 / fNumber2;
        break;
    // autre valeur...
    default:
        break;
}


document.write("Result : " + fNumber1 + " " + sOperator + " " + fNumber2 + " = " + fResult);