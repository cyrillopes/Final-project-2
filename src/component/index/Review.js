import React from "react";
const Review = () => {
  return (
    <>
      <div id="review">
        <div className="review-title">
          <h4 className="font-cond-l fg-accent lts-md mgb-10">
            Not Yet Convinced?
          </h4>
          <h1 className="display-5 fw-bold heading mt-5">
            See Reviews from Our Happy Pet Parents
          </h1>
        </div>
        <div className="review-content mt-5">
          <div className="container">
            <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
              <li className="reviews">
                <img
                  src="https://i.ibb.co/4Zr69dC/martha.jpg"
                  className="wpx-100 img-round mgb-20"
                  title=""
                  alt=""
                  data-edit="false"
                  data-editor="field"
                  data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
                />
                <h5 className="font-cond mgb-5 fg-text-d fs-130 font-dark">
                  Martha Stewart
                </h5>
                <small className="font-cond case-u lts-sm fs-80 fg-text-l">
                  Business Woman - New York
                </small>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="fs-110 font-cond-l font-cond">
                  " Great services! The pets really seem to enjoy their time out
                  here. Highly recommend it to all of you out there looking for
                  good grooming services for your pets. "
                </p>
              </li>
              <li className="reviews">
                <img
                  src="https://i.ibb.co/NtFjZ4Y/jason.jpg"
                  className="wpx-100 img-round mgb-20"
                  title=""
                  alt=""
                  data-edit="false"
                  data-editor="field"
                  data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
                />
                <h5 className="font-cond mgb-5 fg-text-d fs-130">
                  Jason Mathew
                </h5>
                <small className="font-cond case-u lts-sm fs-80 fg-text-l">
                  Recording Artist - Los Angeles
                </small>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="fs-110 font-cond-l font-cond">
                  " I absolutely loved the way these guys were with my lad,
                  there wasn't even a hint of discomfort. They were really good
                  at their jobs, friendly and professional. "
                </p>
              </li>
              <li className="reviews">
                <img
                  src="https://i.ibb.co/s3YTtP3/sean.jpg"
                  className="wpx-100 img-round mgb-20"
                  title=""
                  alt=""
                  data-edit="false"
                  data-editor="field"
                  data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
                />
                <h5 className="font-cond mgb-5 fg-text-d fs-130">
                  Sean O'connor
                </h5>
                <small className="font-cond case-u lts-sm fs-80 fg-text-l">
                  Fund Manager - Chicago
                </small>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p className="fs-110 font-cond-l font-cond">
                  " They give the best pet grooming services in noida! my baby
                  casper had an amazing time with the groomer ! he enjoyed the
                  whole session ! thanku so much ❤️ "
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Review;
