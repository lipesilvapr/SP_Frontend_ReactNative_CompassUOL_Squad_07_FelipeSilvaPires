//nav bar
const hamburguer = document.querySelector(".burger")! as HTMLElement;
const navMenu = document.querySelector(".nav-menu")! as HTMLElement;

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});
