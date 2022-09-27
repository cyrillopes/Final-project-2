import React from "react";
const TrainingBooking = () => {
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
            Book a Service
          </button>
        </div>
        <div className="service-img-dog">
          <img src="https://i.ibb.co/WsNqNCM/pngwing-com.png" alt="wing" />
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
            How does it work?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <p>
              Every puppy and dog has a different temperament and nature & dog
              training is an excellent step to improve your relationship with
              your dog. To understand more, you can Book a Session for canine
              behavioral assessment which helps you to find the best dog
              training program for your dog.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TrainingBooking;
