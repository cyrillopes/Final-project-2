import axios from "axios";
import React, { Component } from "react";
import GiftDisplay from "./GiftDisplay";
import { Link } from "react-router-dom";
const url = "https://paws-for-adoption.herokuapp.com/quick-search/1";

class ShopGift extends Component {
  constructor() {
    super();
    this.state = {
      gift: "",
    };
  }
  render() {
    return (
      <section id="shop-gifts-collection">
        <div className="shop-collection-heading">
          <h4>Customized Gifts</h4>
        </div>
        {/* <!--shop-toys-collection  --> */}
        <div className="shop-toys-collection">
          <GiftDisplay giftData={this.state.gift} />
          <div className="toys-collection-item ">
            <Link to={`/listing/1`}>
              <div className="banner">
                <img
                  className="card-img-toys"
                  src="https://i.ibb.co/QcP5PQr/canvas-1-4.webp"
                  alt=""
                />
              </div>
              <div className="card-img-toys-heading">
                <p className="banner-para">View All</p>
                <h2>Customized Gifts</h2>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    axios.get(url).then((res) => this.setState({ gift: res.data }));
  }
}
export default ShopGift;
