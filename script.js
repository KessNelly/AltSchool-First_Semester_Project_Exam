// Calculator State
let currentExpression = "";
let currentResult = "0";

// DOM Elements
const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

// Initialize Calculator
function init() {
  // Number buttons
  document.querySelectorAll(".btn-number").forEach((btn) => {
    btn.addEventListener("click", () => handleNumber(btn.dataset.number));
  });

  // Operator buttons
  document.querySelectorAll(".btn-operator").forEach((btn) => {
    btn.addEventListener("click", () => handleOperator(btn.dataset.operator));
  });

  // Clear button
  document
    .querySelector('[data-action="clear"]')
    .addEventListener("click", handleClear);

  // Backspace button
  document
    .querySelector('[data-action="backspace"]')
    .addEventListener("click", handleBackspace);

  // Equals button
  document
    .querySelector('[data-action="equals"]')
    .addEventListener("click", handleEquals);

  // Keyboard support
  document.addEventListener("keydown", handleKeyboard);
}

// Handle number input
function handleNumber(num) {
  if (currentExpression === "0" && num !== ".") {
    currentExpression = num;
  } else if (currentExpression === "" && num === ".") {
    currentExpression = "0.";
  } else {
    // Prevent multiple decimals in a single number
    const lastNumber = getLastNumber(currentExpression);
    if (num === "." && lastNumber.includes(".")) {
      return;
    }
    currentExpression += num;
  }
  updateDisplay();
}

// Handle operator input
function handleOperator(operator) {
  if (currentExpression === "") {
    currentExpression = currentResult;
  }

  const lastChar = currentExpression.slice(-1);

  // Replace operator if last character is an operator
  if (["+", "-", "*", "/"].includes(lastChar)) {
    currentExpression = currentExpression.slice(0, -1) + operator;
  } else {
    currentExpression += operator;
  }

  updateDisplay();
}

// Handle clear
function handleClear() {
  currentExpression = "";
  currentResult = "0";
  updateDisplay();
}

// Handle backspace
function handleBackspace() {
  if (currentExpression.length > 0) {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
  }
}

// Handle equals
function handleEquals() {
  if (currentExpression === "") return;

  try {
    // Replace display operators with JavaScript operators
    let expression = currentExpression.replace(/×/g, "*").replace(/÷/g, "/");

    // Evaluate the expression
    const result = eval(expression);

    // Check for valid result
    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid calculation");
    }

    // Round to avoid floating point errors
    const roundedResult = Math.round(result * 100000000) / 100000000;
    currentResult = roundedResult.toString();

    // Update display
    currentExpression = "";
    updateDisplay();
  } catch (error) {
    currentResult = "Error";
    updateDisplay();
    setTimeout(() => {
      currentResult = "0";
      currentExpression = "";
      updateDisplay();
    }, 1500);
  }
}

// Get last number in expression
function getLastNumber(expr) {
  const matches = expr.match(/[\d.]+$/);
  return matches ? matches[0] : "";
}

// Update display
function updateDisplay() {
  expressionDisplay.textContent = currentExpression || "";
  resultDisplay.textContent = currentResult;
}

// Keyboard support
function handleKeyboard(e) {
  // Numbers and decimal point
  if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
    e.preventDefault();
    handleNumber(e.key);
  }

  // Operators
  else if (e.key === "+") {
    e.preventDefault();
    handleOperator("+");
  } else if (e.key === "-") {
    e.preventDefault();
    handleOperator("-");
  } else if (e.key === "*") {
    e.preventDefault();
    handleOperator("*");
  } else if (e.key === "/") {
    e.preventDefault();
    handleOperator("/");
  }

  // Enter or equals
  else if (e.key === "Enter" || e.key === "=") {
    e.preventDefault();
    handleEquals();
  }

  // Backspace
  else if (e.key === "Backspace") {
    e.preventDefault();
    handleBackspace();
  }

  // Escape or Delete for clear
  else if (e.key === "Escape" || e.key === "Delete") {
    e.preventDefault();
    handleClear();
  }
}

// Initialize the calculator
init();
