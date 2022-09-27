import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShopFilter from "../shopFilters/ShopFilter";
import NavMain from "../headers/NavMain";
import ShopListDisplay from "./ShopListDisplay";
import axios from "axios";
import "../../css/shop-listing.css";
import FIlterPrice from "../shopFilters/FIlterPrice";

const url = "https://paws-for-adoption.herokuapp.com/shop/";
class ShopListingApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList: "",
      list: "",
      cart: [],
    };
  }
  handleClick = (item) => {
    if (this.state.cart.includes(item.id)) return;
    this.state.cart.push(item.id);
    if (this.props.match.params.category_id) {
      sessionStorage.setItem(
        `items${this.props.match.params.category_id}`,
        this.state.cart
      );
    }
    sessionStorage.setItem("category", item.category);
  };
  setDataPerFilter = (data) => {
    this.setState({ shopList: data });
  };
  render() {
    let { list } = this.state;
    // console.log(this.state.shopList);
    return (
      <>
        <NavMain shopList={this.state.shopList} />
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-lg-12 my-lg-3 ">
              <Link
                to={`/shopping`}
                className="text-lg-start text-decoration-none text-dark ps-4"
              >
                Home ➤
              </Link>
              <span className=" text-secondary ps-4">Pet {list.category}</span>
            </div>
            <div className="col-lg-12">
              <h3 className="fw-bold detail-heading ps-4 my-4">
                Pet {list.category}
              </h3>
            </div>
          </div>
        </div>
        <section id="sorting" className=" h-50">
          <div className="container-fluid bg-light">
            <div className="row">
              <div className="col-lg-1 p-0">
                <h6 className="text-secondary fw-bold py-lg-3 text-end pe-3">
                  Sort by
                </h6>
              </div>
              <ShopFilter
                category_id={this.props.match.params.category_id}
                itemPerBrand={(data) => {
                  this.setDataPerFilter(data);
                }}
              />
              <FIlterPrice
                category_id={this.props.match.params.category_id}
                itemPerPrice={(data) => {
                  this.setDataPerFilter(data);
                }}
              />
            </div>
          </div>
        </section>
        <section className="listing margin">
          {/* <!--  --> */}
          <div className="container-fluid">
            <div className="row mb-lg-5">
              <ShopListDisplay
                listData={this.state.shopList}
                handleClick={this.handleClick}
              />
            </div>
          </div>
          {/* <!--  --> */}
        </section>
      </>
    );
  }
  componentDidMount() {
    let category_id = this.props.match.params.category_id;
    sessionStorage.setItem("category_id", category_id);
    axios.get(`${url}${category_id}`).then((res) => {
      this.setState({ shopList: res.data });
      this.setState({ list: res.data[0] });
    });
  }
}
export default ShopListingApi;
