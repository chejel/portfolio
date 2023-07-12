<script>
  import { data } from "./data/data.js";
  import Header from "./components/Header.svelte";
  import Card from "./components/Card.svelte";
  import Filter from "./components/Filter.svelte";
  import Footer from "./components/Footer.svelte";
  let selectedTagName = "Showing all projects";

  $: filteredCards =
    selectedTagName === "Showing all projects" || selectedTagName === "Show all projects" || selectedTagName === ""
      ? data
      : data.filter(d => d.tags.includes(selectedTagName));
</script>

<svelte:head>
  <style>
    body {
      background-color: #eee;
    }
  </style>
  <title>Jennifer Cheng | Portfolio</title>
</svelte:head>
<div class="header-curve" />
<header>
  <Header />
</header>

<section>
  <Filter bind:selectedTagName />
</section>

<div class="middle-curves" />

<!-- legend -->

<div class="legend">
  <ul class="legend-elements">
    <li>
      <svg class="legend-marker"><rect width="100%" height="100%" fill="#D0FEA1" /></svg>Personal project
    </li>
    <li>
      <svg class="legend-marker"><rect width="100%" height="100%" fill="#A1FEFE" /></svg>Work project
    </li>
  </ul>
</div>

<main id="cards-container">
  {#each filteredCards as card}
    <Card {...card} />
  {/each}
</main>

<div class="footer-curve" />

<footer>
  <Footer />
</footer>

<style>
  .header-curve {
    padding: 0 !important;
    margin: 0;
    aspect-ratio: 250/5;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("./../../images/wave-orange-haikei.svg");
  }

  section,
  header {
    width: min(100%, 45rem);
    margin-inline: auto;
    text-align: center;
  }

  header {
    padding-top: 2rem;
  }

  main {
    background-color: #fea1a1;
  }

  main#cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 2rem 3rem;
    padding-bottom: 5rem;
  }

  /* Wavy backgrounds: https://fireship.io/lessons/wavy-backgrounds/ 
  SVG: https://app.haikei.app/ */
  .middle-curves {
    padding: 0 !important;
    margin: 0;
    aspect-ratio: 1480/200;
    /* aspect-ratio: 960/140; */
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("./../../images/layered-waves-haikei.svg");
  }

  footer {
    padding-bottom: 2rem;
    text-align: center;
    background-color: #f8fbe7;
  }

  .footer-curve {
    padding: 0 !important;
    margin: 0;
    aspect-ratio: 4000/150;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("./../../images/wave-yellow-haikei.svg");
  }

  .legend {
    padding-bottom: 1rem;
    background-color: #fea1a1;
  }

  .legend-marker {
    width: 15px;
    height: 15px;
    margin-right: 0.5em;
  }

  ul.legend-elements {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 0.85em;
    text-transform: uppercase;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
  }

  ul.legend-elements li:not(:first-child) {
    padding-left: 2.5em;
  }

  li {
    display: flex;
    align-items: center;
  }
</style>
