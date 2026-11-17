// RecentCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { properties } from "./Data.jsx";

const RecentCard = ({ savedIds = [], toggleSave }) => {
  return (
    <div className="content grid3 mtop">
      {properties.map((val) => {
        const cover = val.cover || val.picture;
        const category = val.category || val.tenure || "For Sale";
        const name = val.name || `${val.type} - ${val.location}`;
        const isSaved = savedIds.includes(val.id);

        return (
          <div className="box shadow" key={val.id}>
            <div className="img">
              <Link to={`/property/${val.id}`}>
                <img src={cover} alt={name} />
              </Link>
            </div>
            <div className="text">
              <div className="category flex">
                <span
                  style={{
                    background: category === "Freehold" ? "#25b5791a" : "#ff98001a",
                    color: category === "Freehold" ? "#25b579" : "#ff9800",
                  }}
                >
                  {category}
                </span>
                <i
                  className="fa fa-heart"
                  onClick={() => toggleSave && toggleSave(val.id)}
                  style={{
                    color: isSaved ? "#e74c3c" : "#bec7d8",
                    cursor: "pointer",
                  }}
                  title={isSaved ? "Remove from My List" : "Save to My List"}
                ></i>
              </div>
              <Link to={`/property/${val.id}`}>
                <h4>{name}</h4>
              </Link>
              <p>
                <i className="fa fa-location-dot"></i> {val.location}
              </p>
            </div>
            <div className="button flex">
              <div>
                <Link to={`/property/${val.id}`}>
                  <button className="btn2">
                    ${typeof val.price === "number" ? val.price.toLocaleString() : val.price}
                  </button>
                </Link>
              </div>
              <span>{val.type}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;