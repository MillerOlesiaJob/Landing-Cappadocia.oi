$(function(){
  $('.fairy-tale__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/back-button.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next-button.svg" alt=""></button>',
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.our-trip__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/back-button.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next-button.svg" alt=""></button>',
    autoplay: true,
    fade: true,
  });
});
