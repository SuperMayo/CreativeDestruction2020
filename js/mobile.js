$(document).ready(function() {
  if ($(window).width() < 768) {
    $(".mobile-under").insertAfter(".mobile-upper")
  }
})

$(window).on("resize", function() {
  if ($(window).width() < 768) {
    $(".mobile-under").insertAfter(".mobile-upper")
  } else {
    $(".mobile-upper").insertAfter(".mobile-under")
  }
})
