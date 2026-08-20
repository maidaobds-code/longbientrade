const navButtons = document.querySelectorAll("button[data-target]");
const sections = [...document.querySelectorAll("section[id]")];
const topButton = document.querySelector(".to-top");

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
