import React, { Component } from "react";
import NavMain from "../headers/NavMain";
import "../../css/product.css";
let orderId = [];

const url = "https://paws-for-adoption.herokuapp.com/pawItem";
const placeOrder_url = "https://paws-for-adoption.herokuapp.com/placeOrder";

class PlaceOrder extends Component {
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
    console.log(this.state.items);
    obj.items = sessionStorage.getItem("items");
    fetch(placeOrder_url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      // then(this.props.history.push("/viewOrders"));
      .then(console.log("order added"));
  };

  renderItem = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="row" key={item._id}>
            <div className="row main align-items-center">
              <div className="col-2">
                <img
                  className="img-fluid"
                  style={{ width: "80px", height: "100px" }}
                  src={item.img_url[0]}
                  alt=""
                />
              </div>
              <div className="col">
                <div className="row">{item.item_name}</div>
                <div className="row text-muted">
                  Color:
                  {sessionStorage.getItem("color")
                    ? sessionStorage.getItem("color")
                    : item.color[0]}
                </div>
                <div className="row text-muted">
                  Size:
                  {sessionStorage.getItem("size")
                    ? sessionStorage.getItem("size")
                    : item.size[0]}
                </div>
              </div>
              <div className="col ms-5">{item.title}</div>
              <div className="col ms-5">₹{item.price}</div>
            </div>
          </div>
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
              className="d-inline-block"
            />
            <h2 className="d-inline-block ms-3">Login first to place order</h2>
          </div>
        </>
      );
    }
    return (
      <>
        <NavMain />
        <form action="https://pawpaytm.herokuapp.com/paynow" method="POST">
          <div className="card mb-5 mt-3">
            <div className="row">
              <div className="col-md-8 cart">
                <div className="title">
                  <div className="row">
                    <div className="col">
                      <h4>
                        <b>Your Cart</b>
                      </h4>
                    </div>
                    <div className="col align-self-center text-right text-muted">
                      {orderId.length} items
                    </div>
                  </div>
                </div>
                {this.renderItem(this.state.items)}
              </div>
              <div className="col-md-4 summary">
                <div>
                  <h5>
                    <b>Billing Address</b>
                  </h5>
                </div>
                <hr />
                <div className="row">
                  <div className="col mb-3" style={{ paddingLeft: "0" }}>
                    ITEMS {orderId.length}
                  </div>
                </div>
                <input type="hidden" value={this.state.id} name="id" />
                <input type="hidden" value={this.state.cost} name="cost" />
                <input
                  type="hidden"
                  value={this.state.category}
                  name="category"
                />
                <p>Name</p>
                <input
                  type="text"
                  id="code"
                  placeholder="Your Name"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                />
                <p>Email Address</p>
                <input
                  id="code"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <p>Phone</p>
                <input
                  type="text"
                  id="code"
                  placeholder="+91"
                  name="phone"
                  required
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
                <p>Address</p>
                <input
                  id="code"
                  type="text"
                  name="address"
                  placeholder="Example: 1234 Main St"
                  value={this.state.address}
                  onChange={this.handleChange}
                  required
                />
                <div
                  className="row"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,.1)",
                    padding: " 2vh 0",
                  }}
                >
                  <div className="col">TOTAL PRICE</div>
                  <div className="col text-right">₹{this.state.cost}</div>
                </div>
                <button
                  className="btn btn-shop-cart btn-lg"
                  type="submit"
                  onClick={this.checkout}
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
  componentDidMount() {
    let items1 = sessionStorage.getItem("items1")
      ? sessionStorage.getItem("items1")
      : "false";
    let items2 = sessionStorage.getItem("items2")
      ? sessionStorage.getItem("items2")
      : "false";
    let items3 = sessionStorage.getItem("items3")
      ? sessionStorage.getItem("items3")
      : "false";
    let items4 = sessionStorage.getItem("items4")
      ? sessionStorage.getItem("items4")
      : "false";
    let detailItems = sessionStorage.getItem("detailItems")
      ? sessionStorage.getItem("detailItems")
      : "false";

    items1.split(",").map((item) => {
      let itemId = Number(item);
      if (isNaN(itemId)) {
        orderId.push(itemId);
        return orderId.pop(itemId);
      } else {
        return orderId.push(itemId);
      }
    });
    items2.split(",").map((item) => {
      let itemId = Number(item);
      if (isNaN(itemId)) {
        orderId.push(itemId);
        return orderId.pop(itemId);
      } else {
        return orderId.push(itemId);
      }
    });
    items3.split(",").map((item) => {
      let itemId = Number(item);
      if (isNaN(itemId)) {
        orderId.push(itemId);
        return orderId.pop(itemId);
      } else {
        return orderId.push(itemId);
      }
    });
    items4.split(",").map((item) => {
      let itemId = Number(item);
      if (isNaN(itemId)) {
        orderId.push(itemId);
        return orderId.pop(itemId);
      } else {
        return orderId.push(itemId);
      }
      // if (!isNaN(itemId)) orderId.push(itemId);
      // return orderId.pop(parseInt(item));
    });
    detailItems.split().map((item) => {
      let itemId = Number(item);
      if (isNaN(itemId)) {
        orderId.push(itemId);
        return orderId.pop(itemId);
      } else {
        return orderId.push(itemId);
      }
    });
    const sdata = {
      id: orderId,
    };
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
          totalPrice += parseFloat(item.price);
          sessionStorage.setItem("items", item.id);
          return "ok";
        });
        this.setState({ items: data, cost: totalPrice });
      });
  }
}
export default PlaceOrder;
