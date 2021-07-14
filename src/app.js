/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var top = document.querySelector("#top");
  var center = document.querySelector("#center");
  var bottom = document.querySelector("#bottom");

  var colorArray = ["#000000", "#F90909"];
  var suiteArray = ["♦", "♥", "♠", "♣"];
  var numberArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  var randomSuite = Math.floor(Math.random() * suiteArray.length);
  var randomNumber = Math.floor(Math.random() * numberArray.length);
  var randomColor = Math.floor(Math.random() * colorArray.length);

  var suite = suiteArray[randomSuite];
  var number = numberArray[randomNumber];
  var color = colorArray[randomColor];

  document.getElementById("top").innerHTML = suite;
  document.getElementById("bottom").innerHTML = suite;
  document.getElementById("center").innerHTML = number;
  //document.getElementById("color").innerHTML = color;

  console.log(suite);
};
