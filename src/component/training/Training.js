import React from "react";
import ServicePartners from "../index/ServicePartners";
import Nav from "../headers/Nav";
import TrainingBooking from "./TrainingBooking";
import TrainingExperience from "./TrainingExperience";
import TrainingInfo from "./TrainingInfo";
import TrainingPrices from "./TrainingPrices";
import "../../css/styles.css";
import "../../css/training.css";
const Training = () => {
  return (
    <>
      <div
        className="nav-bar "
        style={{
          backgroundImage: 'url("https://i.ibb.co/z65DQwC/123.jpg")',
          height: 550,
        }}
      >
        <Nav />
      </div>
      <TrainingInfo />
      <TrainingExperience />
      <TrainingPrices />
      <ServicePartners />
      <TrainingBooking />
    </>
  );
};
export default Training;
