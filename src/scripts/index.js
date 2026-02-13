const form = document.querySelector("section#contact form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.submitter.id === "detailed") {
    const data = new FormData(form);

    const username = data.get("username") || "Não informado";
    const usercontact = data.get("userContact") || "Não informado";
    const yourmessage = data.get("yourMessage");

    const text = encodeURIComponent(`
    ${yourmessage}

    Nome: ${username}
    Número: ${usercontact}
    
    `);

    window.location.href = `https://wa.me/71987661753?text=${text}`;
  }
});

const nav = document.querySelector("header nav");
const buttons = document.querySelectorAll(".toggle i");

for (const button of buttons) {
  button.addEventListener("click", () => {
    console.log("oi");
    nav.classList.toggle("show");
  });
}

const swiperSpecialties = new Swiper(".swiper-specialties", {
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

const swiperTestimonials = new Swiper(".swiper-testimonials", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },

  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 100,
    },

    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

new Accordion(".accordion-container", {
  duration: 400,
  showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});
