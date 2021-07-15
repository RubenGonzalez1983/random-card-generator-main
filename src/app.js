/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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

  var suite = suiteArray[randomSuite];
  var number = numberArray[randomNumber];

  if (suite == "♦" || suite == "♥") {
    document.getElementById("top").className += " red";
    document.getElementById("bottom").className += " red";
    document.getElementById("center").className += " red";
  }
  //document.getElementById("top").className += ' class_two'

  document.getElementById("top").innerHTML = suite;
  document.getElementById("bottom").innerHTML = suite;
  document.getElementById("center").innerHTML = number;

  console.log(suite);
};
