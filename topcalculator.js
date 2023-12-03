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
// function operate(numA, operator, numB) {
//   add(numA, numB);
// }
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
    console.log(numsOnDisp = disp.textContent);
  });
});

console.log(numsOnDisp);

// clear display using ac button
const clear = document.querySelector("#clear");

clear.addEventListener('click', () => {
  disp.textContent = "";
});
