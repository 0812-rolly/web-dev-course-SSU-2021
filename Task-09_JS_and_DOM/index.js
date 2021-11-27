import makeBinary from "./scripts/makeBinary.js";
import eleminate from "./scripts/eleminate.js";
import powOfSum from "./scripts/powOfSum.js";

var BINARY_RESULT = document.querySelector(".binary-result");
var DEGREE_RESULT = document.querySelector(".degree-result");
var ELEMINATE_RESULT = document.querySelector(".eleminate-result");
var BINARY_INPUT = document.getElementById("binary-input");
var DEGREE_INPUT = document.getElementById("degree-input");
var ELEMINATE_INPUT_N = document.getElementById("eleminate-input-N");
var ELEMINATE_INPUT_M = document.getElementById("eleminate-input-M");

document.querySelector(".binary-clearButton").onclick = (event) => {
    event.preventDefault();
    BINARY_INPUT.value = "";
    BINARY_RESULT.textContent = " ";
}

document.querySelector(".degree-clearButton").onclick = (event) => {
    event.preventDefault();
    DEGREE_INPUT.value = "";
    DEGREE_RESULT.textContent = " ";
}

document.querySelector(".eleminate-clearButton").onclick = (event) => {
    event.preventDefault();
    ELEMINATE_INPUT_N.value = "";
    ELEMINATE_INPUT_M.value = "";
    ELEMINATE_RESULT.textContent = " ";
}

document.querySelector(".binary-button").onclick = (event) => {
    event.preventDefault();
    BINARY_RESULT.textContent = makeBinary(BINARY_INPUT.value);
}

document.querySelector(".degree-button").onclick = (event) => {
    event.preventDefault();
    DEGREE_RESULT.textContent = powOfSum(parseInt(DEGREE_INPUT.value));
}

document.querySelector(".eleminate-button").onclick = (event) => {
    event.preventDefault();
    ELEMINATE_RESULT.textContent = `Победил игрок под номером 
    ${eleminate(parseInt(ELEMINATE_INPUT_N.value), parseInt(ELEMINATE_INPUT_M.value))}`;
}