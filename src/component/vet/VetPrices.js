import React from "react";
const VetPrices = () => {
  return (
    <section id="vet-service-rates" className="bg-light">
      <h2 className="display-8 fw-bold text-center py-lg-5">
        Packages and Rates
      </h2>
      <div className="vet-container">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col-lg-6">
            <div className="card h-100  mb-4 rounded-3 shadow-sm vet-price-card">
              <div className="card-header py-3">
                <img
                  src="https://img.icons8.com/external-becris-lineal-color-becris/34/000000/external-pet-hotel-service-becris-lineal-color-becris.png"
                  alt="hotel"
                />
                <h4 className="my-0 fw-normal">Online Vet</h4>
              </div>
              <div className="card-body">
                <small className="text-muted fw-light">Starting</small>
                <h1 className="shop-navbar-heading">₹149</h1>
                <ul className="list-group mt-3 mb-4">
                  <li className="list-group-item">One time consultation</li>
                  <li className="list-group-item">Call & Video Consultancy</li>
                  <li className="list-group-item">Personalized Advice</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg vet-price-btn"
                >
                  Book A Consultant
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <img
                  src="https://img.icons8.com/external-flat-geotatah/34/000000/external-pet-pet-lover-society-flat-flat-geotatah-7.png"
                  alt="society lover"
                />
                <h4 className="my-0 fw-normal">Essential Care</h4>
              </div>
              <div className="card-body">
                <small className="text-muted fw-light">Starting</small>
                <h1 className="shop-navbar-heading">₹499</h1>
                <ul className="list-group mt-3 mb-4">
                  <li className="list-group-item">
                    Call/Video Consultancy 220 minutes/month
                  </li>
                  <li className="list-group-item">Chat Consults</li>
                  <li className="list-group-item">Personalized Advice</li>
                  <li className="list-group-item">1 month follow ups</li>
                  <li className="list-group-item">Ticks & Fleas Preventive</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg vet-price-btn"
                >
                  Book A Consultant
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col-lg-6">
            <div className="card h-100 mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <img
                  src="https://img.icons8.com/external-becris-lineal-color-becris/34/000000/external-pet-hotel-service-becris-lineal-color-becris.png"
                  alt="hotel"
                />
                <h4 className="my-0 fw-normal">Dog Consultation</h4>
              </div>
              <div className="card-body">
                <small className="text-muted fw-light">Starting</small>
                <h1 className="shop-navbar-heading">₹599</h1>
                <ul className="list-group mt-3 mb-4">
                  <li className="list-group-item">Nutrition Consultation</li>
                  <li className="list-group-item">Dog Parenting Management</li>
                  <li className="list-group-item">
                    Behavioral Training Tips (Aggression, Biting, Jumping)
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg vet-price-btn"
                >
                  Book A Consultant
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <img
                  src="https://img.icons8.com/external-flat-geotatah/34/000000/external-pet-pet-lover-society-flat-flat-geotatah-7.png"
                  alt="society lover"
                />
                <h4 className="my-0 fw-normal">Cat Consultation</h4>
              </div>
              <div className="card-body">
                <small className="text-muted fw-light">Starting</small>
                <h1 className="shop-navbar-heading">₹499</h1>
                <ul className="list-group mt-3 mb-4">
                  <li className="list-group-item">Nutrition Consultation</li>
                  <li className="list-group-item">Cat Parenting Management</li>
                  <li className="list-group-item">
                    Understanding Cat Signs/ Behaviour (Bitting, Itching, Too
                    Much Sleeping)
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg vet-price-btn"
                >
                  Book A Consultant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VetPrices;
