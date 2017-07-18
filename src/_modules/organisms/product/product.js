'use strict';
export default class Product {
  constructor() {
  }

  drawMap () {
    let coords = {lat: -25.363, lng: 131.044};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: coords
    });
    let marker = new google.maps.Marker({
      position: coords,
      map: map
    });
    marker.setMap(map);
  }
}
