import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../css/shop-details.css";
import NavMain from "../headers/NavMain";
import DetailColor from "./DetailColor";
import DetailFeatures from "./DetailFeatures";
import DetailSize from "./DetailSize";
import DetailSpecifications from "./DetailSpecifications";
import ShopBtns from "./ShopBtns";
import ShopImages from "./ShopImages";

const url = "https://paws-for-adoption.herokuapp.com/details";
class ShopDetails extends Component {
  constructor() {
    super();
    this.state = {
      itemDetails: "",
      category_id: sessionStorage.getItem("category_id"),
      id: localStorage.getItem("item_id"),
      cart: [],
    };
  }

  handleImg = (event) => {
    const details = document.querySelector(".details-img");
    details.src = event.target.src;
  };

  handleClick = () => {
    if (this.state.cart.includes(this.props.match.params.id)) return;
    this.state.cart.push(this.props.match.params.id);

    sessionStorage.setItem(`detailItems`, this.state.cart);
  };

  proceed = () => {
    sessionStorage.setItem("buyNow", this.props.match.params.id);
    // sessionStorage.setItem("menu", this.state.userItem);
    const category = sessionStorage.getItem("category");
    if (category) this.props.history.push(`/placeDirectOrder/${category}`);
    console.log(category);
  };

  render() {
    let { itemDetails } = this.state;
    return (
      <>
        <NavMain />
        <section className="shop-details bg-light">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 my-lg-3">
                <Link
                  to={`/shopping`}
                  className="text-lg-start text-decoration-none text-dark ms-lg-4 pe-3"
                >
                  Home ➤
                </Link>
                <Link
                  to={`/listing/${itemDetails.category_id}`}
                  className="ms-lg-2 text-secondary pe-3 text-decoration-none"
                >
                  Pet {itemDetails.category} ➤
                </Link>

                <span className="text-secondary">{itemDetails.item_name}</span>
              </div>
              <div className="col-lg-6 col-md-12 ms-lg-3 details">
                <img
                  src={itemDetails.img_url}
                  alt={itemDetails.item_name}
                  className="details-img"
                />
                <div className="details-sub-img my-lg-4">
                  <ShopImages
                    shopImg={itemDetails.img_url}
                    handleImg={this.handleImg}
                  />
                  {/* <img src={itemDetails.img_url} alt="" />
                  <img src={itemDetails.img_url} alt="" /> */}
                </div>
              </div>
              <div className="col-lg-5 col-md-12 ms-lg-3 details">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="fw-bold detail-heading">
                      {itemDetails.item_name}
                    </h3>
                  </div>
                  <div className="col-lg-12">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <span>&nbsp; {itemDetails.reviews} reviews</span>
                  </div>
                  <div className="col-lg-2 mt-lg-4 mb-0">
                    <h6>
                      <span className="badge rounded-0 my-lg-2">
                        {itemDetails.discount}
                      </span>
                    </h6>
                  </div>
                  <div className="col-lg-4 my-lg-4 ps-0">
                    <h4 className="text-decoration-line-through text-secondary details-price">
                      ₹ {itemDetails.prev_price}
                    </h4>
                  </div>
                  <div className="col-lg-6 my-lg-4 mb-0 ps-0">
                    <h4 className="details-price">₹ {itemDetails.price}.00</h4>
                  </div>
                  <div className="col-lg-12">
                    <h6>
                      <span className="my-lg-2">Size</span>
                    </h6>
                  </div>
                  <div className="col-lg-12">
                    <DetailSize size={itemDetails.size} />
                  </div>
                  <div className="col-lg-12 mt-lg-4">
                    <h6>
                      <span className="my-lg-2">Color</span>
                    </h6>
                  </div>
                  <div className="col-lg-12 my-lg-0">
                    <DetailColor color={itemDetails.color} />
                  </div>
                  <div className="col-lg-9"></div>
                  <ShopBtns
                    handleClick={this.handleClick}
                    proceed={this.proceed}
                  />
                  <div className="col-lg-12 my-lg-5 text-center details-genuine">
                    <img
                      src="https://i.ibb.co/n0Pct59/ezgif-com-gif-maker-480x480.webp"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-12 my-lg-3">
                    <p className="text-start">
                      A wide range of services and door-to-door shipping options
                      to solve your delivery challenges, covering all states
                      across the country. You're in good company: Paws
                      foundation works with some of the country's biggest brands
                      and organizations.
                    </p>
                  </div>
                  <div className="col-lg-12 my-lg-3">
                    <h4 className="text-center fw-bold detail-heading">
                      {itemDetails.title}
                    </h4>
                  </div>
                  <div className="col-lg-12">
                    <p className="text-start">{itemDetails.description}</p>
                  </div>
                  {/* <div className="col-lg-12 my-lg-5 text-center features-img">
                    <img
                      src="https://i.ibb.co/CHHzC1T/61zm-Fgb6-P5-L-SX522.jpg"
                      alt=""
                    />
                  </div> */}
                  <h6 className="fw-bold col-lg-12">Features:</h6>
                  <div className="col-lg-12">
                    <ul className="text-dark">
                      <DetailFeatures features={itemDetails.features} />
                    </ul>
                  </div>
                  <h6 className="fw-bold col-lg-12">Specifications:</h6>
                  <div className="col-lg-12">
                    <ul className="text-dark">
                      <DetailSpecifications
                        specifications={itemDetails.specifications}
                      />
                    </ul>
                  </div>
                </div>
              </div>
              {/* <hr className="mt-lg-2" /> */}
            </div>
          </div>
          {/* <div className="container mx-0 py-lg-5">
            <div className="row">
              <div className="col-12 my-lg-2 mx-lg-4">
                <h5>Related products</h5>
              </div>
              <div className="col-lg-12 mx-lg-3 text-center">
                <div className="toys-collection-item my-lg-2 ms-lg-3">
                  <div className="toys-img">
                    <img src="img/toys/toys 1-1.webp" alt="toy" />
                    <div className="badge badge-save">Save 21%</div>
                  </div>
                  <div className="price">
                    <del>
                      &#8377 <span>999</span>{" "}
                    </del>
                    <h4 className="price-actual">&#8377 729</h4>
                  </div>
                  <div className="toys-content">
                    <p className="toys-content">
                      ThePetNest X Barkbutler™ : Aly-The-Gator Stuffed Dog Toy
                    </p>
                  </div>
                </div>
                <div className="toys-collection-item my-lg-2 ms-lg-3">
                  <div className="toys-img">
                    <img src="img/toys/toys 1-1.webp" alt="toy" />
                    <div className="badge badge-save">Save 21%</div>
                  </div>
                  <div className="price">
                    <del>
                      &#8377 <span>999</span>{" "}
                    </del>
                    <h4 className="price-actual">&#8377 729</h4>
                  </div>
                  <div className="toys-content">
                    <p className="toys-content">
                      ThePetNest X Barkbutler™ : Aly-The-Gator Stuffed Dog Toy
                    </p>
                  </div>
                </div>
                <div className="toys-collection-item my-lg-2 ms-lg-3">
                  <div className="toys-img">
                    <img src="img/toys/toys 1-1.webp" alt="toy" />
                    <div className="badge badge-save">Save 21%</div>
                  </div>
                  <div className="price">
                    <del>
                      &#8377 <span>999</span>{" "}
                    </del>
                    <h4 className="price-actual">&#8377 729</h4>
                  </div>
                  <div className="toys-content">
                    <p className="toys-content">
                      ThePetNest X Barkbutler™ : Aly-The-Gator Stuffed Dog Toy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </>
    );
  }
  async componentDidMount() {
    let category_id = this.props.match.params.category_id;
    sessionStorage.setItem("category_id", category_id);
    let itemId = this.props.match.params.id;
    sessionStorage.setItem("item_id", itemId);
    let details = await axios.get(`${url}/${category_id}/${itemId}`);
    sessionStorage.setItem("category", details.data[0].category);
    this.setState({
      itemDetails: details.data[0],
    });
  }
}
export default withRouter(ShopDetails);
