let themeChanger = document.querySelector(".ThemeChanger");
let logoTheme = document.querySelector(".logoTheme");
let root = document.documentElement;
var theme = "light";

themeChanger.style.setProperty(
  "background-image",
  "url('/public/sky-light.jpg')"
);

async function modeChanger() {
  if (theme === "light") {
    theme = "dark";
    localStorage.theme = "dark";
    logoTheme.src = "/public/bmoon.png";
    root.style.setProperty("--main-change", "#000000");
    root.style.setProperty("--main-background", "#121212");
    root.style.setProperty("--main-text", "#ffff");
    themeChanger.style.setProperty(
      "background-image",
      "url('/public/sky-dark.jpg')"
    );
  } else if (theme === "dark") {
    theme = "light";
    document.cookie = theme;
    localStorage.theme = "light";
    logoTheme.src = "/public/sun.png";
    root.style.setProperty("--main-change", "#feff9e");
    root.style.setProperty("--main-background", "#ffffff");
    root.style.setProperty("--main-text", "black");
    themeChanger.style.setProperty(
      "background-image",
      "url('/public/sky-light.jpg')"
    );
  }
}

themeChanger.addEventListener("click", modeChanger);

if (localStorage.theme === "dark") {
  theme = "dark";
  localStorage.theme = "dark";
  logoTheme.src = "/public/bmoon.png";
  root.style.setProperty("--main-change", "#000000");
  root.style.setProperty("--main-background", "#121212");
  root.style.setProperty("--main-text", "#ffff");
  themeChanger.style.setProperty(
    "background-image",
    "url('/public/sky-dark.jpg')"
  );
} else if (localStorage.theme === "light") {
  theme = "light";
  localStorage.theme = "light";
  logoTheme.src = "/public/sun.png";
  root.style.setProperty("--main-change", "#feff9e");
  root.style.setProperty("--main-background", "#ffffff");
  root.style.setProperty("--main-text", "black");
  themeChanger.style.setProperty(
    "background-image",
    "url('/public/sky-light.jpg')"
  );
}
