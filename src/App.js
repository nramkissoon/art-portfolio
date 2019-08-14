import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import MapPage from './components/MapPage';
import PhotoPage from './components/PhotoPage';
import RenderPage from './components/RenderPage';
import VideoPage from './components/VideoPage';
import AboutPage from './components/AboutPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
            <Redirect exact from="/" to="/art-portfolio/photo" />
            <Route exact path='/map' render={() => (
              <>
              <Header currentPage='/art-portfolio/map'/>
              <MapPage photoData={photoData}/>
              </>
              )} />
            <Route exact path='/art-portfolio/photo' render={() => (
              <>
              <Header currentPage='/photo'/>
              <PhotoPage photoData={photoData}
                         year={year}/>
              </>
              )} />
            <Route exact path='/art-portfolio/render' render={() => (
              <>
              <Header currentPage='/render'/>
              <RenderPage renderData={renderData}
                         year={year}/>
              </>
              )} />
            <Route exact path='/art-portfolio/video' render={() => (
              <>
              <Header currentPage='/video'/>
              <VideoPage videoData={videoData}
                         year={year}/>
              </>
              )} />
            <Route exact path='/art-portfolio/about' render={() => (
              <>
              <Header currentPage='/about'/>
              <AboutPage />
              </>
              )} />
          <Footer year={year}/>
        </div>
      </Router>
    );
  }
}


var d = new Date();
var year = d.getFullYear();

const photoData = require('./json/photoData.json');
const renderData = require('./json/renderData.json');
const videoData = require('./json/videoData.json');

export default App;
