// the basic calculations
// +
function add(a, b) {
  return a + b
}
console.log(add(1, 2));

// -
function sub(a, b) {
  return a - b
}
console.log(sub(100, 2));

// /
function divide(a, b) {
  return a / b
}
console.log(divide(150, 5));

// *
function mult(a, b) {
  return a * b
}
console.log(mult(40, 30));

// operations

// let num1;
// let op;
// let num2;
//
// storing the digit buttons
const digitBtns = document.querySelectorAll(".digit");

const disp = document.querySelector(".display");

let numsOnDisp;

// displays digit buttons on display
digitBtns.forEach((button) => {
  button.addEventListener('click', () => {
    if (disp.textContent.length < 8) {
      disp.textContent += button.id
    };
    numsOnDisp = disp.textContent;
    console.log(numsOnDisp = disp.textContent);
  });
});
console.log(numsOnDisp);

function operate(numA, operator, numB) {
  add(numA, numB);
}


// clear display using ac button
const clear = document.querySelector("#clear");

clear.addEventListener('click', () => {
  disp.textContent = "";
});

const del = document.querySelector("#delete");
del.addEventListener('click', () => {
  disp.textContent = disp.textContent.slice(0, -1);
  numsOnDisp = disp.textContent;
  console.log(numsOnDisp = disp.textContent);
});
