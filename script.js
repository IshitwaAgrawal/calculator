const numbers = document.querySelectorAll(".number");
const calciScreen = document.querySelector('.calci-screen');
const operators = document.querySelectorAll(".operator");
const allClear = document.querySelector('.all-clear');
const equalBtn = document.querySelector('.equal-sign');
const percentageBtn = document.querySelector('.percentage');

let expr = '';

equalBtn.addEventListener('click', () =>{
    let res = eval(expr);
    calciScreen.value = res;
});

allClear.addEventListener('click',() => {
    calciScreen.value = "";
    expr = '';
});
percentageBtn.addEventListener('click',() => {
    let r = eval(expr);
    calciScreen.value = r+"%";
    r = r/100;
    console.log(r);
    expr = r+'*';

});
const updateScreen = (number) =>{
    expr += number;
    calciScreen.value += number;
};

numbers.forEach((number) =>{
    number.addEventListener("click",() => {
        updateScreen(number.value);
    });
});
operators.forEach((op) => {
    op.addEventListener("click",() => {
        updateScreen(op.value);
    });
});