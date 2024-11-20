function multiply() {
    if(num1.value > 0 && num2.value>0){
        let ans = num1.value * num2.value;
        answer.innerText = ans;
    } else {
        answer.innerText = "getal is te laag"
    }
}
function divide() {
    if(num1.value > 0 && num2.value>0) {
        let ans = num1.value / num2.value;
        answer.innerText = ans;
    } else {
        answer.innerText = "getal is te laag";
    }
}
function add() {
    if(num1.value > 0 && num2.value>0) {
        let ans = Number(num1.value) + Number(num2.value);
        answer.innerText = ans;
    } else {
        answer.innerText = "getal is te laag";
    }
}
function minus() {
    if(num1.value > 0 && num2.value>0) {
        let ans = num1.value - num2.value;
        answer.innerText = ans;
    } else {
        answer.innerText = "getal is te laag";
    }
}