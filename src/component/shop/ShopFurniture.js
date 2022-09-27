import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import FurnitureDisplay from "./FurnitureDisplay";
const url = "https://paws-for-adoption.herokuapp.com/quick-search/4";

class ShopFurniture extends Component {
  constructor() {
    super();
    this.state = {
      furniture: "",
    };
  }
  render() {
    return (
      <section id="shop-furnitture-collection">
        <div className="shop-collection-heading">
          <h4>Pet Furniture collection</h4>
        </div>
        {/* <!--shop-toys-collection  --> */}
        <div className="shop-toys-collection">
          {/* <!-- item --> */}
          <FurnitureDisplay furnitureData={this.state.furniture} />
          <div className="toys-collection-item ">
            <Link to={`/listing/4`}>
              <div className="banner">
                <img
                  className="card-img-toys"
                  src="https://i.ibb.co/pyDqPbf/furniture-2-5.jpg"
                  alt=""
                />
              </div>
              <div className="card-img-toys-heading">
                <p className="banner-para">View All</p>
                <h2>Furniture</h2>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    axios.get(url).then((res) => this.setState({ furniture: res.data }));
  }
}
export default ShopFurniture;
