var map = document.querySelector(".js-map");
var cover = document.querySelector(".js-map-cover");
var addresses = document.querySelector(".js-addresses");
var footer = document.querySelector(".js-footer");


cover.addEventListener("click", function(e) {
  map.classList.remove("js-map-noscroll");
});

addresses.addEventListener("click", function(e) {
  if (!(map.classList.contains("js-map-noscroll"))) {
  map.classList.add("js-map-noscroll");
  }
});

footer.addEventListener("click", function(e) {
  if (!(map.classList.contains("js-map-noscroll"))) {
  map.classList.add("js-map-noscroll");
  }
});
