/*
Student Name: Derrick Davis,Christian Morgan, Theodore Petrides,
File Name:script.js
Date:11/15/2022
*/

// Hamburger menu function.
function menu() {
  var menu= document.getElementById("menu-links");
  var menuicon= document.getElementById("icon");
  if (navlinks.style.display === "block") {
    menu.style.display="none";
    menuicon.style.color= "block";
  }else {
    menu.style.display="block";
    menuicon.style.color="none";
  }
}
