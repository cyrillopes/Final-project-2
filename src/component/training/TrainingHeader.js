import React from "react";
import { Link } from "react-router-dom";
const TrainingHeader = () => {
  return (
    <div className="training-title">
      <h1 className="training-heading">Dog Training Service at Home</h1>
      <p className="training-sub-heading">
        Dog-friendly, one-on-one dog training
      </p>
      <Link to={`/vet`} className="btn training-btn">
        Book a Service
      </Link>
    </div>
  );
};
export default TrainingHeader;
