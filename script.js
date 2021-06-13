"use strict"
function myFunction() {
var nav = document.getElementById("myTopnav");
if (nav.className === "topnav") {
nav.className += " responsive";
} else {
nav.className = "topnav";
}
}

var menuLink = document.getElementsByClassName('link');

for(var i = 0; i < menuLink.length; i++){
menuLink[i].addEventListener("click", setActive);
}

function setActive(){
for(var i = 0; i < menuLink.length; i++){
menuLink[i].classList.remove("active");
this.classList.add("active");
}
}

var navbar = document.getElementById("myTopnav");
var otherPosition = 0;

document.addEventListener("scroll", scrolled);
function scrolled(){
otherPosition = window.scrollY;
if (otherPosition > 0){
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}
}

var h1 = document.querySelectorAll("h1");
var home = document.getElementsByClassName("link");

home[0].addEventListener("click", showHome);
function showHome(){
  h1[0].classList.toggle("h1-opacity");
  console.log(this);
}

function newFunction() {
  document.getElementById("picture").style.visibility = "hidden";
}
function newFunction2() {
  document.getElementById("picture").style.visibility = "visible";
}
