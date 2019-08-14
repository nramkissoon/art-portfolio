import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VideoThumbnail extends Component {

  constructor(props) {
    super(props)
    this.player = React.createRef()
  }

  _play = () => {
    this.player.current.play()
  }

  _pause = () => {
    this.player.current.pause()
  }

  render () {
    return (
      <div id={this.props.full} className="thumbnailCont"
        onMouseEnter={this._play} onMouseLeave={this._pause}
        onClick={this.props.handleSelection.bind(this, this.props.full)}>
        <video width="200" controls={false} loop muted
           className={"thumbPlayer"} ref={this.player}
          >
          <source src={process.env.PUBLIC_URL + "/video/" + this.props.filename} type="video/mp4"/>
        </video>
        <div className="thumbDescription">{this.props.description}</div>
      </div>
    );
  }
}

VideoThumbnail.propTypes = {
  full: PropTypes.string.isRequired,
  description: PropTypes.string,
  filename: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired
}

export default VideoThumbnail;
