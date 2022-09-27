import React from "react";
const DetailColor = (props) => {
  let handLeevent = (event) => {
    sessionStorage.setItem("color", event.target.value);
  };
  let { color } = props;
  if (color) {
    if (color.length) {
      return color.map((item, i) => {
        return (
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary me-1"
            key={i}
            value={item}
            onClick={handLeevent}
          >
            {item}
          </button>
        );
      });
    }
  }
};

export default DetailColor;
