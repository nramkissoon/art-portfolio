import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import Marker from './Marker';
import './styles/map.css';

// Map Styles
const nightMapStyle = require('../../json/mapStyles/nightMapStyle.json');
const dayMapStyle = require('../../json/mapStyles/dayMapStyle.json');

// Marker Data
const nightMarkers = require('../../json/mapMarkers/NightMarkers.json');
const dayMarkers = require('../../json/mapMarkers/DayMarkers.json');

class Map extends Component {
  setMapStyle() {
    const { isNight } = this.props;
    return (isNight ? nightMapStyle : dayMapStyle);
  }

  createMarkers() {
    const { isNight, markerOnClick, selected } = this.props;
    if (isNight) {
      return nightMarkers.map((marker) => (
        <Marker
          key={marker.photoSetID}
          lat={marker.lat}
          lng={marker.lng}
          isNight={isNight}
          photoSetID={marker.photoSetID}
          markerOnClick={markerOnClick}
          selected={selected}
        />
      ));
    }
    return dayMarkers.map((marker) => (
      <Marker
        key={marker.photoSetID}
        lat={marker.lat}
        lng={marker.lng}
        isNight={isNight}
        photoSetID={marker.photoSetID}
        markerOnClick={markerOnClick}
        selected={selected}
      />
    ));
  }

  render() {
    const { googleMapLoaded } = this.props;
    return (
      <div className="mapContainer">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDvYg4RBLbXfa_stM5Ihh3X25ZyGhWepCA' }}
          // eslint-disable-next-line react/jsx-no-bind
          onGoogleApiLoaded={googleMapLoaded.bind(this, true)}
          yesIWantToUseGoogleMapApiInternals
          defaultZoom={5}
          defaultCenter={{ lat: 40.7549, lng: -73.9840 }}
          options={{
            styles: this.setMapStyle(),
            fullscreenControl: true,
            gestureHandling: 'greedy',
          }}
          mapTypeControl={false}
          streetViewControl={false}
        >
          {this.createMarkers()}
        </GoogleMapReact>
      </div>
    );
  }
}

Map.propTypes = {
  isNight: PropTypes.bool.isRequired,
  markerOnClick: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  googleMapLoaded: PropTypes.func.isRequired,
};

export default Map;
