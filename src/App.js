import React from "react";
import "./App.css";
import superheroData from "./superheroes";
import Box from "@tds/core-box";
import Card from "@tds/core-card";
import Heading from "@tds/core-heading";
import FlexGrid from "@tds/core-flex-grid";
import UnorderedList from "@tds/core-unordered-list";
import Image from "@tds/core-image";
import ChevronLink from "@tds/core-chevron-link";
import { ExpandCollapse, Accordion } from "@tds/core-expand-collapse";
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
    <Box className="main" vertical={3} horizontal={3}>
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col>
            <Heading level="h1">Superheroes List</Heading>
          </FlexGrid.Col>
        </FlexGrid.Row>
        <FlexGrid.Row>
          {superheroData.map((item) => (
            <FlexGrid.Col md={4} xl={4}>
              <HeroCard item={item}></HeroCard>
            </FlexGrid.Col>
          ))}
        </FlexGrid.Row>
      </FlexGrid>
    </Box>
  );
}
function HeroCard({ item }) {
  return (
    <Box between={2} vertical={5} key={item.name}>
      <Image src={item.image.url} rounded="corners" height="200" width="200" />
      <Heading level="h2">{item.name}</Heading>
      <Card fullHeight>
        <Box between={3}>
          <Accordion topDivider={false}>
            <Accordion.Panel id="stats" header="Stats">
              <UnorderedList>
                {Object.keys(item.powerstats).map((stat) => {
                  const statValue = item.powerstats[stat];
                  return (
                    <UnorderedList.Item
                      itemStyle={statValue > 50 ? "checkmark" : "x"}
                      key={stat}
                    >
                      <span>{stat}</span>:<span>{statValue}</span>
                    </UnorderedList.Item>
                  );
                })}
              </UnorderedList>
            </Accordion.Panel>
            <Accordion.Panel id="bio" header="Bio">
              <UnorderedList listStyle="checkmark">
                {Object.keys(item.biography).map((bio) => {
                  const bioValue = item.biography[bio];
                  return (
                    <UnorderedList.Item key={bio}>
                      <span>{bio}</span>:<span>{bioValue}</span>
                    </UnorderedList.Item>
                  );
                })}
              </UnorderedList>
            </Accordion.Panel>
          </Accordion>
          <ChevronLink href="#">Details</ChevronLink>
        </Box>
      </Card>
    </Box>
  );
}

export default App;
