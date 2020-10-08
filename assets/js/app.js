$(document).ready(function () {
  $('.sub-menu .nav-link').on('click', function() {
    $('.sub-menu .nav-item').removeClass('active');
    $(this).parent('.nav-item').addClass('active');
  })

  $('.main-menu__link').on('click', function() {
    $('.main-menu__item').removeClass('active');
    $(this).parent('.main-menu__item').addClass('active');
  })
});