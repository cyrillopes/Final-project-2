import React from "react";
import { Link } from "react-router-dom";

const ShopCarousel = () => {
  return (
    <section id="carousels">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.ibb.co/c3rw53R/pet-bed.jpg"
              className="d-block w-100"
              alt="Pet Beds"
            />
            <div className="carousel-caption d-none d-md-block carousel-heading">
              <h2 className="carousel-title">
                Buy Luxury Beds & Sofas For Pets
              </h2>
              <h5>Made in India Furniture for Pets</h5>
              <Link to={`/listing/4`}>
                <button
                  type="submit"
                  className="btn-shop-search-input btn btn-shop-now"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/Y3d3XRZ/portrait.jpg"
              className="d-block w-100"
              alt="portrait"
            />
            <div className="carousel-caption d-none d-md-block carousel-heading">
              <h2 className="carousel-title">
                Turn Your Pet Into Portrait Masterpiece
              </h2>
              <h5>Made in India With Love for Pets</h5>
              <Link to={`/listing/1`}>
                <button
                  type="submit"
                  className="btn-shop-search-input btn btn-shop-now"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/q0xJPbD/toys.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block carousel-heading">
              <h2 className="carousel-title">Buy Eco-Friendly Toys For Pets</h2>
              <h5>Made in India Pet Toys and Accessories</h5>{" "}
              <Link to={`/listing/2`}>
                <button
                  type="submit"
                  className="btn-shop-search-input btn btn-shop-now"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/f8JPp7S/pet-tshirtsss.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block carousel-heading">
              <h2 className="carousel-title">
                Buy Dog And Cat Lovers High Quality T-shirts
              </h2>
              <h5>Made in India Pet Lover T-shirts</h5>{" "}
              <Link to={`/listing/1`}>
                <button
                  type="submit"
                  className="btn-shop-search-input btn btn-shop-now"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
export default ShopCarousel;
