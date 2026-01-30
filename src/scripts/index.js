const nav = document.querySelector("header nav");
const buttons = document.querySelectorAll(".toggle i");

for (const button of buttons) {
  button.addEventListener("click", () => {
    console.log("oi");
    nav.classList.toggle("show");
  });
}

const swiper = new Swiper(".swiper-specialties", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: 4,
  spaceBetween: 60,
  autoplay: {
    delay: 1500,
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
