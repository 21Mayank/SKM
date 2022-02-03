(function($) {
  "use strict";


  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });


  // Sticky Navbar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 90) {
      $('.nav-bar').addClass('nav-sticky');
      $('.carousel, .page-header').css("margin-top", "73px");
    } else {
      $('.nav-bar').removeClass('nav-sticky');
      $('.carousel, .page-header').css("margin-top", "0");
    }
  });


  // Dropdown on mouse hover
  $(document).ready(function() {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $('.navbar .dropdown').on('mouseover', function() {
          $('.dropdown-toggle', this).trigger('click');
        }).on('mouseout', function() {
          $('.dropdown-toggle', this).trigger('click').blur();
        });
      } else {
        $('.navbar .dropdown').off('mouseover').off('mouseout');
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });


  // Main carousel
  $(".carousel .owl-carousel").owlCarousel({
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    smartSpeed: 300,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  });


  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
  });


  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    center: true,
    smartSpeed: 2000,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  $(".clients-carousel .owl-carousel").owlCarousel({
    nav: false,
    dots: false,
    autoplay: true,
      loop: true,
      autoplaySpeed: 2200,
      autoplayTimeout: 2200,
      autoplayHoverPause: true,
      slideTransition: 'linear',

    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      }
    }
  });
  $(".carousel-2 .product-carousel").owlCarousel({
    center: true,
      smartSpeed: 2000,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 3
      }
    }
  });



})(jQuery);
