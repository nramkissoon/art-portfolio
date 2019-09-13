import React, { PureComponent } from 'react';
import './styles/marker.css';
import PropTypes from 'prop-types';

// Location Markers for Google Map
class Marker extends PureComponent {
  styleMarker() {
    const { isNight, selected, photoSetID } = this.props;
    let s = '';
    if (isNight) {
      s = s.concat('nightMarker');
    } else {
      s = s.concat('dayMarker');
    }
    if (photoSetID === selected) {
      s = s.concat(' selected');
    }
    return s;
  }

  render() {
    const { photoSetID, markerOnClick } = this.props;
    return (
      <div
        onClick={markerOnClick.bind(this, photoSetID)}
        onKeyPress={markerOnClick.bind(this, photoSetID)}
        className={this.styleMarker()}
        role="button"
        tabIndex={0}
      >
        {photoSetID}
      </div>
    );
  }
}

// PropTypes
Marker.propTypes = {
  isNight: PropTypes.bool.isRequired,
  markerOnClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  selected: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  photoSetID: PropTypes.string,
};

export default Marker;
