import React from "react";
import { Link } from "react-router-dom";

const GroomingPrices = () => {
  return (
    <>
      <section id="grooming-prices" className="bg-light py-lg-1">
        <h2 className="display-6 mt-lg-5 text-center fw-bold text-secondary">
          Dog Grooming Packages
        </h2>
        <p className="text-center mt-lg-3">
          Charges may vary based on Pet and City.
        </p>
        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-3 g-4 p-3 ms-5 me-5">
            <div className="col">
              <div className="card training-price-card ms-lg-3 me-lg-1 text-center">
                <div className="card-header bg-transparent">
                  <div className="row">
                    <div className="col-lg-3 py-lg-2">
                      <img
                        src="https://img.icons8.com/doodle/64/000000/bath.png"
                        alt="bath"
                      />
                    </div>
                    <div className="col-lg-5">
                      <h4 className="fw-bold text-start py-lg-3">Spa Bath</h4>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="fw-bold text-start text-danger text-decoration-line-through ps-4">
                        ₹960
                      </h6>
                      <h3 className="pe-1 text-dark fw-bold">₹800</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-subtitle container text-start ps-3 ">
                    <dl>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Bath With Shampoo & Conditioner
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Blow Dry
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Nail Clipping
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Ear Cleaning
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Eyes Cleaning
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Paw Massage
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Combing/Brushing
                      </dd>
                    </dl>
                  </div>

                  <div className="card-footer bg-transparent">
                    <button
                      type="button"
                      className="btn btn-success w-100 py-lg-2"
                    >
                      <Link
                        to={`/vet`}
                        className=" text-decoration-none text-white"
                      >
                        Book a Session
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card training-price-card ms-lg-3 me-lg-1 text-center">
                <div className="card-header bg-transparent">
                  <div className="row">
                    <div className="col-lg-3 py-lg-2">
                      <img
                        src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-bath-pet-grooming-flaticons-lineal-color-flat-icons-2.png"
                        alt="bath"
                      />
                    </div>
                    <div className="col-lg-5">
                      <h4 className="fw-bold text-start py-lg-3">
                        Bath + Basic Grooming
                      </h4>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="fw-bold text-start text-danger text-decoration-line-through ps-4">
                        ₹1438
                      </h6>
                      <h3 className="pe-1 text-dark fw-bold">₹1199</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-subtitle container text-start ps-3 ">
                    <dl>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Bath With Shampoo & Conditioner
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Blow Dry
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Face Haircutting
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Sanitary Trim
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Nail Clipping
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Ear Cleaning
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Eye Cleaning
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Teeth Cleaning/Mouth Spray
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Paw Massage
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Combing/Brushing
                      </dd>
                    </dl>
                  </div>

                  <div className="card-footer bg-transparent">
                    <button
                      type="button"
                      className="btn btn-success w-100 py-lg-2"
                    >
                      <Link
                        to={`/vet`}
                        className=" text-decoration-none text-white"
                      >
                        Book a Session
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card training-price-card ms-lg-3 me-lg-1 text-center">
                <div className="card-header bg-transparent">
                  <div className="row">
                    <div className="col-lg-3 py-lg-2">
                      <img
                        src="https://img.icons8.com/bubbles/64/000000/dog.png"
                        alt="dog"
                      />
                    </div>
                    <div className="col-lg-5">
                      <h4 className="fw-bold text-start py-lg-3">
                        Full Service
                      </h4>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="fw-bold text-start text-danger text-decoration-line-through ps-4">
                        ₹1798
                      </h6>
                      <h3 className="pe-1 text-dark fw-bold">₹1499</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-subtitle container text-start ps-3 ">
                    <dl>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Bath With Shampoo & Conditioner
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Blow Dry
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Full body Trimming/Zero Haircut
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Sanitary Trim
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Nail Clipping
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Ear Cleaning
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Eye Cleaning
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Teeth Cleaning/Mouth Spray
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Paw Massage
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Combing/Brushing
                      </dd>
                    </dl>
                  </div>

                  <div className="card-footer bg-transparent">
                    <button
                      type="button"
                      className="btn btn-success w-100 py-lg-2"
                    >
                      <Link
                        to={`/vet`}
                        className=" text-decoration-none text-white"
                      >
                        Book a Session
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="display-6 mt-lg-5 text-center fw-bold text-secondary">
          Cat Grooming Packages
        </h2>
        <p className="text-center mt-lg-3">
          Charges may vary based on Pet and City.
        </p>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-2 g-5 p-5 ms-5 me-5">
            <div className="col">
              <div className="card training-price-card ms-lg-5 me-lg-5 text-center">
                <div className="card-header bg-transparent">
                  <div className="row">
                    <div className="col-lg-3 py-lg-2">
                      <img
                        src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-bath-pet-grooming-flaticons-lineal-color-flat-icons-2.png"
                        alt="bath"
                      />
                    </div>
                    <div className="col-lg-5">
                      <h4 className="fw-bold text-start py-lg-3">
                        Bath + Basic Grooming
                      </h4>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="fw-bold text-start text-danger text-decoration-line-through ps-4">
                        ₹1438
                      </h6>
                      <h3 className="pe-1 text-dark fw-bold">₹1199</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-subtitle container text-start ps-3 ">
                    <dl>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Bath With Shampoo & Conditioner
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Blow Dry
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Face Haircutting
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Sanitary Trim
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Nail Clipping
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Ear Cleaning
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Eye Cleaning
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Teeth Cleaning/Mouth Spray
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Paw Massage
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Combing/Brushing
                      </dd>
                    </dl>
                  </div>

                  <div className="card-footer bg-transparent">
                    <button
                      type="button"
                      className="btn btn-success w-100 py-lg-2"
                    >
                      <Link
                        to={`/vet`}
                        className=" text-decoration-none text-white"
                      >
                        Book a Session
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card training-price-card ms-lg-5 me-lg-5 text-center">
                <div className="card-header bg-transparent">
                  <div className="row">
                    <div className="col-lg-3 py-lg-2">
                      <img
                        src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-pet-pet-grooming-flaticons-lineal-color-flat-icons.png"
                        alt="grooming"
                      />
                    </div>
                    <div className="col-lg-5">
                      <h4 className="fw-bold text-start py-lg-3">
                        Full Service
                      </h4>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="fw-bold text-start text-danger text-decoration-line-through ps-4">
                        ₹960
                      </h6>
                      <h3 className="pe-1 text-dark fw-bold">₹800</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-subtitle container text-start ps-3 ">
                    <dl>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Bath With Shampoo & Conditioner
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Blow Dry
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Body Massage
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Full body Trimming/Zero Haircut
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Sanitary Trim
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Nail Clipping
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Ear Cleaning
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Eye Cleaning
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Teeth Cleaning/Mouth Spray
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Paw Massage
                      </dd>
                      <dd>
                        <i className="bi bi-caret-right-fill text-success"></i>
                        Combing/Brushing
                      </dd>
                    </dl>
                  </div>

                  <div className="card-footer bg-transparent">
                    <button
                      type="button"
                      className="btn btn-success w-100 py-lg-2"
                    >
                      <Link
                        to={`/vet`}
                        className=" text-decoration-none text-white"
                      >
                        Book a Session
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GroomingPrices;
