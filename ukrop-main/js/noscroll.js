var map = document.querySelector(".js-map");
var cover = document.querySelector(".js-map-cover");
var prev = document.querySelector(".js-addresses");
var next = document.querySelector(".js-footer");


cover.addEventListener("click", function(e) {
  map.classList.remove("js-map-noscroll");
});

prev.addEventListener("click", function(e) {
  if (!(map.classList.contains("js-map-noscroll"))) {
  map.classList.add("js-map-noscroll");
  }
});

next.addEventListener("click", function(e) {
  if (!(map.classList.contains("js-map-noscroll"))) {
  map.classList.add("js-map-noscroll");
  }
});
