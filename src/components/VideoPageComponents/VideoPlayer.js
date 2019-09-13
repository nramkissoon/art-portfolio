import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles/VideoPageStyle.css';


class VideoPlayer extends PureComponent {
  render() {
    const { filename, fileData } = this.props;
    return (
      <div style={{
        height: 'auto',
        width: '90%',
        position: 'relative',
        margin: 'auto',
      }}
      >
        <video
          key={filename}
          width="900"
          controls
          loop
          // eslint-disable-next-line react/jsx-boolean-value
          autoPlay={true} // needed
          muted
          controlsList="nodownload"
          className="largePlayer"
        >
          <source
            src={
            `${process.env.PUBLIC_URL}/video/${filename}`
            }
            type="video/mp4"
          />
        </video>
        <div className="description">{fileData.description}</div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  filename: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  fileData: PropTypes.object.isRequired,
};

export default VideoPlayer;
