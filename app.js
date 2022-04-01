const allBtns = document.querySelectorAll('.btn');
const operationBtns = document.querySelectorAll('.operation');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');
const display = document.querySelector('.display');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

let displayValue = '';

let num1 = '';
let num2 = '';
let operation;

allBtns.forEach((button) => {
    button.addEventListener('click', function (e) {
        if (operation === undefined) {
            num1 += e.target.id;
            displayValue += e.target.id;
            display.textContent = displayValue;
        } else {
            num2 += e.target.id;
            displayValue += e.target.id;
            display.textContent = displayValue;
        }
    });
});

operationBtns.forEach((button) => {
    button.addEventListener('click', function (e) {
        if (num1 && num2) {
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            num1 = operate(operation, num1, num2);
            num2 = '';
            displayValue = num1;
            display.textContent = displayValue;
        }
        if (e.target.id === '+') {
            operation = add;
            displayValue += ' ' + e.target.id + ' ';
            display.textContent = displayValue;
        } else if (e.target.id === '-') {
            operation = subtract;
            displayValue += ' ' + e.target.id + ' ';
            display.textContent = displayValue;
        } else if (e.target.id === '*') {
            operation = multiply;
            displayValue += ' ' + e.target.id + ' ';
            display.textContent = displayValue;
        } else if (e.target.id === '/') {
            operation = divide;
            displayValue += ' ' + e.target.id + ' ';
            display.textContent = displayValue;
        }
    });
});

equalBtn.addEventListener('click', function () {
    if (num1 && num2) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        num1 = operate(operation, num1, num2);
        num2 = '';
        displayValue = num1;
        display.textContent = displayValue;
    }
});
