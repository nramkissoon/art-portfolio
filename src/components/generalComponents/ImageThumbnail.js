/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import './styles/imageThumbnail.css';
import PropTypes from 'prop-types';
import FullImageModal from './FullImageModal';

// class for image thumbnails in photo and map pages
class ImageThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hover: false,
    };
  }

  componentDidMount() {
    const img = new Image();
    const { thumbnailFilePath } = this.props;
    img.src = process.env.PUBLIC_URL + thumbnailFilePath;
  }

  handleShow = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
      hover: false,
    });
  }

  handleMouseOver = () => (
    // eslint-disable-next-line react/destructuring-assignment
    !this.state.show ? this.setState({ hover: true }) : null
  )

  handleMouseLeave = () => {
    this.setState({ hover: false });
  }

  render() {
    const {
      thumbnailFilePath,
      fadeInOrder,
      imgFilePath,
      fileName,
      photoData,
      handleLoad,
    } = this.props;
    const { show, hover } = this.state;
    return (
      <div style={{
        float: 'none',
        width: '100%',
        position: 'relative',
      }}
      >
        {show && (
        <FullImageModal
          handleShow={this.handleShow}
          imgFilePath={imgFilePath}
          fileName={fileName}
          description={photoData.description}
          year={photoData.year}
        />
        )}
        <img
          className="thumb"
          alt="no thumbnail available"
          src={process.env.PUBLIC_URL + thumbnailFilePath}
          style={{
            animation: `fadein .5s linear ${(fadeInOrder * (0.04)).toString()}s backwards`,
            height: '100%',
            width: '100%',
            verticalAlign: 'middle',
            opacity: (!hover) ? 1 : 0.7,
            cursor: (hover) ? 'pointer' : 'default',
            transition: '.1s',
          }}
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleShow}
          onLoad={handleLoad}
        />
      </div>
    );
  }
}

ImageThumbnail.propTypes = {
  thumbnailFilePath: PropTypes.string.isRequired,
  imgFilePath: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  photoData: PropTypes.object.isRequired,
  fadeInOrder: PropTypes.number.isRequired,
  handleLoad: PropTypes.func.isRequired,
};

export default ImageThumbnail;
