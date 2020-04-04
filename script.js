const numbers = document.querySelectorAll(".number");
const calciScreen = document.querySelector('.calci-screen');
const operators = document.querySelectorAll(".operator");
const allClear = document.querySelector('.all-clear');
const equalBtn = document.querySelector('.equal-sign');
let currentInput = '0';
let calculationOperator = '';

equalBtn.addEventListener('click', () =>{
    let res = eval(calciScreen.value);
    calciScreen.value = res;
});

allClear.addEventListener('click',() => {
    calciScreen.value = "";
});
const updateScreen = (number) =>{
    calciScreen.value += number;
};

numbers.forEach((number) =>{
    number.addEventListener("click",() => {
        console.log(number.value+" button is pressed.");
        updateScreen(number.value);
    });
});
operators.forEach((op) => {
    op.addEventListener("click",() => {
        console.log(op.value+" Operator is pressed.");
        updateScreen(op.value);
    });
});