import React, {Component} from "react";
import './layoutStyles/Footer.css';
import PropTypes from 'prop-types';

class Footer extends Component {
  render () {
    return (
      <footer>
        <p>Copyright © {this.props.year}, Nicholas Ramkissoon</p>
      </footer>
    )
  }
}

Footer.propTypes = {
  year: PropTypes.number.isRequired
}

export default Footer;
