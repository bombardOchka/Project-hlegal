$(".burger").click(function () {
  $(this).toggleClass("active");
});

$(".lang").click(function () {
  $(".lang").removeClass("active");
  $(this).addClass("active");
});

$(".burger").click(function () {
  $(".content").toggleClass("z-1");
});

$(".btn-public").click(function () {
  $(".btn-public").removeClass("active");
  $(this).addClass("active");
});

$("#firstSlider").slick({
  dots: true,
  arrows: false,
});

$("#secondSlider").slick({
  dots: true,
  arrows: false,
});
