import React from "react";
const VetBooking = () => {
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
          <img
            src="https://i.ibb.co/BsC26hy/dog-on-phone.png"
            alt="dog on phine"
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
            How does ThePetNest vet on phone work?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <p>
              A video call works the same way as a Whatsapp Video or Facetime
              call. You will be guided step by step before starting the call, so
              that the vet will be able to see your pet and observe any
              behaviour or physical signs that will help them give the best
              guidance. If you opt for a chat consultation, it will work the
              same way as a WhatsApp or Messenger chat. Good for those times
              when you're at work.
            </p>
          </div>
        </div>
        <p>
          <a
            className="btn btn-light faq-btn btn-lg"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            How long does a pet consultation last?
          </a>
        </p>
        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
            <p>
              Each Video consultations are estimated to last 20 minutes, but if
              we are unable to deliver the solution you need in that time the
              vet can extend.
            </p>
          </div>
        </div>
        <p>
          <a
            className="btn btn-light faq-btn btn-lg"
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            When should I use a video/text consultation?
          </a>
        </p>
        <div className="collapse" id="collapseExample3">
          <div className="card card-body">
            <p>
              ThePetNest vet on call support can be used in any scenario where
              you are unsure about the health and well being of your pet. Don't
              take a chance with your pet's health by delaying the treatment or
              sift through thousands of Google search results on your own.
            </p>
          </div>
        </div>
        <p>
          <a
            className="btn btn-light faq-btn btn-lg"
            data-bs-toggle="collapse"
            href="#collapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            What will happen after my pet consultation?
          </a>
        </p>
        <div className="collapse" id="collapseExample4">
          <div className="card card-body">
            <p>
              After your pet consultation is complete the following things will
              happen:
            </p>
            <ol>
              <li>
                Your vet will prescribe your pet’s medications and will provide
                his general advice
              </li>
              <li>You will be asked to rate the service of the vet.</li>
              <li>
                You will be followed up by our ThePetNest team to ensure your
                pet's good health.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default VetBooking;
