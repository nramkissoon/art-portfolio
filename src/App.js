import React from 'react';
import { Route, Redirect, HashRouter } from 'react-router-dom';
import MapPage from './components/MapPage';
import PhotoPage from './components/PhotoPage';
import RenderPage from './components/RenderPage';
import VideoPage from './components/VideoPage';
import AboutPage from './components/AboutPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

const d = new Date();
const year = d.getFullYear();

const photoData = require('./json/photoData.json');
const renderData = require('./json/renderData.json');
const videoData = require('./json/videoData.json');

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <Redirect to="/photo" /> // No landing page yet
          )}
        />
        <Route
          exact
          path="/map"
          render={() => (
            <>
              <Header currentPage="/map" />
              <MapPage photoData={photoData} />
            </>
          )}
        />
        <Route
          exact
          path="/photo"
          render={() => (
            <>
              <Header currentPage="/photo" />
              <PhotoPage
                photoData={photoData}
                year={year}
              />
            </>
          )}
        />
        <Route
          exact
          path="/render"
          render={() => (
            <>
              <Header currentPage="/render" />
              <RenderPage
                renderData={renderData}
                year={year}
              />
            </>
          )}
        />
        <Route
          exact
          path="/video"
          render={() => (
            <>
              <Header currentPage="/video" />
              <VideoPage
                videoData={videoData}
                year={year}
              />
            </>
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <>
              <Header currentPage="/about" />
              <AboutPage />
            </>
          )}
        />
        <Footer year={year} />
      </div>
    </HashRouter>
  );
}

export default App;
