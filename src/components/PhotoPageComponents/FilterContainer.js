import React, {Component} from 'react';
import SelectionFilter from './SelectionFilter';
import GenreFilter from './GenreFilter';
import './styles/filter.css';
import PropTypes from 'prop-types';

class FilterContainer extends Component {

  _clearFilterBtn = () => {
    if (this.props.showClear) {
      return (
      <div style={contStyle}>
        <button id="clear"
          onClick={this.props.clearFilter.bind(this)}>
          Clear Filters
        </button>
      </div>)
    }
    return null;
  }


  render () {
    return (
      <div style={{height: '10%', width: '100%',
        textAlign: 'center',
        display: 'inline-block',
        backgroundColor: '#2e2e2e'}}>
        <SelectionFilter currVal={this.props.medVal} labelText={medFilter.labelText}
          options={medFilter.options} applyFilter={this.props.applyFilter}/>
        <SelectionFilter currVal={this.props.colVal} labelText={colFilter.labelText}
          options={colFilter.options} applyFilter={this.props.applyFilter}/>
        <GenreFilter genreFilters={this.props.genreFilters}
          applyFilter={this.props.applyFilter}/>
        {this._clearFilterBtn()}
      </div>
    )
  }
}

const medFilter = {
  labelText: 'Medium: ',
  options: {
    noneMedium: 'No Filter',
    analogOnly: 'Analog Only',
    digitalOnly: 'Digital Only'
  }
}

const colFilter = {
  labelText: 'Color: ',
  options: {
    noneColor: 'No Filter',
    colorOnly: 'Color Only',
    bwOnly: 'Black & White'
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

FilterContainer.propTypes = {
  applyFilter: PropTypes.func.isRequired,
  clearFilter: PropTypes.func,
  showClear: PropTypes.bool,
  medVal: PropTypes.string.isRequired,
  colVal: PropTypes.string.isRequired,
  genreFilters: PropTypes.object.isRequired
}

export default FilterContainer;
