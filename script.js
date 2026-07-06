const body = document.body;
const toggle = document.querySelector(".theme-toggle");
const savedTheme = window.localStorage.getItem("theme");

function setTheme(theme) {
  const isNight = theme === "night";
  body.classList.toggle("night", isNight);
  toggle.setAttribute("aria-pressed", String(isNight));
  toggle.setAttribute("aria-label", isNight ? "Switch to day mode" : "Switch to night mode");
  window.localStorage.setItem("theme", theme);
}

if (toggle) {
  setTheme(savedTheme === "night" ? "night" : "day");

  toggle.addEventListener("click", () => {
    setTheme(body.classList.contains("night") ? "day" : "night");
  });
}
