import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
const url = "https://paws-for-adoption.herokuapp.com/shop";
class ShopFilter extends Component {
  filterByBrand = (event) => {
    let category_id = this.props.category_id;
    let brand = event.target.value;
    let itemUrl;
    if (brand === " ") {
      itemUrl = `${url}/${category_id}`;
    } else {
      itemUrl = `${url}/${category_id}?brand=${brand}`;
    }
    axios.get(itemUrl).then((res) => this.props.itemPerBrand(res.data));
  };
  render() {
    return (
      <div className=" mt-lg-2 w-auto p-0" onChange={this.filterByBrand}>
        <select
          className="mt-1 bg-light border-light text-secondary"
          aria-label="Default select example"
        >
          <option value={" "}>Brand</option>
          <option value="FOFOS">FOFOS</option>
          <option value="Barkbutler">BarkButler</option>
          <option value="PAWtrait">PAWtrait</option>
        </select>
      </div>
    );
  }
}
export default withRouter(ShopFilter);
