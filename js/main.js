$(document).ready(function () {
  $(".menu-icon").on("click", function() {
    $(".main-nav").toggleClass("mobile-menu")
    $(".menu-icon").toggleClass("state-open")
  });
});