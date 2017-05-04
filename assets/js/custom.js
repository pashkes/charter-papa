'use strict';


/**
 * Document ready functions
 */
$(function () {

  //show advanced search
  if ($('.search').length) {
    $('.js-search-extended').on('click', function () {
      $('.search').toggleClass('search--show-extended');
    });
  }
  $(".js-example-placeholder-multiple").select2({
    placeholder: ""
  });
//end

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

  //show feedback
  var bntFeedback = $('.js-feedback-btn'),
      btnCharters = $('.js-btn-show-charters'),
      overlay = $('.overlay'),
      overlayFeedback = $('.js-feedback'),
      overlayCharters = $('.js-our-charters'),
      overlayShow = 'overlay--show',
      closeOverlay = $('.form__close'),
      form = $('.form');

  //show overlay feedback
  bntFeedback.on('click', function () {
    overlayFeedback.addClass(overlayShow);
  });

  //close overlay
  closeOverlay.on('click',function () {
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