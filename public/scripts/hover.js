$(document).ready(function() {

  $('article').on('mouseover', function() {

    const $target = $(this).children().first();

    $target.addClass('hover-handle');

    $(this).addClass('hover-art');
  });

  $('article').on('mouseleave', function() {

    const $target = $(this).children().first();

    $target.removeClass('hover-handle');

    $(this).removeClass('hover-art');
  });

  $('.icon').on('mouseover', function() {
    $(this).addClass('hover-icon');
  });

  $('.icon').on('mouseleave', function() {
    $(this).removeClass('hover-icon');
  });
  
});