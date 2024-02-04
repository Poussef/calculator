let numOnScreen = 0;

function add (num1, num2) {
    return num1 + num2;
};

function subtract (num1, num2) {
    return num1 - num2;
};

function multiply (num1, num2) {
    return num1 * num2;
};

function divide (num1, num2) {
    return num1 / num2;
};

function operate (operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2) 
    } else if (operator == "x") {
        return multiply(num1, num2)
    } else if (operator == "÷") {
        return divide(num1, num2)
    }
};

const display = document.getElementById('output');
const numbBtns = document.querySelectorAll(".numbers");
numbBtns.forEach(btn => {
   btn.addEventListener("click", () => {
        if (display.innerHTML[0] === "0") {
            display.innerHTML = btn.innerHTML;
        } else {
            display.innerHTML += btn.innerHTML; 
        };
   });
});

const operatorBtns = document.querySelectorAll('.operators');
let num1 = 0;
let num2 = 0;
let operatorActive = false;
let operator = "";
operatorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        operator = btn.innerHTML;
        operatorActive = true;
        num1 = display.innerHTML;
    });
});

const clearBtn = document.getElementsByClassName('clear')[0];
clearBtn.addEventListener("click", () => display.innerHTML = "0");