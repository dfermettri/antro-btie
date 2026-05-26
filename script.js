const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

function setNavigationState(isOpen) {
  document.body.classList.toggle("nav-open", isOpen);
  navToggle?.setAttribute("aria-expanded", String(isOpen));
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setNavigationState(!isOpen);
});

nav?.addEventListener("click", (event) => {
  const target = event.target;

  if (target instanceof HTMLAnchorElement) {
    setNavigationState(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavigationState(false);
  }
});
