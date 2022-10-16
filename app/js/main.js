$(document).ready(function () {
  $(".headhunters__slider").slick({
    infinite: true,
    slidesToShow: 2,
    dots: true,
    autoplay: true,
    arrows: false,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1072,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
