import React from "react";
import { Link } from "react-router-dom";
const GroomingHeader = () => {
  return (
    <div className=" jumbotron header">
      <div className="header-sub py-lg-4 text-center">
        <h3 className="display-5 fw-bold py-lg-4 mt-3 text-secondary px-lg-0">
          Pet Grooming service that comes to your home
        </h3>
        <h1 className="display-6 m-0">
          Instantly Book a Professional Pet Groomer Online, Whenever you need
          one.
        </h1>
        <button type="button" className="btn btn-lg training-btn m-lg-5 ">
          <Link to={`/vet`} className=" text-decoration-none text-white">
            Book a Professional Groomer
          </Link>
        </button>
      </div>
    </div>
  );
};
export default GroomingHeader;
