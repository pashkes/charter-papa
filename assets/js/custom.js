'use strict';
/**
 * Document ready functions
 */
$(function () {
  if ($('.search').length) {
    $('.js-search-extended').on('click', function () {
      $('.search').toggleClass('search--show-extended');
    });
  }
  $(".js-example-placeholder-multiple").select2({
    placeholder: ""
  });

  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 4800, 7700 ],
    slide: function( event, ui ) {
      $( "#range" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#range" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );


});
$(window).on('resize load', function () {
  var imgHeight = $('.places__wrapper--monaco').outerHeight();
  $('.places__item--center img').css('height', imgHeight)
});

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