import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";

const url = "https://paws-form.herokuapp.com/form-details";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concern: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      city: "",
      package: "",
      date: "",
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
    }).then(this.props.history.push("/vet"));
  };
  render() {
    return (
      <>
        <div className="p-5 mb-4 vet-form border">
          <div className="container-fluid">
            <h5 className="display-10 fw-bold ">
              24x7 Online Vet Consultation & Home Visits
            </h5>
            <div className="vet-form-para">
              <p className="fs-6">Your pet deserves only the best</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="vet-form_label">
                  Primary concern or service for your pet*
                </p>
                <div className="input-group">
                  <textarea
                    className="form-control bg-light"
                    aria-label="With textarea"
                    name="concern"
                    required
                    placeholder="Example: Training, grooming, Or vet consultation"
                    value={this.state.concern}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-6">
                <p className="vet-form_label">Your Name</p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control bg-light"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Name"
                    required
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <p className="vet-form_label">Phone Number</p>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control bg-light"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    required
                    placeholder="Phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <p className="vet-form_label">Your Email</p>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control bg-light"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="example@hotmail.com"
                    required
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <p className="vet-form_label">Address</p>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control bg-light"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Address"
                    required
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <p className="vet-form_label">State</p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="state"
                    className="form-control search_location bg-light"
                    placeholder="Enter State..."
                    aria-describedby="basic-addon1"
                    value={this.state.state}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="col-md-6">
                <p className="vet-form_label">City</p>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="city"
                    className="form-control search_location bg-light"
                    placeholder="Enter City Here..."
                    aria-describedby="basic-addon1"
                    value={this.state.city}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="col-md-6">
                <p className="vet-form_label">Package</p>
                <div className="input-group mb-3">
                  <select
                    type="text"
                    className="form-control  bg-light"
                    placeholder="Select Package..."
                    aria-describedby="basic-addon1"
                    name="package"
                    value={this.state.package}
                    onChange={this.handleChange}
                  >
                    <option value="Dog">Dog</option>
                    <option value="Cat">Pet</option>
                    <option value="Other" defaultValue={""}>
                      Other
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <p className="vet-form_label">Date</p>
                <div className="input-group mb-3">
                  <input
                    type="date"
                    name="date"
                    className="form-control  bg-light"
                    id="datepicker"
                    value={this.state.date}
                    onChange={this.handleChange}
                  />
                  <span className="input-group-append">
                    <span className="input-group-text bg-light d-block">
                      <i className="bi bi-calendar"></i>
                    </span>
                  </span>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <p>
                  <i className="bi bi-shield-check"></i>
                  Verified Doctors &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="bi bi-chat-square-text"></i>
                  Free Followups
                </p>
              </div>
              <div className="col-md-12 text-center">
                <button
                  type="button"
                  className="btn btn-xl vet-form_submit"
                  onClick={this.handleSubmit}
                >
                  Book a veterinarian
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(Form);
