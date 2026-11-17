import React from "react";
import Heading from "./Heading.jsx";
import FeaturedCard from "./FeaturedCard.jsx";

const Featured = () => {
  return (
    <section className="featured background">
      <div className="container">
        <Heading title="Property Types" subtitle="Find All Types of Property." />
        <FeaturedCard />
      </div>
    </section>
  );
};

export default Featured;