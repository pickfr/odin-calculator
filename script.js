

let x; // first number
let y; // second number
let op; // operator
let input = 0;

let display;
let displayBuffer = 0;
let numpad;
let opPad;



//Temporary program start
buildUI();
setUpNumpad();


function buildUI(){

    display = document.getElementById("display");
    display.textContent = displayBuffer

}

function refreshUI(){

    display.textContent = displayBuffer;

}

function setUpNumpad(){

    numpad = document.getElementsByClassName("numpadKey")
    
    for(i = 0; i < numpad.length; i++){

        numpad[i].addEventListener("click", (e) => {
            
           input = e.target.getAttribute("id");
           if(result === 0){displayBuffer = input;}
           result += input;
           refreshUI();

        })

    }
}

function setUpOpPad(){

    opPad = document.getElementsByClassName("operator")

}




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
