import React from "react";
import Nav from "../headers/Nav";
import AdoptionFaq from "./AdoptionFaq";
import AdoptionInfo from "./AdoptionInfo";
import AdoptionJourney from "./AdoptionJourney";
import AdoptionTestimony from "./AdoptionTestimony";
import "../../css/styles.css";
import "../../css/training.css";
import "../../css/adoption.css";
const Adoption = () => {
  return (
    <>
      <div
        className="nav-bar "
        style={{
          backgroundImage:
            'url("https://i.ibb.co/DRJ68TX/cocker-spaniel-2785074-1920.jpg")',
          height: 550,
          width: "100%",
        }}
      >
        <Nav />
      </div>
      <AdoptionJourney />
      <AdoptionInfo />
      <AdoptionTestimony />
      <AdoptionFaq />
    </>
  );
};
export default Adoption;
