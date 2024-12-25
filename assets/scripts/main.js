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

// articleSwiper
let swiper6 = new Swiper(".articleSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".article-pagination",
    clickable: true,
  },
});
// articleSwiper

// comment
let swiper7 = new Swiper(".commentSwiper", {
  slidesPerView: 1.6,
  spaceBetween: 11,
  centeredSlides: true,
  initialSlide: 2,
  navigation: {
    nextEl: ".comment-button-next",
    prevEl: ".comment-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      initialSlide: 1,
    },
    993: {
      slidesPerView: 2.2,
      spaceBetween: 20,
      initialSlide: 1,
    },
    1200: {
      slidesPerView: 2.9,
      spaceBetween: 30,
      initialSlide: 1,
    },
  },
});
// comment

// comment
let swiper8 = new Swiper(".seeSwiper", {
  slidesPerView: 1.7,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    nextEl: ".see-button-next",
    prevEl: ".see-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    993: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 1.5,
      spaceBetween: 70,
    },
  },
});
// comment

function enableHorizontalScroll() {
  const swiperContainers = document.querySelectorAll('.swiper-container');

  swiperContainers.forEach(function(container) {
    container.addEventListener('wheel', function(e) {
      if (e.shiftKey) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    });
  });
}

// Sahifa yuklanganda, barcha slayderlar uchun gorizontal skrollni faollashtirish
document.addEventListener('DOMContentLoaded', function() {
  enableHorizontalScroll(); // Funksiyani chaqirish
});
// seasons_timer
document.addEventListener("DOMContentLoaded", () => {
  let seasons_timer = document.querySelector('.seasons_timer_icon');
  let seasons_timer_text = document.querySelector('.seasons_timer_text');

  if (seasons_timer && seasons_timer_text) {
    seasons_timer.addEventListener('click', () => {
      seasons_timer_text.classList.toggle('active');
    });
  }
});
// seasons_timer

// city-down
// document.addEventListener("DOMContentLoaded", () => {
//   const currentCity = document.getElementById("current-city");
//   const cityDropdown = document.querySelector(".city-dropdown");
//   const cityItems = document.querySelectorAll(".city-item");
//   const cityInput = document.getElementById("city-input");

//   currentCity.addEventListener("click", () => {
//     cityDropdown.classList.toggle("hidden");
//   });

//   cityItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       currentCity.textContent = item.textContent;
//       cityDropdown.classList.add("hidden");
//     });
//   });

//   cityInput.addEventListener("input", (e) => {
//     const filter = e.target.value.toLowerCase();
//     cityItems.forEach((item) => {
//       if (item.textContent.toLowerCase().includes(filter)) {
//         item.style.display = "block";
//       } else {
//         item.style.display = "none";
//       }
//     });
//   });

//   document.addEventListener("click", (e) => {
//     if (!e.target.closest(".city-selector")) {
//       cityDropdown.classList.add("hidden");
//     }
//   });
// });

// header-select
function initCitySelector(config) {
  const {
    currentCityId,
    cityDropdownClass,
    cityItemClass,
    cityInputId,
    citySelectorClass,
    hiddenClass = "hidden",
  } = config;

  const currentCity = document.getElementById(currentCityId);
  const cityDropdown = document.querySelector(`.${cityDropdownClass}`);
  const cityItems = document.querySelectorAll(`.${cityItemClass}`);
  const cityInput = document.getElementById(cityInputId);
  const bodyIn = document.querySelector('.body_in');
  const citySelectorBg = document.querySelector('.city-selector_bg');

  if (!currentCity || !cityDropdown || !cityItems.length || !cityInput) {
    console.error("City selector: Missing required elements.");
    return;
  }

  currentCity.addEventListener("click", () => {
    cityDropdown.classList.toggle(hiddenClass);

    // if (bodyIn) {
    //   bodyIn.classList.add('hidden');
    // }

    if (citySelectorBg) {
      citySelectorBg.classList.add('active');
    }
  });

  cityItems.forEach((item) => {
    item.addEventListener("click", () => {
      currentCity.textContent = item.textContent;
      cityDropdown.classList.add(hiddenClass);

      // if (bodyIn) {
      //   bodyIn.classList.remove('hidden');
      // }

      if (citySelectorBg) {
        citySelectorBg.classList.remove('active');
      }
    });
  });

  cityInput.addEventListener("input", (e) => {
    const filter = e.target.value.toLowerCase();
    cityItems.forEach((item) => {
      if (item.textContent.toLowerCase().includes(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(`.${citySelectorClass}`)) {
      cityDropdown.classList.add(hiddenClass);

      if (bodyIn) {
        bodyIn.classList.remove('active');
      }

      if (citySelectorBg) {
        citySelectorBg.classList.remove('active');
      }
    }
  });

  if (citySelectorBg) {
    citySelectorBg.addEventListener('click', () => {
      cityDropdown.classList.add(hiddenClass);

      if (bodyIn) {
        bodyIn.classList.remove('active');
      }

      citySelectorBg.classList.remove('active');
    });
  }
}

// Example usage
document.addEventListener("DOMContentLoaded", () => {
  initCitySelector({
    currentCityId: "current-city",
    cityDropdownClass: "city-dropdown",
    cityItemClass: "city-item",
    cityInputId: "city-input",
    citySelectorClass: "city-selector",
    hiddenClass: "hidden",
  });
});
// city-down
// header-select

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

// faq
const faqBlocks = document.querySelectorAll('.faq_block');

faqBlocks.forEach(block => {
    block.addEventListener('click', () => {
        faqBlocks.forEach(btn => btn.classList.remove('active'));
        block.classList.add('active');
    });
});
// faq

// select
document.addEventListener("DOMContentLoaded", () => {
  const customSelect = document.querySelector(".custom-select");
  const selected = document.querySelector(".select-selected");
  const options = document.querySelectorAll(".select-items span");

  if (!customSelect || !selected || options.length === 0) {
    console.error("Required elements are missing in the DOM.");
    return;
  }

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


// comment_text
document.querySelectorAll('.comment_more_btn').forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    var commentText = this.closest('.comment_card').querySelector('.comment-text');
    commentText.classList.toggle('expanded');

    if (commentText.classList.contains('expanded')) {
      this.textContent = 'Скрыть';
    } else {
      this.textContent = 'Читать полностью';
    }
  });
});
// comment_text

// header
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".header");
  const stickyClass = "sticky-header";
  const scrollTrigger = 100;

  window.addEventListener("scroll", () => {
    headers.forEach((header) => {
      if (window.scrollY > scrollTrigger) {
        header.classList.add(stickyClass);
      } else {
        header.classList.remove(stickyClass);
      }
    });
  });
});
// header
