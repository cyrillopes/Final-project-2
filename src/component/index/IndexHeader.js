import React from "react";
import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import IndexLocation from "./IndexLocation";

const IndexHeader = () => {
  const [buttonText, setButtonText] = useState("Book Pet Grooming");
  const [btnLink, setBtnLink] = useState(`/grooming`);

  function groomingClick() {
    setButtonText("Book Pet Grooming");
    setBtnLink(`/grooming`);
  }
  function trainingClick() {
    setButtonText("Book Pet Training");
    setBtnLink(`/training`);
  }
  function vetClick() {
    setButtonText("Consult a Vet");
    setBtnLink(`/vet`);
  }
  return (
    <>
      <div className=" jumbotron header">
        <div className="header-sub">
          <h1 className="display-5 fw-bold">
            <span className="material-symbols-outlined">pets</span> For
            Adoption: The Pet People
          </h1>
          <p className="header-para mb-3">
            Book Pet Care Service Appointments At Home
          </p>
        </div>
        {/* <!--Card --> */}
        <div id="link-cards" style={{ cursor: "pointer" }}>
          <div
            className="card-container card-className-override"
            onClick={groomingClick}
          >
            <div className="card-container-img-sub img-className-override ">
              <img
                src="https://img.icons8.com/color/48/000000/groomig.png"
                alt="grooming"
              />
            </div>
            <div className="card-container-content">
              <p className="card-content">Pet Grooming</p>
              <p className="card-content-sub">
                Book In-Home Grooming Session For Your Pet
              </p>
            </div>
          </div>
          <div className="card-container" onClick={trainingClick}>
            <div className="card-container-img-sub ">
              <img
                src="https://img.icons8.com/color/48/000000/man-with-dog.png"
                alt="man"
              />
            </div>
            <div className="card-container-content ">
              <p className="card-content">Dog Training</p>
              <p className="card-content-sub">
                Dog-friendly, one-on-one dog training At Home
              </p>
            </div>
          </div>
          <div className="card-container" onClick={vetClick}>
            <div className="card-container-img-sub">
              <img
                src="https://img.icons8.com/color/48/000000/veterinary-examination.png"
                alt="vet"
              />
            </div>
            <div className="card-container-content">
              <p className="card-content">Vet on Call</p>
              <p className="card-content-sub">
                Expert Veterinary Care Service At Your Home
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Select section --> */}
        <div className="row">
          <div className="search">
            <IndexLocation />
            <div className="location col">
              <label htmlFor="" className="form-label search-label">
                Service Date
              </label>
              <div className="input-group mb-3">
                <input
                  type="date"
                  className="form-control input-date"
                  aria-describedby="basic-addon1"
                />
                <span className="input-group-text" id="">
                  <img
                    src="https://img.icons8.com/color/30/000000/google-calendar--v1.png"
                    alt="calendar"
                  />
                </span>
              </div>
            </div>
            <div className="location-button col">
              <button type="submit" className="btn search-button">
                <Link to={btnLink} className=" text-decoration-none text-white">
                  {buttonText}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(IndexHeader);
