import React, { Component } from "react";
import axios from "axios";
import OrderDisplay from "./OrderDisplay";
import NavMain from "../headers/NavMain";

const orderUrl = "https://paws-for-adoption.herokuapp.com/pawsOrders";
class ViewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: "",
    };
  }
  render() {
    return (
      <>
        <NavMain />
        <OrderDisplay orderData={this.state.orders} />
      </>
    );
  }
  componentDidMount() {
    if (this.props.location) {
      let query = this.props.location.search.split("&");
      if (query) {
        let data = {
          status: query[0].split("=")[1],
          date: query[2].split("=")[1],
          bank_name: query[3].split("=")[1],
        };

        let id = query[1].split("=")[1].split("_")[1];
        console.log(id);
        fetch(`${orderUrl}/${id}`, {
          method: "PATCH",
          headers: {
            accept: "application/json ",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }
      sessionStorage.removeItem("items1");
      sessionStorage.removeItem("items2");
      sessionStorage.removeItem("items3");
      sessionStorage.removeItem("items4");
      sessionStorage.removeItem("detailItems");
    }
    let email = sessionStorage.getItem("userInfo")
      ? sessionStorage.getItem("userInfo").split(",")[1]
      : "";

    axios.get(`${orderUrl}?email=${email}`).then((res) => {
      this.setState({ orders: res.data });
    });
  }
  // }
}

export default ViewOrder;
