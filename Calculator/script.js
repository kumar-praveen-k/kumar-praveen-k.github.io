let input = ''
let cummulativeResult = ''
const digits = '0123456789.'
const operators = '/*-+%'
function updateScreen() {
    if(input.length > 12){
        document.getElementById('curr').style.fontSize = "1rem"
    }
    else{
        document.getElementById('curr').style.fontSize = "2rem"
    }
    if(input.length > 20 || cummulativeResult.length > 20 ){
        alert("too large number");
        cummulativeResult = '';
        input = '';
    }
    document.getElementById('prev').innerHTML = cummulativeResult;
    document.getElementById('curr').innerHTML = input;
}

function handleButtonClick(char) {
    if (digits.includes(char)) handleDigitInput(char)
    else if (operators.includes(char)) handleOperator(char)
    else if (char === 'AC') handleAllClear()
    else if (char === 'C') handleClear()
    else if (char == '=') handleEqual()
}

function handleOperator(operator) {
    if(cummulativeResult.length == 0 && input.length == 0) {
        cummulativeResult="";
        input = operator;
    }
    else if (!cummulativeResult) {
        cummulativeResult = input + ' ' +operator
    } else {
        cummulativeResult = eval(cummulativeResult + input)
        cummulativeResult += ' ' + operator;
    }
    input = ''
    updateScreen();
}

function handleDigitInput(digit) {
    input += digit
    console.log(input);
    updateScreen();
}

function handleAllClear() {
    cummulativeResult = ''
    input = ''
    updateScreen();
}

function handleClear() {
    if(input.length == 0) {
        cummulativeResult = cummulativeResult.slice(0, -1);
    }else{
        input = input.slice(0, -1)
    }
    updateScreen();
}
function handleEqual(){
    input = eval(cummulativeResult + input);
    cummulativeResult = '';
    updateScreen();
}