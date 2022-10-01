import React from "react";
import { Link } from "react-router-dom";

const ShopListDisplay = (props) => {
  const renderData = ({ listData, handleClick }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            // <!-- single card -->
            <div className="col-lg-12 mt-lg-4 pe-4 " key={item._id}>
              <div className="card rounded-0">
                <div className="row">
                  <div className="col-md-3 p-0">
                    <img
                      src={item.img_url}
                      className="card-img adoption-card-img my-5 ms-5"
                      alt={item.item_name}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <Link
                        to={`/details/${item.category_id}/${item.id}`}
                        className="text-decoration-none"
                      >
                        <div className="text-dark fw-bold fs-5 mt-4">
                          {item.item_name}
                        </div>
                      </Link>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <span className="card-text fs-6">
                        {item.reviews} reviews
                      </span>
                      <div className="card-text mt-4 fs-6 overflow-hidden description">
                        {item.description}
                      </div>
                      <Link
                        to={`/details/${item.category_id}/${item.id}`}
                        className="text-decoration-none"
                      >
                        <div className="card-link mt-4">View full details</div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-3 text-start px-5 mt-4 ">
                    <p className="text-decoration-line-through text-secondary card-text my-1">
                      ₹ {item.prev_price}
                    </p>
                    <h5 className="text-dark fs-4 fw-bold my-1">
                      ₹ {item.price}
                    </h5>

                    <div className="text-center text-white bg-danger fw-bold my-3 w-50 ">
                      {item.discount}
                    </div>
                    <Link
                      to={`/details/${item.category_id}/${item.id}`}
                      className="text-decoration-none"
                    >
                      <button className=" btn rounded-0 w-100 border mt-4">
                        Details
                      </button>
                    </Link>
                    <button
                      className="btn-shop btn rounded-0 w-100 mt-2"
                      onClick={() => handleClick(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      } else {
        return (
          <div className="m-5">
            <img
              src="https://img.icons8.com/external-dreamcreateicons-flat-dreamcreateicons/64/000000/external-alert-internet-security-dreamcreateicons-flat-dreamcreateicons.png"
              alt="img"
              className=" d-inline-block"
            />
            <h3 className="text-secondary d-inline-block ms-3">
              Oops! There are no results to show. Try something else...
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
                src="https://i.pinimg.com/originals/c5/7f/5a/c57f5af94487bb62711c5adf7926feb2.gif"
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
export default ShopListDisplay;
