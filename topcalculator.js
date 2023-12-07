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
// Global variables
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".digit");
const disp = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");


let num1 = "";
let num2 = "";
let opr = "";
let numsOnDisp;

// displays digit buttons on display
// numbers.forEach((number) => {
//   number.addEventListener('click', () => {
//     if (disp.textContent.length < 8) {
//       disp.textContent += number.id
//     };
//     if (opr === "") {
//       num1 += disp.textContent;
//       console.log(num1);
//     };
//   });
// });
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (disp.textContent.length < 8) {
      disp.textContent += number.id
      if (opr === "") {
        num1 += number.id;
        console.log(num1);
      } else {
        disp.textContent = "";
        disp.textContent += number.id;
        num2 += number.id;
        console.log(num2);
      }
    };
  });
});

operator.forEach((button) => {
  button.addEventListener('click', (e) => {
    opr = e.target.innerText;
    console.log(opr);
    // opr = button.id;
    // console.log(numsOnDisp += button.innerText);
    // numsOnDisp += button.innerText;
    // disp.textContent += button;
    //
    // console.log(opr = button.id);
  });
});

// store operator buttons
// operator.forEach((button) => {
//   button.addEventListener('click', () => {
//     opr = button.id;
//
//     console.log(opr = button.id);
//   });
// });


// when user presses the = sign


function operate(numA, operator, numB) {

  add(numA, numB);

}


// clear display using ac button
const clear = document.querySelector("#clear");

clear.addEventListener('click', () => {
  disp.textContent = "";
});
// delete last number input
const del = document.querySelector("#delete");
del.addEventListener('click', () => {
  disp.textContent = disp.textContent.slice(0, -1);
  numsOnDisp = disp.textContent;
});
