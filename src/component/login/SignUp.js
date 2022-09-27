import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import NavMain from "../headers/NavMain";

const url = "https://login-jwtt.herokuapp.com/api/auth/register";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: null,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(this.props.history.push("/shopping"));
  };

  render() {
    return (
      <>
        <NavMain />

        <section className="h-100">
          <form>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card card-registration my-4">
                    <div className="row g-0">
                      <div className="col-xl-6 d-none d-xl-block">
                        <img
                          src="https://i.ibb.co/q5bfST1/register.jpg"
                          alt="register"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-xl-6">
                        <div className="card-body p-md-5 text-black">
                          <h3 className="mb-5 text-uppercase">Enter Details</h3>

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form3Example8"
                              className="form-control form-control-lg"
                              name="name"
                              value={this.state.name}
                              onChange={this.handleChange}
                              required
                            />
                            <label className="form-label" htmlFor="name">
                              Name
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form3Example8"
                              className="form-control form-control-lg"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                              required
                            />
                            <label className="form-label" htmlFor="email">
                              Email Address
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form3Example8"
                              className="form-control form-control-lg"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                              required
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form3Example8"
                              className="form-control form-control-lg"
                              name="phone"
                              value={this.state.phone}
                              onChange={this.handleChange}
                              required
                            />
                            <label className="form-label" htmlFor="phone">
                              Phone
                            </label>
                          </div>
                          <div className="d-flex justify-content-end pt-3">
                            {/* <button
                              type="button"
                              className="btn btn-light btn-lg"
                            >
                              Reset all
                            </button> */}
                            <button
                              type="submit"
                              onClick={this.handleSubmit}
                              className="btn btn-lg ms-2"
                              style={{
                                backgroundColor: "#fd7e14",
                                color: "white",
                              }}
                            >
                              Submit form
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
}
export default withRouter(Register);
