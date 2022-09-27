import React from "react";
import VetService from "./VetService";
import VetPrices from "./VetPrices";
import VetInfo from "./VetInfo";
import VetBooking from "./VetBooking";
import Nav from "../headers/Nav";
import "../../css/styles.css";
import "../../css/vet.css";
const Vet = () => {
  return (
    <>
      <div
        className="nav-bar "
        style={{
          backgroundImage:
            'url("https://i.ibb.co/30vkgPd/pexels-tima-miroshnichenko-5390060.jpg")',
          height: "55rem",
          width: "100%",
        }}
      >
        <Nav />
      </div>
      <VetService />
      <VetPrices />
      <VetInfo />
      <VetBooking />
    </>
  );
};
export default Vet;
