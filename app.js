'use strict';

let outerDiameter = document.getElementById("outerDiameter");
let innerDiameter = document.getElementById("innerDiameter");
let position = document.getElementById("position");
let corner = document.getElementById("corner");
let feed = document.getElementById("feed");

let outputData = document.getElementById("outputData");
let data1 = document.getElementById("data1");

let btn = document.getElementById("btn");
let reset = document.getElementById("reset");


data1.innerHTML = "入力待ち・・・";

btn.addEventListener("click", function () {
  if (outerDiameter.value === "") {
    noData(data1);
  } else if (innerDiameter.value === "") {
    noData(data1);
  } else if (position.value === "") {
    noData(data1);
  } else if (corner.value === "") {
    noData(data1);
  } else if (feed.value === "") {
    noData(data1);
  } else {
    let cut6 = ((innerDiameter.value - 1.0) / 2);
    let cut1 = Number(outerDiameter.value) + 2.0;
    let cut2 = outerDiameter.value - ((0.5 + Number(corner.value)) * 2);
    let cut3 = cut2 / 2;
    let cut4 = Number(position.value) + cut6;
    let cut5 = position.value - cut6;
    let newDatas = 
    [
      "G0 X" + cut1.toFixed(1) + " Z" + position.value + " C0;",
      "G1 X" + cut2.toFixed(1) + " F500;",
      "Z" + cut5.toFixed(3) + " F" + feed.value + ";",
      "G12.1" + ";",
      "G16 C" + cut3.toFixed(1) +";",
      "G2 Z" + cut4.toFixed(3)  + " R" + cut6.toFixed(1) + ";",
      "G2 Z" + cut5.toFixed(3)+ " R" + cut6.toFixed(1) + ";",
      "Z" + position.value + ";",
      "G13.1;",
      "G0 X" + cut1.toFixed(1) + " F1000;",
      "G18;"
    ];
    createNcData(outputData, data1, newDatas);
  };
});

reset.addEventListener("click", function() {
  location.reload();
  // outputData.remove();
});

function createNcData(outputData, oldText, newData) {
  oldText.innerHTML = "(MENTORI)";
  oldText.style.color = "black";

  for(let i = 0; i < newData.length; i++) {
    let newText = document.createElement('p');
    newText.textContent = newData[i];
    outputData.appendChild(newText);
    newText.setAttribute("id", "data1");
  }
}

function noData(newText) {
  newText.innerHTML = "未入力あり!!";
  newText.style.color = "red";
}

document.onkeypress = function(e) {
  if (e.key === 'Enter') {
    return false;
  }
}