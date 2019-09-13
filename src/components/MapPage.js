import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Map from './MapPageComponents/Map';
import MapThumbnailContainer from './MapPageComponents/MapThumbnailContainer';
import './MapPageComponents/styles/toggleButton.css';

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNight: true,
      currentPhotoSet: '',
      shouldToggleLoad: false,
    };
  }

  // Toggle Night/Day, resets Photo set
  _toggleMapStyle = () => {
    this.setState({
      isNight: !this.state.isNight,
      currentPhotoSet: '',
    });
  }

  _markerOnClick = (photoSetID) => (this.state.currentPhotoSet !== photoSetID
    ? this.setState({ currentPhotoSet: photoSetID }) : null)

  _googleMapLoaded = (yes) => {
    this.setState({ shouldToggleLoad: yes }); // only set to true if Google maps loaded
  }

  _loadToggle() {
    if (this.state.shouldToggleLoad) {
      return (
        <button
          id="toggle"
          className={this._btnStyle()}
          onClick={this._toggleMapStyle.bind(this)}
        >
          {this._displayBtnText()}
        </button>
      );
    }
    return null;
  }

  _btnStyle() {
    return (this.state.isNight ? 'nightBtn' : 'dayBtn');
  }

  _displayBtnText() {
    return (this.state.isNight ? 'Switch to Day' : 'Switch to Night');
  }

  render() {
    const currentPhotoSetData = this.props.photoData.filter((photoSet) => (photoSet.photoSetID === this.state.currentPhotoSet))[0];
    return (
      <div style={{ overflow: 'hidden' }}>
        <div style={{ position: 'relative' }}>{this._loadToggle()}</div>
        {this._loadToggle()}
        <Map
          isNight={this.state.isNight}
          markerOnClick={this._markerOnClick}
          selected={this.state.currentPhotoSet}
          googleMapLoaded={this._googleMapLoaded}
        />
        <MapThumbnailContainer
          currentPhotoSet={this.state.currentPhotoSet}
          isNight={this.state.isNight}
          photoSetData={currentPhotoSetData}
        />
      </div>
    );
  }
}

MapPage.propTypes = {
  photoData: PropTypes.array.isRequired,
};

export default MapPage;
