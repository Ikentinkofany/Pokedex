import React from "react";

export default function Pokemon(props) {
  const { match } = props;
  console.log(props);
  const { params } = match;
  console.log(params);
  const { pokemonId } = params;
  return <div>{"This is the pokemon page for " + pokemonId}</div>;
}
