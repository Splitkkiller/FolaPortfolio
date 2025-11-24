
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check saved preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
  }

  // Toggle theme
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Save preference
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });

