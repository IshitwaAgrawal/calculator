const numbers = document.querySelectorAll(".number");
const calciScreen = document.querySelector('.calci-screen');
const operators = document.querySelectorAll(".operator");
const allClear = document.querySelector('.all-clear');
const equalBtn = document.querySelector('.equal-sign');
const percentageBtn = document.querySelector('.percentage');
const clear = document.querySelector('.clear');

let expr = '';
const reset = () =>{
    calciScreen.value = "0";
    expr = "";
};
window.onload = reset;

clear.addEventListener('click',() => {
    let t = calciScreen.value.toString();
    console.log(t.indexOf('%'));
    //if(((t.charAt(t.length-1))===("%"))){
    if(t.indexOf("%")!=-1){
        expr = expr.substring(0,expr.length-1);
        let r = eval(expr);
        r = r*100;
        expr = ""+r;
        console.log('inside');
        t = t.substring(0,t.length-1);
        calciScreen.value = t;
    }
    else{
        expr = expr.substring(0,expr.length-1);
        calciScreen.value = expr;
    }
});

equalBtn.addEventListener('click', () =>{
    let res = eval(expr);
    calciScreen.value = res;
});

allClear.addEventListener('click',() => {
    reset();
});
percentageBtn.addEventListener('click',() => {
    let r = eval(expr);
    calciScreen.value = r+"%";
    r = r/100;
    console.log(r);
    expr = r+'*';

});
const updateScreen = (number) =>{
    if(calciScreen.value == "0"){
        calciScreen.value = "";
    }
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