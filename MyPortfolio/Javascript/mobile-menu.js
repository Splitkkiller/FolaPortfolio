document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("mobile-menu");
  const navbarList = document.querySelector(".navbar-list");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbarList.classList.toggle("active");
  });
});
