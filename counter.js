let counterDisplay = document.querySelector('#counter-display');
let buttonMinus = document.querySelector('#button-minus');
let buttonPlus = document.querySelector('#button-plus');


let count = 0;

function plus() {
    count++;
    updateDisplay();
};

function minus() {
    count--;
    updateDisplay();
};

function updateDisplay(){
    counterDisplay.innerHTML = count;
};