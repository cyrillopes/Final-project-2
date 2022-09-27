import React from "react";
const ServicePartners = () => {
  return (
    <>
      <div id="service-partners bg-light">
        <div className="p-4 mb-4 ">
          <div className="service-partners-title">
            <h1 className="display-5 fw-bold">
              Meet a few of our Pet care Heroes
            </h1>
          </div>
          <div className="service-partners-card container">
            <div className="row">
              <div className="col">
                <div className="card service-card mx-4">
                  <img
                    src="https://i.ibb.co/PZp5Hh3/vet.jpg"
                    className="card-img-top  m-0"
                    alt="vet"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Dr. Brian</h5>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <p className="card-text">20+ Reviews</p>
                    <p className="search-label">Veterinarian, B.V.Sc & A.H</p>
                    <p className="card-text card-padding">
                      An Awesome experience for my cat's prolonged health issue!
                      Thank you Dr. Brian for giving deep insight on the problem
                    </p>
                    <h3>
                      <i className="bi bi-arrow-repeat"></i>
                      <span className="repeat">30+ repeat pet parents</span>
                    </h3>
                    <h3>
                      <i className="bi bi-chat-left-text"></i>
                      <span className="repeat">11+ years of experience</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card service-card  mx-4">
                  <img
                    src="https://i.ibb.co/GkHD5Lb/groomer.jpg"
                    className="card-img-top m-0"
                    alt="groomer"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Franklin D'sa</h5>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <p className="card-text">50+ Reviews</p>
                    <p className="search-label">Pet Groomer</p>
                    <p className="card-text card-padding">
                      I absolutely loved the way Franklin was with my lad, there
                      wasn't even a hint of discomfort. They were really good at
                      their jobs, friendly and professional. Clean job, and 10
                      on 10 I will again call you guys when I'll need. Thank
                      you!
                    </p>
                    <h3>
                      <i className="bi bi-arrow-repeat"></i>
                      <span className="repeat">80+ repeat pet parents</span>
                    </h3>
                    <h3>
                      <i className="bi bi-chat-left-text"></i>
                      <span className="repeat">3+ years of experience</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card service-card mx-4">
                  <img
                    src="https://i.ibb.co/0jyz7Ym/trainer.jpg"
                    className="card-img-top  m-0"
                    alt="trainer"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Treddy Chen</h5>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <p className="card-text">40+ Reviews</p>
                    <p className="search-label">Dog Trainer</p>
                    <p className="card-text card-padding">
                      Hi.... This was my first time and I am happy with the
                      training service provided by Treddy... I have been
                      previously dealing with other trainers from trainmydog and
                      wasn't happy ... Thank you #Pawsforadoption
                    </p>
                    <h3>
                      {" "}
                      <i className="bi bi-arrow-repeat"></i>
                      <span className="repeat">60+ repeat pet parents</span>
                    </h3>
                    <h3>
                      {" "}
                      <i className="bi bi-chat-left-text"></i>
                      <span className="repeat">5+ years of experience</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicePartners;
