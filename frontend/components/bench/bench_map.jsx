import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleClick(coords) {
    this.props.router.push({
      pathname: "benches/new",
      query: coords
    });
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.map.addListener('idle', () => {
      const bounds = this.map.getBounds();
      const ne = bounds.getNorthEast();
      const sw = bounds.getSouthWest();

      let boundsFilter = {
        southWest: {lat: sw.lat(), lng: sw.lng()},
        northEast: {lat: ne.lat(), lng: ne.lng()}
      };

      this.props.updateFilter('bounds', boundsFilter);
    });

    this.map.addListener('click', e => {
      this._handleClick({lat: e.latLng.lat(), lng: e.latLng.lng()});
    });

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentWillReceiveProps(nextProps) {
    this.MarkerManager.updateMarkers(nextProps.benches);
  }

  render() {

    return (
      <div id="map-container" ref="map"></div>
    );
  }
}

export default withRouter(BenchMap);
