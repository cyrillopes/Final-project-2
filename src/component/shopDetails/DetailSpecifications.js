import React from "react";
const DetailSpecifications = (props) => {
  let { specifications } = props;
  if (specifications) {
    if (specifications.length) {
      return specifications.map((item, i) => {
        return <li key={i}>{item}</li>;
        // <li>
        // <strong>Item Name</strong>: Aly-The-Gator
        // </li>
      });
    }
  }
};

export default DetailSpecifications;
