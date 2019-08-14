import React, {Component} from "react";
import './layoutStyles/Footer.css';
import PropTypes from 'prop-types';

class Footer extends Component {
  render () {
    return (
      <footer>
        <p>Copyright © {this.props.year}, Nicholas Ramkissoon</p>
        <div className="Links">
          <div className="IG">
            <a href='https://www.instagram.com/zeroexposure/'
              target='_blank'
              rel="noopener noreferrer">
              <img className='IGpic'
                src={process.env.PUBLIC_URL + "/images/icons/ig.png"}
                alt="Instagram profile link" />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  year: PropTypes.number.isRequired
}

export default Footer;
