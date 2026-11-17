import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Pricing from "./Pricing.jsx";
import PropertiesForSale from "./PropertiesForSale.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import PropertyPage from "./PropertyPage.jsx";

const Pages = ({ savedIds, toggleSave }) => {
  return (
    <>
      <Header savedIds={savedIds} toggleSave={toggleSave} />
      <Routes>
        <Route
          path="/"
          element={<Home savedIds={savedIds} toggleSave={toggleSave} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/propertiesForSale"
          element={
            <PropertiesForSale savedIds={savedIds} toggleSave={toggleSave} />
          }
        />
        <Route
          path="/property/:id"
          element={
            <PropertyPage savedIds={savedIds} toggleSave={toggleSave} />
          }
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;