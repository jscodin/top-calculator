// Global variables
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".digit");
const disp = document.querySelector(".display");
const equals = document.querySelector("#equal");
const operator = document.querySelectorAll(".operator");
const percentageBtn = document.querySelector("#percent");
const decimalBtn = document.querySelector("#decimal");
const plusminusBtn = document.querySelector("#plusminus");
let decimal;
let plusminus;
let currentNum = "";
let previousNum = null;
let opr = null;
let numsCleared = false;
let equalsCleared = false;

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

// handles number buttons
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (disp.textContent === "Y u do dis?") {
      clearBtn();
      return
    };
    clearOnNextNum();
    if (disp.textContent.length < 8) {
      disp.textContent += number.id
      currentNum += number.id;
      currentNum = parseFloat(currentNum);
      console.log(currentNum);
    };
  });
});

// handles operator buttons
operator.forEach((button) => {
  button.addEventListener('click', operatorHandler)
});

function operatorHandler(e) {
  if (disp.textContent === "Y u do dis?" || disp.textContent === "") {
    return
  }
  if (currentNum === "" && previousNum !== null) {
    return
  }
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
}

// handles equals button
equals.addEventListener('click', (e) => {
  equalBtn = e.target.innerText;
  console.log(equalBtn);
  if (disp.textContent === "" || equalsCleared) {
    return
  } else if (currentNum !== null && previousNum !== null) {
    disp.textContent = "";
    currentNum = operate(previousNum, currentNum);
    console.log(previousNum);
    opr = null;
    equalsCleared = true;
  }
});

// handles % button
percentageBtn.addEventListener('click', (e) => {
  console.log(e.target.innerText);
  if (disp.textContent === "") {
    return
  }
  disp.textContent = "";
  currentNum = percentage();
});

// handles decimal button
// TODO: need to figure out to how to get it show a "0" when
// it is input before a number when screen is empty but not after operators are pressed etc.
decimalBtn.addEventListener('click', (e) => {
  console.log(e.target.innerText);
  decimal = e.target.innerText;
  if (disp.textContent === "") {
    disp.textContent = 0 + decimal;
    currentNum = 0 + decimal;
  } else if (disp.textContent.includes(".")) {
    return
  } else {
    disp.textContent = currentNum + decimal;
    currentNum = currentNum + ".";
  }
});

// handles plus/minus button
// TODO: bug where if you press this btn immediately after an operator btn
// has been pressed after a number, it does not work
// works every other time, i think it may require refactoring
// most of my code to get it to work,
// considering it is not part of the assgt im leaving as is for now lol
plusminusBtn.addEventListener('click', (e) => {
  console.log(e.target.innerText);
  if (disp.textContent === "" || currentNum === "") {
    return
  } else if (currentNum < 0) {
    // converts negative num to positive
    currentNum = Math.abs(currentNum);
    disp.textContent = currentNum;
  } else if (currentNum >= 0) {
    disp.textContent = -currentNum;
    currentNum = "-" + currentNum;
    currentNum = parseFloat(currentNum);
  }
  else if (previousNum < 0) {
    // this is to cover for when the equals btn is pressed
    previousNum = Math.abs(previousNum);
    disp.textContent = currentNum;
  } else if (previousNum >= 0) {
    disp.textContent = -previousNum;
    previousNum = "-" + previousNum;
    previousNum = parseFloat(previousNum);
  } else {
    return
  }
});

// clear display & variables using ac button
const clear = document.querySelector("#clear");
clear.addEventListener('click', clearBtn);

function clearBtn() {
  disp.textContent = "";
  currentNum = "";
  previousNum = null;
  opr = null;
}

// delete last number input
const del = document.querySelector("#delete");
del.addEventListener('click', () => {
  if (currentNum && previousNum === null) {
    disp.textContent = disp.textContent.slice(0, -1);
    currentNum = parseFloat(currentNum.toString().slice(0, -1));
    console.log(currentNum);
  } else if (currentNum !== null && previousNum !== null) {
    disp.textContent = disp.textContent.slice(0, -1);
    currentNum = parseFloat(currentNum.toString().slice(0, -1));
    console.log(currentNum);
  }
});

// chooses which basic calc to use based on operator clicked
// i guess self explanatory tbf but getting used to commenting my code
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

// calculations
let result;

function limitDigitsOnDisplay() {
  if (result.toString().length > 8) {
    result = Number.parseFloat(result).toExponential(2)
  }
}

function add(a, b) {
  console.log(a + b);
  result = a + b;
  limitDigitsOnDisplay();
  disp.textContent += result;
  return a + b
};

function sub(a, b) {
  console.log(a - b);
  result = a - b;
  limitDigitsOnDisplay();
  disp.textContent += result;
  return a - b
};

function divide(a, b) {
  console.log(a / b);
  if (b === 0) {
    disp.textContent += "Y u do dis?";
    return "Y u do dis?";
  }
  result = a / b;
  limitDigitsOnDisplay();
  disp.textContent += result;
  return a / b
};

function multiply(a, b) {
  console.log(a * b);
  result = a * b;
  limitDigitsOnDisplay();
  disp.textContent += result;
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
