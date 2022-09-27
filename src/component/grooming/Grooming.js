import React from "react";
import BookService from "../index/BookService";
import ServicePartners from "../index/ServicePartners";
import Nav from "../headers/Nav";
import GroomingInfo from "./GroomingInfo";
import GroomingPrices from "./GroomingPrices";
import GroomingYoutube from "./GroomingYoutube";
import "../../css/styles.css";
import "../../css/training.css";
import "../../css/vet.css";
import "../../css/groomers.css";

const Grooming = () => {
  return (
    <>
      <div
        className="nav-bar "
        style={{
          backgroundImage: 'url("https://i.ibb.co/85ZdKQN/1234.jpg")',
          marginBottom: 300,
          height: 600,
        }}
      >
        <Nav />
      </div>
      <GroomingInfo />
      <GroomingYoutube />
      <GroomingPrices />
      <ServicePartners />
      <BookService />
    </>
  );
};
export default Grooming;
