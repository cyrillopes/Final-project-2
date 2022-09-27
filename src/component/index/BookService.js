import React from "react";
import { Link } from "react-router-dom";

const BookService = () => {
  return (
    <>
      <div id="book-service">
        <div className="service-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-chat-left-text"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <div className="service-content">
          <h3>Ready to book your next pet service?</h3>
        </div>
        <div>
          <button type="button" className="btn service-submit-btn">
            <Link to={`/vet`} className=" text-decoration-none text-white">
              Book a Service
            </Link>
          </button>
        </div>
        <div className="service-img-dog">
          <img
            src="https://i.ibb.co/BsC26hy/dog-on-phone.png"
            alt="dog on phone"
          />
        </div>
      </div>
      <div className="faq">
        <p>
          <a
            className="btn btn-light faq-btn btn-lg"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Book petcare service at home with ThePetNest
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <p>
              The endless and unconditional love from the furry companion
              deserves the best. Being adoring believers of the same, ThePetNest
              brought an idea to provide a safe, relaxed, and fun-filled
              experience for the little delightful creatures living in your
              hearts. Pets are the mini bundles of joy and celebrations. The
              days spent with pets are like celebrations. The pleasure they
              bring to our lives is immeasurable.
            </p>
            <p>
              They are worthy of more than just care, and ThePetNest is here to
              support you in enhancing the quality of life for these furry
              angels.
            </p>
            <p>
              From in-Home Pet Grooming, Pet Training to Vet on Call, we have
              all for your little furry friend. Because we understand—your pet
              is an important part of your family. When you are looking for
              competent pet grooming services, you can trust us to take care of
              your loved one. And when you require the Veterinary doctor or pet
              training, you can trust us to help you pamper your little one.
            </p>
            We have got your back. Every time!
          </div>
        </div>
      </div>
    </>
  );
};
export default BookService;
