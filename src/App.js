import React from "react";
import "./App.css";
import superheroData from "./superheroes";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import UnorderedList from "@tds/core-unordered-list";
import Card from "@tds/core-card";
import FlexGrid from "@tds/core-flex-grid";
import ChevronLink from "@tds/core-chevron-link";
import Image from "@tds/core-image";
import WaveDivider from "@tds/core-wave-divider";
import DimpleDivider from "@tds/core-dimple-divider";
import HairlineDivider from "@tds/core-hairline-divider";
function App() {
  return (
    <div className="main">
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
export function AppTds() {
  return (
    <Box horizontal={3} vertical={5}>
      <FlexGrid>
        <FlexGrid.Row horizontalAlign="center">
          <FlexGrid.Col>
            <Heading level="h1">Superheroes List</Heading>
          </FlexGrid.Col>
        </FlexGrid.Row>
        <FlexGrid.Row>
          {superheroData.map((item) => (
            <FlexGrid.Col xl={4}>
              <HeroCard item={item}></HeroCard>
            </FlexGrid.Col>
          ))}
        </FlexGrid.Row>
      </FlexGrid>
    </Box>
  );
}
const HeroCard = ({ item }) => (
  <Box vertical={5} key={item.name} between={2}>
    <Image src={item.image.url} height="200" width="150" />
    <HairlineDivider gradient />
    <Heading level="h2">{item.name}</Heading>
    <HairlineDivider gradient />
    <Card>
      <DimpleDivider />
      <Box between={2}>
        <Box between={2}>
          <UnorderedList listStyle="checkmark">
            {Object.keys(item.powerstats).map((stat) => (
              <UnorderedList.Item key={stat}>
                <span>{stat}</span>:<span>{item.powerstats[stat]}</span>
              </UnorderedList.Item>
            ))}
          </UnorderedList>
        </Box>
        <DimpleDivider />
        <ChevronLink href="#">Details</ChevronLink>
      </Box>
    </Card>
  </Box>
);

export default App;
