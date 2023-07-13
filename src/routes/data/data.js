export const data = [
  {
    plotLink: "https://chejel.github.io/us-county-search",
    imgLink: "./../../images/us-county-search-ss.png",
    imgAlt: "US county map screenshot",
    plotTitle: "U.S. County Highlights",
    plotDescription:
      "Search US county names to see how many counties have the same name and where they are located across the country.",
    type: "personal",
    tags: ["D3", "JavaScript", "mapping"],
  },
  {
    plotLink: "https://chejel.github.io/nyc-address-search",
    imgLink: "./../../images/nyc-address-ss.png",
    imgAlt: "NYC address search map screenshot",
    plotTitle: "NYC Address to Neighborhood",
    plotDescription:
      "Map lets you search for a NYC location, by address or geographic coordinates, and returns the corresponding neighborhood.",
    type: "personal",
    tags: ["mapping", "JavaScript"],
  },
  {
    plotLink: "https://chejel.github.io/intl-cities-us",
    imgLink: "./../../images/intl-cities-ss.png",
    imgAlt: "Project page screenshot",
    plotTitle: "International City Names in the U.S.",
    plotDescription:
      "Select a city on a globe to see the locations of US municipalities that have the same name, whether fully or partially. Using D3.js.",
    type: "personal",
    tags: ["D3", "JavaScript", "mapping"],
  },
  {
    plotLink: "https://latinomediacontent.journalism.cuny.edu/en/immigrants-hispanics-latinos/",
    imgLink: "./../../images/latino-media-ss.png",
    imgAlt: "Waffle chart screenshot",
    plotTitle: "The News Agenda of Latino Media in the U.S.",
    plotDescription: "Charts made for content analysis report on Spanish-language media coverage, published in 2020.",
    type: "work",
    tags: ["R", "Visualizations"],
  },
  {
    plotLink: "https://ccmnewmarkj.github.io/sbrf-map/first/",
    imgLink: "./../../images/fellowship-map-ss.png",
    imgAlt: "Fellowship map screenshot",
    plotTitle: "Small Business Reporting Fellowship Stories",
    plotDescription: `Showcasing journalism fellowship stories in 2023 using Mapbox's Storytelling template.`,
    type: "work",
    tags: ["mapping"],
  },
  {
    plotLink: "https://chejel.github.io/data-blog/posts/eurovision/",
    imgLink: "./../../images/eurovision-ss.png",
    imgAlt: "Eurovision chart screenshot",
    plotTitle: "Years of Eurovision",
    plotDescription: `A visualization showcasing the results of the song contest since its inception.`,
    type: "personal",
    tags: ["R", "Visualizations"],
  },
  {
    plotLink: "https://drive.google.com/file/d/13LSu9z1wL2aBcN1miZ6jA38gmTsDymQG/view",
    imgLink: "./../../images/guia-antirracista-ss.png",
    imgAlt: "Guide cover",
    plotTitle: '"Guía antirracista para periodistas hispanohablantes en los Estados Unidos"',
    plotDescription: `Used InDesign to design an anti-racist style guide for U.S. journalists reporting in Spanish, released in 2021.`,
    type: "work",
    tags: ["Design & layout"],
  },
  {
    plotLink: "https://cei.journalism.cuny.edu",
    imgLink: "./../../images/cei-ss.png",
    imgAlt: "Report landing page screenshot",
    plotTitle: '"Making Local Elections Count"',
    plotDescription: `Set up layout in WordPress for report on an elections reporting initiative in 2021.`,
    type: "work",
    tags: ["Design & layout"],
  },
  {
    plotLink: "https://cheje.github.io/csgc/",
    imgLink: "./../../images/capstone-ss.png",
    imgAlt: "Capstone screenshot",
    plotTitle: "Disrepair, Displacement and Distress",
    plotDescription: `Capstone project made in React that focuses on NYC housing data, completed in 2022.`,
    type: "work",
    tags: ["R", "Visualizations", "Design & layout"],
  },
  {
    plotLink: "https://jenche.shinyapps.io/lpexp",
    imgLink: "./../../images/landlords-ss.png",
    imgAlt: "Dashboard",
    plotTitle: "Landlords Project dashboard",
    plotDescription: `Dashboard made in Shiny to examine data on the expenses incurred by residential properties. Part of capstone project on housing data in NYC, completed in 2022. Not mobile-friendly.`,
    type: "work",
    tags: ["R", "Visualizations", "Mapping"],
  },
];

let tagsArray = [];
data.forEach(d => {
  tagsArray = [...tagsArray, ...d.tags];
});
export let uniqueTags = [...new Set(tagsArray)];
