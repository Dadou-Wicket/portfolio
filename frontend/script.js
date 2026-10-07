const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".header__nav a");
const header = document.querySelector(".header");

// Met à jour automatiquement le lien de navigation actif selon la section visible.
function updateActiveNav() {
  const scrollPosition = window.scrollY + header.offsetHeight + 50;
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

// Permet de revenir en haut de la page avec un défilement fluide.
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const menuButton = document.querySelector(".header__menu");
const navigation = document.querySelector(".header__nav");
const navigationLinks = document.querySelectorAll(".header__nav a");

// Gère l'ouverture et la fermeture du menu de navigation sur mobile.
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu",
  );
});

// Ferme le menu mobile après avoir sélectionné une section.
navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Ouvrir le menu");
  });
});

const contactForm = document.querySelector(".contact__form");
const contactStatus = document.querySelector(".contact__status");

// Gère l'envoi du formulaire de contact via Netlify Forms.
contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = contactForm.querySelector("button[type='submit']");
  const formData = new FormData(contactForm);
  contactStatus.textContent = "Envoi du message...";
  submitButton.disabled = true;
  try {
    await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    });
    contactStatus.textContent = "Votre message a bien été envoyé.";
    contactForm.reset();
  } catch (error) {
    contactStatus.textContent =
      "Une erreur est survenue lors de l'envoi du message.";
  } finally {
    submitButton.disabled = false;
  }
});
