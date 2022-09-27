import React from "react";
import { withRouter } from "react-router-dom";
const Weather = (props) => {
  const icon = props.icon;
  return (
    <>
      <img
        className="icon"
        alt="img"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <p className="temp">{props.temp}</p>
    </>
  );
};
export default withRouter(Weather);
