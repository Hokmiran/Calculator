let display2 = document.getElementById("display-2")
let result = document.getElementById("result")
let buttons = document.querySelectorAll(".buttons")
let equal = document.getElementById("buttonEqual")
let plus = document.getElementById("buttonPlus")
let minus = document.getElementById("buttonMinus")
let multiply = document.getElementById("buttonMultiply")
let divide = document.getElementById("buttonDivision")
let allClear = document.getElementById("buttonAllClear")
let lastClear = document.getElementById("buttonLastOneClear");
let dot = document.getElementById("buttonDot")
let percent = document.getElementById("buttonPercent")
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        display2.innerText += btn.innerText
    });
});
dot.addEventListener("click", () => {
    if (display2.innerText.substr(-1) == "-" || display2.innerText.substr(-1) == "*" ||
        display2.innerText.substr(-1) == "+" || display2.innerText.substr(-1) == "%" ||
        display2.innerText.substr(-1) == "/") {
        display2.innerText = display2.innerText.replace(/.$/, ("."))
    }
    else if (display2.innerText.substr(-1) == "." && dot.innerText == ".") {
        return false
    }
    else if (display2.innerText == 0 && dot.innerText == ".") {
        display2.innerText = "0."
    }
    else {
        display2.innerText += dot.innerText
    }
});
plus.addEventListener("click", () => {
    if (display2.innerText.substr(-1) == "-" || display2.innerText.substr(-1) == "*" ||
        display2.innerText.substr(-1) == "." || display2.innerText.substr(-1) == "%" ||
        display2.innerText.substr(-1) == "/") {
        display2.innerText = display2.innerText.replace(/.$/, ("+"))
    }
    else if (display2.innerText == 0 && plus.innerText == "+") {
        return false
    }
    else if (display2.innerText.substr(-1) == "+" && plus.innerText == "+") {
        return false
    }
    else {
        display2.innerText += plus.innerText
    }
});
minus.addEventListener("click", () => {
    if (display2.innerText.substr(-1) == "+" || display2.innerText.substr(-1) == "*" ||
        display2.innerText.substr(-1) == "." || display2.innerText.substr(-1) == "%" ||
        display2.innerText.substr(-1) == "/") {
        display2.innerText = display2.innerText.replace(/.$/, ("-"))
    }
    else if (display2.innerText == 0 && minus.innerText == "-") {
        return false
    }
    else if (display2.innerText.substr(-1) == "-" && minus.innerText == "-") {
        return false
    }
    else {
        display2.innerText += minus.innerText
    }

});
multiply.addEventListener("click", () => {
    if (display2.innerText.substr(-1) == "+" || display2.innerText.substr(-1) == "-" ||
        display2.innerText.substr(-1) == "." || display2.innerText.substr(-1) == "%" ||
        display2.innerText.substr(-1) == "/") {
        display2.innerText = display2.innerText.replace(/.$/, ("*"))
    }
    else if (display2.innerText == 0 && multiply.innerText == "*") {
        return false
    }
    else if (display2.innerText.substr(-1) == "*" && multiply.innerText == "*") {
        return false
    }
    else {
        display2.innerText += multiply.innerText
    }
});
divide.addEventListener("click", () => {
    if (display2.innerText.substr(-1) == "+" || display2.innerText.substr(-1) == "*" ||
        display2.innerText.substr(-1) == "." || display2.innerText.substr(-1) == "%" ||
        display2.innerText.substr(-1) == "-") {
        display2.innerText = display2.innerText.replace(/.$/, ("/"))
    }
    else if (display2.innerText == 0 && divide.innerText == "/") {
        return false
    }
    else if (display2.innerText.substr(-1) == "/" && divide.innerText == "/") {
        return false
    }
    else {
        display2.innerText += divide.innerText
    }
});
percent.addEventListener("click", () => {
    if (display2.innerText.substr(-1) == "-" || display2.innerText.substr(-1) == "*" ||
        display2.innerText.substr(-1) == "." || display2.innerText.substr(-1) == "+" ||
        display2.innerText.substr(-1) == "/") {
        display2.innerText = display2.innerText.replace(/.$/, ("%"))
    }
    else if (display2.innerText == 0 && percent.innerText == "%") {
        return false
    }
    else if (display2.innerText.substr(-1) == "%" && percent.innerText == "%") {
        return false
    }
    else {
        display2.innerText += percent.innerText
    }
});
equal.addEventListener("click", () => {
    result.innerText = eval(display2.innerText)
});
allClear.addEventListener("click", () => {
    display2.innerText = " "
    result.innerText = "0"
});
lastClear.addEventListener("click", () => {
    result.innerText = "0"
    display2.innerText = display2.innerText.slice(0, -1)
});
