import React from "react";
const GroomingInfo = () => {
  return (
    <section id="grooming-info mt-5">
      <h2 className="fw-bold display-5 text-center py-lg-3 text-secondary">
        How Pet Grooming works at your home?
      </h2>
      <div className="row container-fluid py-lg-4">
        <div className="col-lg-7">
          <img
            className="vet-service-img-fluid"
            src="https://i.ibb.co/PGpfDYb/grooming-puppy-30122019.jpg"
            alt="dog"
          />
        </div>
        <div className="col-lg-5">
          <div className="row py-lg-5">
            <div className="col-lg-1">
              <h1 className="text-center py-lg-1">
                <i className="bi bi-calendar-check"></i>
              </h1>
            </div>
            <div className="col-lg-11">
              <h5 className="display-8">Schedule and book—all online</h5>
              <p>All you have to do is pick a day and time</p>
            </div>
            <div className="col-lg-1 py-lg-4">
              <h1 className="text-center py-lg-1">
                <i className="bi bi-box2-heart"></i>
              </h1>
            </div>
            <div className="col-lg-11 py-lg-4">
              <h5 className="display-8">Pet Groomer brings the equipment</h5>
              <p>Professional pet groomer comes to your doorstep</p>
            </div>
            <div className="col-lg-1">
              <h1 className="text-center py-lg-1">
                <i className="bi bi-house"></i>
              </h1>
            </div>
            <div className="col-lg-11">
              <h5 className="display-8">No travel stress for your pets</h5>
              <p>Grooming service happens in your home</p>
            </div>
            <div className="col-lg-1 py-lg-4">
              <h1 className="text-center py-lg-1">
                <i className="bi bi-chevron-right"></i>
              </h1>
            </div>
            <div className="col-lg-11 py-lg-4">
              <h5 className="display-8">Groomer cleans up</h5>
              <p>You're all set!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GroomingInfo;
