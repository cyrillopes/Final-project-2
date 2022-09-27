import axios from "axios";
import React, { Component } from "react";
import "../../css/adoption-details.css";
import Nav from "../headers/Nav";
// import Socials from "./Socials";
const url = "https://paws-for-adoption.herokuapp.com/adoption-details";

class AdoptionDetails extends Component {
  constructor() {
    super();
    this.state = {
      petDetails: "",
    };
  }
  contactDetails = (data) => {
    // return data.map((item) => {
    //   return (
    //     <>
    //
    //     </>
    //   );
    // });
  };

  render() {
    let { petDetails } = this.state;
    return (
      <>
        <div
          className="nav-bar "
          style={{
            height: "90",
            backgroundImage: "none",
            backgroundColor: "#faa466",
          }}
        >
          <Nav />
        </div>
        <section id="adopt-details">
          <h2 className="fw-bold font text-center mt-lg-4">
            Adopt {petDetails.name}
          </h2>
          <div className="container mx-lg-5">
            <div className="row mx-lg-5">
              <a href="/adopt-a-pet" className="fw-bold text-decoration-none">
                <em>🢀 </em> Back to Search Results
              </a>
              <h3 className="fw-bold font mt-lg-3">
                Heya !!! My name is {petDetails.name}.
              </h3>
              <div className="ms-lg-5">
                <div className="carousel mt-lg-3 mx-lg-5 text-center">
                  <div className="carousel-item active mx-lg-5">
                    <img
                      src={petDetails.img}
                      className="d-block ms-lg-5 w-75"
                      alt={petDetails.name}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-lg-5 margin">
                <h2 className="fw-bold font">Facts About Me</h2>
                <div className="row mt-lg-4">
                  <div className="col-lg-2">
                    <h5 className="font">Breed</h5>
                    <h5 className="font">Vaccinated</h5>
                    <h5 className="font">Age</h5>
                  </div>
                  <div className="col-lg-4">
                    <h5 className="font fw-light">{petDetails.breed}</h5>
                    <h5 className="font fw-light">{petDetails.vaccination}</h5>
                    <h5 className="font fw-light">{petDetails.age}</h5>
                  </div>
                  <div className="col-lg-2">
                    <h5 className="font">Gender</h5>
                    <h5 className="font">Pet Id</h5>
                    <h5 className="font">Neutered</h5>
                  </div>
                  <div className="col-lg-4">
                    <h5 className="font fw-light">{petDetails.gender}</h5>
                    <h5 className="font fw-light">{petDetails.id}</h5>
                    <h5 className="font fw-light">{petDetails.neutered}</h5>
                  </div>
                </div>
              </div>
              <hr className="my-lg-4 margin" />
              <div className="col-lg-12 mt-lg-1 margin">
                <h2 className="fw-bold font">My Info</h2>
              </div>
              <div className="col-lg-3 mt-lg-3 margin">
                {/* <!-- <i className="bi bi-gender-female"></i> --> */}
                <h5 className="fw-light font">
                  <i className="bi bi-gender-male"></i>&nbsp;Male
                </h5>
                <h5 className="fw-light font">
                  <i className="bi bi-check-lg text-success"></i>
                  &nbsp;Vaccinated
                </h5>
              </div>
              <div className="col-lg-3 mt-lg-3 margin">
                <h5 className="fw-light font">
                  <i className="bi bi-check-lg text-success"></i>&nbsp;Neutered
                </h5>
                <h5 className="fw-light font">
                  <i className="bi bi-exclamation text-danger"></i>&nbsp;Not
                  Sprayed
                </h5>
              </div>
              <div className="col-lg-4 mt-lg-3 margin">
                <h5 className="fw-light font">
                  <i className="bi bi-check-lg text-success"></i>&nbsp;Shots
                </h5>
                <h5 className="fw-light font">
                  <i className="bi bi-check-lg text-success"></i>&nbsp;Good with
                  Kids
                </h5>
              </div>
              <hr className="my-lg-4 margin" />
              <div className="col-lg-2 margin">
                <h2 className="fw-bold font">My Story</h2>
              </div>
              <div className="col-lg-8 margin">
                {/* <Socials listData={this.state.petDetails} /> */}

                {/* <Link to={"/"} className="float-start mx-lg-2">
                  <h2 className="bi bi-linkedin"></h2>
                </Link>

                <Link to={"/"} className="float-start mx-lg-2">
                  <h2 className="bi bi-twitter"></h2>
                </Link>

                <Link to={"/"} className="float-start mx-lg-2">
                  <h2 className="bi bi-instagram"></h2>
                </Link> */}
              </div>

              <div className="col-lg-12 mt-lg-2 margin">
                <h5 className="fw-light font">Rescued puppy</h5>
              </div>
              <div className="col-lg-12 adoption-contact bg-light rounded-top my-lg-4 margin">
                <div className="my-lg-3 mx-lg-3 py-4 px-3">
                  <div className="contact-info py-2 px-2 rounded-3">
                    <h2 className="font my-lg-4 mx-lg-5 fw-bold ">
                      Contact Info
                    </h2>
                    <div className="row  mx-lg-5 my-lg-4">
                      <div className="col-lg-2">
                        <h5 className="font">Name</h5>
                        <h5 className="font">Address</h5>
                      </div>
                      <div className="col-lg-4">
                        <h5 className="font fw-light">Cyril Lopes</h5>
                        <h5 className="font fw-light">Maharashtra India</h5>
                      </div>
                      <div className="col-lg-2">
                        <h5 className="font">Email</h5>
                        <h5 className="font">Phone</h5>
                      </div>
                      <div className="col-lg-4">
                        <h5 className="font fw-light">
                          cyrillopez05@gmail.com
                        </h5>
                        <h5 className="font fw-light">9011691056</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="fw-bold text-danger text-center margin my-lg-3">
                *The Paws Foundation does not ask for money for any adoption
                listed on website. Please do not make any payments before
                verifying the owner of the pet. Please report if anyone asks for
                money.
              </h6>
            </div>
          </div>
        </section>
      </>
    );
  }
  componentDidMount() {
    let breedId = this.props.match.params.breed_id;
    let id = this.props.match.params.id;
    axios.get(`${url}/${breedId}/${id}`).then((res) => {
      this.setState({ petDetails: res.data[0] });
    });
  }
}
export default AdoptionDetails;
