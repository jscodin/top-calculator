// the basic calculations
// +
function add(a, b) {
  console.log(a + b);
  disp.textContent += a + b;
  // return a + b;
};
// -
function sub(a, b) {
  console.log(a - b);
  disp.textContent += a - b;
  // return a - b
};
// /
function divide(a, b) {
  console.log(a / b);
  disp.textContent += a / b;
  // return a / b
};
// *
function mult(a, b) {
  console.log(a * b);
  disp.textContent += a * b;
  // return a * b
};

// Global variables
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".digit");
const disp = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");
let num1 = "";
let num2 = "";
let opr = "";
let numsCleared = false;

// displays digit buttons on display
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (disp.textContent.length < 8) {
      if (opr === "") {
        disp.textContent += number.id
        num1 += number.id;
        num1 = parseInt(num1);
        console.log(num1);
        // reset flag when number is clicked
        numsCleared = false;
      } else {
        if (!numsCleared && disp.textContent.length < 8) {
          disp.textContent = "";
          numsCleared = true;
        };
        disp.textContent += number.id;
        num2 += number.id;
        num2 = parseInt(num2);
        console.log(num2);
      };
    };
  });
});

operator.forEach((button) => {
  button.addEventListener('click', (e) => {
    opr = e.target.innerText;
    console.log(opr);
    if (opr === "=") {
      disp.textContent = "";
      operate();
    }
  });
});

// when user presses the = sign
function operate() {
  add(num1, num2);
};

// clear display & variables using ac button
const clear = document.querySelector("#clear");

clear.addEventListener('click', () => {
  disp.textContent = "";
  num1 = "";
  num2 = "";
  opr = "";
});
// delete last number input
const del = document.querySelector("#delete");
del.addEventListener('click', () => {
  disp.textContent = disp.textContent.slice(0, -1);
  numsOnDisp = disp.textContent;
});
