import React, {Component} from 'react';
import VideoPlayer from './VideoPageComponents/VideoPlayer';


class VideoPage extends Component {

  _handleSelection = (id) => {
    let newSelection = id;
    this.setState({selected: newSelection});
  }

  _genVideos(){
    let videos = []
    Object.keys(this.props.videoData).forEach((filename) => {
      videos.push(<VideoPlayer key={filename} filename={filename}
        fileData={this.props.videoData[filename]}/>)
      })
    return videos
  }

  render () {
    return (
      <>
      {this._genVideos()}
      </>
    );
  }
}

export default VideoPage;
