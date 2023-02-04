const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 1,
  loop: true,




  pagination: {
      el: '.swiper-pagination',
  },
});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,

  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 50,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },

  scrollbar: {
      el: '.swiper-scrollbar',
  },
});