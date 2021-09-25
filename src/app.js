/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  //let excuse = excuseGenerate();
  //console.log(excuse);
  //document.querySelector("#excuse").innerHTML = excuse;
  document.querySelector("#excuse").innerHTML = excuseGenerate();
};

function excuseGenerate() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  return (
    rand_element(who) +
    " " +
    rand_element(action) +
    " " +
    rand_element(what) +
    " " +
    rand_element(when)
  );
}

function rand_element(array) {
  return array[Math.floor(Math.random() * array.length)];
}
