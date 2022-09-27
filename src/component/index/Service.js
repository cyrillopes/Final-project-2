import React from "react";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <>
      <div id="service m-0">
        <div className="service-heading">
          <h1 className="display-5 fw-bold heading">Services for every Pet</h1>
        </div>
        <div className="service-provided  container">
          <div className="service-info">
            {/* <!-- card 1 --> */}
            <div className="card mb-3 border-0 ">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src="https://img.icons8.com/color/96/000000/surgical-scissors.png"
                    className="img-fluid rounded-start service-img"
                    alt="grooming"
                  />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body ">
                    <h5 className="card-title">Pet Grooming</h5>
                    <p className="card-text">Book In-Home Grooming Session</p>
                    <Link to={`/grooming`}>
                      Find out more about Pet Grooming{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card 2 --> */}
            <div className="card mb-3 border-0 ">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src="https://img.icons8.com/color/96/000000/dog-park.png"
                    className="img-fluid rounded-start service-img"
                    alt="training"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Dog Training</h5>
                    <p className="card-text">Book Dog-friendly training</p>
                    <Link to={`/training`}>
                      Find out more about Dog Training{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card 3 --> */}
            <div className="card mb-3 border-0">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src="https://img.icons8.com/color/96/000000/veterinarian-male-skin-type-3.png"
                    className="img-fluid rounded-start service-img"
                    alt="vet"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Vet on Call</h5>
                    <p className="card-text">
                      Book Expert Veterinary Care Service
                    </p>
                    <Link to={`/vet`}>Find out more about Vet on Call </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-booking">
            <div className="card text-center">
              <div className="card-header">
                <img
                  src="https://img.icons8.com/color/96/000000/keyhole-shield.png"
                  alt="keyhole"
                />
                <h1 className="card-title">98.7% of reviews are 5 star</h1>
              </div>
              <div className="card-body service-booking-content text-start">
                <div className="service-booking-content-img"></div>
                <p className="card-text service-booking-card-text">
                  ✔️ All new service providers pass a basic background check
                </p>
                <div className="service-booking-content-img"></div>
                <p className="card-text service-booking-card-text">
                  ✔️ All provide a detailed profile and personal information
                </p>
                <div className="service-booking-content-img"></div>
                <p className="card-text service-booking-card-text">
                  ✔️ All service providers are approved by our team of pet
                  specialists
                </p>
                <div className="service-booking-submit">
                  <Link
                    to={`/vet`}
                    className="btn service-booking-submit-button"
                  >
                    Book a Service
                  </Link>
                </div>
              </div>
            </div>
            <p className="outside-text service-booking-card-text">
              All services booked on Thepetnest are backed by the ThePetNest
              guarantee, 24/7 support, and our reservation protection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
