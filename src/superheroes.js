const superheroes = [
  {
    response: "success",
    id: "70",
    name: "Batman",
    powerstats: {
      intelligence: "100",
      strength: "26",
      speed: "27",
      durability: "50",
      power: "47",
      combat: "100",
    },
    biography: {
      "full-name": "Bruce Wayne",
      "alter-egos": "No alter egos found.",
      aliases: ["Insider", "Matches Malone"],
      "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
      "first-appearance": "Detective Comics #27",
      publisher: "DC Comics",
      alignment: "good",
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "blue",
      "hair-color": "black",
    },
    work: {
      occupation: "Businessman",
      base:
        "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower",
    },
    connections: {
      "group-affiliation":
        "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
      relatives:
        "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
    },
  },
  {
    response: "success",
    id: "644",
    name: "Superman",
    powerstats: {
      intelligence: "94",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "85",
    },
    biography: {
      "full-name": "Clark Kent",
      "alter-egos": "Superman Prime One-Million",
      aliases: [
        "Clark Joseph Kent",
        "The Man of Steel",
        "the Man of Tomorrow",
        "the Last Son of Krypton",
        "Big Blue",
        "the Metropolis Marvel",
        "the Action Ace",
      ],
      "place-of-birth": "Krypton",
      "first-appearance": "ACTION COMICS #1",
      publisher: "Superman Prime One-Million",
      alignment: "good",
    },
    appearance: {
      gender: "Male",
      race: "Kryptonian",
      height: ["6'3", "191 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Blue",
      "hair-color": "Black",
    },
    work: {
      occupation: "Reporter for the Daily Planet and novelist",
      base: "Metropolis",
    },
    connections: {
      "group-affiliation":
        "Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
      relatives:
        "Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg",
    },
  },
  {
    response: "success",
    id: "263",
    name: "Flash",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "100",
      durability: "50",
      power: "68",
      combat: "32",
    },
    biography: {
      "full-name": "Jay Garrick",
      "alter-egos": "No alter egos found.",
      aliases: ["Jay Garrick", "Siegfreid the Speedster"],
      "place-of-birth": "Hibbardsville, Kansas",
      "first-appearance": "Flash Comics #1 (January 1940)",
      publisher: "DC Comics",
      alignment: "good",
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["179 lb", "81 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown / White",
    },
    work: {
      occupation:
        "Research Scientist, part-time Director of Garrick Laboratories",
      base: "Keystone City, Kansas",
    },
    connections: {
      "group-affiliation":
        "Justice Society of America, Flash Family; formerly All-Star Squadron",
      relatives:
        "Joseph Garrick (father), Joan Williams (wife), Arthur Williams (father-in-law), unnamed adopted son (deceased), Bart Allen (Flash II, ward)",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/891.jpg",
    },
  },
  {
    response: "success",
    id: "720",
    name: "Wonder Woman",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "79",
      durability: "100",
      power: "100",
      combat: "100",
    },
    biography: {
      "full-name": "Diana Prince",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Princess Diana",
        "Princess of the Amazons",
        "Goddess of Truth",
        " Wondy",
        "Wonder Girl",
        "The Amazon Princess",
      ],
      "place-of-birth": "Themyscira",
      "first-appearance": "All-Star Comics #8 (December, 1941)",
      publisher: "DC Comics",
      alignment: "good",
    },
    appearance: {
      gender: "Female",
      race: "Amazon",
      height: ["6'0", "183 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Blue",
      "hair-color": "Black",
    },
    work: {
      occupation:
        "Adventurer, Emissary to the world of Man, Protector of Paradise Island; former Goddess of Truth",
      base: "-",
    },
    connections: {
      "group-affiliation":
        "Justice League of America, Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
      relatives:
        "Queen Hippolyta (mother, deceased), Donna Troy (Troia) (magically-created duplicate)",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/807.jpg",
    },
  },

  {
    response: "success",
    id: "620",
    name: "Spider-Man",
    powerstats: {
      intelligence: "90",
      strength: "55",
      speed: "67",
      durability: "75",
      power: "74",
      combat: "85",
    },
    biography: {
      "full-name": "Peter Parker",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Spiderman",
        "Bag-Man",
        "Black Marvel",
        "Captain Universe",
        "Dusk",
        "Green Hood",
        "Hornet",
        "Mad Dog 336",
        "Peter Palmer",
        "Prodigy",
        "Ricochet",
        "Scarlet Spider",
        "Spider-Boy",
        "Spider-Hulk",
        "Spider-Morphosis",
      ],
      "place-of-birth": "New York, New York",
      "first-appearance": "Amazing Fantasy #15",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Hazel",
      "hair-color": "Brown",
    },
    work: {
      occupation: "Freelance photographer, teacher",
      base: "New York, New York",
    },
    connections: {
      "group-affiliation":
        "Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four",
      relatives:
        "Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/133.jpg",
    },
  },
  {
    response: "success",
    id: "149",
    name: "Captain America",
    powerstats: {
      intelligence: "69",
      strength: "19",
      speed: "38",
      durability: "55",
      power: "60",
      combat: "100",
    },
    biography: {
      "full-name": "Steve Rogers",
      "alter-egos": "No alter egos found.",
      aliases: ["Nomad", "The Captain"],
      "place-of-birth": "Manhattan, New York City, New York",
      "first-appearance": "Captain America Comics #1 (March 1941)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["240 lb", "108 kg"],
      "eye-color": "blue",
      "hair-color": "blond",
    },
    work: {
      occupation:
        "Adventurer, federal official, intelligence operative; former soldier, Hydra agent, liaison between S.H.I.E.L.D. and the Avengers, police officer, teacher, sparring partner.",
      base: "New York City",
    },
    connections: {
      "group-affiliation":
        "Secret Avengers (Black OPS Unit Formerly,The Avengers, Secret Avengers (Civil War), New Avengers, formerly The Invaders, Secret Defenders The Redeemers; formerly partner of Bucky, Golden Girl, Rick Jones, Falcon, Demolition-Man and Nomad (Jack Monroe)",
      relatives:
        "Joseph (father, deceased), Sara (mother, deceased), Ian Zola (Nomad) (adopted son)",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg",
    },
  },
  {
    response: "success",
    id: "346",
    name: "Iron Man",
    powerstats: {
      intelligence: "100",
      strength: "85",
      speed: "58",
      durability: "85",
      power: "100",
      combat: "64",
    },
    biography: {
      "full-name": "Tony Stark",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Iron Knight",
        "Hogan Potts",
        "Spare Parts Man",
        "Cobalt Man II",
        "Crimson Dynamo",
        "Ironman",
      ],
      "place-of-birth": "Long Island, New York",
      "first-appearance": "Tales of Suspence #39 (March, 1963)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'6", "198 cm"],
      weight: ["425 lb", "191 kg"],
      "eye-color": "Blue",
      "hair-color": "Black",
    },
    work: {
      occupation:
        "Inventor, Industrialist; former United States Secretary of Defense",
      base: "Seattle, Washington",
    },
    connections: {
      "group-affiliation":
        "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
      relatives:
        "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg",
    },
  },
  {
    response: "success",
    id: "659",
    name: "Thor",
    powerstats: {
      intelligence: "69",
      strength: "100",
      speed: "83",
      durability: "100",
      power: "100",
      combat: "100",
    },
    biography: {
      "full-name": "Thor Odinson",
      "alter-egos": "Rune King Thor",
      aliases: [
        "Donald Blake",
        "Sigurd Jarlson",
        "Jake Olsen",
        "Donar the Mighty",
      ],
      "place-of-birth": "Asgard",
      "first-appearance": "Journey into Mystery #83 (August, 1962)",
      publisher: "Rune King Thor",
      alignment: "good",
    },
    appearance: {
      gender: "Male",
      race: "Asgardian",
      height: ["6'6", "198 cm"],
      weight: ["640 lb", "288 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond",
    },
    work: {
      occupation: "King of Asgard; formerly EMS Technician; Physician",
      base: "New York, New York",
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives:
        "Odin (father), Gaea (mother), Frigga (step-mother), Loki (step-brother), Vidar (half-brother), Buri (paternal great-grandfather), Bolthorn (maternal great grandfather), Bor (grandfather), Bestla (grandmother), Vili (uncle), Ve (uncle), Sigyn (former sister-in-law), Hela (alleged niece), Jormungand (alleged nephew), Fernis Wolf (alleged nephew)",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg",
    },
  },
  {
    response: "success",
    id: "332",
    name: "Hulk",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "63",
      durability: "100",
      power: "98",
      combat: "85",
    },
    biography: {
      "full-name": "Bruce Banner",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Annihilator",
        "Captain Universe",
        "Joe Fixit",
        "Mr. Fixit",
        "Mechano",
        "Professor",
        "Jade Jaws",
        "Golly Green Giant",
      ],
      "place-of-birth": "Dayton, Ohio",
      "first-appearance": "Incredible Hulk #1 (May, 1962)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["8'0", "244 cm"],
      weight: ["1400 lb", "630 kg"],
      "eye-color": "Green",
      "hair-color": "Green",
    },
    work: {
      occupation: "Nuclear physicist, Agent of S.H.I.E.L.D.",
      base:
        "(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico",
    },
    connections: {
      "group-affiliation":
        "Defenders, former leader of the new Hulkbusters, member of the Avengers, Pantheon, Titans Three, the Order, Hulkbusters of Counter-Earth-Franklin, alternate Fantastic Four",
      relatives:
        "Betty Ross Talbot Banner (wife), Brian Banner (father, apparently deceased), Rebecca Banner (mother, deceased), Morris Walters (uncle), Elaine Banner Walters (aunt, deceased), Jennifer Walters (She-Hulk, cousin), Thaddeus E. 'Thunderbolt' Ross (father",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg",
    },
  },
  {
    response: "success",
    id: "655",
    name: "Thanos",
    powerstats: {
      intelligence: "100",
      strength: "100",
      speed: "33",
      durability: "100",
      power: "100",
      combat: "80",
    },
    biography: {
      "full-name": "Thanos",
      "alter-egos": "No alter egos found.",
      aliases: ["The Mad Titan", "Masterlord", "The Overmaster", "Chins"],
      "place-of-birth": "Titan",
      "first-appearance": "Iron Man #55",
      publisher: "Marvel Comics",
      alignment: "bad",
    },
    appearance: {
      gender: "Male",
      race: "Eternal",
      height: ["6'7", "201 cm"],
      weight: ["985 lb", "443 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair",
    },
    work: {
      occupation: "Conqueror, worshiper of Death",
      base: "Mobile, formerly Sanctuary II, Titan",
    },
    connections: {
      "group-affiliation": "Zodiac (ally); formerly Infinity Watch, Defenders",
      relatives:
        'A\'Lars (father): Sui-San (mother, deceased; Eros (brother);Kronos (paternal Grandfather, deceased); Daina (paternal grandmother, deceased); Zuras (uncle, deceased); Thena (cousin); Gamora (foster daughter);Nebula (alleged granddaughter); Rot ("child" by Death);',
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg",
    },
  },
];

export default superheroes;
