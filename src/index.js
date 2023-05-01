import navbar from "./components/navbar";
import Homepage from "./components/home/home";
import Menu from "./components/menu/menu";
import Contact from "./components/contact/contact";

const content = document.querySelector("#content");

content.appendChild(navbar());
content.appendChild(Homepage());

const nav = document.querySelector("#navbar");

window.onscroll = function () {
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    nav.classList.add("bg-white/90", "backdrop-blur-sm");
  } else {
    nav.classList.remove("bg-white/90", "backdrop-blur-sm");
  }
};

const btnHome = document.querySelector("#btn-Home");
btnHome.classList.add("border-b", "border-b-slate-400");

const btnMenu = document.querySelector("#btn-Menu");
const btnContact = document.querySelector("#btn-Contact");
let btnHomeMenu = document.querySelector("#home-btn-menu");

btnHomeMenu.addEventListener("click", () => {
  const buttons = document.querySelectorAll(".nav-btn");
  btnHome.classList.remove("border-b", "border-b-slate-400");
  btnMenu.classList.add("border-b", "border-b-slate-400");
  let container = document.querySelector("#container");
  container.classList.add("-translate-x-1/2", "opacity-0");
  setTimeout(() => {
    content.removeChild(content.children[1]);
    content.appendChild(Menu());
  }, 300);
});

btnHome.addEventListener("click", (e) => {
  const buttons = document.querySelectorAll(".nav-btn");
  for (let button of buttons) {
    button.classList.remove("border-b", "border-b-slate-400");
  }
  e.target.classList.add("border-b", "border-b-slate-400");
  let container = document.querySelector("#container");
  container.classList.add("-translate-x-1/2", "opacity-0");
  setTimeout(() => {
    content.removeChild(content.children[1]);
  }, 150);
  content.appendChild(Homepage());

  btnHomeMenu = document.querySelector("#home-btn-menu");
  btnHomeMenu.addEventListener("click", () => {
    const buttons = document.querySelectorAll(".nav-btn");
    btnHome.classList.remove("border-b", "border-b-slate-400");
    btnMenu.classList.add("border-b", "border-b-slate-400");
    let container = document.querySelector("#container");
    container.classList.add("-translate-x-1/2", "opacity-0");
    setTimeout(() => {
      content.removeChild(content.children[1]);
    }, 300);
    content.appendChild(Menu());
  });
});

btnMenu.addEventListener("click", (e) => {
  const buttons = document.querySelectorAll(".nav-btn");
  for (let button of buttons) {
    button.classList.remove("border-b", "border-b-slate-400");
  }
  e.target.classList.add("border-b", "border-b-slate-400");
  container.classList.add("-translate-x-1/2", "opacity-0");
  setTimeout(() => {
    content.removeChild(content.children[1]);
  }, 300);
  content.appendChild(Menu());
});

btnContact.addEventListener("click", (e) => {
  const buttons = document.querySelectorAll(".nav-btn");
  for (let button of buttons) {
    button.classList.remove("border-b", "border-b-slate-400");
  }
  e.target.classList.add("border-b", "border-b-slate-400");
  let container = document.querySelector("#container");
  container.classList.add("-translate-x-1/2", "opacity-0");
  setTimeout(() => {
    content.removeChild(content.children[1]);
  }, 300);
  content.appendChild(Contact());
});
