import React, { Component } from "react";
import axios from "axios";
import Nav from "../headers/Nav";
import FilterType from "../adoptionFilter/FilterType";
import AdoptionDisplay from "../adoptionListing/AdoptionDisplay";
// import FilterVaccination from "../adoptionFilter/FilterVaccination";
import "../../css/adopt-a-pet.css";
const url = `https://paws-for-adoption.herokuapp.com/adoptions`;

class AdoptionListApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adoptionList: "",
    };
  }
  setDataPerFilter = (data) => {
    this.setState({ adoptionList: data });
  };

  render() {
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

        <section id="adoption" style={{ marginTop: 130 }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 mt-lg-4">
                <div className="card ms-lg-3">
                  <div className="card-body">
                    <h6 className="text-secondary">Filters</h6>
                    <h5 className="card-title mt-lg-4">Pet type</h5>
                    <FilterType
                      petPerFilter={(data) => {
                        this.setDataPerFilter(data);
                      }}
                    />
                    {/* <h5 className="card-title mt-lg-4">Vaccination</h5>
                    <FilterVaccination
                      restPerCost={(data) => {
                        this.setDataPerFilter(data);
                      }}
                    /> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <AdoptionDisplay listData={this.state.adoptionList} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  componentDidMount() {
    axios
      .get(`${url}`)
      .then((res) => this.setState({ adoptionList: res.data }));
  }
}
export default AdoptionListApi;
