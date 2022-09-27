import React, { Component } from "react";
import NavMain from "../headers/NavMain";

const url = "https://paws-for-adoption.herokuapp.com/pawItem";
const placeOrder_url = "https://paws-for-adoption.herokuapp.com/placeOrder";
let orderId = [];

class PlaceDirectOrder extends Component {
  constructor(props) {
    super(props);
    let sessionData = sessionStorage.getItem("userInfo")
      ? sessionStorage.getItem("userInfo").split(",")
      : [];
    this.state = {
      id: Math.floor(Math.random() * 10000),
      category: this.props.match.params.category,
      name: sessionData ? sessionData[0] : "",
      email: sessionData ? sessionData[1] : "",
      cost: 0,
      phone: sessionData ? sessionData[2] : "",
      address: "769 St. Lewis Street",
      items: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkout = () => {
    let obj = this.state;
    obj.items = sessionStorage.getItem("items");
    fetch(placeOrder_url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      // .then(this.props.history.push("/viewOrders"));
      .then(console.log("order added"));
  };

  renderItem = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <li
            className="list-group-item d-flex justify-content-between lh-sm"
            key={item._id}
          >
            <div>
              <h6 className="my-0">{item.item_name}</h6>
              <small className="text-muted text-lowercase">
                Color:
                {sessionStorage.getItem("color")
                  ? sessionStorage.getItem("color")
                  : item.color[0]}
              </small>
              <br />
              <small className="text-muted text-lowercase">
                Size:
                {sessionStorage.getItem("size")
                  ? sessionStorage.getItem("size")
                  : item.size[0]}
              </small>
              <div className="p-2">
                <img src={item.img_url[0]} alt="Menu img" className="w-50 " />
              </div>
            </div>
            <span className="text-muted">₹{item.price}</span>
          </li>
        );
      });
    }
  };

  render() {
    if (
      !sessionStorage.getItem("loginStatus") ||
      sessionStorage.getItem("loginStatus") === "LoggedOut"
    ) {
      return (
        <>
          <NavMain />
          <div className="m-5">
            <img
              src="https://img.icons8.com/external-dreamcreateicons-flat-dreamcreateicons/64/000000/external-alert-internet-security-dreamcreateicons-flat-dreamcreateicons.png"
              alt="img"
              className=" d-inline-block"
            />
            <h2 className=" float-start d-inline-block ms-3">
              Login first to place order
            </h2>
          </div>
        </>
      );
    }
    return (
      <>
        <NavMain />
        <form action="https://pawpaytm.herokuapp.com/paynow" method="POST">
          <div className="container text-center mt-5">
            <div className="row g-5">
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span style={{ color: "#18273c" }}>Your cart</span>
                  <span
                    className="badge rounded-pill"
                    style={{
                      backgroundColor: "#18273c",
                      color: "white",
                    }}
                  >
                    {orderId.length}
                  </span>
                </h4>

                <ul className="list-group mb-3">
                  {this.renderItem(this.state.items)}

                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (RS)</span>
                    <strong>{this.state.cost}</strong>
                  </li>
                </ul>
                <button
                  className="w-100 btn  btn-lg mt-4"
                  style={{
                    backgroundColor: "#fd7e14",
                    color: "white",
                    marginBottom: "20%",
                  }}
                  type="submit"
                  onClick={this.checkout}
                >
                  Continue to checkout
                </button>
              </div>

              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Billing address</h4>
                <input type="hidden" value={this.state.id} name="id" />
                <input type="hidden" value={this.state.cost} name="cost" />
                <input
                  type="hidden"
                  value={this.state.category}
                  name="category"
                />

                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      name="name"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="you@example.com"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="address" className="form-label">
                      Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="0123456789"
                      required
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Example: 1234 Main St"
                      value={this.state.address}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <hr className="my-4"></hr>
                {/* <div className=" card-text text-danger fs-5">
                  <span className=" fw-bold">Note: </span>If size and color are
                  not selected, default size and color will be added.
                </div> */}
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
  componentDidMount() {
    let buyItNow = sessionStorage.getItem("buyNow")
      ? sessionStorage.getItem("buyNow")
      : "false";
    buyItNow.split(",").map((item) => {
      let itemId = parseInt(item);
      if (isNaN(itemId)) return orderId.pop(itemId);
      return orderId.push(parseInt(itemId));
    });
    const sdata = {
      id: orderId,
    };
    console.log(sdata);
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sdata),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let totalPrice = 0;
        data.map((item) => {
          sessionStorage.setItem("items", item.id);
          totalPrice += parseFloat(item.price);
          return "ok";
        });
        this.setState({ items: data, cost: totalPrice });
      });
  }
}
export default PlaceDirectOrder;
