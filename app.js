//Display-Toggle confirmation message

var nonMatch = document.getElementById("non-match");
nonMatch.style.display = "none";
var match = document.getElementById("match");
match.style.display = "none";

//Generate Pin

function generatePin() {
  var randomNum = 999 + Math.random() * 9000;
  var generatePin = Math.floor(randomNum);
  document.getElementById("pinGenerate").value = generatePin;
}

//Numpad functionality

let calcArea = document.getElementById("numpad");
calcArea.addEventListener("click", function (number) {
  let typedNumber = number.target.innerText;

  let numbers = document.getElementById("displayNumber").value + typedNumber;
  document.getElementById("displayNumber").value = numbers;

  backSpace(typedNumber);
  clearBtn(typedNumber);
});

//Submit Button

let submitBtn = document.getElementById("submitButton");

submitBtn.addEventListener("click", function () {
  let pinGenerate = parseInt(document.getElementById("pinGenerate").value);
  let displayNumber = parseInt(document.getElementById("displayNumber").value);

  if (pinGenerate == displayNumber) {
    match.style.display = "block";
    document.getElementById("tryCount").innerText = "3";
    document.getElementById("try").style.display = "none";
  } else {
    let tryCount = parseInt(document.getElementById("tryCount").innerText);
    if (tryCount == 0) {
      document.querySelector(".action-left").innerText = "Reload and Try Again";
      nonMatch.style.display = "block";
    }
    if (tryCount > 0 && tryCount <= 3) {
      document.getElementById("tryCount").innerText = tryCount - 1;
    }
  }
});
//Backspace *** not working
function backSpace(clickBtn) {
  if (clickBtn == "<") {
    let inputValues = document.getElementById("displayNumber").value;
    document.getElementById("displayNumber").value = inputValues.substr(
      0,
      inputValues.length - 1
    );
  }
}

//Clear Button
function clearBtn(clickBtn) {
  if (clickBtn == "C") {
    document.getElementById("displayNumber").value = "";
  }
}
