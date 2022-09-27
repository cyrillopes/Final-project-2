import React from "react";
const VetService = () => {
  return (
    <section id="vet-service">
      <h2 className="display-6 fw-bold text-center py-lg-5">
        How Online Veterinarian Service works?
      </h2>
      <div className="row container-fluid py-lg-4">
        <div className="col-lg-6">
          <img
            className="vet-service-img-fluid"
            src="https://i.ibb.co/hM9FJj5/vet-examing-puppy-28032020.jpg"
            alt="dog"
          />
        </div>
        <div className="col-lg-6 py-5">
          <div className="row py-lg-5">
            <div className="col-lg-1">
              <h1 className="text-center py-lg-1">
                <i className="bi bi-question-circle"></i>
              </h1>
            </div>
            <div className="col-lg-11">
              <h5 className="display-8">Ask a question</h5>
              <p>
                Ask anything related to health, nutrition, behavior of your Pet
              </p>
            </div>
            <div className="col-lg-1 py-lg-4">
              <h1 className="text-center py-lg-1">
                <i className="bi bi-image-fill"></i>
              </h1>
            </div>
            <div className="col-lg-11 py-lg-4">
              <h5 className="display-8">
                Tell us more about your pet and yourself
              </h5>
              <p>
                You can even upload photos and medical documents if you desire
              </p>
            </div>
            <div className="col-lg-1">
              <h1 className="text-center py-lg-1">
                <i className="bi bi-person-hearts"></i>
              </h1>
            </div>
            <div className="col-lg-11">
              <h5 className="display-8">
                Receive a response from veterinarian
              </h5>
              <p>
                A real Veterinarian answers your questions and/or begins LIVE
                chat with you
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row py-lg-5 vet-service-card">
          <div className="col-lg-6 py-lg-4 vet-services-description p-5">
            <div className="p-lg-5">
              <h2 className=" fw-bold">
                Curated by vets for your pet's unique needs
              </h2>
            </div>
            <div className="container-fluid ps-lg-5">
              <p className=" fw-semibold">
                <img
                  src="https://img.icons8.com/fluency/28/000000/checkmark.png"
                  alt="checkmark"
                />
                24/7 advice from a India’s Qualified vet wherever you are.
              </p>
              <p className="fw-semibold">
                <img
                  src="https://img.icons8.com/fluency/28/000000/checkmark.png"
                  alt="checkmark"
                />
                Quick access, right when you need one. No appointment necessary.
              </p>
              <p className="fw-semibold">
                <img
                  src="https://img.icons8.com/fluency/28/000000/checkmark.png"
                  alt="checkmark"
                />
                Available from any smartphone, or desktop device
              </p>
              <p className="fw-semibold">
                <img
                  src="https://img.icons8.com/fluency/28/000000/checkmark.png"
                  alt="checkmark"
                />
                Avoid the Stress of Travel and Save Time.
              </p>
            </div>
          </div>
          <div className="col-lg-6 py-lg-5">
            <img
              className="vet-service-img-description"
              src="https://i.ibb.co/26TX4pF/dog-on-bed-30032020.png"
              alt="dog on bed"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row py-lg-5">
          <div className=" vet-service-cost py-lg-5 ps-lg-5 col-lg-8">
            <div className="container">
              <div className="row  ps-lg-5">
                <div className="col-lg-6">
                  <h1 className="display-3 fw-bold pt-lg-5 ">Starts At</h1>
                  <h1 className="display-1 vet-service-price">
                    ₹149<span className="display-6 fw-bold">.00</span>
                  </h1>
                  <p className="display-6 fw-lighter ">Per Appointment</p>
                  <i className="hr">CANCEL ANYTIME</i>
                </div>
                <div className="col-lg-6 py-lg-5">
                  <p className="fw-semibold py-lg-1">
                    <img
                      src="https://img.icons8.com/fluency/28/000000/checkmark.png"
                      alt="checkmark"
                    />
                    On Demand Consultations
                  </p>
                  <p className="fw-semibold  py-lg-1">
                    <img
                      src="https://img.icons8.com/fluency/28/000000/checkmark.png"
                      alt="checkmark"
                    />
                    Digestive Problems
                  </p>
                  <p className="fw-semibold  py-lg-1">
                    <img
                      src="https://img.icons8.com/fluency/28/000000/checkmark.png"
                      alt="checkmark"
                    />
                    Wellness and Prevention
                  </p>
                  <p className="fw-semibold  py-lg-1">
                    <img
                      src="https://img.icons8.com/fluency/28/000000/checkmark.png"
                      alt="checkmark"
                    />
                    Anxiety Management
                  </p>
                  <p className="fw-semibold  py-lg-1">
                    <img
                      src="https://img.icons8.com/fluency/28/000000/checkmark.png"
                      alt="checkmark"
                    />
                    Skin Health
                  </p>
                  <p className="fw-semibold  py-lg-1">
                    <img
                      src="https://img.icons8.com/fluency/28/000000/checkmark.png"
                      alt="checkmark"
                    />
                    Mobility Improvement
                  </p>
                  <p className="fw-semibold  py-lg-1">
                    <img
                      src="https://img.icons8.com/fluency/28/000000/checkmark.png"
                      alt="checkmark"
                    />
                    Dental Health
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VetService;
