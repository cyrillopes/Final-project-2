import axios from "axios";
import React, { Component } from "react";

const url = `https://paws-for-adoption.herokuapp.com/adoptions`;

class FilterType extends Component {
  filterPet = (event) => {
    let typeId = event.target.value;
    sessionStorage.setItem("breed_id", typeId);
    const vaccination = sessionStorage.getItem("vaccination");
    let petUrl;
    if (typeId && vaccination) {
      petUrl = `${url}?breed_id=${typeId}&vaccination=${vaccination}`;
    } else if (typeId === " ") {
      sessionStorage.removeItem("vaccination");
      petUrl = `${url}`;
    } else {
      sessionStorage.removeItem("vaccination");
      sessionStorage.setItem("breed_id", typeId);
      petUrl = `${url}?breed_id=${typeId}`;
    }

    axios.get(petUrl).then((res) => {
      this.props.petPerFilter(res.data);
    });
  };

  render() {
    return (
      <select
        className="form-select form-select-lg"
        name="type"
        onChange={this.filterPet}
      >
        <option value=" ">All</option>
        <option value="1">Cat</option>
        <option value="2">Dog</option>
      </select>
    );
  }
}
export default FilterType;
