var link = document.querySelector(".contact-form-button");
var popup = document.querySelector(".contact-form");
var close = popup.querySelector(".close-btn");
var overlay = document.querySelector(".popup-overlay");
var username = popup.querySelector(".contact-form-userfield")

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-content-show");
  overlay.classList.add("popup-overlay-show");
  username.focus();
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-content-show");
  overlay.classList.remove("popup-overlay-show");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-content-show")) {
      popup.classList.remove("popup-content-show");
    }
  }
  if (event.keyCode === 27) {
    if (overlay.classList.contains("popup-overlay-show")) {
      overlay.classList.remove("popup-overlay-show")
    }
  }
});

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9391587,30.3262546)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "img/map-pin.png";
  var myLatLng = new google.maps.LatLng(59.9388157,30.3238446);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
