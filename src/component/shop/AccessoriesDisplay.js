import React from "react";
import { Link } from "react-router-dom";
const AccessoriesDisplay = (props) => {
  const ListAccessories = ({ accData }) => {
    if (accData) {
      return accData.map((item) => {
        return (
          <div className="toys-collection-item" key={item.id}>
            <Link
              to={`/details/${item.category_id}/${item.id}`}
              className="text-decoration-none"
            >
              <div className="toys-img">
                <img src={item.img_url} alt={item.item_name} />
                <div className="badge badge-save">{item.discount}</div>
              </div>
              <div className="price">
                <del>
                  ₹ <span>{item.prev_price}</span>
                </del>
                <h4 className="price-actual">₹ {item.price}</h4>
              </div>
              <div className="toys-content">
                <p className="toys-content">{item.item_name}</p>
              </div>
            </Link>
          </div>
        );
      });
    }
  };
  return <>{ListAccessories(props)}</>;
};
export default AccessoriesDisplay;
