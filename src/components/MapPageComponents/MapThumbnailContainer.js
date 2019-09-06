import React, {PureComponent} from 'react';
import './styles/thumbnailContainerStyle.css';
import ImageThumbnail from '../generalComponents/ImageThumbnail';
import PropTypes from 'prop-types';

class MapThumbnailContainer extends PureComponent {

  constructor(props) {
		super(props)
    this.keyCount = 0 // used to generate unique div keys later

	}

  displayHeaderText = () => (
    this.props.currentPhotoSet === "" ? "Select a Photo Set from Map" :
      this.props.currentPhotoSet
    )

  headerStyle = () => ( //TODO
    this.props.isNight ? "nightHeader" : "dayHeader"
  )

  _createThumbnailsHelper(s) {
    const formatted = s.replace(" ", "_")
    const dir1 = `/images/${formatted}/thumbnail/${formatted}`;
    const dir2 = `/images/${formatted}/full/${formatted}`;
    const num = this.props.photoSetData.numPhotos
    let list = []
    let order = {}
    for (var i = 1; i <= num; i++) {
      list.push(i);
      order[i] = 0;
    }
    list.sort((a,b) => 0.5 - Math.random());
    for (i = 1; i <= num; i++) {
      order[list[i]] = i;
    }
    this.keyCount++;
    return list.map((i) => (
      <div key={this.keyCount.toString() + formatted + i.toString()}
        className='thumbDiv'>
       <ImageThumbnail
         key={i}
         thumbnailFilePath={dir1.concat(i.toString() + '.jpg')}
         fadeInOrder={order[i]}
         imgFilePath={dir2.concat(i.toString() + '.jpg')}
         fileName={i.toString() + '.jpg'}
         photoData={this.props.photoSetData.photos.filter(photo => (
           photo.filename === formatted + i.toString() + '.jpg'))[0]}
       />
      </div>
    ));
  }

  _createThumbnails() {
      const photoset = this.props.currentPhotoSet;
      return photoset === "" ? null : this._createThumbnailsHelper(photoset);
  }

  render() {
    const thumbnails = this._createThumbnails();
    return (
      <div id="mapPageThumbnailContainer">
      <div className="headerContainer">
        <h1 className={this.headerStyle()}>
          {this.displayHeaderText()}
        </h1>
      </div>
      <div className='thumbnails' style={{overflowY: 'visible',
        height: 'auto', minHeight: '30vh'
        }}>
        {thumbnails}
      </div>
      </div>
    )
  }
}

//PropTypes
MapThumbnailContainer.propTypes = {
  currentPhotoSet: PropTypes.string,
  isNight: PropTypes.bool.isRequired,
  photoSetData: PropTypes.object
}

export default MapThumbnailContainer;
