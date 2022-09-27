// import axios from "axios";
import React, { Component } from "react";

const url = `https://paws-for-adoption.herokuapp.com/adoptions`;
// https://paws-for-adoption.herokuapp.com/adoptions?breed_id=1&vaccination=Yes&age=Puppyhood

class FilterVaccination extends Component {
  filterPet = (event) => {
    let vaccination = event.target.value;
    sessionStorage.setItem("vaccination", vaccination);
    let petUrl;
    const typeId = sessionStorage.getItem("breed_id");

    if (vaccination === " ") {
      sessionStorage.removeItem("breed_id");
      petUrl = `${url}`;
      console.log(petUrl);
    } else if (typeId && vaccination) {
      petUrl = `${url}?breed_id=${typeId}&vaccination=${vaccination}`;
      console.log(petUrl);
    } else {
      console.log(`${url}?vaccination=${vaccination}`);
      petUrl = `${url}?vaccination=${vaccination}`;
    }

    // axios.get(petUrl).then((res) => {
    //   this.props.petPerFilter(res.data);
    // });
  };

  render() {
    return (
      <select
        className="form-select form-select-lg"
        aria-label="Default select example"
        name="vaccination"
        onChange={this.filterPet}
      >
        <option value=" ">Any</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    );
  }
}
export default FilterVaccination;
