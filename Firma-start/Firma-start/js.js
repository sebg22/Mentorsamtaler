/*
    Carousel
*/
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
        },
    }
  });
