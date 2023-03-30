const menuButton = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  menu.classList.toggle("hidden");
  // men
});
