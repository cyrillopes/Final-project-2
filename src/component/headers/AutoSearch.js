import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/search.css";
const url = "https://paws-for-adoption.herokuapp.com/shop";

function AutoSearch() {
  const [shopType, setShopType] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadResults = async () => {
      const response = await axios.get(url);
      // console.log(response.data);
      setShopType(response.data);
    };
    loadResults();
  }, []);

  const onchangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = shopType.filter((item) => {
        const regex = new RegExp(`${text}`, "gi"); //gi is for case sensitivity
        return item.item_name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  const displayResults = () => {
    if (text) {
      return (
        <>
          <div className="col-12 position-absolute search-items-list">
            {suggestions &&
              suggestions.map((suggestions, i) => {
                return (
                  <Link
                    key={suggestions.id}
                    onClick={() => {
                      window.location.href = `/details/${suggestions.category_id}/${suggestions.id}`;
                    }}
                    className="col-lg-12 link-tag-for-search text-dark text-decoration-none p-0"
                    to={`/details/${suggestions.category_id}/${suggestions.id}`}
                  >
                    <div className="card bg-light search-results">
                      <div className="card-body">{suggestions.item_name}</div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </>
      );
    }
  };
  return (
    <div className="input-group " style={{ width: "70%" }}>
      <input
        onChange={(e) => onchangeHandler(e.target.value)}
        value={text}
        type="text"
        className="form-control shop-search-input"
        placeholder="What are you looking for?"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      {displayResults()}
      <button
        className="btn btn-outline-secondary btn-shop-search-input disabled"
        type="button"
        id="button-addon2"
        style={{ backgroundColor: "#ff7716", color: "white" }}
      >
        Search
      </button>
    </div>
  );
}

// }

export default AutoSearch;
