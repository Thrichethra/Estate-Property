import React from "react";
import { useParams, Link } from "react-router-dom";
import { properties } from "../../data/data"; 

const PropertyPage = () => {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === id);

  if (!property) {
    return (
      <div>
        <h2>Property not found</h2>
        <Link to="/PropertiesForSale">Back to Properties</Link>
      </div>
    );
  }

  return (
    <div className="property-details">
      <h1>{property.type} - {property.location}</h1>
      <img src={property.picture} alt={property.type} className="property-image" />
      <p><strong>Price:</strong> ${property.price}</p>
      <p><strong>Description:</strong> {property.description}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <Link to="/PropertiesForSale" className="back-link">Back to Properties</Link>
    </div>
  );
};

export default PropertyPage;
