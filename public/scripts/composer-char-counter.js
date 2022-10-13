$(document).ready(function() {

  $('#tweet-text').on('input', function() {

    let totalChar = 140 - $(this).val().length;
    const $target = $(this).next().children().last();

    if (totalChar < 0) {
      $target.addClass('counter-over');
    } else {
      $target.removeClass('counter-over');
    }

    $target.text(totalChar);
  });
  
});