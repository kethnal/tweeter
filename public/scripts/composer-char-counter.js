$(document).ready(function() {

  $('#humming').on('input', function() {

    let totalChar = 140 - $(this).val().length;
    const $target = $(this).next().children().last();

    if (totalChar < 0) {
      $target.addClass('error');
    } else {
      $target.removeClass('error');
    }

    $target.text(totalChar);
  });
  
});