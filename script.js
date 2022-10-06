let time = document.querySelector(".time");
let input = document.querySelector(".input");
let save = document.querySelector(".save");
let textArea = document.querySelector(".story");
console.log(textArea[1]);
// renders input if any on load
function renderInput() {
  let savedInput = localStorage.getItem("input");
  textArea.innerHTML = savedInput;
  //   console.log(savedInput);
}
renderInput();
//save input recored in the menue to local storage

function saveInput(e) {
  let aTag = e.target.parentNode.parentNode;
  e.preventDefault();
  let savedInput = textArea.value;
  localStorage.setItem("input", savedInput);
}
save.addEventListener("click", saveInput);
function Click(e) {
  e.preventDefault();
  let aTag = e.target.parentNode.parentNode;
  if (aTag.classList.value == "save") console.log(e.target);
}
document.addEventListener("click", Click);

//test

const arr = { input1: "", input2: "", input3: "" };

console.log(arr);
for (const k in arr) {
  console.log(k);
}

localStorage.setItem("arr", JSON.stringify(arr));

let ss = JSON.parse(localStorage.getItem("arr"));

const array = [2, 3, 4, 5];
let val = Object.assign({}, textArea);
console.log(Object.keys(val).length);

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const p = new Rectangle("sdsd", "lslds"); // ReferenceError
const e = new Rectangle("sdsd", "lslds"); // ReferenceError

let clock = moment().format("h:mm:ss a");
daytime = document.getElementById("currentDay");
daytime.textContent = clock;
console.log(clock);

//require moment + time format

//Check the current time each 5 seconds and update message
setInterval(function () {
  let clock = moment().format("h:mm:ss a");

  daytime.textContent = clock;
}, 1000);
