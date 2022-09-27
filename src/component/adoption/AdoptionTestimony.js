import React from "react";
const AdoptionTestimony = () => {
  return (
    <>
      <div
        className="testimony-content py-1 container-fluid"
        style={{ height: "250px" }}
      >
        <hr className="testimony-hr" />
        <h4 className="testimony-content-box fw-bold">
          I am very happy to adopt Olivia. I was fortunate enough to find her at
          Paws Foundation. –{" "}
          <span className="testimony-span">Ritika Singh</span>
        </h4>
        <p className="testimony-content-para">
          We’re The Pet People.<a href="/"> Learn more..</a>
        </p>
      </div>

      <div id="testimony">
        <div className="testimony-img"></div>
      </div>
    </>
  );
};
export default AdoptionTestimony;
