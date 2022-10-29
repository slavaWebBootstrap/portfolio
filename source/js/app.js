// carosel start

$(document).ready(function(){

   $(".nav-carusel").owlCarousel({
    nav: true,
    items: 8,
    autoWidth: true,
    margin: 10,
    slideBy: 3,
  });

  $(".owl-carousel").owlCarousel({
    nav: true,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout:5000,
    smartSpeed: 2000,
    autoplayHoverPause:true,
  });

});

