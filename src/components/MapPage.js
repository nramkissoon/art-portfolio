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
  toggleMapStyle = () => {
    const { isNight } = this.state;

    this.setState({
      isNight: !isNight,
      currentPhotoSet: '',
    });
  }

  // eslint-disable-next-line react/destructuring-assignment
  markerOnClick = (photoSetID) => (this.state.currentPhotoSet !== photoSetID
    ? this.setState({ currentPhotoSet: photoSetID }) : null)

  googleMapLoaded = (yes) => {
    this.setState({ shouldToggleLoad: yes }); // only set to true if Google maps loaded
  }

  loadToggle() {
    const { shouldToggleLoad } = this.state;

    if (shouldToggleLoad) {
      return (
        <button
          type="button"
          id="toggle"
          className={this.btnStyle()}
          onClick={this.toggleMapStyle.bind(this)}
        >
          {this.displayBtnText()}
        </button>
      );
    }
    return null;
  }

  btnStyle() {
    const { isNight } = this.state;

    return (isNight ? 'nightBtn' : 'dayBtn');
  }

  displayBtnText() {
    const { isNight } = this.state;

    return (isNight ? 'Switch to Day' : 'Switch to Night');
  }

  render() {
    const { currentPhotoSet, isNight } = this.state;
    const { photoData } = this.props;
    const currentPhotoSetData = photoData.filter((photoSet) => (
      photoSet.photoSetID === currentPhotoSet))[0];
    return (
      <div style={{ overflow: 'hidden' }}>
        <div style={{ position: 'relative' }}>{this.loadToggle()}</div>
        {this.loadToggle()}
        <Map
          isNight={isNight}
          markerOnClick={this.markerOnClick}
          selected={currentPhotoSet}
          googleMapLoaded={this.googleMapLoaded}
        />
        <MapThumbnailContainer
          currentPhotoSet={currentPhotoSet}
          isNight={isNight}
          photoSetData={currentPhotoSetData}
        />
      </div>
    );
  }
}

MapPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  photoData: PropTypes.array.isRequired,
};

export default MapPage;
