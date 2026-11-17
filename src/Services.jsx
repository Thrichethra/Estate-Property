import React from "react";
import Back from "./Back.jsx";
import FeaturedCard from "./FeaturedCard.jsx";

const Services = () => {
  const coverImg =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

  return (
    <>
      <section className="services mb">
        <Back name="Services" title="Services - All Services" cover={coverImg} />
        <div className="featured container">
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Services;