import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles/VideoPageStyle.css';


class VideoPlayer extends Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.filename !== this.props.filename){
      return true;
    }
    return false
  }

  render () {
    return (
      <div style={{height: "auto", width: '100%', position:'relative', float: 'left'}}>
        <video key={this.props.filename}
          width="900" controls loop autoPlay={true} muted
          controlsList="nodownload" className={"largePlayer"}
          >
          <source src={process.env.PUBLIC_URL + "/video/" + this.props.filename} type="video/mp4"/>
        </video>
        <div className="description">{this.props.fileData.description}</div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
    filename: PropTypes.string.isRequired,
    fileData: PropTypes.object.isRequired
}

export default VideoPlayer;
