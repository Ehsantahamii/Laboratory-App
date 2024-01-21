// AOS.init();

$(function () {
  var topHeight = 70;

  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= topHeight) {
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
  $("#mobile-nav").removeClass("scale-out");
});
$("#closeMenu").click(function () {
  $("#mobile-nav").removeClass("open");
  $("#mobile-nav").toggleClass("scale-out");
});

// dark / light
$("#dark-btn").click(function () {
  $(
    "body ,footer, nav, article,.reservation,.guid-dropdown,.nav-container-mobile,swiper-slide,.blog-card ,.sample-card"
  ).toggleClass("dark-active");
  $("h1 , h2, h3,h4,p , a, .arrow-vector , .tool-box button").css(
    "color",
    "#fff"
  );
  $(".arrow-vector, .arrow-vector path ,button path").css("fill", "#fff");
  $(".hamburger-menu-btn svg path").css("fill", "#fff");
  $(".dark-night-mode").css({ "box-shadow": "unset", background: "#c7c7c7" });
  $("#light-btn").toggleClass("active-mode");
  $("#dark-btn").removeClass("active-mode");
});
$("#light-btn").click(function () {
  $(
    "body ,footer, nav ,article,.reservation,.guid-dropdown,.nav-container-mobile,swiper-slide,.blog-card ,.sample-card"
  ).removeClass("dark-active");
  $("h1 , h2, h3,h4 ,p , a, .arrow-vector , .tool-box button").css("color", "");
  $(".arrow-vector, .arrow-vector path , button path").css("fill", "#333333");
  $(".dark-night-mode").css({ "box-shadow": "", background: "" });
  $(".hamburger-menu-btn svg path").css("fill", "");
  $("#dark-btn").toggleClass("active-mode");
  $("#light-btn").removeClass("active-mode");
});
// Go to top
var topBtn = $("#go-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    $("#go-top").css("display", "unset");
  } else {
    $("#go-top").css("display", "none");
  }
});

topBtn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// accordion
$("#guid-accordion").click(function () {
  $(".navbar-guid-accordions").toggleClass("accordions-open");
  $("#guid-accordion img").toggleClass("rotate270");
});

// open/close samples category filter box
$("#samples-category-btn").click(function () {
  $(".filter-box").toggleClass("open-filter-box");
  $("#samples-category-btn svg").toggleClass("rotate180");
});

// open/close search box
$("#search-btn").click(function () {
  $(".search-bar").toggleClass("open-search-box");
  $(".search-bar input").css("width", "95%");
});

$("body, header , section").on("click", function (e) {
  if (e.target !== this) return;
  $(".search-bar").removeClass("open-search-box");
});
