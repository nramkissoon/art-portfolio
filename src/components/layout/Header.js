import React, {Component} from "react";
import { Link } from 'react-router-dom';
import './layoutStyles/Header.css';
import PropTypes from 'prop-types';

class Header extends Component {

  _handleLinkCSS(pageName: String) {
    if (this.props.currentPage === pageName) {
      return 'currentPage'
    }
    else {
      return 'headerLink'
    }
  }

  _createHeaderLinks() {
    let links = ["/art-portfolio/photo", "/art-portfolio/video",
      "/art-portfolio/render", "/art-portfolio/map", "/art-portfolio/about"];
    return links.map((link) => {return link !== this.props.currentPage ? (
        <Link key={link} to={link}>
          <div id={link}
              className={this._handleLinkCSS(link)}>
            {this._linkText(link)}
          </div>
        </Link>
      ) : (
        <div key={link} id={link}
          className={this._handleLinkCSS(link)}>
          {this._linkText(link)}
        </div>
      )
    })
  }

  _linkText(s: String) {
    if (s === "/"){
      return "Home";
    }
    return s[15].toUpperCase() + s.slice(16);
  }

  render () {
    return (
      <div style={headerStyle}>
        {this._createHeaderLinks()}
      </div>
    )
  }
}

const headerStyle = {
  height: '5%',
  width: '98vw',
  background: 'black',
  textAlign: 'left',
  padding: '0px',
  font: 'arial',
  display: 'inline-block'
}

Header.propTypes = {
  currentPage: PropTypes.string
}


export default Header;