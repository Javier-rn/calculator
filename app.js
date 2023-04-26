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

const num1 = 3;
const num2 = 5;
const operator = 'multiply';

function operate(num1, num2, operator) {
  if (operator === 'add') {
    return add(num1, num2);
  } else if (operator === 'subtract') {
    return subtract(num1, num2);
  } else if (operator === 'multiply') {
    return multiply(num1, num2);
  } else if (operator === 'divide') {
    return divide(num1, num2);
  }
}

const numBtns = document.querySelectorAll('.num');
const operationBtns = document.querySelectorAll('.operation');

numBtns.forEach((num) => {
  num.addEventListener('click', function (e) {
    const calcDisplay = document.querySelector('.calculation');
    const calcText = calcDisplay.textContent;
    const lastChar = calcText.charAt(calcText.length - 1);
    if (typeof parseInt(lastChar) === 'number') {
      calcDisplay.textContent += e.target.id;
    }
    if (!calcDisplay.textContent) {
      calcDisplay.textContent = e.target.id;
    }
  });
});

operationBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const calcDisplay = document.querySelector('.calculation');
    const calcText = calcDisplay.textContent;
    const lastChar = calcText.charAt(calcText.length - 1);
    if (typeof lastChar === 'number') {
      console.log(lastChar);
    }
  });
});
