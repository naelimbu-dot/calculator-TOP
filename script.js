function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2)
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "*") {
        return multiply(num1, num2)
    } else if (operator === "/") {
        return divide(num1, num2)
    }
}

let number1 = 0
let operator = 0
let number2 = 0
let screenText = 53

const btns = document.querySelectorAll(".button")
const display = document.querySelector(".screen")
btns.forEach(btn => {
btn.addEventListener("click", function() {
    console.log("clicked")
    display.textContent = 1
})
})