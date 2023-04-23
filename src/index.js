import navbar from "./components/navbar";
import Homepage from "./components/home/home";

const content = document.querySelector("#content");

content.appendChild(navbar());

content.appendChild(Homepage());
