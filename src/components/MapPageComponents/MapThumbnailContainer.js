/* eslint-disable react/require-default-props */
/* eslint-disable no-plusplus */
import React, { PureComponent } from 'react';
import './styles/thumbnailContainerStyle.css';
import PropTypes from 'prop-types';
import ImageThumbnail from '../generalComponents/ImageThumbnail';

class MapThumbnailContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.keyCount = 0; // used to generate unique div keys later
  }

  displayHeaderText = () => {
    const { currentPhotoSet } = this.props;
    return currentPhotoSet === '' ? 'Select a Photo Set from Map'
      : currentPhotoSet;
  }

  createThumbnailsHelper(s) {
    const { photoSetData } = this.props;
    const formatted = s.replace(' ', '_');
    const dir1 = `/images/${formatted}/thumbnail/${formatted}`;
    const dir2 = `/images/${formatted}/full/${formatted}`;
    const num = photoSetData.numPhotos;
    const list = [];
    const order = {};
    for (let i = 1; i <= num; i++) {
      list.push(i);
      order[i] = 0;
    }
    list.sort(() => 0.5 - Math.random());
    for (let i = 1; i <= num; i++) {
      order[list[i]] = i;
    }
    this.keyCount++;
    return list.map((i) => (
      <div
        key={this.keyCount.toString() + formatted + i.toString()}
        className="thumbDiv"
      >
        <ImageThumbnail
          key={i}
          thumbnailFilePath={dir1.concat(`${i.toString()}.jpg`)}
          fadeInOrder={order[i]}
          imgFilePath={dir2.concat(`${i.toString()}.jpg`)}
          fileName={`${i.toString()}.jpg`}
          photoData={photoSetData.photos.filter((photo) => (
            photo.filename === `${formatted + i.toString()}.jpg`))[0]}
        />
      </div>
    ));
  }

  createThumbnails() {
    const { currentPhotoSet } = this.props;
    return currentPhotoSet === '' ? null : this.createThumbnailsHelper(currentPhotoSet);
  }

  render() {
    const thumbnails = this.createThumbnails();
    return (
      <div id="mapPageThumbnailContainer">
        <div className="headerContainer">
          <h1>
            {this.displayHeaderText()}
          </h1>
        </div>
        <div
          className="thumbnails"
          style={{
            overflowY: 'visible',
            height: 'auto',
            minHeight: '30vh',
          }}
        >
          {thumbnails}
        </div>
      </div>
    );
  }
}

MapThumbnailContainer.propTypes = {
  currentPhotoSet: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  isNight: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  photoSetData: PropTypes.object,
};

export default MapThumbnailContainer;
