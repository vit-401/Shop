$(function() {
  $('.bt').on('click', function() {

    let val1, val2;
    val1 = $('#pn-1').val();
    val2 = $('#pn-2').val();
    $('.form-1').append('<div class="td "><div class="x">❌</div><h2 class="h2">' + val1 + '</h2><hr><span class="span">' + val2 + '</span></div>');


    $('.x').on('click', function() {
      $('.td').remove();

    });
  });
});
