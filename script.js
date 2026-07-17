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

let number1 = null
let operator = 0
let number2 = null
let separator = 0
let screenText = []
let realScreenText = ""
let operators = ["+","-","/","*","="]


function resetValues() {
    screenText = []
    realScreenText = ""
    number1 = null
    operator = 0
    number2 = null
}

function onButtonClick(event) {
    screenText.push(event.target.textContent)
    realScreenText += event.target.textContent
    if (event.target.textContent === "A/C" || screenText.length === 0 ) {
        resetValues()
    }   if (operators.includes(event.target.textContent)) {
        console.log("operator used")
        if (number1 === null) {
            const lst1 = screenText.slice(0, screenText.length-1)
            number1 = lst1.join("")
            separator = screenText.length
        
        } else if (number1 !== null) {
            const lst2 = screenText.slice(separator, screenText.length-1)
            number2 = lst2.join("")
            number1 = operate(number1, operator, number2)
            screenText = [number1]
            }
        operator = screenText[screenText.length-1]
        console.log(`operator: ${operator}`)
        if (event.target.textContent === "=") {
                screenText = [number1]
                realScreenText = screenText.join("")
                console.log(`Screen shows: ${realScreenText}`)
                number1 = null
                operator = 0
                number2 = null
            }
        if (operators.includes(operator) !== true || operator === "=") {
            operator = 0
        }

    } if (event.target.textContent === "DEL") {
        realScreenText = realScreenText.split("")
        realScreenText.splice(realScreenText.length-4, 4)
        screenText = realScreenText
        realScreenText = screenText.join("")
    }
    display.textContent = realScreenText
    console.log(`number1: ${number1}`)
    console.log(`Current code: ${screenText}`)
    console.log(`number2: ${number2}`)
}

const btns = document.querySelectorAll(".button")
const display = document.querySelector(".screen")
btns.forEach(btn => {
btn.addEventListener("click", onButtonClick)})