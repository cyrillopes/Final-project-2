import React from "react";
import { Link } from "react-router-dom";

const AdoptionDisplay = (props) => {
  const renderData = ({ listData }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <div className="col-lg-4 mt-lg-4" key={item._id}>
              <div className="card">
                <img
                  src={item.img}
                  className="card-img-top adoption-card-img card-img"
                  alt="img"
                  style={{ width: "85%", height: "200px" }}
                />
                <Link
                  to={`/adoption-details/${item.breed_id}/${item.id}`}
                  className="text-decoration-none"
                >
                  <h5 className="card-title ms-3 mt-3">{item.name}</h5>
                </Link>

                <div className="card-body">
                  <p className="card-text fw-semibold">
                    {item.gender}, {item.age}
                  </p>
                  <p className="card-text fw-semibold">
                    {item.contact_info[0].address}
                  </p>
                  <hr />
                  <p className="card-text fw-semibold">Owner details -</p>
                  <div className="row">
                    <div className="col-lg-2">
                      <img
                        src="https://img.icons8.com/ios-glyphs/40/000000/user-male-circle.png"
                        alt="user"
                      />
                    </div>
                    <div className="col-lg-10">
                      <p className="card-text">{item.contact_info[0].name}</p>
                      <p className="card-text">{item.contact_info[0].phone}</p>
                    </div>
                  </div>
                  <hr />
                  <p className="card-text fw-semibold">Connect</p>
                  <div className="row mx-lg-2 mt-lg-2">
                    <div className="col-lg-3">
                      <a href={item.contact_info[0].facebook}>
                        <h4>
                          <i className="bi bi-facebook"></i>
                        </h4>
                      </a>
                    </div>
                    <div className="col-lg-3">
                      <a href={item.contact_info[0].linkedIn}>
                        <h4>
                          <i className="bi bi-linkedin"></i>
                        </h4>
                      </a>
                    </div>
                    <div className="col-lg-3">
                      <a href={item.contact_info[0].twitter}>
                        <h4>
                          <i className="bi bi-twitter"></i>
                        </h4>
                      </a>
                    </div>
                    <div className="col-lg-3">
                      <a href={item.contact_info[0].instagram}>
                        <h4>
                          <i className="bi bi-instagram"></i>
                        </h4>
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="text-center">
                    <Link
                      to={`/adoption-details/${item.breed_id}/${item.id}`}
                      className="fw-bold text-center text-decoration-none"
                    >
                      See more details &nbsp;
                      <i className="bi bi-info-circle text-dark"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      } else {
        return (
          <div>
            <h3 className="text-secondary">
              Hey there! It's so good to have you here. Why don't you let a pet
              adopt you today.
            </h3>
          </div>
        );
      }
    } else {
      return (
        <>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <img
                src="https://c.tenor.com/1mRsobYzxEoAAAAM/corgi-excited.gif"
                alt="gif"
                style={{ height: 300, width: 300 }}
              />
            </div>
            <div className="col-4"></div>
          </div>
        </>
      );
    }
  };
  return <>{renderData(props)}</>;
};
export default AdoptionDisplay;
