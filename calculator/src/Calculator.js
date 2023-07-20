/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (buttonValue) => {
    // Remove leading zero if necessary
    if (displayValue === "0" && buttonValue !== "0") {
      setDisplayValue("");
    }

    // Handle different button actions
    if (buttonValue === "=") {
      // Perform calculation and display the result
      let expression = displayValue
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
        setDisplayValue(result);
      } catch (error) {
        setDisplayValue("Error");
        console.error("An error occurred during calculation:", error);
      }
    } else if (buttonValue === "AC") {
      // Clear the display and reset the error message
      setDisplayValue("0");
    } else if (
      displayValue === "Error" ||
      displayValue === "NaN" ||
      displayValue === "null"
    ) {
      // Clear the error message and update the display with the clicked button value
      setDisplayValue(buttonValue);
    } else if (buttonValue === "-") {
      // Append the subtraction operator to the display
      setDisplayValue((prevValue) => prevValue + buttonValue);
    } else if (buttonValue === "÷") {
      // Append the division operator to the display
      setDisplayValue((prevValue) => prevValue + "/");
    } else if (buttonValue === "×") {
      // Append the multiplication operator to the display
      const lastChar = displayValue.slice(-1);
      if (
        lastChar !== "×" &&
        lastChar !== "/" &&
        lastChar !== "+" &&
        lastChar !== "-" &&
        lastChar !== "("
      ) {
        setDisplayValue((prevValue) => prevValue + "×");
      }
    } else if (buttonValue === "x!") {
      // Calculate factorial and display the result
      const number = parseFloat(displayValue);
      const result = calculateFactorial(number);
      setDisplayValue(result);
    } else if (buttonValue === "x^y") {
      // Append the exponentiation operator to the display
      setDisplayValue((prevValue) => prevValue + "^");
    } else if (buttonValue === "(") {
      // Append the opening parenthesis
      setDisplayValue((prevValue) => prevValue + "(");
    } else if (buttonValue === ")") {
      // Append the closing parenthesis
      setDisplayValue((prevValue) => prevValue + ")");
    } else if (buttonValue === "log") {
      // Check if there's a number before the log function
      const lastChar = displayValue.slice(-1);
      if (!isNaN(lastChar) && displayValue !== "0") {
        // Append multiplication operator before the log function
        setDisplayValue((prevValue) => prevValue + "×");
      }
      // Append the base-10 logarithm function to the display
      setDisplayValue((prevValue) => prevValue + "log(");
    } else if (buttonValue === "sin") {
      // Check if there's a number before the sin function
      const lastChar = displayValue.slice(-1);
      if (!isNaN(lastChar) && displayValue !== "0") {
        // Append multiplication operator before the sin function
        setDisplayValue((prevValue) => prevValue + "×");
      }
      // Append the sine function to the display
      setDisplayValue((prevValue) => prevValue + "sin(");
    } else if (buttonValue === "cos") {
      // Check if there's a number before the cos function
      const lastChar = displayValue.slice(-1);
      if (!isNaN(lastChar) && displayValue !== "0") {
        // Append multiplication operator before the cos function
        setDisplayValue((prevValue) => prevValue + "×");
      }
      // Append the cosine function to the display
      setDisplayValue((prevValue) => prevValue + "cos(");
    } else if (buttonValue === "tan") {
      // Check if there's a number before the tan function
      const lastChar = displayValue.slice(-1);
      if (!isNaN(lastChar) && displayValue !== "0") {
        // Append multiplication operator before the tan function
        setDisplayValue((prevValue) => prevValue + "×");
      }
      // Append the tangent function to the display
      setDisplayValue((prevValue) => prevValue + "tan(");
    } else if (buttonValue === "EXP") {
      // Append the exponent notation
      setDisplayValue((prevValue) => prevValue + "E");
    } else if (buttonValue === "√") {
      // Check if there's a number before the square root function
      const lastChar = displayValue.slice(-1);
      if (!isNaN(lastChar)) {
        // Append multiplication operator before the square root function
        setDisplayValue((prevValue) => prevValue + "×");
      }
      // Append the square root function to the display
      setDisplayValue((prevValue) => prevValue + "√(");
    } else {
      // Update the display with the clicked button value
      setDisplayValue((prevValue) => prevValue + buttonValue);
    }
  };

  // Function to handle multiplication for expressions like 3(3)
  const handleMultiplication = (expression) => {
    const regex = /(\d+)\(/g;
    return expression.replace(regex, "$1*(");
  };

  // Function to calculate factorial
  const calculateFactorial = (number) => {
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
  };

  // Function to calculate base-10 logarithm
  const log = (number) => {
    return Math.log(number) / Math.log(10);
  };

  // Function sin
  const sin = (number) => {
    return Math.sin((number * Math.PI) / 180);
  };

  // Function cos
  const cos = (number) => {
    return Math.cos((number * Math.PI) / 180);
  };

  // Function tan
  const tan = (number) => {
    if (
      (number % 180 === 90 && number % 360 !== 270) ||
      (number % 180 === -90 && number % 360 !== -270)
    ) {
      return "Error";
    }
    return Math.tan((number * Math.PI) / 180);
  };

  // Function sqrt
  const sqrt = (number) => {
    return Math.sqrt(number);
  };

  return (
    <div>
      <div className="container">
        <div className="row bottom-buffer">
          <div className="col-12 text-end display">{displayValue}</div>
        </div>
        <div className="row button-row g-1 justify-content-center">
          {/* Buttons for the first row */}
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("DEG")}
              data-value="DEG"
            >
              DEG
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("x!")}
              data-value="x!"
            >
              x!
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("(")}
              data-value="("
            >
              (
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick(")")}
              data-value=")"
            >
              )
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("%")}
              data-value="%"
            >
              %
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("AC")}
              data-value="AC"
            >
              AC
            </button>
          </div>
        </div>
        {/* Buttons for the second row */}
        <div className="row button-row g-1 justify-content-center">
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("sin")}
              data-value="sin"
            >
              sin
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("ln")}
              data-value="ln"
            >
              ln
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              onClick={() => handleButtonClick("7")}
              data-value="7"
            >
              7
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              onClick={() => handleButtonClick("8")}
              data-value="8"
            >
              8
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              onClick={() => handleButtonClick("9")}
              data-value="9"
            >
              9
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("÷")}
              data-value="÷"
            >
              ÷
            </button>
          </div>
        </div>
        {/* Buttons for the third row */}
        <div className="row button-row g-1 justify-content-center">
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("cos")}
              data-value="cos"
            >
              cos
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("log")}
              data-value="log"
            >
              log
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              onClick={() => handleButtonClick("4")}
              data-value="4"
            >
              4
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              onClick={() => handleButtonClick("5")}
              data-value="5"
            >
              5
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              onClick={() => handleButtonClick("6")}
              data-value="6"
            >
              6
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("×")}
              data-value="×"
            >
              ×
            </button>
          </div>
        </div>

        {/* Buttons for the fourth row */}
        <div className="row button-row g-1 justify-content-center">
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("tan")}
              data-value="tan"
            >
              tan
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("√")}
              data-value="√"
            >
              √
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              onClick={() => handleButtonClick("1")}
              data-value="1"
            >
              1
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              onClick={() => handleButtonClick("2")}
              data-value="2"
            >
              2
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              onClick={() => handleButtonClick("3")}
              data-value="3"
            >
              3
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("-")}
              data-value="-"
            >
              -
            </button>
          </div>
        </div>

        {/* Buttons for the fifth row */}
        <div className="row button-row g-1 justify-content-center">
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("EXP")}
              data-value="EXP"
            >
              EXP
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("x^y")}
              data-value="x^y"
            >
              X<sup>y</sup>
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              onClick={() => handleButtonClick("0")}
              data-value="0"
            >
              0
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              onClick={() => handleButtonClick(".")}
              data-value="."
            >
              .
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-primary blue"
              onClick={() => handleButtonClick("=")}
              data-value="="
            >
              =
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light"
              onClick={() => handleButtonClick("+")}
              data-value="+"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
