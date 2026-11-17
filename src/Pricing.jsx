import React from "react";
import Back from "./Back.jsx";
import PriceCard from "./PriceCard.jsx";

const Pricing = () => {
  const coverImg = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80";

  return (
    <>
      <section className="pricing mb">
        <Back name="30 days money back guarantee" title="No Extra Fees. Friendly Support" cover={coverImg} />
        <div className="price container">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Pricing;