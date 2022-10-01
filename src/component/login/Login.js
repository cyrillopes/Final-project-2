import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavMain from "../headers/NavMain";

const url = "https://login-jwtt.herokuapp.com/api/auth/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    let item1 = sessionStorage.getItem("items1");
    let item2 = sessionStorage.getItem("items2");
    let item3 = sessionStorage.getItem("items3");
    let item4 = sessionStorage.getItem("items4");
    let detailItems = sessionStorage.getItem("detailItems");
    let buyNow = sessionStorage.getItem("buyNow");
    const category = sessionStorage.getItem("category");
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.auth === false) {
          this.setState({ message: data.token });
        } else {
          sessionStorage.setItem("ltk", data.token);
          if (buyNow) {
            this.props.history.push(`/placeDirectOrder/${category}`);
          } else if (item1 || item2 || item3 || item4 || detailItems) {
            this.props.history.push(`/placeOrder/${category}`);
          } else {
            this.props.history.push(`/`);
          }
        }
      });
  };

  render() {
    return (
      <>
        <NavMain />
        <section className="vh-100 mb-5">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://i.ibb.co/d0xV5Sy/login.jpg"
                        alt="login form"
                        className="img-fluid cover-full h-100 w-100"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form>
                          <h5
                            className="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Sign into your account
                          </h5>

                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                            />
                            <label className="form-label" for="form2Example17">
                              Email address
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example27"
                              className="form-control form-control-lg"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                            />
                            <label className="form-label" for="form2Example27">
                              Password
                            </label>
                          </div>

                          <div className="pt-1 mb-4">
                            <button
                              className="btn btn-lg btn-block"
                              type="button"
                              onClick={this.handleSubmit}
                              style={{
                                backgroundColor: "#fd7e14",
                                color: "white",
                              }}
                            >
                              Login
                            </button>
                          </div>

                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "#393f81" }}
                          >
                            Don't have an account?{" "}
                            <Link to="/register" style={{ color: "#393f81" }}>
                              Register here
                            </Link>
                          </p>
                          <h4 style={{ color: "red" }}>{this.state.message}</h4>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Login;
