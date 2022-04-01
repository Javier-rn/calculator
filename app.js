const allBtns = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');
const operationBtns = document.querySelectorAll('.operation');
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

allBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        if (e.target.id === 'add') {
            displayValue += ' + ';
        } else if (e.target.id === 'subtract') {
            displayValue += ' - ';
        } else if (e.target.id === 'multiply') {
            displayValue += ' * ';
        } else if (e.target.id === 'divide') {
            displayValue += ' / ';
        } else {
            displayValue += e.target.id;
        }
        display.textContent = displayValue;

        console.log(displayValue.split(''));
    });
});
