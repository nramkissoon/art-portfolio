import React, { Component } from 'react';
import ImageThumbnail from '../generalComponents/ImageThumbnail';
import './styles/thumbnailContainerStyle.css';
import PropTypes from 'prop-types';

class PhotoPageThumbnailContainer extends Component {
  constructor(props) {
    super(props);
    this.keyCount = 0; // used to generate unique div keys later
    this.loaded = 0;
  }

  _createThumbnails() {
    const photos = this.props.filteredPhotoData;
    if (photos === []) { return this._handleNoPhotos(); }
    photos.sort((a, b) => 0.5 - Math.random());
    return photos.map((photo) => this._createThumbnailHelper(photo, photos.indexOf(photo) + 1));
  }

  _createThumbnailHelper(photo, i) {
    const {filename} = photo;
    const dirName = filename.match(/[^1-9]*/i)[0];
    const thumbPath = `/images/${dirName}/thumbnail/${filename}`;
    const fullPath = `/images/${dirName}/full/${filename}`;
    return (
      <div
key={this.keyCount.toString() + filename}
        className="thumbnailDiv"
      >
        <ImageThumbnail
         key={i}
         thumbnailFilePath={thumbPath}
         fadeInOrder={i}
         imgFilePath={fullPath}
         fileName={filename}
         photoData={photo}
         handleLoad={this.handleLoad}
       />
      </div>
    );
  }

  handleLoad = () => {
    this.loaded += 1;
    if (this.loaded === this.props.filteredPhotoData.length) {
      this.forceUpdate();
    }
  }

  render() {
    const numPhotos = this.props.filteredPhotoData.length;
    const thumbnails = this._createThumbnails();
    if (numPhotos > 0) {
      return (
        <div className="thumbnailContainer">
          <div
            className="thumbnails"
            style={{
              overflowY: 'visible',
              height: '100%',
              visibility: (numPhotos === this.loaded) ? 'visible' : 'hidden',
            }}
          >
            {thumbnails}
          </div>
        </div>
      );
    }
  }
}

PhotoPageThumbnailContainer.propTypes = {
  filteredPhotoData: PropTypes.array.isRequired,
};

export default PhotoPageThumbnailContainer;
