import React from "react";

export default function CardImage(props) {
  return (
    <figure>
      <img className="poke-img" src={props.img} alt="Pokemon"></img>
    </figure>
  );
}
