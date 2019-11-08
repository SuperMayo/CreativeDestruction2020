$(window).on("scroll", function() {
  var s = $(window).scrollTop()
  var angle = (s % (5 * 360)) / 5
  var linearGradient =
    "linear-gradient(" + angle + "deg" + ", #004e9f, #073361)"
  $(".background-dark").css("background", linearGradient)
})
