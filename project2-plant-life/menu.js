const menuButton = document.querySelector("button.menu-button");
const mainSection = document.querySelector("main");

menuButton.addEventListener("click", function () {
  mainSection.classList.toggle("open");
  menuButton.classList.toggle("open");

  if (mainSection.classList.contains("open")) {
    menuButton.innerHTML = `<img src="assets/close.svg" alt="" aria-hidden="true"> Close`;
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    menuButton.innerHTML = `<img src="assets/menu.svg" alt="" aria-hidden="true"> Menu`;
    menuButton.removeAttribute("aria-expanded");
  }
})
