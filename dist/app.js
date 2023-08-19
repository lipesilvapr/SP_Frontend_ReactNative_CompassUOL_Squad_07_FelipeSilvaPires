"use strict";
//nav bar
const hamburguer = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});
