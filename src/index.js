import "./styles.css";
import homePage from "./content-loader";
import menuPage from "./menu-loader";
import aboutPage from "./about-loader";
import contactPage from "./contact-loader";


function renderPage() {
    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");
    const aboutButton = document.getElementById("about");
    const contactButton = document.getElementById("contact");
    
    homePage();

    homeButton.addEventListener("click", homePage);
    menuButton.addEventListener("click", menuPage);
    aboutButton.addEventListener("click", aboutPage);
    contactButton.addEventListener("click", contactPage);
}

document.addEventListener("DOMContentLoaded", renderPage);

