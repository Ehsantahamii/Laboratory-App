$(function () {
  var shrinkHeader = 70;
  console.log(shrinkHeader);

  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $(".nav-container").addClass("nav-animate");
    } else {
      $(".nav-container").removeClass("nav-animate");
    }
  });
  function getCurrentScroll() {
    return window.scrollY || document.documentElement.scrollTop;
  }
});

$("#menu-btn").click(function () {
  $("#mobile-nav").toggleClass("open");
});
$("#closeMenu").click(function () {
  $("#mobile-nav").removeClass("open");
});
