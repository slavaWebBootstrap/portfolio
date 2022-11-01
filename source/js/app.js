// carosel start

$(document).ready(function(){

    $(".month-product-carousel").owlCarousel({
    items: 4,
    margin: 30,
    nav: true,
  });

    $(".new-product-carousel").owlCarousel({
    items: 4,
    margin: 30,
    nav: true,
  });

    $(".black-friday-carousel").owlCarousel({
    items: 4,
    margin: 30,
    nav: true,
  });


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

  $('.accordion-title').click(function(){
    $(this).next().toggle();
  });

});