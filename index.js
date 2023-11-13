// Calculator code

let btnDot = document.querySelector('[data-dot]')
btnDot.addEventListener('click', () => addValue(btnDot.textContent))

let btn0 = document.querySelector('[data-0]')
btn0.addEventListener('click', () => addValue(btn0.textContent))

let btn1 = document.querySelector('[data-1]')
btn1.addEventListener('click', () => addValue(btn1.textContent))

let btn2 = document.querySelector('[data-2]')
btn2.addEventListener('click', () => addValue(btn2.textContent))

let btn3 = document.querySelector('[data-3]')
btn3.addEventListener('click', () => addValue(btn3.textContent))

let btn4 = document.querySelector('[data-4]')
btn4.addEventListener('click', () => addValue(btn4.textContent))

let btn5 = document.querySelector('[data-5]')
btn5.addEventListener('click', () => addValue(btn5.textContent))

let btn6 = document.querySelector('[data-6]')
btn6.addEventListener('click', () => addValue(btn6.textContent))

let btn7 = document.querySelector('[data-7]')
btn7.addEventListener('click', () => addValue(btn7.textContent))

let btn8 = document.querySelector('[data-8]')
btn8.addEventListener('click', () => addValue(btn8.textContent))

let btn9 = document.querySelector('[data-9]')
btn9.addEventListener('click', () => addValue(btn9.textContent))

let btnPlus = document.querySelector('[data-plus]')
btnPlus.addEventListener('click', () => addValue(btnPlus.textContent))

let btnMinus = document.querySelector('[data-Minus]')
btnMinus.addEventListener('click', () => addValue(btnMinus.textContent))

let btnMulti = document.querySelector('[data-Multi]')
btnMulti.addEventListener('click', () => addValue('*'))

let btnDiv = document.querySelector('[data-Div]')
btnDiv.addEventListener('click', () => addValue(btnDiv.textContent))

let btnClear = document.querySelector('[data-Clear]')
btnClear.addEventListener('click', () => clearDisplay())

let btnEqual = document.querySelector('[data-Equal]')
btnEqual.addEventListener('click', () => evaluateExpression())

let display = document.querySelector('[data-answer]')

function addValue(value) {
    if (value === '*') {
        value = 'x';
    }
    display.textContent += value;
}
function clearDisplay() {
    display.textContent = '';
}
function evaluateExpression() {
    try {
        const result = calculate(display.textContent);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}
function calculate(expression) {
    // Replace "x" with "*" and "÷" with "/"
    expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
    try {
        return eval(expression);
    } 
    catch (error) {
        return 'Error';
    }
}