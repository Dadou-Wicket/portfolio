const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".header__nav a");
const header = document.querySelector(".header");

function updateActiveNav() {
  const scrollPosition = window.scrollY + header.offsetHeight + 30;
  let currentSection = "";

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

const backToTopButton = document.querySelector(".back-to-top");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const menuButton = document.querySelector(".header__menu");
const navigation = document.querySelector(".header__nav");
const navigationLinks = document.querySelectorAll(".header__nav a");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu",
  );
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Ouvrir le menu");
  });
});
