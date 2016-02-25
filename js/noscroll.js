(function(){
  
  var map = document.querySelector(".js-map"),
      cover = document.querySelector(".js-map-cover"),
      prev = cover.parentElement.previousElementSibling;
      next = cover.parentElement.nextElementSibling;


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

})();
