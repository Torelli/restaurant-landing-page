import navbar from "./components/navbar";
import Homepage from "./components/home/home";
import Menu from "./components/menu/menu";
import Contact from "./components/contact/contact";

const content = document.querySelector("#content");

content.appendChild(navbar());
content.appendChild(Homepage());

const btnHome = document.querySelector("#btn-Home");
btnHome.classList.add("border-b", "border-b-slate-400");

const btnMenu = document.querySelector("#btn-Menu");
const btnContact = document.querySelector("#btn-Contact");
let btnHomeMenu = document.querySelector("#home-btn-menu");

btnHomeMenu.addEventListener("click", () => {
  const buttons = document.querySelectorAll(".nav-btn");
  btnHome.classList.remove("border-b", "border-b-slate-400");
  btnMenu.classList.add("border-b", "border-b-slate-400");
  content.removeChild(content.children[1]);
  content.appendChild(Menu());
});

btnHome.addEventListener("click", (e) => {
  const buttons = document.querySelectorAll(".nav-btn");
  for (let button of buttons) {
    button.classList.remove("border-b", "border-b-slate-400");
  }
  e.target.classList.add("border-b", "border-b-slate-400");
  content.removeChild(content.children[1]);
  content.appendChild(Homepage());

  btnHomeMenu = document.querySelector("#home-btn-menu");
  btnHomeMenu.addEventListener("click", () => {
    btnMenu.classList.add("border-b-slate-400");
    content.removeChild(content.children[1]);
    content.appendChild(Menu());
  });
});

btnMenu.addEventListener("click", (e) => {
  const buttons = document.querySelectorAll(".nav-btn");
  for (let button of buttons) {
    button.classList.remove("border-b", "border-b-slate-400");
  }
  e.target.classList.add("border-b", "border-b-slate-400");
  content.removeChild(content.children[1]);
  content.appendChild(Menu());
});

btnContact.addEventListener("click", (e) => {
  const buttons = document.querySelectorAll(".nav-btn");
  for (let button of buttons) {
    button.classList.remove("border-b", "border-b-slate-400");
  }
  e.target.classList.add("border-b", "border-b-slate-400");
  content.removeChild(content.children[1]);
  content.appendChild(Contact());
});
