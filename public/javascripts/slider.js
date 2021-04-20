var swiper = new Swiper('.slider-1', {
    autoHeight: false,
     simulateTouch: true,
     speed: 1000,
     centeredSlides : true,
     grabCursor:true,
     effect: 'fade',
      loop: false,
      updateOnWindowResize: true,
     autoplay: {
            delay: 8000,
    },
    lazyLoading: true,
    lazy: {
        loadPrevNext: true,
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }, 
 });

 var thumbs = new Swiper('.slider-2', {
     effect: 'fade',
     centeredSlides: true,
     autoHeight: true,
     // loop: true,
     paginationClickable: false,
     direction: 'vertical',
        // simulateTouch: false,
 });

swiper.controller.control = thumbs;



// $('.swiper-container').on('mouseenter', function (e) {
//      swiper.autoplay.stop();
//  })
//  $('.swiper-container').on('mouseleave', function (e) {
//      swiper.autoplay.start();
//  })