var map = document.querySelector(".map");
var cover = document.querySelector(".map-cover");
var addresses = document.querySelector(".addresses");
var footer = document.querySelector(".footer");


cover.addEventListener("click", function(e) {
  map.classList.remove("map-noscroll");
});

addresses.addEventListener("click", function(e) {
  if (!(map.classList.contains("map-noscroll"))) {
  map.classList.add("map-noscroll");
  }
});

footer.addEventListener("click", function(e) {
  if (!(map.classList.contains("map-noscroll"))) {
  map.classList.add("map-noscroll");
  }
});

/*

var parent = cover.parentNode;

parent.previousSibling.addEventListener("click", function(e) {
  if (!(map.classList.contains("map-noscroll"))) {
  map.classList.add("map-noscroll");
  }
});

parent.nextSibling.addEventListener("click", function(e) {
  if (!(map.classList.contains("map-noscroll"))) {
  map.classList.add("map-noscroll");
  }
});
*/
