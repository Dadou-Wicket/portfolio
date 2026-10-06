const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".header__nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        const activeLink = document.querySelector(
          `.header__nav a[href="#${entry.target.id}"]`,
        );

        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.4,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

const backToTopButton = document.querySelector(".back-to-top");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
