const nav = document.querySelector("header nav");
const buttons = document.querySelectorAll(".toggle i");

for (const button of buttons) {
  button.addEventListener("click", () => {
    console.log("oi");
    nav.classList.toggle("show");
  });
}
