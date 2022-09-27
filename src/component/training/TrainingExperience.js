import React from "react";
const TrainingExperience = () => {
  return (
    <section id="training-experience" className="bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="py-lg-4 px-5 training-experience">
              <h1 className="text-secondary fw-bold py-lg-2">
                A Dog-Friendly training experience
              </h1>
              <h5 className="fw-bold text-secondary">Our Trainers & Methods</h5>
              <p className="fw-semibold text-secondary py-lg-2">
                ThePetNest certified pet trainers are educated and passionate
                about the well-being of pets and pet parents and are dedicated
                to strengthening the bond between them.
              </p>
              <ul className="text-secondary">
                <li>
                  Instructors are taught science-based training principles that
                  reward appropriate dog behaviors instead of punishing negative
                  ones.
                </li>
                <li>
                  Positive Dog Training at home is a rewards-based approach to
                  teaching pet parents how dogs think, learn, and communicate
                  with others.
                </li>
                <li>
                  Our dog trainers can build customized training plans to meet
                  your goals and lifestyle.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="training-experience-img">
              <img
                src="https://i.ibb.co/tPLZz14/dog-training-20200520.png"
                alt="dog training"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrainingExperience;
