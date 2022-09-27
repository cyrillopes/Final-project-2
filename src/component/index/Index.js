import React from "react";
import Nav from "../headers/Nav";
import Service from "./Service";
import AdoptionInfo from "./IndexInfo";
import Testimony from "./Testimony";
import Review from "./Review";
import AdoptionYoutube from "./IndexYoutube";
import ServicePartners from "./ServicePartners";
import BookService from "./BookService";
import "../../css/shop.css";
import "../../css/styles.css";
const Index = () => {
  return (
    <>
      <div
        className="nav-bar "
        style={{
          backgroundImage:
            'url("https://i.ibb.co/GdFKKvC/golden-retriver.jpg")',
          height: 570,
        }}
      >
        <Nav />
      </div>
      <Service />
      <AdoptionInfo />
      <Testimony />
      <Review />
      <AdoptionYoutube />
      <ServicePartners />
      <BookService />
    </>
  );
};
export default Index;
