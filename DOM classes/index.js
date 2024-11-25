let calculatorDisplay = document.getElementById('calculatorDisplay');

function ce() {
    calculatorDisplay.innerText = '';
}

function push(num) {
    calculatorDisplay.innerText += num;  
}

function operate(operator) {
    push(` ${operator} `);
}

function calculate() {
    calculatorDisplay.innerText = eval(calculatorDisplay.innerText);  
}