import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShopCollection extends Component {
  render() {
    return (
      <section id="shop-collection">
        <div className="shop-collection-heading">
          <h4>Shop Collection</h4>
        </div>
        <div className="shop-collection">
          <div className="shop-collection-item customized-gifts">
            <div className="collection-item">
              <h3 className="collection-item-heading">Customized Gift's</h3>
            </div>
            <div className="collection-item-btn">
              <Link to={`/listing/1`}>
                <button
                  type="submit"
                  className="btn-shop-search-input btn btn-shop-now"
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
          <div className="shop-collection-item eco-friendly-toys">
            <div className="collection-item">
              <h3 className="collection-item-heading">Eco-Friendly Pet Toys</h3>
            </div>
            <div className="collection-item-btn">
              <Link to={`/listing/2`}>
                <button
                  type="submit"
                  className="btn-shop-search-input btn btn-shop-now"
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
          <div className="shop-collection-item pet-accessories">
            <div className="collection-item">
              <h3 className="collection-item-heading">Pet Accessories</h3>
            </div>
            <div className="collection-item-btn">
              <Link to={`/listing/3`}>
                <button
                  type="submit"
                  className="btn-shop-search-input btn btn-shop-now"
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
          <div className="shop-collection-item pet-furniture">
            <div className="collection-item">
              <h3 className="collection-item-heading">Pet Furniture</h3>
            </div>
            <div className="collection-item-btn">
              <Link to={`/listing/4`}>
                <button
                  type="submit"
                  className="btn-shop-search-input btn btn-shop-now"
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ShopCollection;
