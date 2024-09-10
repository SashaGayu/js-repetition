const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const submitBtn = document.querySelector('#submit');
const resultElement = document.querySelector('#result');

let action;

// Определение действия
plusBtn.onclick = () => { action = '+'; };
minusBtn.onclick = () => { action = '-'; };
multiplyBtn.onclick = () => { action = '*'; };
divideBtn.onclick = () => { action = '/'; };

// Отобразить результат
function printResult(result) {
    resultElement.style.color = result < 0 ? 'red' : 'green';
    resultElement.textContent = result;
}

// Вычислить результат в зависимости от действия
function computeResultWithActions(inp1, inp2, actionSymbol) {
    const num1 = parseInt(inp1.value);
    const num2 = parseInt(inp2.value);

    switch (actionSymbol) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
    }
}

submitBtn.onclick = () => {
    const result = computeResultWithActions(input1, input2, action);
    printResult(result);
};
