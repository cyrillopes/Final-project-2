import React from "react";
import { Link } from "react-router-dom";

const TrainingPrices = () => {
  return (
    <section id="training-prices">
      <h2 className="fw-bold py-lg-5 text-center text-secondary">
        Dog Training Packages
      </h2>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 g-4 p-3 ms-5 me-5">
          <div className="col">
            <div className="card training-price-card ms-lg-5 me-lg-5 text-center">
              <span className="position-absolute top-0 start-100  translate-middle badge bg-danger">
                New
              </span>
              <div className="card-header bg-transparent">
                <div className="row">
                  <div className="col-lg-3 py-lg-3">
                    <img
                      src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-pet-animals-victoruler-flat-victoruler.png"
                      alt="dog"
                    />
                  </div>
                  <div className="col-lg-5">
                    <h6 className="fw-bold text-start py-lg-3">
                      Online Dog Training Program
                    </h6>
                  </div>
                  <div className="col-lg-4">
                    <h6 className="fw-bold text-start text-danger text-decoration-line-through ps-4">
                      ₹9900
                    </h6>
                    <h2 className="pe-1 text-dark fw-bold">₹7499</h2>
                  </div>
                </div>
                <p>Total online Session - 12</p>
              </div>
              <div className="card-body">
                <div className="card-subtitle container text-start ps-5 ">
                  <dl>
                    <dt>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Canine behaviour - 3 Sessions
                    </dt>
                    <dd>
                      Home Socialization, Overexcitement, Excessive Barking
                    </dd>
                    <dt>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Society Manners - 3 Sessions
                    </dt>
                    <dd>Leash Walking, Socialization with other Pets</dd>
                    <dt>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Obedience Commands - 3 Sessions
                    </dt>
                    <dd>Sit, Down, Stay & Come Commands</dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>3
                      Complimentary Commands
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Diet Chart
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>1
                      Month Follow up
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      First demo session - ₹500
                    </dd>
                  </dl>
                </div>
                <div>
                  <a
                    className="btn bg-transparent fw-bold text-start w-100 border-0"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Value Added
                    <span>
                      <i className="bi bi-plus"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body border-0 ps-5">
                      <dl className="text-start ">
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Vet Assistance (Online Vet Consultation)
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          20% Off On First Grooming
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Training Completion Certificate
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <a
                    className="btn bg-transparent fw-bold text-start w-100 border-0"
                    data-bs-toggle="collapse"
                    href="#collapseExample2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Requirements
                    <span>
                      <i className="bi bi-plus"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExample2">
                    <div className="card card-body border-0 ps-5">
                      <dl className="text-start ">
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          This package is for puppies & dogs 5 months and older
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Be prepared to practice daily for at least 30 minutes
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Sessions must be scheduled 1 week apart
                        </dd>
                      </dl>
                    </div>
                  </div>
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
                  <div className="col-lg-3 py-lg-3">
                    <img
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-pet-pet-grooming-flaticons-lineal-color-flat-icons.png"
                      alt="grooming"
                    />
                  </div>
                  <div className="col-lg-5">
                    <h6 className="fw-bold text-start py-lg-3">
                      Puppy Socialization Package
                    </h6>
                  </div>
                  <div className="col-lg-4">
                    <h6 className="fw-bold text-start text-danger text-decoration-line-through ps-4">
                      ₹1199
                    </h6>
                    <h2 className="pe-1 text-dark fw-bold">₹999</h2>
                  </div>
                </div>
                <p>In-Home Training Sessions: 8 - 10</p>
              </div>
              <div className="card-body">
                <div className="card-subtitle container text-start ps-5 ">
                  <dl>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Puppy-proofing your home
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Socialization with human & other pets
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Leash walking
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Diet Chart
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      House manners (sit, down, stay, off)
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Potty Training
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Biting
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      First demo session - ₹500
                    </dd>
                  </dl>
                </div>
                <div>
                  <a
                    className="btn bg-transparent fw-bold text-start w-100 border-0"
                    data-bs-toggle="collapse"
                    href="#collapseExample3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Value Added
                    <span>
                      <i className="bi bi-plus"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExample3">
                    <div className="card card-body border-0 ps-5">
                      <dl className="text-start ">
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Vet Assistance (Online Vet Consultation)
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          20% Off On First Grooming
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Training Completion Certificate
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <a
                    className="btn bg-transparent fw-bold text-start w-100 border-0"
                    data-bs-toggle="collapse"
                    href="#collapseExample4"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Requirements
                    <span>
                      <i className="bi bi-plus"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExample4">
                    <div className="card card-body border-0 ps-5">
                      <dl className="text-start ">
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Puppy must have their full round of vaccinations prior
                          to starting these sessions
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          This package is for puppies & dogs 5 months and older
                        </dd>
                      </dl>
                    </div>
                  </div>
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
                  <div className="col-lg-3 py-lg-3">
                    <img
                      src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-medals-football-soccer-flaticons-flat-flat-icons.png"
                      alt="football"
                    />
                  </div>
                  <div className="col-lg-5">
                    <h6 className="fw-bold text-start py-lg-3">
                      Basic Obedience Training
                    </h6>
                  </div>
                  <div className="col-lg-4">
                    <h6 className="fw-bold text-start text-danger text-decoration-line-through ps-4">
                      ₹1199
                    </h6>
                    <h2 className="pe-1 text-dark fw-bold">₹999</h2>
                  </div>
                </div>
                <p>In-Home Training Sessions: 22 - 25</p>
              </div>
              <div className="card-body">
                <div className="card-subtitle container text-start ps-5 ">
                  <dl>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Loose leash walking
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Polite greeting
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Stand/Stay
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Sit/No Commands
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Excessive barking
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Diet Chart
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Advanced (2 Tricks)
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      First demo session - ₹500
                    </dd>
                  </dl>
                </div>
                <div>
                  <a
                    className="btn bg-transparent fw-bold text-start w-100 border-0"
                    data-bs-toggle="collapse"
                    href="#collapseExample5"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Value Added
                    <span>
                      <i className="bi bi-plus"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExample5">
                    <div className="card card-body border-0 ps-5">
                      <dl className="text-start ">
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Vet Assistance (Online Vet Consultation)
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          20% Off On First Grooming
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Training Completion Certificate
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <a
                    className="btn bg-transparent fw-bold text-start w-100 border-0"
                    data-bs-toggle="collapse"
                    href="#collapseExample6"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Requirements
                    <span>
                      <i className="bi bi-plus"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExample6">
                    <div className="card card-body border-0 ps-5">
                      <dl className="text-start ">
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Dogs must have their full round of vaccinations prior
                          to starting these sessions
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          This package is for puppies & dogs 5 months and older
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Be prepared to practice daily for at least 30 minutes
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Sessions must be scheduled 1 week apart
                        </dd>
                      </dl>
                    </div>
                  </div>
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
                  <div className="col-lg-3 py-lg-3">
                    <img
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-graduation-online-education-flaticons-lineal-color-flat-icons-3.png"
                      alt="graduation"
                    />
                  </div>
                  <div className="col-lg-5">
                    <h6 className="fw-bold text-start py-lg-3">
                      Advanced Obedience Training
                    </h6>
                  </div>
                  <div className="col-lg-4">
                    <h6 className="fw-bold text-start text-danger text-decoration-line-through ps-4">
                      ₹1199
                    </h6>
                    <h2 className="pe-1 text-dark fw-bold">₹999</h2>
                  </div>
                </div>
                <p>In-Home Training Sessions: 45 - 48</p>
              </div>
              <div className="card-body">
                <div className="card-subtitle container text-start ps-5 ">
                  <dl>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>All
                      Basic Commands
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Heal Walk
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Handshake
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Roll-Over
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Fetch
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Swimming
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Take & Drop it Commands
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      Sitting (At 1 Particular Place)
                    </dd>
                    <dd>
                      <i className="bi bi-caret-right-fill text-success"></i>
                      First demo session - ₹500
                    </dd>
                  </dl>
                </div>
                <div>
                  <a
                    className="btn bg-transparent fw-bold text-start w-100 border-0"
                    data-bs-toggle="collapse"
                    href="#collapseExample7"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Value Added
                    <span>
                      <i className="bi bi-plus"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExample7">
                    <div className="card card-body border-0 ps-5">
                      <dl className="text-start ">
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Vet Assistance (Online Vet Consultation)
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          20% Off On First Grooming
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Training Completion Certificate
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <a
                    className="btn bg-transparent fw-bold text-start w-100 border-0"
                    data-bs-toggle="collapse"
                    href="#collapseExample8"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Requirements
                    <span>
                      <i className="bi bi-plus"></i>
                    </span>
                  </a>
                  <div className="collapse" id="collapseExample8">
                    <div className="card card-body border-0 ps-5">
                      <dl className="text-start ">
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          This package is for puppies & dogs 5 months and older
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Be prepared to practice daily for at least 30 minutes
                        </dd>
                        <dd>
                          <i className="bi bi-caret-right-fill text-success"></i>
                          Sessions must be scheduled 1 week apart
                        </dd>
                      </dl>
                    </div>
                  </div>
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
  );
};
export default TrainingPrices;
