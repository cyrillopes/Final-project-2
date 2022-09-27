import React from "react";
const AdoptionFaq = () => {
  return (
    <section id="faq">
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
            Why Should You Adopt a Dog or Cat?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <p>
              Did you know that over 2000 people per hour in India run a search
              right here looking to adopt a pet? Pet adoption is becoming the
              preferred way to find a new pet. Adoption will always be more
              convenient than buying a puppy for sale from a pet shop or finding
              a kitten for sale from a litter. Pet adoption brings less stress
              and more savings! So what are you waiting for? Go find that
              perfect pet for home!
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
            What is the fee to adopt a pet?
          </a>
        </p>
        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
            <p>
              No, there is no fee for pet adoption. However, if you adopt from a
              different city pet owner/rescuer can ask for travel charges.
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
            How old do I need to be to adopt a pet?
          </a>
        </p>
        <div className="collapse" id="collapseExample3">
          <div className="card card-body">
            <p>You need to be at least 18+ years old to adopt</p>
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
            Can you return an adopted pet?
          </a>
        </p>
        <div className="collapse" id="collapseExample4">
          <div className="card card-body">
            <p>
              We understand it can be hard to get an adjusted pet in the new
              home and vice versa, as long as your reason for returning is
              reasonable, you'll be welcome to put it up for adoption again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdoptionFaq;
