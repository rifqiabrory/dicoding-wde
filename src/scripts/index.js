import "regenerator-runtime";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "./components/app-bar";
import "./components/app-jumbotron";
import "./components/app-footer";
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const hamburgerButton = document.querySelector("#hamburgerButton");
const drawer = document.querySelector("#drawer");
const close = document.querySelector("#close");
const content = document.querySelector("#content");
const jumbotron = document.querySelector(".jumbotron");
const navList = document.querySelectorAll(".nav__item");
const app = new App({
  button: hamburgerButton,
  drawer,
  content,
  close,
  jumbotron,
  navList,
});
window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("DOMContentLoaded", () => {
  app.renderPage();
  swRegister();
});
