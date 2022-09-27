import React from "react";
import { Link } from "react-router-dom";
const Socials = (props) => {
  let renderData = ({ listData }) => {
    console.log(listData.contact_info[0].facebook);
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <>
              <Link
                to={item.contact_info[0].facebook}
                className="float-start mx-lg-2"
              >
                <h2>
                  <i className="bi bi-facebook"></i>
                </h2>
              </Link>
              <Link
                to={item.contact_info[0].linkedIn}
                className="float-start mx-lg-2"
              >
                <h2>
                  <i className="bi bi-linkedin"></i>
                </h2>
              </Link>

              <Link
                to={item.contact_info[0].twitter}
                className="float-start mx-lg-2"
              >
                <h2>
                  <i className="bi bi-twitter"></i>
                </h2>
              </Link>

              <Link
                to={item.contact_info[0].instagram}
                className="float-start mx-lg-2"
              >
                <h2>
                  <i className="bi bi-instagram"></i>
                </h2>
              </Link>
            </>
          );
        });
      } else {
        return <>{"Hehh"}</>;
      }
    }
  };
  return <>{renderData(props)}</>;
};

export default Socials;
