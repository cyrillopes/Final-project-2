import React from "react";
const DetailFeatures = (props) => {
  let { features } = props;
  if (features) {
    if (features.length) {
      return features.map((item, i) => {
        return <li key={i}>{item}</li>;
      });
    }
  }
};

export default DetailFeatures;
