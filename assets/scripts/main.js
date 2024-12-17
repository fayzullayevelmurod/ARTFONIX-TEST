// header_nav
let header_nav = document.querySelector('.header_nav');
let header_nav_btn = document.querySelector('.header_nav_btn');
let body_in = document.querySelector('.body_in');

header_nav_btn.addEventListener('click', () => {
  header_nav.classList.toggle('active');
  body_in.classList.toggle('hidden');
})
// header_nav

// program_slider
let swiper1 = new Swiper(".programSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 8,
  navigation: {
    nextEl: ".program-button-next",
    prevEl: ".program-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 1.6,
      spaceBetween: 50,
    },
  },
});
// program_slider

// ourshowsSwiper
let swiper2 = new Swiper(".ourshowsSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  centeredSlides: true,
  initialSlide: 1,
  pagination: {
    el: ".ourshows-pagination",
    clickable: true,
  },
});
// ourshowsSwiper

// select
document.addEventListener("DOMContentLoaded", () => {
  const customSelect = document.querySelector(".custom-select");
  const selected = document.querySelector(".select-selected");
  const options = document.querySelectorAll(".select-items span");

  selected.addEventListener("click", () => {
    customSelect.classList.toggle("open");
  });

  options.forEach(option => {
    option.addEventListener("click", (e) => {
      selected.textContent = e.target.textContent;
      customSelect.classList.remove("open");
    });
  });

  window.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove("open");
    }
  });
});
// select
