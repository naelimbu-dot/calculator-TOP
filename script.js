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
    if (num2 === "0") {
        return "who do you think you are"
    }
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

let number1 = ""
let operator = ""
let number2 = ""
let realScreenText = ""
let waitingForSecond = false
let operators = ["+","-","/","*","="]
let result = false

function resetValues() {
    realScreenText = ""
    number1 = ""
    operator = ""
    number2 = ""
    waitingForSecond = false
}

function onButtonClick(event) {
    if (result === false) {
        realScreenText += event.target.textContent
    } else if (result === true) {
        realScreenText = ""
        realScreenText += event.target.textContent
        result = false
    }
    if (event.target.textContent === "A/C") {
        resetValues()
        display.textContent = realScreenText
        console.log(`number1: ${number1}`)
        console.log(`number2: ${number2}`)
        return
        }   

    if (operators.includes(event.target.textContent) === false) {
        console.log("digit used")
        if (waitingForSecond === false) {
            console.log("digit added")
            number1 += event.target.textContent
            } 
        if (waitingForSecond === true) {
            number2 += event.target.textContent
            console.log("shouldm")
            }
        }

    if (operators.includes(event.target.textContent) === true) {
        console.log("operator used")
        if (waitingForSecond === true && event.target.textContent !== "=") {
            console.log("GO")
            number1 = operate(number1, operator, number2)
            realScreenText = number1 + event.target.textContent
            number2 = ""
        } 
        else if (waitingForSecond === false) {
            waitingForSecond = true
        } 
        if (event.target.textContent === "=" && operator === "=") {
            console.log("ERROR")
            resetValues()
        } 
        else if (event.target.textContent === "=") {
            console.log(number1, operator, number2)
            number1 = operate(number1, operator, number2)
            realScreenText = number1
            number1 = ""
            operator = ""
            number2 = ""
            waitingForSecond = false
            result = true
        }
        operator = event.target.textContent
    }

    if (event.target.textContent === "DEL") {
        if (waitingForSecond === false) {
            console.log("poo")
            number1 = number1.slice(0, -4);
            realScreenText = realScreenText.slice(0, -4);
        } else {
            number2 = number2.slice(0, -4);
            realScreenText = realScreenText.slice(0, -4);
        }
    }
    
    display.textContent = realScreenText
    console.log(`number1: ${number1}`)
    console.log(`number2: ${number2}`)
    if (number1 === "who do you think you are") {
        resetValues()
    }
}

const btns = document.querySelectorAll(".button")
const display = document.querySelector(".screen")
btns.forEach(btn => {
btn.addEventListener("click", onButtonClick)})