$(document).ready(function () {
  $('.sub-menu .nav-link').on('click', function() {
    $('.sub-menu .nav-item').removeClass('active');
    $(this).parent('.nav-item').addClass('active');
  })
});