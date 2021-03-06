import React from "react";
import { Route, Switch } from "react-router";
import Pokedex from "../Pokedex";
import Pokemon from "../Pokemon";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/Pokedex/"
        render={(props) => <Pokedex {...props} />}
      />
      <Route
        exact
        path="/Pokedex/:pokemonId"
        render={(props) => <Pokemon {...props} />}
      />
    </Switch>
  );
}

export default App;
