
input = document.getElementById('input');
console.log(input.innerText);

buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener("click", (e) => enterInput(e.target)));

let operatorSelected = "";
let decimal = false;

function enterInput (number) {
    if (number.innerText === "CLEAR") {
        input.innerText = "";
        operatorSelected = "";
        return;
    }

    if (number.innerText === "DELETE") {
        if (checkLastNumber() === "operator") operatorSelected = "";
        if (input.innerText.length > 0) {
            input.innerText = input.innerText.slice(0, input.innerText.length - 1);
        }
        return;
    }
    if (input.innerText.length > 14) return;
    if (number.classList.contains("operator")) {
        if (!operatorSelected) {
            if (number.innerText === "=") return;
            operatorSelected = number.innerText;
        }
        else 
        {
            if (checkLastNumber() === "number") {
                console.log(Number(input.innerText[input.innerText.length - 1]));
                answer = calculate();
                input.innerText = answer; 
                operatorSelected = "";
                return;
            }
            else{
                return;
            }
        }
    }
    input.innerText += number.innerText;
}

function checkLastNumber() {
    const lastNumber = Number(input.innerText[input.innerText.length - 1]);
    if (lastNumber) return "number";
    else return "operator"
}

function calculate() {
    console.log(operatorSelected)
    const string = input.innerText.split(operatorSelected);
    console.log(string);
    const a = Number(string[0]);
    const b = Number(string[1]);
    if (!a || !b) console.error("No a or b");
    console.log(`Calculation: ${a} ${operatorSelected} ${b}`)
    switch (operatorSelected) {
        case "x":
            return a * b;
        case "÷":
            return a / b;
        case "+":
            return a + b;
        case "-":
            return a - b;
    }
}



