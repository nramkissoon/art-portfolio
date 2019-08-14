import React, {PureComponent} from 'react';
import './styles/marker.css';
import PropTypes from 'prop-types';

class Marker extends PureComponent{

  styleMarker() {
    let s = "";
    if (this.props.isNight){
      s = s.concat("nightMarker");
    } else {
      s = s.concat("dayMarker"); }
    if (this.props.photoSetID === this.props.selected) {
      s = s.concat(" selected")
    }
    return s;
  }

  render() {
    return (
      <div onClick={this.props.markerOnClick.bind(this, this.props.photoSetID)}
        className={this.styleMarker()}>
        {this.props.photoSetID}
      </div>
    );
  }
}

//PropTypes
Marker.propTypes = {
  isNight: PropTypes.bool.isRequired,
  markerOnClick: PropTypes.func.isRequired,
  selected: PropTypes.string
}

export default Marker;
