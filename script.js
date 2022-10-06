let allTimeElement = document.querySelectorAll(".time");
let allSaveButton = document.querySelectorAll(".save");
let allTextArea = document.querySelectorAll(".story");

// renders input if any on load
function renderInput() {
  for (let i = 0; i < allTextArea.length; i++) {
    let RenderedItem = localStorage.getItem(`input${i}`);
    allTextArea[i].textContent = RenderedItem;
  }
}
renderInput();
//save input recored in the menue to local storage

function Click(e) {
  e.preventDefault();
  let aTag = e.target.parentNode.parentNode;
  if (aTag) {
    for (let i = 0; i < allTextArea.length; i++) {
      if (aTag.classList) {
        aTag = aTag.classList.value;
      }
      if (aTag == i) {
        let savedInput = allTextArea[i].value;
        localStorage.setItem(`input${i}`, savedInput);
      }
    }
  }
}
document.addEventListener("click", Click);

//set calender using the time  class from the html to append the time

let clock = moment().format("h:mm:ss a");
daytime = document.getElementById("currentDay");
daytime.textContent = clock;

setInterval(function () {
  //array to store final number
  let result;
  // array of numbers and its  index possitions that match each html item

  let ArrayOfPossibleTimes = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  let clock = moment().format("h:mm:ss a");
  let timeConvertedIntoNum = clock.split(":");
  timeConvertedIntoNum = timeConvertedIntoNum[0];
  timeConvertedIntoNum = parseInt(timeConvertedIntoNum);
  for (let i = 0; i < ArrayOfPossibleTimes.length; i++) {
    if (timeConvertedIntoNum == ArrayOfPossibleTimes[i]) {
      result = i;
    }
  }
  for (let i = 0; i < allTextArea.length; i++) {
    if (i == result) {
      allTextArea[i].style.backgroundColor = "#F04D56";
    } else if (i > result) {
      allTextArea[i].style.backgroundColor = "#74E96E";
    } else {
      allTextArea[i].style.backgroundColor = "#CCCCCC";
    }
  }

  daytime.textContent = clock;
}, 1000);
