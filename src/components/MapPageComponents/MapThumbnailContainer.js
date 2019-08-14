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

  _createThumbnailsHelper(s: String) {
    let formatted = s.replace(" ", "_")
    let dir1 = '/images/' + formatted + '/thumbnail/' + formatted;
    let dir2 = '/images/' + formatted + '/full/' + formatted;
    let num = this.props.photoSetData.numPhotos
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
        style={this._handleThumbnailSize(list.length)}>
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

  _handleThumbnailSize(i) {
    if (i > 9) {
      return {float: 'left',
              position: 'relative',
              width: '24.3%',
              paddingLeft: '.6%',
              overflow: 'hidden'} ;
    }
    return {float: 'left',
            position: 'relative',
            width: '32.7%',
            paddingLeft: '.6%',
            overflow: 'hidden'} ;
  }

  _createThumbnails() {
      let photoset = this.props.currentPhotoSet;
      return photoset === "" ? null : this._createThumbnailsHelper(photoset);
  }

  render() {
    let thumbnails = this._createThumbnails();
    return (
      <div id="mapPageThumbnailContainer">
      <div className="headerContainer">
        <h1 className={this.headerStyle()}>
          {this.displayHeaderText()}
        </h1>
      </div>
      <div className='thumbnails' style={{overflowY: 'auto',
        height: '85vh'
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
