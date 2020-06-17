import React from "react";
import "./App.css";
import superheroData from "./superheroes";
function App() {
  return (
    <div class="main">
      <h1>Superheroes List</h1>
      {superheroData.map((item) => (
        <div key={item.name}>
          <img src={item.image.url} height="150" width="150" />
          <div>{item.name}</div>
          <ul>
            {Object.keys(item.powerstats).map((stat) => (
              <li key={stat}>
                <span>{stat}</span>:<span>{item.powerstats[stat]}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
