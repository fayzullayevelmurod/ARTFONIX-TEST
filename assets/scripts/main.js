// header_nav
let header_nav = document.querySelector('.header_nav');
let header_nav_btn = document.querySelector('.header_nav_btn');
let body = document.querySelector('.hidden');

header_nav_btn.addEventListener('click', () => {
  header_nav.classList.toggle('active');
  body.classList.toggle('active');
})
// header_nav

let swiper = new Swiper(".treatmentsSwiper", {
  slidesPerView: 1.10,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.2,
      spaceBetween: 28,
    },
    993: {
      slidesPerView: 3.2,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 3.6,
      spaceBetween: 40,
    },
  },
});
