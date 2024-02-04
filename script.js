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
    if (operator == "add") {
        return add(num1, num2);
    } else if (operator == "subtract") {
        return subtract(num1, num2) 
    } else if (operator == "multiply") {
        return multiply(num1, num2)
    } else if (operator == "divide") {
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

const clearBtn = document.getElementsByClassName('clear')[0];
clearBtn.addEventListener("click", () => display.innerHTML = "0");

