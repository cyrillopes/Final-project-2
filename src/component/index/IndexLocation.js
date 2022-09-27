import React, { Component } from "react";
const locationUrl = "https://paws-for-adoption.herokuapp.com/";
const districtUrl = "https://api.npoint.io/a66723bb366d82c47202/";

class IndexLocation extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      district: "",
      userData: "",
      userName: "",
      userImg: "",
    };
  }
  renderState(data) {
    if (data) {
      return data.map((item) => {
        return (
          <option
            value={item.state_id}
            key={item._id}
            onSelect={sessionStorage.setItem("district", item.state)}
          >
            {item.state}
          </option>
        );
      });
    }
  }

  handleCity = (event) => {
    let stateId = event.target.value - 1;
    fetch(`${districtUrl}/${stateId}/districts`)
      .then((district) => district.json())
      .then((data) => {
        this.setState({ district: data });
      });
  };

  //   handleRestaurant = (event) => {
  //     this.props.history.push(`/details?restId=${event.target.value}`);
  //   };

  renderDistrict(data) {
    if (data) {
      return data.map((item, i) => {
        return (
          <option value={item} key={i}>
            {item}
          </option>
        );
      });
    }
  }
  render() {
    return (
      <div className="location col">
        <label htmlFor="" className="form-label search-label">
          States and Districts where we provide Services
        </label>
        <div className="input-group mb-3 show_results">
          <select
            type="text"
            name="location"
            className="form-control search_location"
            placeholder="Select City Here..."
            aria-describedby="basic-addon1"
            onClick={this.handleCity}
          >
            {this.renderState(this.state.location)}
          </select>
          &nbsp;
          <select
            type="text"
            name="district"
            className="form-control search_district"
            placeholder="Select District"
            aria-describedby="basic-addon1"
          >
            {this.renderDistrict(this.state.district)}
          </select>
          <span className="input-group-text" id="">
            <img
              src="https://img.icons8.com/color/30/000000/map-pin.png"
              alt="map"
            />
          </span>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch(`${locationUrl}location`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ location: data });
      });
  }
}
export default IndexLocation;
