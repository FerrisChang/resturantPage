import homePage from "./pages/home";
import menuDisplay from "./pages/menu";
import profile from "./pages/aboutUs";
import contact from "./pages/contactUs";
import deleteScreen from "./functions/delete";

homePage();
profile();


const menu = document.getElementById('menuBtn');
menu.addEventListener('click', () => {
    deleteScreen();
    menuDisplay();
})

const home = document.getElementById('home');
home.addEventListener('click', () => {
    deleteScreen();
    profile();
})

const contactUs = document.getElementById('contact');
contactUs.addEventListener('click', () => {
    deleteScreen();
    contact();
})

