import React from "react";
const TrainingInfo = () => {
  return (
    <section id="training-imp">
      <h2 className="fw-bold p-2">Dog Training - Why it is so important?</h2>
      <p>
        Dog Training is an investment that pays off by making life with your dog
        easier and more enjoyable.
      </p>
      <div className="container-fluid">
        <div className="training-div">
          <div className="row">
            <div className="col-lg-3 training-card">
              <div className="training-card-img">
                <img src="https://i.ibb.co/M1MwCP4/123.jpg" alt="123" />
              </div>
              <div className=" p-2 training-tech">
                <h4 className="fw-bold pt-1">Management Techniques</h4>
                <p className="p-1">
                  We give you the tools to set your family to be successful.
                </p>
              </div>
            </div>
            <div className="col-lg-3 training-card">
              <div className="training-card-img">
                <img src="https://i.ibb.co/6mzmT94/123456.jpg" alt="123456" />
              </div>
              <div className=" p-1 training-bond">
                <h4 className="fw-bold p-1">Strengthen Bond</h4>
                <p className="p-1">
                  We give you the tools to set your family to be successful.
                </p>
              </div>
            </div>
            <div className="col-lg-3 training-card">
              <div className="training-card-img">
                <img src="https://i.ibb.co/ZLwgbTc/1234.jpg" alt="1234" />
              </div>
              <div className=" p-1 training-social">
                <h4 className="fw-bold p-1">Socialization</h4>
                <p className="p-1">
                  We give you the tools to set your family to be successful.
                </p>
              </div>
            </div>
            <div className="col-lg-3 training-card">
              <div className="training-card-img">
                <img src="https://i.ibb.co/JjXvBM4/12345.jpg" alt="1234" />
              </div>
              <div className=" p-1 training-stimulation">
                <h4 className="fw-bold p-1">Mental Stimulation</h4>
                <p className="p-1">
                  We give you the tools to set your family to be successful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrainingInfo;
