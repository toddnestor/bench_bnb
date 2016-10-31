export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this.benches = {};
  }

  round(number, precision) {
    let factor = Math.pow(10, precision);
    let tempNumber = number * factor;
    let roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }

  _benchesToAdd() {
    return _.values(this.benches).filter( bench => {
      let newBench = true;

      this.markers.forEach( marker => {
        let markerLat = this.round(marker.position.lat(), 6);
        let markerLng = this.round(marker.position.lng(), 6);
        if( markerLat == parseFloat(bench.lat) && markerLng == parseFloat(bench.lng) ) {
          newBench = false;
        }
      });

      return newBench
    });
  }

  _markersToRemove() {
    return this.markers.filter( marker => {
      let markerLat = this.round(marker.position.lat(), 6);
      let markerLng = this.round(marker.position.lng(), 6);

      return !_.find(_.values(this.benches), {lat: '' + markerLat, lng: '' + markerLng});
    });
  }

  _createMarkerFromBench(bench) {
    let latLng = new google.maps.LatLng(bench.lat, bench.lng);

    let marker = new google.maps.Marker({
        position: latLng,
        title:bench.description
    });

    marker.setMap(this.map);
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    this.markers = _.without(this.markers, marker);
    marker.setMap(null);
    console.log(this.markers);
  }

  updateMarkers(benches) {
    this.benches = benches;

    this._benchesToAdd().forEach( bench => {
      this._createMarkerFromBench(bench);
    });

    this._markersToRemove().forEach( marker => {
      this._removeMarker( marker );
    });
  }
}
