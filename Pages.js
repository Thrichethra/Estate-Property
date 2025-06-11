// src/components/pages/Pages.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import PropertiesForSale from "../PropertiesForSale/PropertiesForSale";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import PropertyPage from "../propertyPage/PropertyPage"; // Import PropertyPage

const Pages = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/propertiesForSale" element={<PropertiesForSale />} />
        <Route path="/property/:id" element={<PropertyPage />} /> {/* Dynamic route for property details */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Pages;
