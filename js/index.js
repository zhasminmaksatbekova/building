const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView:5,
    spaceBetween:64,

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });