function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.938631, 30.323055)
  }
  var map = new google.maps.Map(document.querySelector('.contacts__map'),
                                mapOptions);
  var image = "../img/icon-map-pin.svg";
  var myLatLng = new google.maps.LatLng(59.938631, 30.323055);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
