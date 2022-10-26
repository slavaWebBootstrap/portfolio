// carosel start

$(document).ready(function(){
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