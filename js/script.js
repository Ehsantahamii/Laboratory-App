window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav.nav");
  nav.classList.toggle("nav-animate", window.scrollY > 0);
});
