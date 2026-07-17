function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2)
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}

function divide(num1, num2) {
    return Number(num1) / Number(num2)
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
let separator = 0
let screenText = []
let realScreenText = ""
let waitingForSecond = false
let operators = ["+","-","/","*","="]


function resetValues() {
    screenText = []
    realScreenText = ""
    number1 = 0
    operator = 0
    number2 = 0
    let waitingForSecond = false
}

function onButtonClick(event) {
    realScreenText += event.target.textContent
    if (event.target.textContent === "A/C" || screenText.length === 0 ) {
        resetValues()
        }   
    if (operators.includes(event.target.textContent) === false) {
        console.log("digit used")
        if (waitingForSecond === false) {
            number1 += event.target.textContent
            } else {
                number2 += event.target.textContent
                }
        }
    if (operators.includes(event.target.textContent)) {
        console.log("operator used")
        }
        if (waitingForSecond === false) {
            waitingForSecond = true
        } else {
            number1 = operate(number1, operator, number2)
            number2 = 0
        } 
        if (event.target.textContent === "=") {
            realScreenText = operate(number1, operator, number2)
        }
        operator = event.target.textContent

    if (event.target.textContent === "DEL") {
        realScreenText = realScreenText.split("")
        realScreenText.splice(realScreenText.length-4, 4)
        screenText = realScreenText
        realScreenText = screenText.join("")
        if (realScreenText === "DE") {
            resetValues()
        }

    
    display.textContent = realScreenText
    console.log(`number1: ${number1}`)
    console.log(`number2: ${number2}`)
}
}

const btns = document.querySelectorAll(".button")
const display = document.querySelector(".screen")
btns.forEach(btn => {
btn.addEventListener("click", onButtonClick)})