import React from "react";
import "./App.css";
import {
  handleMultiplication,
  calculateFactorial,
  log,
  sin,
  cos,
  tan,
  sqrt,
} from "./calc";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row bottom-buffer">
          <div className="col-12 text-end display">0</div>
        </div>
        <div className="row button-row g-1 justify-content-center">
          <div className="col-2">
            <button className="button btn btn-light" data-value="=">
              Deg
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="x!">
              x!
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="(">
              (
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value=")">
              )
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="%">
              %
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="AC">
              AC
            </button>
          </div>
        </div>
        <div className="row button-row g-1 justify-content-center">
          <div className="col-2">
            <button className="button btn btn-light" data-value="sin">
              sin
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="ln">
              ln
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              id="digits"
              data-value="7"
            >
              7
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              id="digits"
              data-value="8"
            >
              8
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              id="digits"
              data-value="9"
            >
              9
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="÷">
              ÷
            </button>
          </div>
        </div>
        <div className="row button-row g-1 justify-content-center">
          <div className="col-2">
            <button className="button btn btn-light" data-value="cos">
              cos
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="log">
              log
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              id="digits"
              data-value="4"
            >
              4
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              id="digits"
              data-value="5"
            >
              5
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              id="digits"
              data-value="6"
            >
              6
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="×">
              ×
            </button>
          </div>
        </div>
        <div className="row button-row g-1 justify-content-center">
          <div className="col-2">
            <button className="button btn btn-light" data-value="tan">
              tan
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="√">
              √
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              id="digits"
              data-value="1"
            >
              1
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              id="digits"
              data-value="2"
            >
              2
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              id="digits"
              data-value="3"
            >
              3
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="-">
              -
            </button>
          </div>
        </div>
        <div className="row button-row g-1 justify-content-center">
          <div className="col-2">
            <button className="button btn btn-light" data-value="EXP">
              EXP
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="x^y">
              X<sup>y</sup>
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              id="digits"
              data-value="0"
            >
              0
            </button>
          </div>
          <div className="col-2">
            <button
              className="button btn btn-light grey"
              id="digits"
              data-value="."
            >
              .
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-primary blue" data-value="=">
              =
            </button>
          </div>
          <div className="col-2">
            <button className="button btn btn-light" data-value="+">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
