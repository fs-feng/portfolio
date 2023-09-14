const javaIcon = document.querySelector("#java-icon");
const skillJava = document.querySelector(".skill-java");
const htmlIcon = document.querySelector("#html-icon");
const skillHtml = document.querySelector(".skill-html");
const cssIcon = document.querySelector("#css-icon");
const skillCss = document.querySelector(".skill-css");
const jsIcon = document.querySelector("#js-icon");
const skillJs = document.querySelector(".skill-js");

const skillDefault = document.querySelector(".skill-default");

javaIcon.addEventListener("mouseover", function () {
  skillDefault.style.display = "none";
  skillJava.style.display = "flex";
});

javaIcon.addEventListener("mouseout", function () {
  skillDefault.style.display = "flex";
  skillJava.style.display = "none";
});

htmlIcon.addEventListener("mouseover", function () {
  skillDefault.style.display = "none";
  skillHtml.style.display = "flex";
});

htmlIcon.addEventListener("mouseout", function () {
  skillDefault.style.display = "flex";
  skillHtml.style.display = "none";
});

cssIcon.addEventListener("mouseover", function () {
  skillDefault.style.display = "none";
  skillCss.style.display = "flex";
});

cssIcon.addEventListener("mouseout", function () {
  skillDefault.style.display = "flex";
  skillCss.style.display = "none";
});

jsIcon.addEventListener("mouseover", function () {
  skillDefault.style.display = "none";
  skillJs.style.display = "flex";
});

jsIcon.addEventListener("mouseout", function () {
  skillDefault.style.display = "flex";
  skillJs.style.display = "none";
});
