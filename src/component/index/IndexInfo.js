import React from "react";
const IndexInfo = () => {
  return (
    <>
      <div id="information" className="bg-light">
        <div className="p-5 mb-4  information_section">
          <div className="information-heading">
            <h1 className="display-5 fw-bold">How it works?</h1>
            <p className="service-booking-card-text">
              Charges may vary based on Pet and City.
            </p>
          </div>
          <div className="sub-info">
            <div className="sub-info-category">
              <div className="sub-info-category-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <h4 className="sub-info-title">Search</h4>
              </div>
              <div className="sub-info-categroy-content">
                <p className="sub-info-para-content">
                  Search pet care heroes by location and service.
                </p>
              </div>
            </div>
            {/* <!-- ... --> */}
            <div className="sub-info-category">
              <div className="sub-info-category-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-chat-left-text-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                </svg>
                <h4 className="sub-info-title">Book</h4>
              </div>
              <div className="sub-info-categroy-content">
                <p className="sub-info-para-content">
                  Schedule your appointment at home.
                </p>
              </div>
            </div>
            {/* <!-- ... --> */}
            <div className="sub-info-category info-override">
              <div className="sub-info-category-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-cart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <h4 className="sub-info-title">Relax</h4>
              </div>
              <div className="sub-info-categroy-content">
                <p className="sub-info-para-content">
                  Sit back and relax! Your pet hero is on his way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IndexInfo;
