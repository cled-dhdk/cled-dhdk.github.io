window.onscroll = function() {scrollFunction()};
var menuList = document.getElementById("topbar-center-logo");
var logoOfDesk = document.getElementById("logo-to-delete");
var toggleBar = document.getElementById("toggle-bar");
var logo = document.getElementById("logo");
var hamburger = document.getElementById("hamburger");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    menuList.style.backgroundColor = "#f8f9fb";
    logoOfDesk.style.display = "none";
    toggleBar.style.backgroundColor = "#f8f9fb";
    logo.style.display = "none";
    hamburger.style.marginTop = "2%";
  } else {
    menuList.style.backgroundColor = "rgba(255, 255, 255, 0)";
    logoOfDesk.style.display = "initial";
    toggleBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
    logo.style.display = "initial";
    hamburger.style.marginTop = "-8%";
  }
}
