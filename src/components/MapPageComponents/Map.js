import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import PropTypes from 'prop-types';
import './styles/map.css';

class Map extends Component {

  _setMapStyle() {
    return (this.props.isNight ? nightMapStyle : dayMapStyle)
  }

  _createMarkers() {
    let isNight = this.props.isNight;
    if(isNight) {
       return nightMarkers.map((marker) =>  (
         <Marker key={marker.photoSetID} lat={marker.lat} lng={marker.lng}
         isNight={isNight} photoSetID={marker.photoSetID}
         markerOnClick={this.props.markerOnClick}
         selected={this.props.selected}/>
       ));
     }
     return dayMarkers.map((marker) =>  (
       <Marker key={marker.photoSetID} lat={marker.lat} lng={marker.lng}
       isNight={isNight} photoSetID={marker.photoSetID}
       markerOnClick={this.props.markerOnClick}
       selected={this.props.selected}/>
     ));
  }

  render () {

    return (
      <div className="mapContainer">
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDvYg4RBLbXfa_stM5Ihh3X25ZyGhWepCA' }}
        onGoogleApiLoaded={this.props.googleMapLoaded.bind(this, true)}
        yesIWantToUseGoogleMapApiInternals={true}
        defaultZoom={5}
        defaultCenter={{ lat: 40.7549, lng: -73.9840}}
        options={{styles: this._setMapStyle(),
          fullscreenControl: true, gestureHandling: 'greedy'}}
        mapTypeControl={false}
        streetViewControl={false}>
          {this._createMarkers()}
        </GoogleMapReact>
      </div>
    )
  }
}

//Map Styles
const nightMapStyle = require('../../json/mapStyles/nightMapStyle.json');
const dayMapStyle = require('../../json/mapStyles/dayMapStyle.json');

//Marker Data
const nightMarkers = require('../../json/mapMarkers/NightMarkers.json');
const dayMarkers = require('../../json/mapMarkers/DayMarkers.json');

Map.propTypes = {
  isNight: PropTypes.bool.isRequired,
  markerOnClick: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  googleMapLoaded: PropTypes.func.isRequired
}

export default Map;
