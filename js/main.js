$(window).load(function () {
  $(".before-after").twentytwenty({
    before_label: 'Без скинали',
    after_label: 'Со скинали'
  });
  $(".before-slider").slick({
    draggable: false,
    dots: true,
    dotsClass: "before-slider__dots",
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right")
  });
  $('.menu-button').on('click', function () {
    $('.menu').toggleClass('menu_active');
  });

  // Select item
  $('.select_checked').on('click', function() {
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });

  $('.select__option').on('click', function() {
    let value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select__dropdown').toggleClass('select__dropdown_open');
    $('.select_checked').text(value);
  });
});