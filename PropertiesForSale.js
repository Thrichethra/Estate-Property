import React from "react";
import { Link } from "react-router-dom";
import { properties } from "../../data/data"; 

const PropertiesForSale = () => {
  return (
    <div className="properties-list">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          <img 
            src={property.picture || "/images/default-property.jpg"} 
            alt={property.type} 
            className="property-card-image" 
          />
          <h3>{property.type} - {property.location}</h3>
          <p>Price: ${property.price}</p>
          <Link to={`/property/${property.id}`} className="details-link">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default PropertiesForSale;
