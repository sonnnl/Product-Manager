const xpMenuBar = document.querySelector(".xp-menubar");
xpMenuBar.addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("active");
  document.querySelector("#content").classList.toggle("active");
});
document.querySelectorAll(".xp-menubar,.body-overlay").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#sidebar").classList.toggle("show-nav");
    document.querySelector(".body-overlay").classList.toggle("show-nav");
  });
});
