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

// let swiper = new Swiper(".treatmentsSwiper", {
//   slidesPerView: 1.10,
//   spaceBetween: 28,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2.2,
//       spaceBetween: 28,
//     },
//     993: {
//       slidesPerView: 3.2,
//       spaceBetween: 28,
//     },
//     1200: {
//       slidesPerView: 3.6,
//       spaceBetween: 40,
//     },
//   },
// });
