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
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },

    700: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    1100: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
