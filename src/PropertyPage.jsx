import React from "react";
import { useParams, Link } from "react-router-dom";
import { properties } from "./Data.jsx";

const PropertyPage = ({ savedIds = [], toggleSave }) => {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === id);

  if (!property) {
    return (
      <div className="container padding">
        <h2>Property not found</h2>
        <Link to="/propertiesForSale" className="back-link">
          Back to Properties
        </Link>
      </div>
    );
  }

  const isSaved = savedIds.includes(property.id);

  return (
    <div className="property-details">
      <div className="flex" style={{ flexWrap: "wrap", gap: "15px" }}>
        <h1>
          {property.type} - {property.location}
        </h1>
        <button
          type="button"
          className={isSaved ? "btn3" : ""}
          onClick={() => toggleSave && toggleSave(property.id)}
        >
          <i className="fa fa-heart"></i>{" "}
          {isSaved ? "Saved in My List" : "Add to My List"}
        </button>
      </div>

      <img src={property.picture} alt={property.type} className="property-image" />
      <p>
        <strong>Price:</strong> ${property.price.toLocaleString()}
      </p>
      <p>
        <strong>Description:</strong> {property.description}
      </p>
      <p>
        <strong>Tenure:</strong> {property.tenure}
      </p>
      <p>
        <strong>Bedrooms:</strong> {property.bedrooms}
      </p>
      <Link to="/propertiesForSale" className="back-link">
        Back to Properties
      </Link>
    </div>
  );
};

export default PropertyPage;