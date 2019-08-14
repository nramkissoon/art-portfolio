import React, {PureComponent} from 'react';
import './styles/filter.css';
import PropTypes from 'prop-types';

class SelectionFilter extends PureComponent {

  state = {
    hover: false
  }

  _handleMouseOver = () => {
    return !this.state.hover ? this.setState({ hover: true }) : null;
  }

  _handleMouseLeave = () => {
    this.setState({ hover: false });
  }

  _createOptions() {
    return Object.keys(this.props.options).map((option) => {
      if (option !== this.props.currVal) {
        return (
          <div id={option} key={option} className='option'
            style={{position: 'relative'}}
            onMouseOver={this._handleMouseOver}
            onClick={this.props.applyFilter.bind(this)}
            >{this.props.options[option]}</div>
        )
      }
      return null;
    })
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
      position: 'absolute',
      display: 'block'
    }
  }

  render () {
    return (
      <div style={contStyle}>
          <div className='label' style={labelStyle}>
            {this.props.labelText}
          </div>
            <div className='dropdown'
            onMouseOver={this._handleMouseOver}
            onMouseLeave={this._handleMouseLeave}>
              {this.props.options[this.props.currVal]}
              <div style={this._handleOptionStyle()}>
              {this._createOptions()}
              </div>
            </div>
      </div>
    )
  }
}

const labelStyle = {
  fontFamily: 'arial',
  color: '#e8e8e8',
  fontSize: '18px',
  position: 'relative',
  display: 'inline-block',
  height: '100%',
  top: '1px'
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

SelectionFilter.propTypes = {
  currVal: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  options: PropTypes.object.isRequired,
  applyFilter: PropTypes.func.isRequired
}

export default SelectionFilter;
