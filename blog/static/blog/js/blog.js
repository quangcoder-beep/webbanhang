const toggleBtn = document.getElementById("toggleMode");
const body = document.body;
const title = document.querySelectorAll("p , a");
const title2 = document.querySelectorAll(".title");
const overlay = document.querySelectorAll(".overlay p");
console.log(overlay);
let savedMode = localStorage.getItem("mode");
if (!savedMode) {
  savedMode = "dark";
  localStorage.setItem("mode", "dark");
}
// check trong localstorage

if (savedMode === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
} else {
  body.classList.remove("dark");
  toggleBtn.textContent = "🌙";
}

// click vào button thay đổi Mode
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    toggleBtn.classList.add("modeLight");
    title.forEach((p) => {
      p.style.color = "black";
    });
    title2.forEach((p) => {
      p.style.color = "black";
    });
    overlay.forEach((p) => {
      p.style.color = "white";
    });
    localStorage.setItem("mode", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    toggleBtn.classList.remove("modeLight");
    title.forEach((p) => {
      p.style.color = "white";
    });
    title2.forEach((p) => {
      p.style.color = "white";
    });
    overlay.forEach((p) => {
      p.style.color = "white";
    });
    localStorage.setItem("mode", "light");
  }
});
