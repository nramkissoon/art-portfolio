import React, {Component} from 'react';
import './styles/filter.css';
import PropTypes from 'prop-types';

class GenreFilter extends Component {

  state = {
    hover: false
  }

  _handleMouseOver = () => {
    return !this.state.hover ? this.setState({ hover: true }) : null;
  }

  _handleMouseLeave = () => {
    this.setState({ hover: false });
  }

  _createGenreOptions = () => {
    return (
      Object.keys(this.props.genreFilters).map((genre) => (
        <div id={genre} key={genre}
          onClick={this.props.applyFilter.bind(this)}
          onMouseOver={this._handleMouseOver}
          className='cont'>
          <div id={genre} key={genre} className='genre'>
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </div>
          <div className={this._check(genre)}>✓</div>
      </div>
      ))
    )
  }

  _check(s: String) {
    return this.props.genreFilters[s] ? 'check' : 'noCheck'
  }

  _handleOptionStyle(){
    if (this.state.hover) {
      return {
        zIndex: 5,
        opacity: 1,
        width: '100%',
        position: 'absolute',
        display: 'block',
        transition: '.3s',
        boxShadow: '0px 6px 6px black'
      }
    }
    return {
      zIndex: -1,
      opacity: 0,
      width: '100%',
      position: 'absolute',
      display: 'block'
    }
  }

  render () {
    return (
      <div style={contStyle}>
          <div className='Genre-filter'
            onMouseOver={this._handleMouseOver}
            onMouseLeave={this._handleMouseLeave}>
            Genre Filters
            <div style={this._handleOptionStyle()}>
              {this._createGenreOptions()}
            </div>
          </div>
      </div>
    )
  }
}

const contStyle = {
  height: '100%',
  width: '25%',
  margin: 0,
  float: 'left',
  marginTop: '1%',
  marginBottom: '1%',
  display: 'inline-block'
}

GenreFilter.propTypes = {
  genreFilters: PropTypes.object.isRequired,
  applyFilter: PropTypes.func.isRequired
}

export default GenreFilter;
