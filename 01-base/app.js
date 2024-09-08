const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const submitBtn = document.querySelector('#submit')
let resultElement = document.querySelector('#result');
let action;

plusBtn.onclick = () => {
    action = '+'
}

minusBtn.onclick = () => {
    action = '-'
}

multiplyBtn.onclick = () => {
    action = '*'
}

divideBtn.onclick = () => {
    action = '/'
}

function printResult(result) {
    if(result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeResultWithActions(inp1, inp2, actionSymbol) {
    const num1 = parseInt(inp1.value);
    const num2 = parseInt(inp2.value);
    switch (actionSymbol) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
    }
}

submitBtn.onclick = () => {
    const result = computeResultWithActions(input1, input2, action)
    printResult(result)
}
