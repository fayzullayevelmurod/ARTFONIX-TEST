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

// concertSwiper
let swiper3 = new Swiper(".concertSwiper", {
  slidesPerView: 2.2,
  spaceBetween: 5,
  breakpoints: {
    640: {
      slidesPerView: 2.5,
      spaceBetween: 19,
    },
    1200: {
      slidesPerView: 2.7,
      spaceBetween: 19,
    },
  },
});
// concertSwiper

// hearSwiper
let swiper4 = new Swiper(".hearSwiper", {
  slidesPerView: 2.5,
  spaceBetween: 23,
  breakpoints: {
    640: {
      slidesPerView: 3.5,
      spaceBetween: 19,
    },
    1200: {
      slidesPerView: 4.4,
      spaceBetween: 37,
    },
  },
});
// hearSwiper

// video_reviewsSwiper
let swiper5 = new Swiper(".video_reviewsSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".video_reviews-button-next",
    prevEl: ".video_reviews-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 1.6,
      spaceBetween: 48,
    },
  },
});
// video_reviewsSwiper

// accardion_seasons
function setupAccordion(selector, activeClass) {
  const buttons = document.querySelectorAll(selector);

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          buttons.forEach(btn => btn.classList.remove(activeClass));
          button.classList.add(activeClass);
      });
  });
}

setupAccordion('.accardion_seasons_block', 'active');
setupAccordion('.another_block', 'highlight');
// accardion_seasons

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
