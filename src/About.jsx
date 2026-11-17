import React from "react";
import Back from "./Back.jsx";
import Heading from "./Heading.jsx";
import Header from "./Header.jsx";

const About = () => {
  const coverImg = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80";
  const sideImg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";

  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={coverImg} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Our Story" subtitle="Check out our company story and work process" />

            <p>
              Welcome to DreamKey, your one-stop destination for finding the perfect property. Whether you are looking to buy, rent, or invest, our platform is designed to make your property search easier and more efficient.
            </p>
            <p>
              Our mission is to connect property seekers with their dream homes through a user-friendly, intuitive platform. We aim to provide reliable, up-to-date property listings and advanced tools to help you make informed decisions.
            </p>
            <button className="btn2">More</button>
          </div>
          <div className="right row">
            <img src={sideImg} alt="Modern residential home exterior" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;