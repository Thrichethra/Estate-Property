// PriceCard.jsx
import React, { useState } from "react";
import { price } from "./Data.jsx";

const PriceCard = () => {
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <>
      {selectedPlan && (
        <div className="alert-success" style={{ marginTop: "25px" }}>
          You selected the <strong>{selectedPlan}</strong> plan! Redirecting to setup...
        </div>
      )}
      <div className="content flex mtop">
        {price.map((item, index) => (
          <div className="box shadow" key={index}>
            <div className="topbtn">
              {item.best && <button className="btn3">{item.best}</button>}
            </div>
            <h3>{item.plan}</h3>
            <h1>
              <span>$</span>
              {item.price}
            </h1>
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val, idx) => (
                <li key={idx}>
                  <label
                    style={{
                      background: val.change === "color" ? "#dc35451f" : "#27ae601f",
                      color: val.change === "color" ? "#dc3848" : "#27ae60",
                    }}
                  >
                    {val.icon}
                  </label>
                  <p>{val.text}</p>
                </li>
              ))}
            </ul>
            <button
              className="btn5"
              onClick={() => setSelectedPlan(item.plan)}
              style={{
                background: item.plan === "Standard" ? "#27ae60" : "#fff",
                color: item.plan === "Standard" ? "#fff" : "#27ae60",
              }}
            >
              {selectedPlan === item.plan ? "✓ Selected" : `Start ${item.plan}`}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PriceCard;