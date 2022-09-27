import axios from "axios";
import React, { Component } from "react";
import ToyDisplay from "./ToyDisplay";
import { Link } from "react-router-dom";
const url = "https://paws-for-adoption.herokuapp.com/quick-search/2";

class ShopToys extends Component {
  constructor() {
    super();
    this.state = {
      toys: "",
    };
  }
  render() {
    return (
      <section id="shop-toys-collection">
        <div className="shop-collection-heading">
          <h4>Pet Toys Collection</h4>
        </div>
        {/* <!--shop-toys-collection  --> */}
        <div className="shop-toys-collection">
          {/* <!-- item --> */}

          <ToyDisplay toyData={this.state.toys} />

          <div className="toys-collection-item ">
            <Link to={`/listing/2`}>
              <div className="banner">
                <img
                  className="card-img-toys"
                  src="https://i.ibb.co/Tbt6TsN/toys-1-5.jpg"
                  alt=""
                />
              </div>
              <div className="card-img-toys-heading">
                <p className="banner-para">View All</p>
                <h2>Pet Toys</h2>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    axios.get(url).then((res) => this.setState({ toys: res.data }));
  }
}
export default ShopToys;
