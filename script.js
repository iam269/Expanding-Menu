const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const container = document.querySelector(".container");

toggle.addEventListener("click", () => {
  container.classList.toggle("expanded");
  toggle.classList.toggle("expanded");

  if (container.classList.contains("expanded")) {
    setTimeout(() => menu.classList.add("show"), 300);
  } else {
    menu.classList.remove("show");
  }
});
