export const data = [
    {
      plotLink: "https://chejel.github.io/us-county-search",
      imgLink: "./../../images/us-county-search-ss.jpg",
      imgAlt: "US county map screenshot",
      plotTitle: "U.S. County Highlights",
      plotDescription: "Search U.S. county names to see the locations of other counties with the same name",
      date: "2023-03-09",
      dateMonthYr: "March 2023",
      type: "personal",
      tags: ["D3", "mapping"],
    },
    {
      plotLink: "https://amimap.journalism.cuny.edu/",
      imgLink: "./../../images/aapi-media-map-ss.jpg",
      imgAlt: "AAPI Media Map screenshot",
      plotTitle: "AAPI Media Map",
      plotDescription:
        "Interactive map of media outlets serving Asian Americans and Pacific Islanders in the U.S. and U.S. territories and freely associated states",
      date: "2023-12-08",
      dateMonthYr: "Dec 2023",
      type: "work",
      tags: ["mapping", "Svelte"],
    },
    {
      plotLink: "https://amimap.journalism.cuny.edu/",
      imgLink: "./../../images/aapi-media-vis-ss.png",
      imgAlt: "AAPI media visualizations screenshot",
      plotTitle: "AAPI Media Visualizations",
      plotDescription:
        "Accompanying the AAPI Media Map, these visualizations show the scope and diversity of the outlets in the AAPI Media Directory",
      date: "2023-12-08",
      dateMonthYr: "Dec 2023",
      type: "work",
      tags: ["D3", "charts", "Svelte"],
    },
    {
      plotLink: "https://abi.journalism.cuny.edu/nys-ad-spending/gaming-commission/",
      imgLink: "./../../images/nys-ad-practices-ss.jpg",
      imgAlt: "Screenshot of bar chart for study of New York agency advertising practices",
      plotTitle: "Study of NYS agency advertising practices",
      plotDescription: "Bar and bubble charts for a study of New York state agency advertising practices",
      date: "2023-09-19",
      dateMonthYr: "Sept 2023",
      type: "work",
      tags: ["D3", "charts"],
    },
    {
      plotLink: "https://chejel.github.io/data-blog/posts/eurovision/",
      imgLink: "./../../images/eurovision-ss.png",
      imgAlt: "Eurovision chart screenshot",
      plotTitle: "Years of Eurovision",
      plotDescription: "Chart showcasing the results of the Eurovision song contest since its inception",
      date: "2022-06-01",
      dateMonthYr: "June 2022",
      type: "personal",
      tags: ["R", "charts"],
    },
    {
      plotLink: "https://latinomediacontent.journalism.cuny.edu/en/immigrants-hispanics-latinos/",
      imgLink: "./../../images/latino-media-ss.png",
      imgAlt: "Waffle chart screenshot",
      plotTitle: "The News Agenda of Latino Media in the U.S.",
      plotDescription: "Charts made for content analysis report on Spanish-language media coverage in the U.S.",
      date: "2020-08-18",
      dateMonthYr: "Aug 2020",
      type: "work",
      tags: ["R", "charts"],
    },
  ];
  
  let tagsArray = [];
  
  data.forEach(d => {
    d.date = new Date(d.date); // Convert date field to Date type
    d.tags = d.tags.sort((a, b) => a.localeCompare(b));
    tagsArray = [...tagsArray, ...d.tags.map(d => d.toLowerCase())];
  });
  
  export let uniqueTags = [
    ...new Set(
      data
        .map(d => d.tags)
        .flat(1)
        .map(d => d.toLowerCase())
    ),
  ].sort((a, b) => a.localeCompare(b));