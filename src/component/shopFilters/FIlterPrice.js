import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
const url = "https://paws-for-adoption.herokuapp.com/shop";
class FilterPrice extends Component {
  filterByPrice = (event) => {
    let category_id = this.props.category_id;
    let cost = event.target.value.split("-");
    let lcost = cost[0];
    let hcost = cost[1];
    let itemUrl;
    if (event.target.value === " ") {
      itemUrl = `${url}/${category_id}?sort=${-1}`;
    } else {
      itemUrl = `${url}/${category_id}?lcost=${lcost}&hcost=${hcost}`;
    }
    axios.get(itemUrl).then((res) => this.props.itemPerPrice(res.data));
  };
  render() {
    return (
      <div className=" mt-lg-2 w-25 p-0" onChange={this.filterByPrice}>
        <select
          className="mt-1 bg-light border-light text-secondary"
          aria-label="Default select example"
        >
          <option defaultValue={"Featured"}>Price</option>
          <option value=" ">Price High to Low</option>
          {/* <option value="">Price High to Low</option> */}
          <option value="1-500">Up to 500</option>
          <option value="501-1000">500-1000</option>
          <option value="501-1000">500-1000</option>
          <option value="1000-2000">1000-2000</option>
          <option value="2001-5000">2000-5000</option>
          <option value="5001-10000">5000-10000</option>
          <option value="10000-30000">10000+</option>
        </select>
      </div>
    );
  }
}

export default withRouter(FilterPrice);
