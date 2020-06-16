import React from "react";
import superheroes from "./superheroes";
import { useRouteMatch } from "react-router-dom";
const Details = (props) => {
  console.log(props);
  let match = useRouteMatch("/details/:id");
  const {
    params: { id },
  } = match;
  const currentHero = superheroes.find((item) => item.id == id);
  const {
    name,
    image: { url },
  } = currentHero;
  return (
    <div>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <img src={url}></img>
      </div>
      <div></div>
    </div>
  );
};
export default Details;
