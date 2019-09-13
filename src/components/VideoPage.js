import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from './VideoPageComponents/VideoPlayer';


class VideoPage extends Component {
  genVideos() {
    const videos = [];

    const { videoData } = this.props;

    Object.keys(videoData).forEach((filename) => {
      videos.push(<VideoPlayer
        key={filename}
        filename={filename}
        fileData={videoData[filename]}
      />);
    });
    return videos;
  }

  render() {
    return (
      <>
        { this.genVideos() }
      </>
    );
  }
}

VideoPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  videoData: PropTypes.array.isRequired,
};

export default VideoPage;
