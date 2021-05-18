import React from "react";
import CardImage from "./CardImage";
import CardDetails from "./CardDetails";

function Card({ name, img, type }) {
  return (
    <div className={"card col-md-3 col-sm-4 col-xs-6 type-" + type}>
      <div className="card-content">
        <CardImage img={img} />
        <CardDetails name={name} />
      </div>
    </div>
  );
}

export default Card;
