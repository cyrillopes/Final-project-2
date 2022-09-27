import React, { Component } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import IndexHeader from "../index/IndexHeader";
import GroomingHeader from "../grooming/GroomingHeader";
import TrainingHeader from "../training/TrainingHeader";
import Weather from "./Weather";
import AdoptionHeader from "../adoption/AdoptionHeader";
import AdoptionListingHeader from "../adoptionListing/AdoptionListingHeader";
import AdoptionDetails from "../adoptionDetails/AdoptionDetails";
import Form from "../vet/Form";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "",
      temp: "",
    };
    this.geolocation();
  }
  geolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeather);
    }
  };
  getWeather = async (data) => {
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    );
    const response = await api_call.json();
    this.setState({
      icon: response.list[0].weather[0].icon,
      temp: response.list[0].temp.day,
    });
  };
  render() {
    return (
      <>
        {/* <!-- Nav bar --> */}
        <nav className="navbar navbar-expand-lg me-3">
          <div className="container-fluid">
            <div className="logo-container">
              <a className="navbar-brand navbar-heading" href="/">
                <span className="material-symbols-outlined">pets</span> for
                adoption
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Weather icon={this.state.icon} temp={this.state.temp} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarScroll">
              <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-items nav-item text-decoration-none">
                  <Link
                    className="nav-link font-color"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-items nav-item text-decoration-none">
                  <Link
                    className="nav-link font-color"
                    aria-current="page"
                    to="/grooming"
                  >
                    Grooming
                  </Link>
                </li>
                <li className="nav-items nav-item text-decoration-none">
                  <Link
                    className="nav-link font-color"
                    aria-current="page"
                    to="/training"
                  >
                    Training
                  </Link>
                </li>
                <li className="nav-items nav-item text-decoration-none">
                  <Link
                    className="nav-link font-color"
                    aria-current="page"
                    to="/vet"
                  >
                    Online Vet
                  </Link>
                </li>
                <li className="nav-items nav-item text-decoration-none">
                  <Link
                    className="nav-link font-color"
                    aria-current="page"
                    to="/adoption"
                  >
                    Adoption
                  </Link>
                </li>
                <li className="nav-items nav-item text-decoration-none">
                  <Link
                    className="nav-link font-color"
                    aria-current="page"
                    to="/shopping"
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path={"/"} component={IndexHeader} />
          <Route exact path={"/grooming"} component={GroomingHeader} />
          <Route exact path={"/training"} component={TrainingHeader} />
          <Route exact path={"/vet"} component={Form} />
          <Route exact path={"/adoption"} component={AdoptionHeader} />
          <Route
            exact
            path={"/adopt-a-pet"}
            component={AdoptionListingHeader}
          />
          <Route exact path={"/adoption-details"} component={AdoptionDetails} />
        </Switch>
      </>
    );
  }
}
export default withRouter(Nav);
