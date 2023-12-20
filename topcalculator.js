// Global variables
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".digit");
const disp = document.querySelector(".display");
const equals = document.querySelector("#equal");
const operator = document.querySelectorAll(".operator");
let currentNum = "";
let previousNum = null;
let opr = null;
let numsCleared = false;

// displays digit buttons on display
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (disp.textContent.length < 8) {
      if (opr === null) {
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
        currentNum += number.id;
        currentNum = parseInt(currentNum);
        console.log(currentNum);
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
    if (opr === null) {
      previousNum = currentNum;
    } else if (previousNum != null) {
      disp.textContent = "";
      previousNum = operate(previousNum, currentNum);
      console.log(previousNum);
    }
    opr = e.target.innerText;
    console.log(opr);
    currentNum = "";
  });
});

// chooses which basic calc to use based on operator clicked
function operate(previousNum, currentNum) {
  switch (opr) {
    case "+":
      return add(previousNum, currentNum);
    case "-":
      return sub(previousNum, currentNum);
    case "/":
      return divide(previousNum, currentNum);
    case "*":
      return multiply(previousNum, currentNum);
  }
};

// the basic calculations
function add(a, b) {
  // disp.textContent += a + b;
  return a + b
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

// clear display & variables using ac button
const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
  disp.textContent = "";
  currentNum = "";
  previousNum = null;
  opr = null;
});
// delete last number input
// TODO: numbers get cleared from display but not from variable
const del = document.querySelector("#delete");
del.addEventListener('click', () => {
  disp.textContent = disp.textContent.slice(0, -1);
  numsOnDisp = disp.textContent;
});
