$(function () {
  var shrinkHeader = 70;

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
// open / close navbar
$("#menu-btn").click(function () {
  $("#mobile-nav").toggleClass("open");
});
$("#closeMenu").click(function () {
  $("#mobile-nav").removeClass("open");
});

// dark / light
$("#dark-btn").click(function () {
  $("body ,footer, nav, article").toggleClass("dark-active");
  $("h1 , h2, h3,h4 ,p , a, .arrow-vector").css("color", "#fff");
  $(".hamburger-menu-btn svg path").css("fill", "#fff");
  $(".dark-night-mode").css({ "box-shadow": "unset", background: "#c7c7c7" });
  $("#light-btn").toggleClass("active-mode");
  $("#dark-btn").removeClass("active-mode");
});
$("#light-btn").click(function () {
  $("body ,footer, nav ,article").removeClass("dark-active");
  $("h1 , h2, h3,h4 ,p , a").css("color", "");
  $(".hamburger-menu-btn svg path").css("fill", "");
  $(".dark-night-mode").css({ "box-shadow": "", background: "" });
  $("#dark-btn").toggleClass("active-mode");
  $("#light-btn").removeClass("active-mode");
});
// Go to top
$("#go-top").click(function scrollToTop() {
  $(window).scrollTop(0);
});
