// the basic calculations
// +
function add(a, b) {
  console.log(a + b);
  // return a + b;
  disp.textContent += a + b;
};
// -
function sub(a, b) {
  return a - b
};
// /
function divide(a, b) {
  return a / b
};
// *
function mult(a, b) {
  return a * b
};

const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".digit");
const disp = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");
let num1 = "";
let num2 = "";
let opr = "";
let numsOnDisp;

// displays digit buttons on display
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (disp.textContent.length < 8) {
      disp.textContent += number.id
      if (opr === "") {
        num1 += number.id;
        num1 = parseInt(num1);
        console.log(num1);
      } else {
        if (disp.textContent.length < 8) {
          disp.textContent = "";
          disp.textContent += number.id;
          num2 += number.id;
          num2 = parseInt(num2);
          console.log(num2);
        }
      }
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
