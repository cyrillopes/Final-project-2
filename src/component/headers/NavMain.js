import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AutoSearch from "./AutoSearch";
import "../../css/banner.css";

const userInfo = "https://login-jwtt.herokuapp.com/api/auth/userInfo";
class NavMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList: this.props.shopList,
      userData: "",
      userName: "",
      userImg: "",
      cart: this.props.ordersOutsideClass,
    };
  }
  reload = (url) => {
    window.location.href = `${url}`;
  };
  proceed = () => {
    const category = sessionStorage.getItem("category");
    if (category) {
      this.props.history.push(`/placeOrder/${category}`);
    } else return;
  };
  handleLogOut = () => {
    sessionStorage.removeItem("ltk");
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("items1");
    sessionStorage.removeItem("items2");
    sessionStorage.removeItem("items3");
    sessionStorage.removeItem("items4");
    sessionStorage.removeItem("detailItems");
    sessionStorage.setItem("loginStatus", "LoggedOut");
    this.setState({ userData: "" });
    this.props.history.push("/");
  };
  conditionalHeader = () => {
    if (this.state.userData.name) {
      let data = this.state.userData;
      let outputArray = [data.name, data.email, data.phone];
      sessionStorage.setItem("userInfo", outputArray);
      sessionStorage.setItem("loginStatus", "LoggedIn");
      return (
        <>
          <li className="nav-item pe-5">
            <Link className="nav-link sign-in" aria-current="page" to="/login">
              Hi! {data.name}
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="btn border-0 bg-transparent nav-link  sign-in"
              onClick={this.handleLogOut}
            >
              Logout
            </button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item pe-5">
            <Link className="nav-link sign-in" aria-current="page" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link sign-in" to="/register">
              Register
            </Link>
          </li>
        </>
      );
    }
  };

  render() {
    return (
      <>
        <div className="disclaimer marquee">
          <h3 className="disclaimer-heading">
            Free Shipping Across India! Customized Gifts for Pets & Proudly
            "Made in India" Pet Products 🇮🇳
          </h3>
        </div>
        <section id="nav-section">
          <nav className="navbar navbar-expand-md sticky-lg-top me-0">
            <div className="container-fluid">
              <Link
                className="navbar-brand shop-navbar-heading navbar-heading"
                style={{ color: "#474646" }}
                to="/"
              >
                <span className="material-symbols-outlined shop-material-symbols-outlined me-2">
                  pets
                </span>
                for adoption
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    Search
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <AutoSearch />
                  <ul className="navbar-nav justify-content-start flex-grow-1 ps-0 login-button">
                    {this.conditionalHeader()}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </section>
        <section id="dropdowns">
          <div className="btn-group shop-dropdown">
            <ul className="nav ps-lg-3">
              <li className="nav-item ps-lg-3 pe-lg-3">
                <Link
                  className="nav-link fw-bold dropdown text-decoration-none"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ps-lg-3">
                <Link
                  className="nav-link fw-bold dropdown"
                  to={`/listing/2`}
                  onClick={() => {
                    window.location.href = `/listing/2`;
                  }}
                >
                  Most Searched
                </Link>
              </li>
              <li className="nav-item dropdown ps-lg-3 pe-lg-3">
                <Link
                  className="nav-link dropdown-toggle dropdown"
                  data-bs-toggle="dropdown"
                  to="/"
                  role="button"
                  aria-expanded="false"
                >
                  Customized Gifts
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => (window.location.href = `/details/1/12`)}
                      to={`/details/2/7`}
                    >
                      Custom Pet PAWtrait Poster - Framed
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => (window.location.href = `/details/1/11`)}
                      to={`/details/2/4`}
                    >
                      Custom Pet PAWtrait - Canvas
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => (window.location.href = `/details/1/13`)}
                      to={`/details/2/6`}
                    >
                      Custom Pet Printed T-shirt
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item ps-lg-3 pe-lg-3">
                <Link
                  className="nav-link fw-bold dropdown"
                  aria-current="page"
                  to={`/listing/4`}
                  onClick={() => (window.location.href = `/listing/4`)}
                >
                  Pet Furniture
                </Link>
              </li>
              <li className="nav-item dropdown ps-lg-3 pe-lg-3">
                <Link
                  className="nav-link dropdown-toggle dropdown"
                  data-bs-toggle="dropdown"
                  to="/"
                  role="button"
                  aria-expanded="false"
                >
                  Pet Accessories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/details/3/22`}
                      onClick={() => (window.location.href = `/details/3/22`)}
                    >
                      FOFOS™: 2 In 1 Self-heating Pet Mat Pink
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/details/3/16`}
                      onClick={() => (window.location.href = `/details/3/16`)}
                    >
                      FOFOS™: Backpack Carrier - Grey
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/details/3/21`}
                      onClick={() => (window.location.href = `/details/3/21`)}
                    >
                      FOFOS™: Pet Bed-Snail
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ps-lg-3 pe-lg-3">
                <Link
                  className="nav-link dropdown-toggle dropdown"
                  data-bs-toggle="dropdown"
                  to="/"
                  role="button"
                  aria-expanded="false"
                >
                  Pet Toys
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => (window.location.href = `/details/2/7`)}
                      to={`/details/2/7`}
                    >
                      Fofos™: Kitten Home Shorthair
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => (window.location.href = `/details/2/4`)}
                      to={`/details/2/4`}
                    >
                      Fofos™: Latex Bi Toy Cat (Chewing Monster)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => (window.location.href = `/details/2/6`)}
                      to={`/details/2/6`}
                    >
                      Fofos™: Yarn Ball
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ps-lg-3">
                <Link
                  className="nav-link dropdown-toggle dropdown"
                  data-bs-toggle="dropdown"
                  to="/"
                  role="button"
                  aria-expanded="false"
                >
                  Pet Care Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/grooming">
                      Pet Grooming
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/training">
                      Pet Training
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/vet">
                      Online Veterinary
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn btn-shopping-cart"
            onClick={this.proceed}
          >
            <span className="material-symbols-outlined shopping-cart">
              <i className="fas fa-cart-plus"></i>
            </span>
            <span className="position-absolute order-number start-10 translate-middle badge rounded-pill bg-danger"></span>
          </button>
        </section>
      </>
    );
  }
  componentDidMount() {
    fetch(userInfo, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ userData: data });
      });
  }
}
export default withRouter(NavMain);
