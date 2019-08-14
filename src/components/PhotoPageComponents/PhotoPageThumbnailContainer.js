import React, {Component} from 'react';
import ImageThumbnail from '../generalComponents/ImageThumbnail';
import './styles/thumbnailContainerStyle.css';
import PropTypes from 'prop-types';

class PhotoPageThumbnailContainer extends Component {

  constructor(props) {
		super(props)
    this.keyCount = 0 // used to generate unique div keys later
	}

  _createThumbnails() {
    let photos = this.props.filteredPhotoData;
    if (photos === []) { return this._handleNoPhotos();}
    photos.sort((a,b) => 0.5 - Math.random());
    return photos.map((photo) => this._createThumbnailHelper(photo, photos.indexOf(photo)))
  }

  _createThumbnailHelper(photo, i) {
    let filename = photo.filename;
    let dirName = filename.match(/[^1-9]*/i)[0]
    let thumbPath = "/images/" + dirName + "/thumbnail/" + filename
    let fullPath = "/images/" + dirName + "/full/" + filename
    return (
      <div key={this.keyCount.toString() + filename}
        style={this._handleThumbnailSize()}>
       <ImageThumbnail
         key={i}
         thumbnailFilePath={thumbPath}
         fadeInOrder={i}
         imgFilePath={fullPath}
         fileName={filename}
         photoData={photo}
       />
      </div>
    )
  }

  _handleThumbnailSize() {
    return {float: 'left',
            position: 'relative',
            width: '16.36%',
            height: 0,
            paddingRight: '.3%',
            paddingBottom: '16.7%',
            overflow: 'hidden'};
  }

  _handleNoPhotos = () => {
    return (
      <div style={nothingHereStyle}>
        No photos match the filters applied :)
      </div>
    )
  }

  render () {
    let thumbnails = this._createThumbnails();
    if (this.props.filteredPhotoData.length > 0) {
      return (
        <div className="thumbnailContainer">
          <div className='thumbnails' style={{overflowY: 'auto',
            height: '90vh'
            }}>
            {thumbnails}
          </div>
        </div>
      )
    }
    else {
      return this._handleNoPhotos()
    }
  }
}

const nothingHereStyle = {
  cursor: 'default',
  color: 'white',
  fontFamily: 'arial',
  fontSize: '35px',
  marginTop: '15%',
  marginBottom: '25%',
  textAlign: 'center',
}

PhotoPageThumbnailContainer.propTypes = {
  filteredPhotoData: PropTypes.array.isRequired,
}

export default PhotoPageThumbnailContainer;
