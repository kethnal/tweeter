/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  $('article').on('mouseover', function() {
    $(this).addClass('hover-art');
  });

  $('article').on('mouseleave', function() {
    $(this).removeClass('hover-art');
  });

  $('.icon').on('mouseover', function() {
    $(this).addClass('hover-icon');
  });

  $('.icon').on('mouseleave', function() {
    $(this).removeClass('hover-icon');
  });
});