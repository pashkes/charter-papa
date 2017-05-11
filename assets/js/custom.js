'use strict';

/**
 * Document ready functions
 */

$(function () {
  var navPos, winPos, navHeight;

  function refreshVar() {
    navPos = $('.header__top').offset().top;
    navHeight = $('.header__top').outerHeight(true);
  }
  if ($('body:not(.home)').length) {
    refreshVar();
    $(window).resize(refreshVar);
  }



  $('<div class="clone-nav"></div>').insertBefore('.header__top').css('height', navHeight).hide();

  $(window).scroll(function() {
    winPos = $(window).scrollTop();
    if ($('body:not(.home)').length){
      if (winPos >= navPos) {
        $('.header__top').addClass('fixed header__top--scroll');
        $('.clone-nav').show();
      }
      else {
        $('.header__top').removeClass('fixed header__top--scroll');
        $('.clone-nav').hide();
      }
    }

  });



  //show feedback
  var bntFeedback = $('.js-feedback-btn'),
      btnCharters = $('.js-btn-show-charters'),
      overlay = $('.overlay'),
      overlayFeedback = $('.js-feedback'),
      overlayCharters = $('.js-our-charters'),
      overlayShow = 'overlay--show',
      closeOverlay = $('.form__close'),
      form = $('.form');
  //end

  //show overlay feedback
  bntFeedback.on('click', function () {
    overlayFeedback.addClass(overlayShow);
  });

  //close overlay
  closeOverlay.on('click', function () {
    $(this).parents(overlay).removeClass(overlayShow);
  });

  //show Ourcharters overlay
  btnCharters.on('click', function () {
    overlayCharters.addClass(overlayShow);
  });

  overlay.mouseup(function (e) {
    if (form.has(e.target).length === 0) {
      $(this).removeClass('overlay--show');
    }
  });
  //end


  if ($('.charter__slider').length) {
    $('.js-slide-catalog-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.js-slide-catalog-small'
    });
    $('.js-slide-catalog-small').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      centerPadding: 0,
      asNavFor: '.js-slide-catalog-big',
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1234,
          settings: {
            slidesToShow: 8
          }
        }
      ]
    });
  }


  var slider = $('.js-charters-slider.single-item');
  var isFirst = true; // Флаг для проверки на предзагрузку

  slider.on('afterChange', setArrowsBackground);
  function setArrowsBackground() {
    $('.charters__arrow-wrapper--back').animate({ opacity: 0 }, 100);
    $('.charters__arrow-wrapper--next').animate({ opacity: 0 }, 100);


    var currentSlide = isFirst ? 0 : slider.slick('slickCurrentSlide');
    isFirst = false; // Сеттим в false
    var slides = slider.find('li:not(.slick-cloned) img');
    var prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    var nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    var s = slider.slick('getSlick');
    var next = slides[nextSlide].currentSrc;
    var prev = slides[prevSlide].currentSrc;
    $('.charters__arrow-wrapper--back').css('backgroundImage', 'url("' + prev + '")');
    $('.charters__arrow-wrapper--next').css('backgroundImage', 'url("' + next + '")');

    $('.charters__arrow-wrapper--back').animate({ opacity: 1 }, 600);
    $('.charters__arrow-wrapper--next').animate({ opacity: 1 }, 600);
  }
  if(slider.length) {
    setTimeout(setArrowsBackground, 0);

  }

  //slider Header home page
  if ($('.home').length) {
    $('.header__slider.single-item').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      arrows: false,
      pauseOnHover: false
    });

    slider.slick({
      prevArrow: $('.charters__arrow-wrapper--back'),
      nextArrow: $('.charters__arrow-wrapper--next'),
          initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: "unslick"
        }
      ]
    });
    $('.search').removeClass('search--show-extended');
  }


  //show advanced search
  if ($('.search').length) {
    $('.js-search-extended').on('click', function () {
      $('.search').toggleClass('search--show-extended');
    });

    //slide range
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 15000,
      values: [4800, 7700],
      slide: function (event, ui) {
        $("#range").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#range").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
    //end

    //custom select
    $(".js-example-placeholder-multiple").select2({
      placeholder: ""
    });
    //end
  }

  //showSubmenu Mobile
  var menuItem = $('.menu-item-has-children'),
      menuList = $('.js-show-submenu');

  menuItem.on('click', function () {
    $(this).parents('.js-show-submenu').toggleClass('menu__list--show-menu');
  });
  //end

  //show Mobile menu
  //Toggle mobile menu
  var burger = $('.js-burger'),
      header = $('.js-header-top'),
      activeMenu = 'header__top--show-menu';

  burger.on('click', function () {
    $(this).toggleClass('active');
    header.toggleClass(activeMenu);
  });


});


//equal center img height on places
$(window).on('resize load', function () {
  var imgHeight = $('.places__wrapper--monaco').outerHeight();
  $('.places__item--center img').css('height', imgHeight)
});
//end

//Sticky header
var headerTop = $('.js-header-top');
function bgChangeHeader() {
  if (headerTop.length) {
    if ($(window).scrollTop() > 1) {
      headerTop.addClass("header__top--scroll");
    }
    else {
      headerTop.removeClass("header__top--scroll");
    }
  }
}
$(window).on('scroll load', function () {
  bgChangeHeader();
});
//end

//resize slider
$(window).on('orientationchange resize', function () {
  if ($('.js-charters-slider.single-item').length) {
    $('.js-charters-slider.single-item').slick('resize');
  }
});

//animation on scroll
document.addEventListener('DOMContentLoaded', function () {
  var trigger = new ScrollTrigger({
    toggle: {
      visible: 'show-element'
    },
    offset: {
      x: 0,
      y: 150
    },
    once: true
  }, document.body, window);
});

if($('.map').length) {
google.maps.event.addDomListener(window, 'load', mapInitialize);
}

function mapInitialize() {
  $(".contacts__map").each(function(){
    var thisEl = $(this),
        el = thisEl.find(".map"),
        elId = el.attr("id"),
        lat = parseFloat(el.attr("data-lat")),
        lng = parseFloat(el.attr("data-lng")),
        mapzoom = parseInt(el.attr("data-size")),
        mapOptions = {
          zoom: mapzoom,
          center: new google.maps.LatLng(lat, lng),
          disableDefaultUI: false,
          scaleControl: false,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    var map = new google.maps.Map(document.getElementById(elId), mapOptions);

    new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: map
    });
  });
}