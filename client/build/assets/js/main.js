$(document).ready(function () {
  console.log("ready!");
  //   $(".slick-belt").slick({
  //     slidesToShow: 1,
  //     adaptiveHeight: true,
  //     arrows: true,
  //     dots: true,
  //     infinite: false,
  //     speed: 300,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           arrows: false,
  //         },
  //       },
  //     ],
  //   });

  $(".user-info .profile-dropdown").hover(
    function () {
      console.log("hover");
    },
    function () {
      $(this).removeClass("active");
    }
  );
});
