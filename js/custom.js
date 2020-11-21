//carousel
$("#carousel-books").carousel({
  interval: 3000,
  wrap: false,
  touch: false,
});

$("#carousel-books").on("slide.bs.carousel", () => {
  $("carousel-caption").removeClass("zoomit");
});
$("#carousel-books").on("slid.bs.carousel", () => {
  console.log("Slide has finished sliding");
  $("carousel-caption").addClass("zoomit");
});


