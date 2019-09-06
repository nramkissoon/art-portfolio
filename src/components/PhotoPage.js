import React, {Component} from 'react';
import PhotoPageThumbnailContainer from './PhotoPageComponents/PhotoPageThumbnailContainer';

class ImagePage extends Component {

  state = {
    medVal: "noneMedium",
    colVal: "noneColor",
    filtersApplied: false,
    filters: {
      bwOnly: false,
      colorOnly: false,
      analogOnly: false,
      digitalOnly: false,
      genres: {
        street: false,
        landscape: false,
        cityscape: false,
        cyberpunk: false,
        composite: false
      }
    }
  }

  _applyFilter = (e) => {
    let val = e.target.id
    let currFilters = this.state.filters
    if (val === "analogOnly") {
      currFilters.analogOnly = true
      currFilters.digitalOnly = false
      this.setState({filters: currFilters, medVal: "analogOnly"})
    }
    if (val === "digitalOnly") {
      currFilters.analogOnly = false
      currFilters.digitalOnly = true
      this.setState({filters: currFilters, medVal: "digitalOnly"})
    }
    if (val === "noneMedium") {
      currFilters.analogOnly = false
      currFilters.digitalOnly = false
      this.setState({filters: currFilters, medVal: "noneMedium"})
    }
    if (val === "noneColor") {
      currFilters.colorOnly = false
      currFilters.bwOnly = false
      this.setState({filters: currFilters, colVal: "noneColor"})
    }
    if (val === "colorOnly") {
      currFilters.colorOnly = true
      currFilters.bwOnly = false
      this.setState({filters: currFilters, colVal: "colorOnly"})
    }
    if (val === "bwOnly") {
      currFilters.colorOnly = false
      currFilters.bwOnly = true
      this.setState({filters: currFilters, colVal: "bwOnly"})
    }
    if (val === "cityscape") {
      currFilters.genres.cityscape = !currFilters.genres.cityscape
      this.setState({filters: currFilters})
    }
    if (val === "composite") {
      currFilters.genres.composite = !currFilters.genres.composite
      this.setState({filters: currFilters})
    }
    if (val === "landscape") {
      currFilters.genres.landscape = !currFilters.genres.landscape
      this.setState({filters: currFilters})
    }
    if (val === "street") {
      currFilters.genres.street = !currFilters.genres.street
      this.setState({filters: currFilters})
    }
    if (val === "cyberpunk") {
      currFilters.genres.cyberpunk = !currFilters.genres.cyberpunk
      this.setState({filters: currFilters})
    }
  }

  _clearFilters = () => {
      this.setState({ filtersApplied: false,
        medVal: "noneMedium",
        colVal: "noneColor",
        filters: {
          bwOnly: false,
          colorOnly: false,
          analogOnly: false,
          digitalOnly: false,
          genres: {
            street: false,
            landscape: false,
            cityscape: false,
            cyberpunk: false,
            composite: false
          }
        }
      })

  }

  _filterPhotoData = () => {
    let data = this.props.photoData;
    let filteredPhotos = [];
    for (var i = 0; i < data.length; i++) {
      let photoSet = data[i]
      for (var j = 0; j < photoSet.photos.length; j++) {
        var photo = photoSet.photos[j]
        var isValid = true;
        for (var g in this.state.filters.genres){
          if (this.state.filters.genres[g] &&
            this.state.filters.genres[g] !== photo.genre[g]) {
            isValid = false;
          }
        }
        if (this.state.filters.analogOnly && (!photo.analog)) {
          isValid = false;
        }
        if (this.state.filters.digitalOnly && (photo.analog)) {
          isValid = false;
        }
        if (this.state.filters.bwOnly && (!photo.bw)) {
          isValid = false;
        }
        if (this.state.filters.colorOnly && (photo.bw)) {
          isValid = false;
        }
        if (isValid) {
           filteredPhotos.push(photo)
         }
      }
    }
    return filteredPhotos;
  }

  _checkFiltersApplied = () => {
    let filtered = false;
    let filters = this.state.filters
    Object.keys(filters).forEach((filter) => {
      if (filter === 'genres') {
        Object.keys(filters.genres).forEach((g) => {
          if (filters.genres[g] === true){
            filtered = true;
          }
        })
      }
      else {
        if (filters[filter]===true) {
          filtered = true;
        }
      }
    })
    return filtered;
  }


  render () {
    const data = this._filterPhotoData()
    return (
      <>
        <PhotoPageThumbnailContainer filteredPhotoData={data}/>
      </>
    );
  }
}

export default ImagePage;
