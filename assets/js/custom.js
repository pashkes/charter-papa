'use strict';

/**
 * Document ready functions
 */
$(function () {

  //slider Header home page
  if ($('.is-home').length) {
    $('.header__slider.single-item').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      arrows: false
    });

    $('.js-charters-slider.single-item').slick({
      prevArrow: $('.charters__arrow-wrapper--back .charters__arrow'),
      nextArrow: $('.charters__arrow-wrapper--next .charters__arrow')
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