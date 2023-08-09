

let x; // first number
let y; // second number
let op; // operator
let result;



function operate(operator, x ,y){

    if (operator === "+"){result = add(x,y);}
    if (operator === "-"){result = subtract(x,y);}
    if (operator === "*"){result = multiply(x,y);}
    if (operator === "/"){result = divide(x,y);}

    return result;

}

function add(x,y){

    return x + y;

}

function subtract(x,y){

    return x - y;

}

function multiply(x,y){

    return x * y;

}

function divide(x,y){

    return x / y;

}
