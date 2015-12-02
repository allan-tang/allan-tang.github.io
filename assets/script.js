/*
  Javascript functions used:
  fadeIn();
  fadeOut();
  attr();
  click();
  hover();
  css();
*/

$(document).ready( function() {

  // init Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });

  // Hover effect over images
  $('.grid-item').mouseenter(function () {
    var number = $(this).attr('id').slice(-1);
    $('#back' + number).stop(true,true).fadeIn();
    $('#text' + number).stop(true,true).fadeIn();
  });

  $('.grid-item').mouseleave(function () {
    var number = $(this).attr('id').slice(-1);
    $('#back' + number).stop(true,true).fadeOut();
    $('#text' + number).stop(true,true).fadeOut();
  });

  // Show modal
  $('.grid-item').click(function() {
    var number = $(this).attr('id').slice(-1);
    $('#modal-container' + number).stop(true,true).fadeIn();
  });
  
  // Hide modal
  $('.modal-overlay').click(function() {
    var number = $(this).attr('id').slice(-1);
    $('#modal-container' + number).stop(true,true).fadeOut();
  });

  //Hover effect over nav items and submit
  $('.navitemattr').hover(function () {
    $(this).css("opacity", 1);
  }, function() {
    $(this).css("opacity", .5);
  });

  $('#submit').hover(function () {
    $(this).css("opacity", 1);
  }, function() {
    $(this).css("opacity", .5);
  });

});