import React from "react";
import { useNavigate } from "react-router-dom";
import { featured } from "./Data.jsx";

const FeaturedCard = () => {
  const navigate = useNavigate();

  return (
    <div className="content grid5 mtop">
      {featured.map((items, index) => (
        <div
          className="box"
          key={index}
          onClick={() =>
            navigate(`/propertiesForSale?type=${encodeURIComponent(items.name)}`)
          }
        >
          <img src={items.cover} alt={items.name} />
          <h4>{items.name}</h4>
          <label>{items.total}</label>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;