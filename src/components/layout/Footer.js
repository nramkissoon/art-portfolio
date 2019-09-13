import React, { PureComponent } from 'react';
import './layoutStyles/Footer.css';
import PropTypes from 'prop-types';


class Footer extends PureComponent {
  render() {
    const { year } = this.props;
    return (
      <footer>
        <p>
          Copyright ©
          {' '}
          {year}
          , Nicholas Ramkissoon
        </p>
      </footer>
    );
  }
}

Footer.propTypes = {
  year: PropTypes.number.isRequired,
};

export default Footer;
