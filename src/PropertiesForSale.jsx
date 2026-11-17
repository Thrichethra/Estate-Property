import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { properties } from "./Data.jsx";

const PropertiesForSale = ({ savedIds = [], toggleSave }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [locationFilter, setLocationFilter] = useState(searchParams.get("location") || "");
  const [typeFilter, setTypeFilter] = useState(searchParams.get("type") || "");
  const [maxPriceFilter, setMaxPriceFilter] = useState(searchParams.get("maxPrice") || "");

  useEffect(() => {
    setLocationFilter(searchParams.get("location") || "");
    setTypeFilter(searchParams.get("type") || "");
    setMaxPriceFilter(searchParams.get("maxPrice") || "");
  }, [searchParams]);

  const fallbackImg =
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80";

  const filteredProperties = properties.filter((property) => {
    const matchesLocation =
      !locationFilter ||
      property.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType =
      !typeFilter ||
      property.type.toLowerCase().includes(typeFilter.toLowerCase());
    const numericMax = Number(maxPriceFilter);
    const matchesPrice =
      !maxPriceFilter || isNaN(numericMax) || property.price <= numericMax;

    return matchesLocation && matchesType && matchesPrice;
  });

  const handleClear = () => {
    setLocationFilter("");
    setTypeFilter("");
    setMaxPriceFilter("");
    setSearchParams({});
  };

  return (
    <div className="container">
      <div className="filter-bar shadow">
        <input
          type="text"
          placeholder="Filter by location..."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">All Property Types</option>
          <option value="House">House</option>
          <option value="Family House">Family House</option>
          <option value="Villa">Villa</option>
          <option value="House & Villa">House &amp; Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="Flat">Flat</option>
        </select>
        <input
          type="number"
          placeholder="Max price ($)"
          value={maxPriceFilter}
          onChange={(e) => setMaxPriceFilter(e.target.value)}
        />
        <button type="button" onClick={handleClear}>
          Clear Filters
        </button>
      </div>

      {filteredProperties.length === 0 ? (
        <div className="no-results">
          <h3>No properties match your search criteria.</h3>
          <button type="button" onClick={handleClear} style={{ marginTop: "15px" }}>
            Show All Properties
          </button>
        </div>
      ) : (
        <div className="properties-list" style={{ maxWidth: "100%" }}>
          {filteredProperties.map((property) => {
            const isSaved = savedIds.includes(property.id);

            return (
              <div key={property.id} className="property-card">
                <img
                  src={property.picture || fallbackImg}
                  alt={property.type}
                  className="property-card-image"
                />
                <h3>
                  {property.type} - {property.location}
                </h3>
                <p>Price: ${property.price.toLocaleString()}</p>

                <div className="property-card-actions">
                  <Link to={`/property/${property.id}`} className="details-link">
                    View Details
                  </Link>
                  <button
                    type="button"
                    className={isSaved ? "btn3" : "btn4"}
                    onClick={() => toggleSave && toggleSave(property.id)}
                  >
                    <i className="fa fa-heart"></i>{" "}
                    {isSaved ? "Saved" : "Add to List"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PropertiesForSale;