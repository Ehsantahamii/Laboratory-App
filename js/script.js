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
    "body ,footer, nav, article,.reservation,.guid-dropdown,.nav-container-mobile,swiper-slide,.blog-card ,.sample-card,.form-container,.consultation-form-container,#closeMenu"
  ).toggleClass("dark-active");
  $("h1 , h2, h3,h4,p , a, .arrow-vector , .tool-box button").css(
    "color",
    "#fff"
  );
  $(".arrow-vector, .arrow-vector path").css("fill", "#fff");
  $(".hamburger-menu-btn svg path").css("fill", "#fff");
  $(".dark-night-mode").css({ "box-shadow": "unset", background: "#c7c7c7" });
  $(".preloader-container").css("background", "rgba(0, 0, 0, 0.5)");

  $("#light-btn").toggleClass("active-mode");
  $("#dark-btn").removeClass("active-mode");
});
$("#light-btn").click(function () {
  $(
    "body ,footer, nav ,article,.reservation,.guid-dropdown,.nav-container-mobile,swiper-slide,.blog-card,.sample-card,.form-container,.consultation-form-container,#closeMenu"
  ).removeClass("dark-active");
  $("h1 , h2, h3,h4 ,p , a, .arrow-vector , .tool-box button").css("color", "");
  $(".arrow-vector, .arrow-vector path").css("fill", "#333333");
  $(".dark-night-mode").css({ "box-shadow": "", background: "" });
  $(".preloader-container").css("background", "");
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

// show/hide result
$("#open-consultation").click(function () {
  $(".consultation-form-container").toggleClass("show");
  $(".consultation-form-container").toggleClass("scale-in-center");
});
$("#close-consultation").click(function () {
  $(".consultation-form-container").removeClass("show");
  $(".consultation-form-container").removeClass("scale-in-center");
});

$("body, header , section")
  .not($("#search-btn"))
  .on("click", function (e) {
    if (e.target !== this) return;
    $(".search-bar").removeClass("open-search-box");
  });
"body".not($("#menutop"));

// dot-fire preloader
const snippets = document.querySelectorAll(".snippet");

for (let i = 0; i < snippets.length; i++) {
  snippets[i].addEventListener("mouseleave", clearTooltip);
  snippets[i].addEventListener("blur", clearTooltip);
}

function showTooltip(el, msg) {
  el.setAttribute("class", "snippet tooltip");
  el.setAttribute("aria-label", msg);
}

function clearTooltip(e) {
  e.currentTarget.setAttribute("class", "snippet");
  e.currentTarget.removeAttribute("aria-label");
}

const clipboardSnippets = new ClipboardJS(".snippet", {
  text: (trigger) => trigger.getAttribute("data-title"),
});

clipboardSnippets.on("success", (e) => {
  e.clearSelection();
  showTooltip(e.trigger, "Copied!");
});

clipboardSnippets.on("error", (e) => {
  showTooltip(e.trigger, "Copy failed!");
});
