import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccessoriesDisplay from "./AccessoriesDisplay";
const url = "https://paws-for-adoption.herokuapp.com/quick-search/3";

class ShopAccessories extends Component {
  constructor() {
    super();
    this.state = {
      accessories: "",
    };
  }
  render() {
    return (
      <section id="shop-accessories-collection">
        <div className="shop-collection-heading">
          <h4>Pet Toys Collection</h4>
        </div>
        {/* <!--shop-toys-collection  --> */}
        <div className="shop-toys-collection">
          <AccessoriesDisplay accData={this.state.accessories} />
          <div className="toys-collection-item ">
            <Link to={`/listing/3`}>
              <div className="banner">
                <img
                  className="card-img-toys"
                  src="https://i.ibb.co/SRDTQkS/acc-1-4.jpg"
                  alt=""
                />
              </div>
              <div className="card-img-toys-heading">
                <p className="banner-para">View All</p>
                <h2>Accessories</h2>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    axios.get(url).then((res) => this.setState({ accessories: res.data }));
  }
}
export default ShopAccessories;
