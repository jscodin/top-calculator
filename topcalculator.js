// Global variables
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".digit");
const disp = document.querySelector(".display");
const equals = document.querySelector("#equal");
const operator = document.querySelectorAll(".operator");
let currentNum = "";
let previousNum = "";
let opr = "";
let numsCleared = false;

// the basic calculations
function add(a, b) {
  console.log(a + b);
  disp.textContent += a + b;
  // currentNum = disp.textContent;
  // return a + b;
};

function sub(a, b) {
  console.log(a - b);
  disp.textContent += a - b;
  // currentNum += a - b;
  // return a - b
};

function divide(a, b) {
  console.log(a / b);
  disp.textContent += a / b;
  // currentNum += a / b;
  // return a / b
};

function multiply(a, b) {
  console.log(a * b);
  disp.textContent += a * b;
  // currentNum += a * b;
  // return a * b
};

// displays digit buttons on display
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (disp.textContent.length < 8) {
      if (opr === "") {
        disp.textContent += number.id
        currentNum += number.id;
        currentNum = parseInt(currentNum);
        console.log(currentNum);
        // reset flag when number is clicked
        numsCleared = false;
      } else {
        if (!numsCleared && disp.textContent.length < 8) {
          disp.textContent = "";
          numsCleared = true;
        };
        disp.textContent += number.id;
        previousNum += number.id;
        previousNum = parseInt(previousNum);
        console.log(previousNum);
      };
    };
  });
});

// runs operate fn when equals is pressed
equals.addEventListener('click', (e) => {
  solution = e.target.innerText;
  console.log(solution);
  if (solution === "=") {
    disp.textContent = "";
    operate();
  }
})

// stores operators into a variable
operator.forEach((button) => {
  button.addEventListener('click', (e) => {
    opr = e.target.innerText;
    console.log(opr);
    // if (num1 && num2 && opr) {
    //   disp.textContent = "";
    //   operate();
    // }
  });
});

// chooses which basic calc to use based on operator clicked
function operate() {
  switch (opr) {
    case "+":
      add(currentNum, previousNum);
      break;
    case "-":
      sub(currentNum, previousNum);
      break;
    case "/":
      divide(currentNum, previousNum);
      break;
    case "*":
      multiply(currentNum, previousNum);
      break;
  }
};

// clear display & variables using ac button
const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
  disp.textContent = "";
  currentNum = "";
  previousNum = "";
  opr = "";
});
// delete last number input
// TODO: numbers get cleared from display but not from variable
const del = document.querySelector("#delete");
del.addEventListener('click', () => {
  disp.textContent = disp.textContent.slice(0, -1);
  numsOnDisp = disp.textContent;
});
