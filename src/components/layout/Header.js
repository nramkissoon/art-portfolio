import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './layoutStyles/Header.css';
import PropTypes from 'prop-types';

const headerStyle = {
  height: '5%',
  width: '100%',
  margin: 'auto',
  background: 'black',
  textAlign: 'left',
  padding: '0px',
  display: 'inline-block',
};

class Header extends PureComponent {
  handleLinkCSS(pageName) {
    const { currentPage } = this.props;
    if (currentPage === pageName) {
      return 'currentPage';
    }
    return 'headerLink';
  }

  // eslint-disable-next-line class-methods-use-this
  linkText(s) {
    return s[1].toUpperCase() + s.slice(2);
  }

  createHeaderLinks() {
    const links = ['/photo', '/video',
      '/render', '/map', '/about'];
    const { currentPage } = this.props;
    return links.map((link) => (link !== currentPage ? (
      <Link
        key={link}
        to={link}
      >
        <div
          id={link}
          className={this.handleLinkCSS(link)}
        >
          {this.linkText(link)}
        </div>
      </Link>
    ) : (
      <div
        key={link}
        id={link}
        className={this.handleLinkCSS(link)}
      >
        {this.linkText(link)}
      </div>
    )));
  }

  render() {
    return (
      <div style={headerStyle}>
        {this.createHeaderLinks()}
      </div>
    );
  }
}

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
};


export default Header;
