const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const content = document.querySelector("main");
const footer = document.querySelector("footer");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
  menu.classList.toggle("show");
  openMenu.classList.toggle("hide");
  closeMenu.classList.toggle("show");
});

content.addEventListener("click", () => {
  nav.classList.remove("show");
  menu.classList.remove("show");
  openMenu.classList.remove("hide");
  closeMenu.classList.remove("show");
});

footer.addEventListener("click", () => {
  nav.classList.remove("show");
  menu.classList.remove("show");
  openMenu.classList.remove("hide");
  closeMenu.classList.remove("show");
});
