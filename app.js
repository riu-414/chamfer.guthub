'use strict';

let outerDiameter = document.getElementById("outerDiameter");
let innerDiameter = document.getElementById("innerDiameter");
let position = document.getElementById("position");
let corner = document.getElementById("corner");
let feed = document.getElementById("feed");

let outputData = document.getElementById("outputData");
let data1 = document.getElementById("data1");
let data2 = document.getElementById("data2");
let data3 = document.getElementById("data3");
let data4 = document.getElementById("data4");
let data5 = document.getElementById("data5");
let data6 = document.getElementById("data6");
let data7 = document.getElementById("data7");
let data8 = document.getElementById("data8");
let data9 = document.getElementById("data9");
let data10 = document.getElementById("data10");
let data11 = document.getElementById("data11");
let data12 = document.getElementById("data12");

let btn = document.getElementById("btn");
let reset = document.getElementById("reset");


data1.innerHTML = "入力待ち・・・";

btn.addEventListener("click", function () {
  if (outerDiameter.value === "") {
    noData(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12);
  } else if (innerDiameter.value === "") {
    noData(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12);
  } else if (position.value === "") {
    noData(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12);
  } else if (corner.value === "") {
    noData(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12);
  } else if (feed.value === "") {
    noData(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12);
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
    // createNcData(outputData, data1, newDatas);

    data1.innerHTML = "(MENTORI)";
    data1.style.color = "black";
  
    data2.innerHTML = newDatas[0];
    data3.innerHTML = newDatas[1];
    data4.innerHTML = newDatas[2];
    data5.innerHTML = newDatas[3];
    data6.innerHTML = newDatas[4];
    data7.innerHTML = newDatas[5];
    data8.innerHTML = newDatas[6];
    data9.innerHTML = newDatas[7];
    data10.innerHTML = newDatas[8];
    data11.innerHTML = newDatas[9];
    data12.innerHTML = newDatas[10];
  };
});

reset.addEventListener("click", function() {
  // location.reload();
  data1.innerHTML = "入力待ち・・・";
  data1.style.color = "black";
  data2.innerHTML = "";
  data3.innerHTML = "";
  data4.innerHTML = "";
  data5.innerHTML = "";
  data6.innerHTML = "";
  data7.innerHTML = "";
  data8.innerHTML = "";
  data9.innerHTML = "";
  data10.innerHTML = "";
  data11.innerHTML = "";
  data12.innerHTML = "";
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

function noData(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12) {
  data1.innerHTML = "未入力あり!!";
  data1.style.color = "red";
  data2.innerHTML = "";
  data3.innerHTML = "";
  data4.innerHTML = "";
  data5.innerHTML = "";
  data6.innerHTML = "";
  data7.innerHTML = "";
  data8.innerHTML = "";
  data9.innerHTML = "";
  data10.innerHTML = "";
  data11.innerHTML = "";
  data12.innerHTML = "";
}

document.onkeypress = function(e) {
  if (e.key === 'Enter') {
    return false;
  }
}