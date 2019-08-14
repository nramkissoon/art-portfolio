import React, {Component} from 'react';
import PropTypes from 'prop-types';
import VideoThumbnail from './VideoThumbnail';

class VideoThumbnailContainer extends Component {

  _createThumbnails() {
    return this.props.videoData.map((video) => {
      let j = Object.keys(video)[0].match(/[^1-9]*/i)[0]
      let i = j + '720.mp4'

      return (
        <VideoThumbnail key={i} description={video[j+'1080.mp4'].description} filename={i}
          handleSelection={this.props.handleSelection}
          full={j + '1080.mp4'}/>
      )
    })
  }

  render () {
    return (
      <div style={{position: 'relative', float: 'right', height: '90vh', width: '30%',
      overflowY: 'scroll'}}>
        {this._createThumbnails()}
      </div>
    );
  }
}

VideoThumbnailContainer.propTypes = {
  videoData: PropTypes.array.isRequired,
  handleSelection: PropTypes.func.isRequired
}

export default VideoThumbnailContainer;
