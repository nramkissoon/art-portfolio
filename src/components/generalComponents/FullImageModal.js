import React, {PureComponent} from 'react';
import './styles/imageThumbnail.css';
import PropTypes from 'prop-types';

// Full image display when ImageThumbnail is clicked
class FullImageModal extends PureComponent {

  showLoaded = (e) => {
    e.target.style.display = 'block';
  }

  render () {
    return (
      <dialog
        className="dialog"
        open
        onClick={this.props.handleShow.bind(this)}
        style={{margin: 0}}
      >
        <div className="fullImageContainer">
        <img className="fullImage"
          src={process.env.PUBLIC_URL + this.props.imgFilePath}
          alt={this.props.description}
          onLoad={this.showLoaded}
          />
        </div>
        <div className="caption">
          {this.props.description}{' - '}{this.props.year}
        </div>
      </dialog>
    )
  }
}

FullImageModal.propTypes = {
  handleShow: PropTypes.func.isRequired,
  imgFilePath: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  description: PropTypes.string,
  year: PropTypes.string
}

export default FullImageModal;
