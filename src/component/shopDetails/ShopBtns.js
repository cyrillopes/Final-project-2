import React from "react";
const ShopBtns = (props) => {
  const renderBtns = ({ handleClick, proceed }) => {
    return (
      <>
        <div className="col-lg-12 mt-lg-4">
          <button
            type="button"
            className="btn btn-lg btn-outline-secondary rounded-0 display-6 fw-bold add-to-cart"
            onClick={handleClick}
          >
            Add to cart
          </button>
        </div>
        <div className="col-lg-12 mt-lg-4">
          <button
            type="button"
            className="btn btn-lg rounded-0 display-6 fw-bold but-it-now"
            onClick={proceed}
          >
            Buy it now
          </button>
        </div>
      </>
    );
  };
  return <>{renderBtns(props)}</>;
};
export default ShopBtns;
