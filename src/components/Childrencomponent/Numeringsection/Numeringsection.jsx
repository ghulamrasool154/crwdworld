import React from "react";
import "./Numeringsection.css";
const Numeringsection = ({ number, title, disc, boxBG, tBG }) => {
  return (
    <div
      className="numbring-section-box"
      style={{ backgroundColor: `${boxBG}` }}
    >
      <div className="numbring-number">
        <h2>{number}</h2>
      </div>
      <div className="numbring-title" style={{ backgroundColor: `${tBG}` }}>
        {title}
      </div>
      <div className="numbring-disc">
        <p>{disc}</p>
      </div>
    </div>
  );
};

export default Numeringsection;
