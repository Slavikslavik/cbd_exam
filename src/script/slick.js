$(document).ready(function(){
    $('.products_slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        prevArrow: "<img src='img/products/left_arrow.svg' class='slick-prev' alt='1'>",
        nextArrow: "<img src='img/products/right_arrow.svg' class='slick-next' alt='2'>",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
  });

  $(document).ready(function(){
    $('.testimonials_slick').slick({
    
        infinite: true,
        speed:500,
        autoplay:true,
        autoplaySpeed:3500,
        fade: true,
        cssEase: 'linear',
        appendArrows:$('.testimonials_arrow'),
        prevArrow: '<button class="testimonials_arrow--left prev type="button"><img src="img/testimonials/Left_arrow.svg" alt="l"></button>',
        nextArrow: ' <button class="testimonials_arrow--right next type="button"><img src="img/testimonials/Right_arrow.svg" alt="r"</button>',
    });
});  