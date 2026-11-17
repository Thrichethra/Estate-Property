import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Pages from "./Pages.jsx";

function App() {
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const saved = localStorage.getItem("rentup_wishlist");
      return saved ? JSON.parse(saved) : ["prop1", "prop2"];
    } catch {
      return ["prop1", "prop2"];
    }
  });

  useEffect(() => {
    localStorage.setItem("rentup_wishlist", JSON.stringify(savedIds));
  }, [savedIds]);

  const toggleSave = (id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Router>
      <Pages savedIds={savedIds} toggleSave={toggleSave} />
    </Router>
  );
}

export default App;