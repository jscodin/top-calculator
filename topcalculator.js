// Global variables
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".digit");
const disp = document.querySelector(".display");
const equals = document.querySelector("#equal");
const operator = document.querySelectorAll(".operator");
const percentageBtn = document.querySelector("#percent");
let currentNum = "";
let previousNum = null;
let opr = null;
let numsCleared = false;
let equalsCleared = false;

// displays digit buttons on display
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (disp.textContent.length < 8) {
      clearOnNextNum();
      disp.textContent += number.id
      currentNum += number.id;
      currentNum = parseInt(currentNum);
      console.log(currentNum);
    };
  });
});

// reset flag when number/equals btn is clicked
function clearOnNextNum() {
  if (numsCleared) {
    numsCleared = false;
    disp.textContent = "";
  }
  else if (equalsCleared && previousNum != "") {
    disp.textContent = "";
    equalsCleared = false;
  }
  equalsCleared = false;
}

// runs operate fn when equals is pressed
equals.addEventListener('click', (e) => {
  equalBtn = e.target.innerText;
  disp.textContent = "";
  currentNum = operate(previousNum, currentNum);
  console.log(previousNum);
  opr = null;
  equalsCleared = true;
});

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
    numsCleared = true;
  });
});

// handles % button
percentageBtn.addEventListener('click', (e) => {
  console.log(e.target.innerText);
  disp.textContent = "";
  currentNum = percentage();
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
  disp.textContent += a + b;
  return a + b
};

function sub(a, b) {
  disp.textContent += a - b;
  return a - b
};

function divide(a, b) {
  console.log(a / b);
  if (b === 0) {
    disp.textContent += "Y u do dis?";
    return "Y u do dis?";
  }
  disp.textContent += a / b;
  return a / b
};

function multiply(a, b) {
  console.log(a * b);
  disp.textContent += a * b;
  return a * b
};

function percentage() {
  a = previousNum;
  b = currentNum;
  if (a && b) {
    disp.textContent += b / 100;
    console.log(b / 100)
    return b / 100;
  } else {
    disp.textContent += b / 100;
    console.log(b / 100);
    return b / 100;
  }
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
