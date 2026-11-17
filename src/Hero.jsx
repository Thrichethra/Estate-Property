import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "./Heading.jsx";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location.trim()) params.set("location", location.trim());
    if (propertyType.trim()) params.set("type", propertyType.trim());
    if (maxPrice.trim()) params.set("maxPrice", maxPrice.trim());

    const queryString = params.toString();
    navigate(queryString ? `/propertiesForSale?${queryString}` : "/propertiesForSale");
  };

  return (
    <section className="hero">
      <div className="container">
        <Heading
          title="Search Your Next Home"
          subtitle="Find new & featured property located in your local city."
        />

        <form className="flex" onSubmit={handleSearch}>
          <div className="box">
            <span>City/Street</span>
            <input
              type="text"
              placeholder="e.g. London, Orpington"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="box">
            <span>Property Type</span>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="House">House</option>
              <option value="Family House">Family House</option>
              <option value="Villa">Villa</option>
              <option value="House & Villa">House &amp; Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Flat">Flat</option>
            </select>
          </div>
          <div className="box">
            <span>Max Price ($)</span>
            <input
              type="number"
              placeholder="e.g. 600000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <div className="box">
            <h4>Advance Filter</h4>
          </div>
          <button type="submit" className="btn1">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;