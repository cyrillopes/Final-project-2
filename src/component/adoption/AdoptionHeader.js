import React from "react";
import { Link } from "react-router-dom";
const AdoptionHeader = () => {
  return (
    <div className=" jumbotron header" style={{ height: "230px" }}>
      <div className="header-sub py-lg-4 text-center">
        <h3 className="display-6 fw-bold mt-lg-2 mt-3 text-secondary px-lg-0">
          Re-Home and Adopt a Pet in India
        </h3>
        <p className="text-secondary m-0">
          Every Pet Deserves a Good Home. #Adoptlove
        </p>
        <Link
          to="/adopt-a-pet"
          type="button"
          className="btn btn-lg training-btn mt-lg-4"
        >
          Adopt a Pet
        </Link>
      </div>
    </div>
  );
};
export default AdoptionHeader;
