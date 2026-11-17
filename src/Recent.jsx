// Recent.jsx
import React from "react";
import Heading from "./Heading.jsx";
import RecentCard from "./RecentCard.jsx";

const Recent = ({ savedIds, toggleSave }) => {
  return (
    <section className="recent padding">
      <div className="container">
        <Heading
          title="Explore more Property for sale and rent"
          subtitle="Explore a Wide Selection of Homes, Villas, Apartments, and Commercial Spaces, All Available for Sale or Rent at Competitive Prices."
        />
        <RecentCard savedIds={savedIds} toggleSave={toggleSave} />
      </div>
    </section>
  );
};

export default Recent;