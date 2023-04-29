import navbar from "./components/navbar";
import Homepage from "./components/home/home";
import Menu from "./components/menu/menu";

const content = document.querySelector("#content");

content.appendChild(navbar());

content.appendChild(Menu());
