import React, {Component} from 'react';
import './styles/imageThumbnail.css';
import FullImageModal from './FullImageModal';
import PropTypes from 'prop-types';

// class for image thumbnails in photo and map pages
class ImageThumbnail extends Component {

  constructor(props) {
		super(props)
		this.state = {
			show: false,
      hover: false
		}
	}

  handleShow = () => {
    this.setState({ show: !this.state.show,
      hover: false});
  }

  _handleStyle() {
    return this.state.hover ? 'containerHover' : 'container'
  }

  _handleMouseOver = () => {
    return !this.state.show ? this.setState({ hover: true }) : null;
  }

  _handleMouseLeave = () => {
    this.setState({ hover: false });
  }

  render () {
    let thumbnailFilePath = this.props.thumbnailFilePath;
    return (
      <div style={{
          animation:
          "fadein " +
          (this.props.fadeInOrder < 18 ? (this.props.fadeInOrder+.9)*(.1).toString() :
          this.props.fadeInOrder*(.01).toString())
          + 's' ,
          float: 'none',
          width: '100%'}}>
        {this.state.show && (
            <FullImageModal
              handleShow={this.handleShow}
              imgFilePath={this.props.imgFilePath}
              fileName={this.props.fileName}
              description={this.props.photoData.description}
              year={this.props.photoData.year}/>
        )}
          <img className="thumb" alt="no thumbnail available"
            src={process.env.PUBLIC_URL + thumbnailFilePath}
            style={{height: '100%',
              width: '100%', verticalAlign:'middle',
              opacity: (!this.state.hover) ? 1 : .7,
              cursor: (this.state.hover) ? 'pointer' : 'default',
              transition: '.1s'}}
            onMouseOver={this._handleMouseOver}
            onMouseLeave={this._handleMouseLeave}
            onClick={this.handleShow}
            />
      </div>
    )
  }
}

ImageThumbnail.propTypes = {
  thumbnailFilePath: PropTypes.string.isRequired,
  imgFilePath: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  photoData: PropTypes.object.isRequired
}

export default ImageThumbnail;
