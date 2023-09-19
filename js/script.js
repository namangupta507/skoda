$(".slick-slider").slick({
   slidesToShow: 1,
   infinite:true,
   slidesToScroll: 1,
   autoplay: true,
   arrows: false,
   autoplaySpeed: 3000
     // dots: false, Boolean
    // arrows: false, Boolean
  });

// testimonial-slider

$(".slick-slider-2").slick({
   slidesToShow: 2,
   infinite:true,
   slidesToScroll: 2,
   autoplay: true,
   arrows: false,
   autoplaySpeed: 3000,
     // dots: false, Boolean
    // arrows: false, Boolean
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  });

