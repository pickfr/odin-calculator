

let lastNumber = 0; // first number
let currentNumber = 0; // second number
let result = 0;
let op = null; // operator
let input = null;
let onNextClickClearDisplay = false;

let display;
let displayBuffer = 0;
let numpad;
let opPad;



//Temporary program start
buildResetUI();
setUpNumpad();
setUpOpPad();
setUpEqualsButton();
setUpClearButton();


function buildResetUI(){

    display = document.getElementById("display");
    lastNumber = 0;
    currentNumber = 0;
    op = null;
    input = null;
    onNextClickClearDisplay = false;
    displayBuffer = 0;

    display.textContent = displayBuffer;

}

function refreshUI(){

    display.textContent = displayBuffer;

}


// Button Setup
function setUpNumpad(){

    numpad = document.getElementsByClassName("numpadKey")
    
    for(i = 0; i < numpad.length; i++){
        numpad[i].addEventListener("click", (e) => numbPadPushed(e));
    }
}

function setUpOpPad(){

    opPad = document.getElementsByClassName("operator")

    for(i = 0; i < opPad.length; i++){
        opPad[i].addEventListener("click", (e) => opPadPushed(e));
    }

}

function setUpEqualsButton(){

    equalsButton = document.getElementById("equals");

    equalsButton.addEventListener("click", (e) => equalsPushed(e));

}

function setUpClearButton(){

    clearButton = document.getElementById("clear");

    clearButton.addEventListener("click", () => clearPushed());

}





// Button Programs

function numbPadPushed(e){

    input = e.target.getAttribute("id");

    if(onNextClickClearDisplay === true){ 
        displayBuffer = input;
        onNextClickClearDisplay = false;
    }

    console.log(typeof displayBuffer);

    if(displayBuffer == 0 || (displayBuffer == 0 && input == 0)){
     displayBuffer = input;
     onNextClickClearDisplay = false;
     }else{ displayBuffer += input; }
    
    refreshUI();

}

function opPadPushed(e){

    input = e.target.getAttribute("id");

    if(!currentNumber && displayBuffer != 0){

        currentNumber = parseInt(displayBuffer);
        displayBuffer = 0;
        refreshUI();

    } else {

        lastNumber = currentNumber;
        currentNumber = parseInt(displayBuffer);
        displayBuffer = operate(input, lastNumber, currentNumber);
        currentNumber = operate(input, lastNumber, currentNumber);
        result = operate(input, lastNumber, currentNumber);
        displayBuffer = 0;
        refreshUI();
    }



}

function equalsPushed(e){

    displayBuffer = result;
    refreshUI();    
    console.log(result);

}

function clearPushed(){

    buildResetUI();

}



function operate(operator, x ,y){

    let result;
    x = parseInt(x);
    y = parseInt(y);

    if (operator === "+"){result = add(x,y);}
    if (operator === "-"){result = subtract(x,y);}
    if (operator === "*"){result = multiply(x,y);}
    if (operator === "/"){result = divide(x,y);}
    console.log(`${x} ${operator} ${y} = ${result}`);
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
