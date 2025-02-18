const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check local storage for theme preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
}

// Toggle Theme
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙 Dark Mode";
    }
});