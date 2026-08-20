const navButtons = document.querySelectorAll("button[data-target]");
const sections = [...document.querySelectorAll("section[id]")];
const topButton = document.querySelector(".to-top");
const languageToggle = document.querySelector(".language-toggle");
const languageMenu = document.querySelector(".language-menu");
const languageCurrent = document.querySelector(".language-current");
const languageButtons = document.querySelectorAll("[data-lang]");
const languageNames = {
  ja: "日本語",
  en: "English",
  vi: "Tiếng Việt",
};

function scrollToTarget(id) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => scrollToTarget(button.dataset.target));
});

topButton.addEventListener("click", () => {
  document.getElementById("top").scrollIntoView({ behavior: "smooth" });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.target === entry.target.id);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener("scroll", () => {
  topButton.classList.toggle("show", window.scrollY > 700);
});

function applyLanguage(lang) {
  const nextLang = languageNames[lang] ? lang : "ja";
  document.documentElement.lang = nextLang;
  languageCurrent.textContent = languageNames[nextLang];
  localStorage.setItem("siteLanguage", nextLang);

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === nextLang);
  });
}

if (languageToggle && languageMenu) {
  applyLanguage(localStorage.getItem("siteLanguage") || "ja");

  languageToggle.addEventListener("click", () => {
    const isOpen = !languageMenu.hidden;
    languageMenu.hidden = isOpen;
    languageToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
      languageMenu.hidden = true;
      languageToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-switcher")) {
      languageMenu.hidden = true;
      languageToggle.setAttribute("aria-expanded", "false");
    }
  });
}
