import React, {Component} from 'react';
import VideoPlayer from './VideoPageComponents/VideoPlayer';
import VideoThumbnailContainer from './VideoPageComponents/VideoThumbnailContainer';

class VideoPage extends Component {

  state = {
    selected: "fuji1080.mp4"
  }

  _handleSelection = (id) => {
    let newSelection = id;
    this.setState({selected: newSelection});
  }

  _parseVideoData = () => {
    let data = []
    Object.keys(this.props.videoData).forEach((filename) => {
      if (filename !== this.state.selected) {
        var obj = {};
        obj[filename] = this.props.videoData[filename]
        data.push(obj)
      }
    })
    return data;
  }

  render () {
    return (
      <>
      <VideoPlayer filename={this.state.selected}
        fileData={this.props.videoData[this.state.selected]}/>
      <VideoThumbnailContainer videoData={this._parseVideoData()}
        handleSelection={this._handleSelection}/>
      </>
    );
  }
}

export default VideoPage;
