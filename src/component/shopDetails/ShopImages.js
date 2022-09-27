import React from "react";
const ShopImages = (props) => {
  const renderImgs = ({ shopImg, handleImg }) => {
    if (shopImg) {
      if (shopImg.length) {
        return shopImg.map((item, i) => {
          return (
            <img
              src={item}
              alt={item}
              key={i}
              style={{ border: 4, marginLeft: "4px" }}
              onClick={handleImg}
            />
          );
        });
      }
    } else {
      return "loading...";
    }
  };
  return <>{renderImgs(props)}</>;
};

export default ShopImages;
