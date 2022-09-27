import React from "react";
// let orders;
const DetailSize = (props) => {
  let handleEvent = (event) => {
    // orders = event.target.value;
    sessionStorage.setItem("size", event.target.value);
    // console.log(orders);
  };

  let { size } = props;

  if (size) {
    if (size.length) {
      return size.map((item, i) => {
        return (
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary me-1"
            key={i}
            value={item}
            onClick={handleEvent}
          >
            {item}
          </button>
        );
      });
    }
  }
};

export default DetailSize;
