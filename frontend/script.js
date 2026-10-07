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

const contactForm = document.querySelector(".contact__form");
const contactStatus = document.querySelector(".contact__status");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = contactForm.querySelector("button[type='submit']");
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  contactStatus.textContent = "Envoi du message...";
  submitButton.disabled = true;

  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    contactStatus.textContent = "Votre message a bien été envoyé.";
    contactForm.reset();
  } catch (error) {
    contactStatus.textContent =
      error.message || "Une erreur est survenue lors de l'envoi.";
  } finally {
    submitButton.disabled = false;
  }
});
