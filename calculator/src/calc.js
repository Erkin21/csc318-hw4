/* eslint-disable no-unused-vars */
// Get reference to the display element
const display = document.querySelector(".display");

// Get all the buttons
const buttons = document.querySelectorAll(".button");

// Flag to check if a function button was pressed
let functionPressed = false;

// Flag to check if a number button was pressed
let numberPressed = false;

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the value of the custom data-value attribute from the button
    const buttonValue = button.getAttribute("data-value");

    // Remove leading zero if necessary
    if (display.textContent === "0" && buttonValue !== "0") {
      display.textContent = "";
    }

    // Handle different button actions
    if (buttonValue === "=") {
      // Perform calculation and display the result
      let expression = display.textContent
        .replace("%", "/100")
        .replace(/×/g, "*")
        .replace(/\^/g, "**")
        .replace(/√/g, "Math.sqrt");
      expression = handleMultiplication(expression);
      try {
        // eslint-disable-next-line no-eval
        let result = eval(expression);
        result = result.toFixed(10); // Round to 10 decimals
        result = parseFloat(result).toString(); // Remove trailing zeros until 2 decimal places
        display.textContent = result;
      } catch (error) {
        display.textContent = "Error";
        console.error("An error occurred during calculation:", error);
      }
    } else if (buttonValue === "AC") {
      // Clear the display and reset the error message
      display.textContent = "0";
      functionPressed = false;
      numberPressed = false;
    } else if (
      display.textContent === "Error" ||
      display.textContent === "NaN" ||
      display.textContent === "null"
    ) {
      // Clear the error message and update the display with the clicked button value
      display.textContent = buttonValue;
    } else if (buttonValue === "-") {
      // Append the subtraction operator to the display
      display.textContent += buttonValue;
    } else if (buttonValue === "÷") {
      // Append the division operator to the display
      display.textContent += "/";
    } else if (buttonValue === "×") {
      // Append the multiplication operator to the display
      const lastChar = display.textContent.slice(-1);
      if (
        lastChar !== "×" &&
        lastChar !== "/" &&
        lastChar !== "+" &&
        lastChar !== "-" &&
        lastChar !== "("
      ) {
        display.textContent += "×";
      }
    } else if (buttonValue === "x!") {
      // Calculate factorial and display the result
      const number = parseFloat(display.textContent);
      const result = calculateFactorial(number);
      display.textContent = result;
    } else if (buttonValue === "x^y") {
      // Append the exponentiation operator to the display
      display.textContent += "^";
    } else if (buttonValue === "(") {
      // Append the opening parenthesis
      display.textContent += "(";
    } else if (buttonValue === ")") {
      // Append the closing parenthesis
      display.textContent += ")";
    } else if (buttonValue === "log") {
      // Check if there's a number before the log function
      const lastChar = display.textContent.slice(-1);
      if (numberPressed && lastChar !== " ") {
        // Append multiplication operator before the log function
        display.textContent += "×";
      }
      // Append the base-10 logarithm function to the display
      display.textContent += "log(";
      functionPressed = true;
    } else if (buttonValue === "sin") {
      // Check if there's a number before the sin function
      const lastChar = display.textContent.slice(-1);
      if (numberPressed && lastChar !== " ") {
        // Append multiplication operator before the sin function
        display.textContent += "×";
      }
      // Append the sine function to the display
      display.textContent += "sin(";
      functionPressed = true;
    } else if (buttonValue === "cos") {
      // Check if there's a number before the cos function
      const lastChar = display.textContent.slice(-1);
      if (numberPressed && lastChar !== " ") {
        // Append multiplication operator before the cos function
        display.textContent += "×";
      }
      // Append the cosine function to the display
      display.textContent += "cos(";
      functionPressed = true;
    } else if (buttonValue === "tan") {
      // Check if there's a number before the tan function
      const lastChar = display.textContent.slice(-1);
      if (numberPressed && lastChar !== " ") {
        // Append multiplication operator before the tan function
        display.textContent += "×";
      }
      // Append the tangent function to the display
      display.textContent += "tan(";
      functionPressed = true;
    } else if (buttonValue === "EXP") {
      // Append the exponent notation
      display.textContent += "E";
      functionPressed = false;
      numberPressed = false;
    } else if (buttonValue === "√") {
      // Check if there's a number before the square root function
      const lastChar = display.textContent.slice(-1);
      if (numberPressed && lastChar !== " ") {
        // Append multiplication operator before the square root function
        display.textContent += "×";
      }
      // Append the square root function to the display
      display.textContent += "√(";
      functionPressed = true;
    } else {
      // Update the display with the clicked button value
      display.textContent += buttonValue;
      functionPressed = false;
      if (!isNaN(buttonValue)) {
        numberPressed = true;
      }
    }
  });
});

// Function to handle multiplication for expressions like 3(3)
function handleMultiplication(expression) {
  const regex = /(\d+)\(/g;
  expression = expression.replace(regex, "$1*(");
  return expression;
}

// Function to calculate factorial
function calculateFactorial(number) {
  if (number < 0) {
    return "Error";
  } else if (number === 0 || number === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

// Function to calculate base-10 logarithm
function log(number) {
  return Math.log(number) / Math.log(10);
}

// Function sin
function sin(number) {
  return Math.sin((number * Math.PI) / 180);
}

// Function cos
function cos(number) {
  return Math.cos((number * Math.PI) / 180);
}

// Function tan
// eslint-disable-next-line no-unused-vars
function tan(number) {
  if (
    (number % 180 === 90 && number % 360 !== 270) ||
    (number % 180 === -90 && number % 360 !== -270)
  ) {
    return "Error";
  }
  return Math.tan((number * Math.PI) / 180);
}

// eslint-disable-next-line no-unused-vars
function sqrt(number) {
  return Math.sqrt(number);
}

export { handleMultiplication, calculateFactorial, log, sin, cos, tan, sqrt };
