import React, {Component} from "react";
import { Link } from 'react-router-dom';
import './layoutStyles/Header.css';
import PropTypes from 'prop-types';

class Header extends Component {

  _handleLinkCSS(pageName) {
    if (this.props.currentPage === pageName) {
      return 'currentPage'
    }
    else {
      return 'headerLink'
    }
  }

  _createHeaderLinks() {
    const links = ["/photo", "/video",
      "/render", "/map", "/about"];
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
    return s[1].toUpperCase() + s.slice(2);
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
  width: '100%',
  margin: 'auto',
  background: 'black',
  textAlign: 'left',
  padding: '0px',
  display: 'inline-block',
}

Header.propTypes = {
  currentPage: PropTypes.string
}


export default Header;
