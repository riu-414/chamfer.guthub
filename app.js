'use strict';

let outerDiameter = document.getElementById("outerDiameter");
let innerDiameter = document.getElementById("innerDiameter");
let position = document.getElementById("position");
let corner = document.getElementById("corner");
let feed = document.getElementById("feed");

let outputs = document.getElementById("outputs");
let outputData = document.getElementById("outputData");

let btn = document.getElementById("btn");
let reset = document.getElementById("reset");

btn.addEventListener("click", function () {

  let stdPosition = (outerDiameter.value + 2.0);
  let cutPosition = ((innerDiameter.value - 1.0) / 2);

  if (outerDiameter.value === "") {
    noData(outputData);
  } else if (innerDiameter.value === "") {
    noData(outputData);
  } else if (position.value === "") {
    noData(outputData);
  } else if (corner.value === "") {
    noData(outputData);
  } else if (feed.value === "") {
    noData(outputData);
  } else {
    let newDatas = 
    [
      "G0 X" + stdPosition + " Z" + position.value + " C0;",
      "G1 X" + (outerDiameter.value - 1.2) + " F500;",
      "Z" + position.value + " F" + feed.value + ";",
      "G12.1",
      "G16 C" + ((outerDiameter.value - 1.2) / 2) +";",
      "G2 Z" + (position.value - cutPosition)  + " R" + cutPosition,
      "G2 Z" + (position.value + cutPosition) + " R" + cutPosition,
      "Z" + position.value + ";",
      "G13.1;",
      "G0 X" + stdPosition + " F1000;",
      "G18;"
    ];
    createNcData(outputs, outputData, newDatas);
  };

});

reset.addEventListener("click", function() {
  outputs.remove();
});

function createNcData(outputs, oldText, newTexts) {
  oldText.innerHTML = "(MENTORI)";
  oldText.style.color = "black";

  for(let i = 0; i < newTexts.length; i++) {
    let newText = document.createElement('p');
    newText.textContent = newTexts[i];
    outputs.appendChild(newText);
  }
}

function noData(newText) {
  newText.innerHTML = "未入力あり!!";
  newText.style.color = "red";
}

